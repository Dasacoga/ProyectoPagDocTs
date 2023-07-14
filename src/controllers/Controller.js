

const { request } = require("express");

const controller={};

controller.inicio=(req,res)=>{
    res.render('inicio')
}

controller.personas=(req,res)=>{
    res.render('personas')
}

controller.list=(req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM persona',(err,personas)=>{
            if (err){
                res.json(err)
            }
            
            res.render('citas',{
                data: personas
            })
        })
    })
}

controller.save=(req,res)=>{
    const data=req.body
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO persona set ?',[data],(err,persona)=>{
            console.log(persona)
            res.redirect('/personas')
        }
        )
    })
}

controller.delete=(req,res)=>{
    const id=req.params.id
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM persona WHERE id_persona= ?',[id],(err,rows)=>{
            res.redirect('/citas')
        })
    })
}

module.exports=controller