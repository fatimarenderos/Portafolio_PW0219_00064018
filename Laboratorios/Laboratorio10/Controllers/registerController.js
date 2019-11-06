const Register = require('../models/register');
const insert = (req, res)=>{
let register = new Register(req.body);
register.save((err)=>{
    if(err) return res.status(500).json({
        message: 'algo salio mal al tratar de insertar registro'
    })
    res.status(200).json({
        message: 'Insercion exitosa!!'

      })
   })
};

const update = (req, res)=>{
let register = req.body
if(!register._id){
    return res.status(400).json({
        message:'El cambo id es obligatorio'
    })
}
Register.update({id: register._id}, register)
.then(value=>{
res.status(200).json({
    message:'Cambios exitosos'
})

})
.catch(err=>{
    res.status(500).json({
        message:'Algo salio mal en la operacion modificar'
    })
})
};

const deletebyId = (req, res)=>{
    let register=req.body
    if(!register._id){
        return res.status(400).json({
            message:'El cambo id es obligatorio'
        })
    }
Register.deleteOne({_id:register._id})
then(deleted=>{
    res.status(200).json({
        message:'Cambios eliminar exitosos'
    })
    
    })
    .catch(err=>{
        res.status(500).json({
            message:'Algo salio mal en la operacion eliminar'
        })
    })

};

const getAll = (req, res)=>{
    Register.find((err, registers)=>{
        if (err) return res.status(500).json({
            message:'algo salio mal'
        })
        if(registers){
            res.status(200).json(registers)
        }
        else {
            res.status(404).json({
                message:'NO hay ningun registro'

            })
        }
    })
}

const getOnebyId = (req, res)=>{
let id =req.params._id

Register.findById(id, (err, register)=>{
    if (err) return res.status(500).json({
        message:'algo salio mal al querer encontrar el registro'
    })
    if(register){
        res.status(200).json(register)
    }
    else{
        res.status(404).json({
            message:'NO se encontro el registro requerrido'
        })
    }
})
}
module.exports = {
    insert,
    update,
    deletebyId,
    deleteOne, 
    getAll, 
    getOnebyId
}