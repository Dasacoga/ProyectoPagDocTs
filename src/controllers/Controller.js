

const { request } = require("express");

const controller={};

controller.inicio=(req,res)=>{
    res.render('inicio')
}

//personas
controller.personas=(req,res)=>{
    res.render('personas')
}

controller.list=(req,res)=>{
    req.getConnection((err,conn)=>{

        conn.query('SELECT * FROM persona',(err,personas)=>{
            conn.query('SELECT * FROM doctores',(err,doctores)=>{
                conn.query('SELECT * FROM cita',(err,cita)=>{
                if (err){
                    res.json(err)
                }
                res.render('citas',{
                    datadoc: doctores,
                    data:personas,
                    datacita:cita
                })
            })
            })
        })
    })
}

controller.save=(req,res)=>{
    const data=req.body
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO persona set ?',[data],(err,persona)=>{
            res.redirect('/personas')
        }
        )
    })
}

controller.delete=(req,res)=>{
    const id=req.params.id
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM persona WHERE id_cedula_usuario= ?',[id],(err,rows)=>{
            res.redirect('/citas')
        })
    })
}


//doctores

controller.doctor=(req,res)=>{
    res.render('doctores')
}


controller.savedoc=(req,res)=>{
    const data=req.body
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO doctores set ?',[data],(err,doctores)=>{
            console.log(doctores)
            res.redirect('/doctor')
        }
        )
    })
}

controller.deletedoc=(req,res)=>{
    const id=req.params.id
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM doctores WHERE id_doctor= ?',[id],(err,rows)=>{
            res.redirect('/citas')
        })
    })
}

//citas
controller.savecita=(req,res)=>{
    const data=req.body
    console.log(data)
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO cita set ?',[data],(err,cita)=>{
            console.log(cita)
            res.redirect('/citas')
        }
        )
    })
}

controller.deletecita=(req,res)=>{
    const id=req.params.id
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM cita WHERE id_cita_medica= ?',[id],(err,rows)=>{
            res.redirect('/citas')
        })
    })
}

module.exports=controller