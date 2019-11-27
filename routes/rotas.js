module.exports = function(app){
    //ROTA PRINCIPAL
    app.get('/',function(req,res){
        res.render('index.ejs');
    });
}