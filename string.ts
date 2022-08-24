let pelicula:string = "Mission Imposible"
let serie:string = 'Hanibal'
let poema:string = `dfd
dsgdf
sdfg
sdfgsdf
lorem
dfd`

let programas: string = " Mis programas favoritos son : " + pelicula + " y " + serie	
console.log(programas)
//template string
let programas2: string = `
Mis programas favoritos son ${pelicula} y ${serie}
`
console.log(programas2)
let edad_actual = 32;
let edad_futura: string = `El siguiente mes mi edad sera ${edad_actual +1}`
console.log(edad_futura);