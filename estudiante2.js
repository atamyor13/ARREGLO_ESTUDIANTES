//SEGUNDA PARTE PARCIAL
//Alejandra Tamayo Rivera

//En esta parte estoy declarando las variables para el estudiante 1 de 10
//Declarando que utilizare un Arreglo de 11 parametros.

var estudiante_1=[11];
var estudiante_1= new Array();

//Aquí se realiza la operacion matematica para los dias vividos respecto a dos fechas temporales.

const oneDay = 24 * 60 * 60 * 1000; 

const firstDate = new Date(2020, 3, 11); //fecha actual


var nombres=[10]
var nombres=["Alberto", "Bob", "Ross","Camila","Sofia","Diana","Mateo","James","Arnold","Dead"];
var apellidos=[10]
var apellidos=["Gonzales", "Rodriguez", "Prada","Gomez","Leiva","Lotero","Barragan","Bond","suatsegneger" , "Pool"];
var grados=[10]
var grados=["cuarto" , "tercero" , "expulsado", "segundo" , "primero" , "quinto" , "sexto" , "007", "T800", "Retirado"];
var notas=[[4.5,3.5,2.4,1.0,0.0],[2.7,3,5.0,2.3,2.6],[5.0,4.0,3.2,3.3,1.0],[5.0,4.0,3.2,3.3,1.0],[5.0,4.0,3.2,3.3,1.0],[5.0,4.0,3.2,3.3,1.0],[5.0,4.0,3.2,3.3,1.0],[5.0,4.0,3.2,3.3,1.0],[5.0,4.0,3.2,3.3,1.0],[5.0,4.0,3.2,3.3,1.0]];

const Date1 = new Date(2013, 4, 13); //fechas de nacimiento...
const Date2 = new Date(2014, 8, 27);
const Date3 = new Date(2011, 1, 1);
const Date4 = new Date(2011, 1, 1);
const Date5 = new Date(2011, 1, 1);
const Date6 = new Date(2011, 1, 1);
const Date7 = new Date(2011, 1, 1);
const Date8 = new Date(2011, 1, 1);
const Date9 = new Date(2011, 1, 1);
const Date10 = new Date(2011, 1, 1);

var birthdates=[10]
birthdates[0]=Date1;
birthdates[1]=Date2;
birthdates[2]=Date3;
birthdates[3]=Date4;
birthdates[4]=Date5;
birthdates[5]=Date6;
birthdates[6]=Date7;
birthdates[7]=Date8;
birthdates[8]=Date9;
birthdates[9]=Date10;

for (var i = 0; i < birthdates.length; i++) { 
	birthdate = birthdates[i]

	var estudiante=[11];
	estudiante[0]=diffDays(birthdate);
	estudiante[1]=10000001;
	estudiante[2]=nombres[i];
	estudiante[3]=apellidos[i];
	estudiante[4]=diffyears(birthdate);
	estudiante[5]=grados[i];
	estudiante[6]=notas[i][0];
	estudiante[7]=notas[i][1];
	estudiante[8]=notas[i][2];
	estudiante[9]=notas[i][3];
	estudiante[10]=notas[i][4];
	estudiante[11]=prom;
	var prom= ((estudiante[6]+estudiante[7]+estudiante[8]+estudiante[9]+estudiante[10])/5);

	document.write("DÍas vividos de: "+ estudiante[0] + "<br>");
	document.write("Codigo: "+estudiante[1] +"<br>");
	document.write("Nombre: "+estudiante[2]+"<br>");
	document.write("Apellido: "+estudiante[3]+"<br>");
	document.write("Edad: "+estudiante[4]+" años"+"<br>");
	document.write("Curso: "+estudiante[5]+"<br>");
	document.write("Nota Matematicas: "+estudiante[6]+"<br>");
	document.write("Nota Ciencias: "+estudiante[7]+"<br>");
	document.write("Nota Ingles: "+estudiante[8]+"<br>");
	document.write("Nota Español: "+estudiante[9]+"<br>");
	document.write("Nota Filosofia marina: "+estudiante[10]+"<br>");
	document.write("Nota promedio: "+prom+"<br>"+"<br>");
}

	function diffDays(birthdate) {
		//Se realiza la operacion matematica con las dos fechas.
		//Como resultado da los dias vividos.
		const days = Math.round(Math.abs((firstDate - birthdate) / oneDay));
		return days
	}
	function diffyears(birthdate) {
		//Se realiza la operacion matematica con las dos fechas.
		//Como resultado da los dias vividos.
		const age = Math.round(Math.abs((firstDate - birthdate) / oneDay / 360));
		return age
	}