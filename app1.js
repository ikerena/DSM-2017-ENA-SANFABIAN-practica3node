var express = require('express');
var app = express();


var port =process.env.PORT || 3000;
app.set('view engine','jade');
app.use(express.static('public'));
var bodyParser= require('body-parser');
var parseUrlEncoded = bodyParser.urlencoded({extended: false});
app.post('/respuesta', parseUrlEncoded, function(request, response){
	
	var recibidos = request.body;
	
	var nombre = recibidos.nombre;
	var apellido = recibidos.apellido;
	var edad = recibidos.edad;
	var sexo = recibidos.sexo;
	response.render('contact',
	{
		
		nombre: nombre,
		apellido: apellido,
		edad: edad,	
		sexo: sexo	
	});	
	
	
	
});

var tit={
	'producto1':'Residen Evil 7',
	'producto2':'Dark Souls',
	'producto3':'Fallout'
};
var des={
	'producto1':'Un juego',
	'producto2':'Un juego',
	'producto3':'Un juego'
};
var val={
	'producto1':'8',
	'producto2':'9',
	'producto3':'10'
};

app.get('/detalles/:nombre',function(request,response){
	var titulo = tit[request.params.nombre];
	var descripcion = des[request.params.nombre];
	var valoracion = val[request.params.nombre];
	response.render('details',
	{
		
		titulo_juego: titulo,
		descripcion: descripcion,
		valoracion: valoracion		
	});	
	
});
app.get('/webservice',function(request,response){

	
	if(request.query.id == '1'){
		
		var bloque = ['Titulo: RS7', 'Imagen:\public\img\producto_1.jpg', 'Stock:8'];
		response.json(bloque);
		
	}else if(request.query.id == '2'){
		
		var bloque = ['Titulo: DS3', 'Imagen:\public\img\producto_2.jpg', 'Stock:4'];
		response.json(bloque);
		
	}else if(request.query.id == '3'){
		
		var bloque = ['Titulo: F4', 'Imagen:\public\img\producto_3.jpg', 'Stock:12'];
		response.json(bloque);
		
	}
	
});
app.listen(port);