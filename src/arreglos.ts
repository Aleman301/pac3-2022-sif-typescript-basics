const nombres : string[]=[];



const imprimirnombres=()=>{
    console.log('aca vamos a imprimir nombres....')

    nombres.push('Juan Perez');
    nombres.push('Maria Perez');

    for (let index = 0; index < nombres.length; index++) {
         console.log(`Nombre ${nombres[index]}`);
    
    }

}

 const contarposicion = ()=>{

    console.log(`La canntidad de nombres es : ${nombres.length}`)
}
export {imprimirnombres,contarposicion};
// export default imprimirnombres;