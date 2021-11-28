function datos(){
    var p1 = document.getElementById('preg1').value;
    var p2 = document.getElementById('preg2').value;
    var p3 = document.getElementById('preg3').value;
	if(p1 == "Seleccione la repuesta" || p2 == "Seleccione la repuesta" || p3 == "Seleccione la repuesta")alert("Faltan campos por llenar");
		else{
			var res = parseInt(p1) + parseInt(p2) + parseInt(p3);
			result(res);
		}
    return false;
}

function result(rest){
	var total = rest;
    var parrafo = document.getElementById('pa');
    if (total == 1){
    	var texto = parrafo.innerHTML + total + "tu nivel de conocimiento es: bajo";
    	parrafo.innerHTML = texto;
    }if else (total == 2){
		var texto = parrafo.innerHTML + total + "tu nivel de conocimiento es: medio";;
    	parrafo.innerHTML = texto;
    }if else (total == 3){
    	var texto = parrafo.innerHTML + total + "tu nivel de conocimiento es: alto";
    	parrafo.innerHTML = texto;
    }
}