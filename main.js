/*
        Crear una función que devuelva el número de vocales 
        que tiene el string que le pasemos como parámetro.

        Consideramos que el string solo tiene letras minúsculas y espacios.
*/

 let msg = "esto es una tarea"

function contarVocales(str){
    let voc = 'aeiou';

    let contVoc=0;
    for(let i=0; i<str.length; i++){
        if(voc.includes([str[i]])){
            contVoc+=1
        }
    }
    console.log(contVoc)
}

contarVocales(msg);

/*
        Si enumerásemos todos los números naturales por debajo de 10 que 
        fuesen múltiplos de 3 y de 5 tendríamos el siguiente listado (3, 5, 6 y 9). 
        La suma de estos múltiplos sería 23.

        Crea un función que devuelva la suma de todos los múltiplos de 3 y 5 del 
        número que le pasemos.

        En caso de que el número sea múltiplo de ambos solo habrá que contarlo 
        un vez.
*/

let num = 25;

function sumMult3_5(number){

    let res=0;
   
    for(let i=1; i<number; i++){
        if(i % 3 === 0 || i % 5 === 0){
        res = res + i;  
        }
    }
    return res;    
}
let resMult = sumMult3_5(num);

/*
        Crea una función que reciba como argumento un array de números 
        y devuelva aquel que aparecen únicamente un número impar de veces.

        Ejemplos: 

            [1]         → Devuelve el número 1, ya que aparece una única vez
            [3,3,5]     → Devuelve el 5, ya que aparece 1 vez.
            [2,1,1,2,2] → Devuelve 2, ya que aparece 3 veces
*/

console.log('EJERCICIOOOOOOOOOOOOO');
let nuestroArray = [2,3,3,3,1,1,2];
// 1,1,2,2,3,3,3
let comprobarImpar = (array) => {
  let resultado;
  let contador = 1;
  array.sort();
  for (let i = 0; i < array.length; i++){
    if(array[i] === array[i+1]){
      contador = contador + 1;
    } else {
      if( contador % 2 !== 0 ){
          resultado = array[i];
      }
      contador = 1;
    }
  }
  return resultado; 
}
let resultado = comprobarImpar(nuestroArray);
console.log(resultado);



/*
        Crea una función que reciba como parámetro un string y devuelva otro, 
        remplazando las letras por su posición en el alfabeto.

        Si algún caracter no se encuentra, simplemente lo ignoramos.
*/

let abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


function frase(str){

    let fraseNum = '';

    for ( let i = 0; i<str.length; i++){
    fraseNum = fraseNum + ' ' + (abc.indexOf(str[i])+1);
        
    }
 return fraseNum;
}
let resultado;
resultado = frase ("hola me llamo edu")
console.log(resultado);

/*
    Crea una función que reciba una serie de arrays como argumentos 
    y devuelva uno único ordenado.

    Ejemplo: 
        Recibe: 
            ([['Cristiano', 'Messi'], ['Neymar', 'Mbappe', Benzema'], 
            ['Vinicius', 'Kane'])  
        Devuelve: 
            ['Benzema', 'Cristiano', 'Kane', 'Mbappe', 'Messi', 
            'Neymar', 'Vinicius']
*/

let array = [['Cristiano', 'Messi'], ['Neymar', 'Mbappe', "Benzema"], 
['Vinicius', 'Kane']];

function concatArray(listado){
    let resultado = [];
    listado.forEach(
    function (element){
        resultado = resultado.concat(element)
    });

    return resultado.sort();
}

let res = concatArray(array);

console.log(res);

/* 
        Crea una función que reciba un array de números, la posición inicial 
        y final del nuevo array (opcional), y devuelva el nuevo array.

        Ejemplo 1: ([1, 2, 3], 0, 1) // => [1]
        Ejemplo 2: ([1, 2, 3], 1) // => [2,3]
*/ 

function cortarArray(array, posicionInicial, posicionFinal){
    let arrayCortado = [];
    posicionFinal = posicionFinal || array.length;
    arrayCortado = array.slice(posicionInicial,posicionFinal);

    return arrayCortado;
}

let res= cortarArray( [1,2,3,3,5,6], 2);
console.log(res)

/* 
    Crea una función que  reciba un array de números y 
    devuelva los números que coinciden con su posición en el array.

    Ejemplos:
        [1,2,5,3] → Devuelve [3] que se encuentra en la posición 3 del array
        [1,5,20,4,16,8,6] → Devuelve [6] que se encuentra en la posición 6 del array
        [10,1,20,3,16,8,10] → Devuelve [1,3] ya que ambos coinciden.
*/ 

let arrayPosition = [7,3,5,3,7,2,1,7,9,9,9];

function lookPosition (arrPosition){
let  newArrayPosition = [];

for (let i=0; i<=arrPosition.length;i++){
    if(i===arrPosition[i]){
        console.log(arrPosition[i])
        newArrayPosition.push(i);
    }
}
return newArrayPosition;
}

let resultado = lookPosition(arrayPosition);

console.log(resultado);

/* 
        Tenemos una flota de vehículos y con las nuevas restricciones de 
        movilidad en Madrid, nos piden que todos tengan etiqueta de contaminación.

        Crea una función que reciba un array de objetos-coche y devuelva un 
        nuevo array con los objetos-coche. Cada coche tendrá un nueva propiedad 
        que sea etiqueta ( con valor ‘ECO’ en caso de que el coche sea híbrido y 
        ‘C’ en caso de que sea gasolina). 

        Dentro de la flota de coches solo tenemos esas 2 opciones así que no hay 
        que preocuparse por ninguna otra.

        Ejemplo:
            Entrada: 
                [{id: 1, modelo: ‘híbrido’, matricula:’4565HLM’ },
                {id: 2, modelo: ‘gasolina’, matricula:’5678MNL’ },
                {id: 3, modelo: ‘híbrido’, matricula:’1111LLL’ }] 

            Salida:
            [{id: 1, modelo: ‘híbrido’, matricula:’4565HLM’, etiqueta:’ECO’},
            {id: 2, modelo: ‘gasolina’, matricula:’5678MNL’, etiqueta:’C’},
            {id: 3, modelo: ‘híbrido’, matricula:’1111LLL’, etiqueta:’ECO’ }].
*/ 

let listCoche =  [
    {id: 1, modelo: 'híbrido', matricula:'4565HLM' },
    {id: 2, modelo: 'gasolina', matricula:'5678MNL' },
    {id: 3, modelo: 'híbrido', matricula:'1111LLL' }]


    function etiqueta (coches){
        let newCar = [];

        for (let i=0; i< coches.length;i++){
            if(coches[i].modelo==='híbrido'){
                coches[i]['etiqueta']= 'ECO';
                newCar.push(coches[i]);
            }
            else{
                coches[i]['etiqueta']= 'C';
                newCar.push(coches[i])
            }
        

        }
        return newCar;
    }
    console.log(etiqueta(listCoche));

/* Bucle que recorra el array objeto  y si encuentra en el objeto modelo que coincida
con hibrido le asigne una etiqueta ECO, con push al nuevo array y con else le añadira
la categoria */