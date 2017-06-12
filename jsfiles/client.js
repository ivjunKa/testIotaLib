$( document ).ready(function() {
	document.getElementById("getNodeInfo").addEventListener('click', function(){
			$.get( "getNodeInfo", function( data ) {
			console.log(data);
		});
	});
	document.getElementById("getTips").addEventListener('click', function(){
			$.get( "tips", function( data ) {
			console.log(data);
		});
	});
});
