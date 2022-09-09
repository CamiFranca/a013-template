//Usando operadores lógicos
/*const idade = Number(prompt('Digite sua idade:'))

if(idade === 13 && idade <= 17){
    console.log('Seu dependente já pode fazer o cartão de crédito')
}
else {
    console.log('Consulte outras opções do Labank')
}

// Usando if aninhado
const idadeDois = Number(prompt('Digite uma idade: '))

if(idadeDois >= 13){
    if(idadeDois <=17){
        console.log('Seu dependente já pode ter um cartão de crédito')
    }else{
        console.log('Procure as condições do Labenk')
    }
}else{
        console.log('Procure as condições do Labenk')
}


//Usando o if ternário
 let idadeTres = Number(prompt('Digite uma idade: '))

 idadeTres === 13? console.log(' A idade do dependente é 13') :
  console.log('Verifique as opções possíveis')

  //Usando switch
  const tipo = 'premium'

  switch (tipo){
  case 'premium':
  console.log('vc foi aceito')
  break;
  case 'ouro':
  console.log('faltam alguns pontos')
  break;
  case 'prata':
  console.log('Você vai chegar lá')
  break;
  default: ('tente novamente')}
*/
//usando if aninhado


//usando switch
/*switch(num){
    case 6:
    console.log('seis')
    break;
        case 12:
        console.log('doze')
         break;
            case 18:
            console.log('dezoito')
             break;
                case 24:
                    console.log('vinte e quatro')
                    break;
                    case 30:
                        console.log('trinta')
                        break;
                            default:
                             ('O número é maior que 30 ou menor que 6')
}
//if ternário
num ===30? console.log('UFA ACERTEI'): console.log('NAO FOI DESSA VEZ')*/

//Juntando tudo:
let num = Number(prompt('digite um numero:'))

num === 30 ? console.log('UFA ACERTEI') : console.log('NAO FOI DESSA VEZ')

if (num % 2 === 0) {
    console.log('O numero é divisivel por dois')
    if (num % 3 === 0) {
        console.log('O numero é divisivel por 3')
    }
    switch(num){
        case 6:
        console.log('seis')
        break;
            case 12:
            console.log('doze')
             break;
                case 18:
                console.log('dezoito')
                 break;
                    case 24:
                        console.log('vinte e quatro')
                        break;
                        case 30:
                            console.log('trinta')
                            break;
                                default:
                                 ('O número é maior que 30 ou menor que 6')
    }
} else if (num % 3 === 0) {
    console.log('número divisivel por 3')
} else {
    console.log('não é divisivel por 2 e por 3')
}