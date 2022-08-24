let soy_alto: boolean = true; 
let soy_fan: boolean = false;

soy_alto = soy_fan || soy_alto; 
console.log(soy_alto, "soy_fan");
console.log(soy_fan, "soy_fan");
console.log(soy_alto && soy_fan);
console.log(soy_alto || soy_fan);
