
const PORT = process.env.PORT || 5000
var server = http.createServer( function(req, res){

    var categoria = req.url;

    if(categoria == '/tecnologia'){
        res.end("<html><body>Notícias de Tecnologia</body></html>");
    } else if(categoria == '/moda'){
        res.end("<html><body>Notícias de Moda</body></html>");
    }else if(categoria == '/beleza'){
        res.end("<html><body>Notícias de Beleza</body></html>");
    }else{
        res.end("<html><body>Portal de noticias</body></html>");
    }
});

server.listen(PORT);