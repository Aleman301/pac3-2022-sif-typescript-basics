export const listararreglos=()=>{
    let arreglo =[10,20,30,40];

    for(let numero of arreglo){
        console.log(numero);
    }
}

export const listarstring=()=>{

    let saludo='Buenas noches';

    for(let caracter of saludo){
        console.log(caracter);
    }
}

export const listarinloop=()=>{

    let arreglo=[10,20,30,40];

    for (const key in arreglo) {
       console.log(key);
    }
}