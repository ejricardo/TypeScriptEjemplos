var pelicula = "Mission Imposible";
var serie = 'Hanibal';
var poema = "dfd\ndsgdf\nsdfg\nsdfgsdf\nlorem\ndfd";
var programas = " Mis programas favoritos son : " + pelicula + " y " + serie;
console.log(programas);
//template string
var programas2 = "\nMis programas favoritos son ".concat(pelicula, " y ").concat(serie, "\n");
console.log(programas2);
var edad_actual = 32;
var edad_futura = "El mes de noviembre mi edad sera ".concat(edad_actual + 1);
console.log(edad_futura);
