// EJERCICIO 1
let cont=0, num=1
while(num>0){
    num=parseInt(prompt('Dijite numero:'))
    cont+=num
} console.log(`La suma total de los numeros ingresados es:${cont}`)

// EJERCICIO 2
let cont=1
while(cont!=0){
    cont=Math.floor(Math.random()*10)
    console.log(cont)
}

// EJERCICIO 3
let cont=0
for(let i=1; i<=1000;i++){
    cont=Math.floor(Math.random(1,1000)*1000)
    console.log(cont)
}

// EJERCICIO 4
let num=parseInt(prompt('dijite un numero:'))
for(let i=1; i<=num;i++){
    if(i%2!=0){
        console.log(i)
    }
}

// EJERCICIO 5
let cantidad=parseInt(prompt('dijite la cantidad de personas a ingresar'))
let edad=0,peso=0, cont1=0,Cont1=0,pniños=0, cont2=0,Cont2=0,pjovenes=0,cont3=0,Cont3=0,padultos=0,cont4=0,Cont4=0,pviejos=0
for(let i=1; i<=cantidad;i++){
    edad=parseInt(prompt('dijite la edad'))
    peso=parseInt(prompt('dijite el peso'))
    if(edad>=0 && edad<=12){
        Cont1+=1
        cont1+=peso
        pniños=cont1/Cont1}
    else if (edad>=13 && edad<=29){
        Cont2+=1
        cont2+=peso
        pjovenes=cont2/Cont2}
    else if (edad>=30 && edad<=59){
        Cont3+=1
        cont3+=peso
        padultos=cont3/Cont3}
    else if(edad>=60){
        Cont4+=1
        cont4+=peso
        pviejos=cont4/Cont4}}
console.log(`La cantidad de niños ingresados de 0 a 12 años es:${Cont1}Y SU PROMEDIO DEL PESO ES:${pniños}`)    
console.log(`La cantidad de jovenes ingresados de 13 a 29 años es:${Cont2}Y SU PROMEDIO DEL PESO ES:${pjovenes}`)
console.log(`La cantidad de adultos ingresados de 30 a 59 años es:${Cont3}Y SU PROMEDIO DEL PESO ES:${padultos}`)
console.log(`La cantidad de viejos ingresados de 60 y mas años es:${Cont4} Y SU PROMEDIO DEL PESO ES:${pviejos}`)

// EJERCICIO 6
for(let i=1;i<=1;i++){
    for(let j=1;j<=5;j++){
        for(let k=1;k<=4;k++){
        document.write(`${i}-${j}-${k} - `)    
    }
    document.write('<br>')
}
}

// EJERCICIO 7
let conte1=0,pe1=0,conte2=0,pe2=0,conte3=0,pe3=0
let contj1=0,pj1=0,contj2=0,pj2=0,contj3=0,pj3=0
let contc1=0,pc1=0,contc2=0,pc2=0,contc3=0,pc3=0
let animal=parseInt(prompt(`
1: Elefantes
2: Jirafas
3: Chimpancés
Escoga la opcion del animal que deseas examinar:__`))
if(animal==1){
    for(let i=1; i<=20; i++){
    edad=parseInt(prompt('dijite la edad de los elefeantes:'))
    if(edad>=0 && edad<=1){
        conte1+=1
        pe1=(conte1*100)/20

    }  else if (edad>1 && edad<3){
        conte2+=1
        pe2=(conte2*100)/20

    }   else if(edad>=3){
        conte3+=1
        pe3=(conte3*100)/20
    }
}

console.log(`El promedio de elefantes de 0 y 1 año es: ${pe1}`)
console.log(`El promedio de elefantes de 1 a 3 año es: ${pe2}`)
console.log(`El promedio de elefantes de mas de 3 años es: ${pe3}`)
}

else if(animal==2){
    for(let i=1; i<=15; i++){
    edad=parseInt(prompt('dijite la edad de las jirafas:'))
    if(edad>=0 && edad<=1){
        contj1+=1
        pj1=(contj1*100)/15

    }  else if (edad>1 && edad<3){
        contj2+=1
        pj2=(contj2*100)/15

    }   else if(edad>=3){
        contj3+=1
        pj3=(contj3*100)/15
    }
    }
console.log(`El promedio de jirafas de 0 y 1 año es: ${pj1}`)
console.log(`El promedio de jirafas de 1 a 3 año es: ${pj2}`)
console.log(`El promedio de jirafas de mas de 3 años es: ${pj3}`)
}

else if(animal==3){
    for(let i=1; i<=40; i++){
    edad=parseInt(prompt('dijite la edad de las jirafas:'))
    if(edad>=0 && edad<=1){
        contc1+=1
        pc1=(contc1*100)/40

    }  else if (edad>1 && edad<3){
        contc2+=1
        pc2=(contc2*100)/40

    }   else if(edad>=3){
        contc3+=1
        pc3=(contc3*100)/40
    }
    }
console.log(`El promedio de chimpances de 0 y 1 año es: ${pc1}`)
console.log(`El promedio de chimpances de 1 a 3 año es: ${pc2}`)
console.log(`El promedio de chimpances de mas de 3 años es: ${pc3}`)
}

// EJERCICIO 8
let sueldo=0, comision=0, total=0, venta1=0, venta2=0, venta3=0, cont=0
let ntrabaja=parseInt(prompt('dijite la cantidad de vendedores:'))
for (let i=1; i<=ntrabaja;i++){
    sueldo=parseFloat(prompt('dijite el sueldo base:'))
    venta1=parseInt(prompt('dijite el valor total de la venta 1 de la semana:'))
    venta2=parseInt(prompt('dijite el valor total de la venta 2 de la semana:'))
    venta3=parseInt(prompt('dijite el valor total de la venta 3 de la semana:'))
    if(venta1!=0 && venta2!=0 && venta3!=0){
       comision=(venta1+venta2+venta3)*0.1 
    }
console.log(`El trabajador recibira una comision por semana de ${comision}`)
console.log(`El trabajador recibira un sueldo al mes de ${sueldo+comision}`)
}

// EJERCICIO 9
let sueldo=950000, comision=0, extra=0, valor=0,cont=0,cont2=0
let autos=parseInt(prompt('dijite la cantidad de autos vendidos en el mes:'))
for(let i=1; i<=autos; i++){
    valor=parseFloat(prompt('dijite el valor del auto'))
    cont++
    if(valor!=0){
        extra=(valor*cont)*5/100
        comision=(cont*170000)
    }
if (autos>=0){
    cont2+=1
}
}
console.log(`los autos vendidios son:${cont}`)
console.log(`El trabajador recibira un extra de ${extra}, por todos los autos vendidos en el mes.`)
console.log(`Y una comision por cada auto: ${comision}`)
console.log(`el sueldo total del trabajador en el mes es de: ${sueldo+comision+extra}`)

// EJERCICO 10
let nombre=prompt('Dijite nombre del alumno:__')
let nota1=parseInt(prompt('dijite nota 1 del alumno:'))
let nota2=parseInt(prompt('dijite nota 2 del alumno:'))
let nota3=parseInt(prompt('dijite nota 3 del alumno:'))
let nota4=parseInt(prompt('dijite nota 4 del alumno:'))
let nota5=parseInt(prompt('dijite nota 5 del alumno:'))
if (nota1>=0 && nota2>=0){
    total1=((nota1+nota2)/2)*40/100}
if(nota3>=0 && nota4>=0 && nota5>=0){
    total2=((nota3+nota4+nota5)/3)*60/100
    }
console.log(`El promedio final del estuduiante es de: ${total1+total2}%`)