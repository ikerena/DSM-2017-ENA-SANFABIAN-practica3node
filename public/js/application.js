$(document).ready(function() {

	$('#1').on('click', function(){
		
		$.get('/webservice.html?id=1', informacion);
		
		
	});
	function informacion(){
		
		if ( $("#undiv").length == 0 ) {
			$('.container').append("<divm id='undiv'><p class='titulo'><b>Titulo:</b></p></br><p class='imagen'><b>Imagen:</b></p></br><p class='stock'><b>Stock:</b></p></br></div>")
		
		}
	}

});