var ruta=require("express").Router();

ruta.get("/",(req, res)=>{
    res.render("inicio");
});

ruta.get("/login",(req, res)=>{
    res.render("login");
});

ruta.post("/revisar",(req, res)=>{
    if(req.body.usuario=="abc" && req.body.password=="123"){
        res.render("bienvenido");
    }
    else{
        res.render("error");
    }
});

module.exports=ruta;
