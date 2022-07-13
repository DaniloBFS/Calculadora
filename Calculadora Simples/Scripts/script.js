function calcular (n1, n2){
    n1 = parseFloat(document.getElementById("n1").value) /*aqui o valor de n1 será obtido*/
    n2 = parseFloat(document.getElementById("n2").value) /*aqui o valor de n2 será obtido*/

    selector = document.getElementById("selector").value 

    /*aqui o calculo e o resultado são feitos*/ 

    switch(selector){
        case `+`:
            calculo = (n1 + n2)
            document.getElementById("resultado").innerHTML = `O resultado da soma de ${n1} + ${n2} é = ${calculo}`
            break

        case `-`:
            calculo = (n1 - n2)
            document.getElementById("resultado").innerHTML = `O resultado da subtração de ${n1} - ${n2} é = ${calculo}`               
        break   

        case `*`:
            calculo = (n1*n2)
            document.getElementById("resultado").innerHTML = `O resultado da multiplicação de ${n1} X ${n2} é = ${calculo}`               
        break  

        case `/`:
            calculo = (n1/n2)
            if (n1 == 0){
            document.getElementById("resultado").innerHTML = "Insira um numero divisível"
             }
            else {
            document.getElementById("resultado").innerHTML = `O resultado da divisão de ${n1} / ${n2} é = ${calculo}`               
        break       
            }
    }  
}



