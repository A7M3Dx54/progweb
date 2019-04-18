function fApp(){
	$("#bok").click(fOK) ; 
}

function fOk(){
	l=$("#login").val() ; 
	p=$("#pwd").val() ; 
	url="http://istic.webutu.com/API/AUTHENTIFICATION/";
	url =url + "?log=" + l + "&pwd=" + p ;
	$.getJSON(url,f1) ; 
}

function f1(x){
	if(x.etat =="ok"){
		$("#msg").html('<div class="alert alert-success alert-dissimible" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true"> &times;</span></button>Redirection en cours...</div>');
	}else{
		$("#msg").html('<div class="alert alert-danger alertdissimible" role="alert" <button type="button" class="close" data-dissimible="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>Echec d\'authentification </div>')
	}
}

function fAppMeteo(){
	$("#bokm").click(fAppMeteo) ; 
}

function fAffMeteo(){
	d=$("#data").val();
	url = "http://istic.webutu.com/API/METEO/" ; 
	if(d!=""){
		url = url + "?date=" + d ; 
	}
	$.getJSON(url,fMeteo) ; 
}

function f1Meteo(x){
	$("#tb").html("");
	$each(x,f2Meteo) ; 
}

function f2Meteo(k,v){
	var code="<tr><td>" + v.ville + "</td><td>" + v.temperature+"</td></tr>";
	$("#tb").append(code) ; 
}

function fAppDevise(){
	$("#bokd").click(fAffDevise) ; 
}

function fAffDevise(){
	d=$("#dev").val() ; 
	url = "http://istic.webutu.com/API/DEVISE/";
	if(d!=""){
		url = url+"?nom=" + d ; 
	}
	alert(url) ; 
	$.getJSON(url,f1Devise) ; 
}

function f1Devise(x){
	$("#tb").html("") ; 
	$.each(x,f2Devise) ; 
}

function f2Devise(k,v){
	if(v.vala==valh){
		var etat='<span class="danger glyphicon glyphicon-minus" aria-hidden="true"></span>' ; 
	}else if(v.vala>v.valh){
		var etat='<span class=" glyphicon glyphicon-minus" aria-hidden="true"></span>' ; 
	}
	else{
		var etat='<span class=" glyphicon glyphicon-arrow-down" aria-hidden="true"></span>' ; 	
	}
	var code="<tr><td>"+v.nom+"</td><td>"+v.valh+"</td><td>"+v.vala+"</td><td>"+etat+"</td></tr>";
	$("#tb").append(code) ; 
}