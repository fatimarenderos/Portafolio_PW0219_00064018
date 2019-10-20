

var rows = [];
var counterId = 0;

var parseLateSwitch = (value) => {
	if (value) {
		return 'Tarde';
	}
	return 'A tiempo';
};

function addRow(carnet, schedule, late, tBody) {
	var newRow = document.createElement('tr');
	var date = new Date();

	rows.push({
		id: counterId,
		carnet: carnet,
		schedule: schedule,
		late: late
	});

	newRow.innerHTML = `<td><b>${carnet}<b></td>
    <td>${schedule}</td>
    <td>${date.toLocaleString()}</td>
    <td>${late}</td>`;

	var cellContainerInput = document.createElement('td');
	var cellContainer = document.createElement('td');
	var input = document.createElement('input');
	var deleteButton = document.createElement('button');

	input.classList.add('form-control');
	input.id = 'carnet_validator';
	input.type = 'text';
	input.name = 'validator';
	input.maxLength = '8';

	deleteButton.classList.add('btn', 'btn-danger');
	deleteButton.innerText = 'Eliminar';
	deleteButton.value = counterId;

	deleteButton.addEventListener('click', (event) => {
		var idElement = event.srcElement.value;
		var trToDelete = document.querySelector(`button[value='${idElement}']`).parentElement.parentElement;

		if (input.value == carnet) {
            tBody.removeChild(trToDelete);
			rows.forEach((item, index) => {
				if (item.id == idElement) {
					rows.splice(index, 1);
				}
			});
		} else {
			alert('Carnet incorrecto.');
		}
	});

	cellContainerInput.appendChild(input);
	cellContainer.appendChild(deleteButton);
	newRow.appendChild(cellContainer);
	newRow.appendChild(cellContainerInput);
	tBody.appendChild(newRow);
	counterId++;
}

window.onload = function() {
	var submit_btn = document.querySelector('#submit_btn');
	var carnet_field = document.querySelector('#carnet_field');
	var schedule_field = document.querySelector('#schedule_field');
	var late_switch = document.querySelector('#late_switch');
	var tBody = document.querySelector('#table_body');

	var carnetRegex = new RegExp('[0-9]{8}');

	submit_btn.addEventListener('click', () => {
		var carnet = carnet_field.value;
		var schedule = schedule_field.options[schedule_field.selectedIndex].text;
		var late = parseLateSwitch(late_switch.checked);

		if (carnetRegex.test(carnet)) {
			addRow(carnet, schedule, late, tBody);
		} else {
			alert('Formato no valido');
		}
	});

	carnet_field.addEventListener('keyup', (event) => {
		var carnet = carnet_field.value;

		if (carnetRegex.test(carnet)) {
			submit_btn.disabled = false;
		} else {
			submit_btn.disabled = true;
		}
	});
};




