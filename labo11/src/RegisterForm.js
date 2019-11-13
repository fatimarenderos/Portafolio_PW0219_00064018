import React, {Component} from 'react'
class RegisterForm extends Component{
    options =[
        'Lunes de 9:00 a 11:00',
        'Martes de 13:30 a 15:30',
        'Miercoles de 9:00 a 11:00',
        'Jueves de 13:30 a 15:30',
        'Viernes de 9:00 a 11:00',
        'Viernes de 13:30 a 15:30',
       

    ];
    carnet_regex = new RegExp("^[0-9]{8}$");
    state = {
        carnet: "",
        schedule:this.options[0],
        isLate:true,
        isDisable: true,
    }
    handleChange = e =>{
        let name= e.target.name;
        let value =
        e.target.type === "checkbox"? e.target.cheched : e.target.value
        let returnValue ={
            [name]:value
        }
        if(name === "carnet"){
            if(this.carnet_regex.text(value)){
                returnValue.isDisable=false;  
            
            returnValue.isDisable=false;
        }
        else{
            returnValue.isDisable=true;
        }
    }
    this.setState(returnValue)
}
render(){
    return(
        <div className= "jumbotron">
            <h1>Registro de labo</h1>
            <div className="form-group">
                <lable className ="col-sm-2 col-form-lable">
                    Ingrese el carnet
                </lable>
                <br/>
                <input 
                className="form-control"
            type = "text"
            name ="carnet"
            value = {this.state.carnet}
            onChange = {this.handleChange}
            />


            </div>
            <div className = "form-group">
                <lable> Seleccione el horario:</lable>
                <select
                name="schedule"
                className="form-control-select"
                value = {this.state.schedule}
                onChange = {this.handleChange}
                >
                    {this.options.map(elem =>{
                        return <option key = { elem}>{elem}</option>
                    })}
                </select>
            </div>

            <div style= { {marginLeft: 1 + "em"}} htmlFor="isLate" >
              <input
              name="isLate"
              type="checkbox"
              onChange={this.handleChange}
              checked={this.state.isLate}
              />
                  <lable style = {{marginLeft: 1 + "em"}} htmlFor ="isLate">
                      Llegó tarde?
                  </lable>
            </div>
<div className = "form-group">
    <button
        type="button"
        className= "btn btn-info"
        id= "submit_btn"
        onClick = {()=>{
            this.props.onSubmit({
                carnet: this.state.carnet,
                schedule: this.state.schedule,
                isLate: this.state.isLate
            })
        }}
        disable = {this.state.isDisable}
        Ingresar

    />
          </div>
        </div>
    );
 }
}

export default RegisterForm;