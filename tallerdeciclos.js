// EJERCICIO 1
// let cont=0, num=1
// while(num>0){
//     num=parseInt(prompt('Dijite numero:'))
//     cont+=num
// } console.log(`La suma total de los numeros ingresados es:${cont}`)

// EJERCICIO 2
// let cont=1
// while(cont!=0){
//     cont=Math.floor(Math.random()*10)
//     console.log(cont)
// }

// EJERCICIO 3
// let cont=0
// for(let i=1; i<=1000;i++){
//     cont=Math.floor(Math.random(1,1000)*1000)
//     console.log(cont)
// }

// EJERCICIO 4
// let num=parseInt(prompt('dijite un numero:'))
// for(let i=1; i<=num;i++){
//     if(i%2!=0){
//         console.log(i)
//     }
// }

// EJERCICIO 5
// let cantidad=parseInt(prompt('dijite la cantidad de personas a ingresar'))
// let edad=0,peso=0, cont1=0,Cont1=0,pniños=0, cont2=0,Cont2=0,pjovenes=0,cont3=0,Cont3=0,padultos=0,cont4=0,Cont4=0,pviejos=0
// for(let i=1; i<=cantidad;i++){
//     edad=parseInt(prompt('dijite la edad'))
//     peso=parseInt(prompt('dijite el peso'))
//     if(edad>=0 && edad<=12){
//         Cont1+=1
//         cont1+=peso
//         pniños=cont1/Cont1}
//     else if (edad>=13 && edad<=29){
//         Cont2+=1
//         cont2+=peso
//         pjovenes=cont2/Cont2}
//     else if (edad>=30 && edad<=59){
//         Cont3+=1
//         cont3+=peso
//         padultos=cont3/Cont3}
//     else if(edad>=60){
//         Cont4+=1
//         cont4+=peso
//         pviejos=cont4/Cont4}}
// console.log(`La cantidad de niños ingresados de 0 a 12 años es:${Cont1}Y SU PROMEDIO DEL PESO ES:${pniños}`)    
// console.log(`La cantidad de jovenes ingresados de 13 a 29 años es:${Cont2}Y SU PROMEDIO DEL PESO ES:${pjovenes}`)
// console.log(`La cantidad de adultos ingresados de 30 a 59 años es:${Cont3}Y SU PROMEDIO DEL PESO ES:${padultos}`)
// console.log(`La cantidad de viejos ingresados de 60 y mas años es:${Cont4} Y SU PROMEDIO DEL PESO ES:${pviejos}`)

// EJERCICIO 6
// for(let i=1;i<=1;i++){
//     for(let j=1;j<=5;j++){
//         for(let k=1;k<=4;k++){
//         document.write(`${i}-${j}-${k} - `)    
//     }
//     document.write('<br>')
// }
// }

// EJERCICIO 7
let conte1=0,pe1=0,conte2=0,pe2=0,conte3=0,pe3=0,contj=0,pj=0,contc=0,pc=0
let animal=parseInt(prompt(`
1: Elefantes
2: Jirafas
3: Chimpancés
Escoga la opcion del animal que deseas examinar:__`))
if(animal==1){
    for(let i=1; i<=10; i++)
    edad=parseInt(prompt('dijite la edad de los elefeantes:'))
    if(edad>=0 && edad<1){
        conte1+=1
        pe1=(conte1*100)/10

    }  else if (edad>=1 && edad<3){
        conte2+=1
        pe2=(conte2*100)/10

    }   else if(edad>=3){
        conte3+=1
        pe3=(conte3*100)/10
    }

console.log(`El promedio de elefantes de 0 y 1 año es: ${pe1}`)
console.log(`El promedio de elefantes de 1 a 3 año es: ${pe2}`)
console.log(`El promedio de elefantes de mas de 3 años es: ${pe3}`)
}

