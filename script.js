var escolha, cont, cont2=0, resposta, respostaFinal, acerto=0, erro=0, respondeu=false, id
var perguntas=['Quanto é 1+1?','Qual é a maior torcida do Brasil?','Quantas unidades federativas tem o Brasil?','Qual é o maior país do mundo em extensão territorial?','Quantos elementos químicos a tabela periódica possui?']
var alternativas1=[0,'Corinthias',26,'Rússia',113]
var alternativas2=[2,'Cruzeiro',27,'EUA',109]
var alternativas3=[1,'Flamengo',28,'Brasil',108]
var alternativas4=[3,'São Paulo',29,'China',118]
var envia=document.getElementById('enviar')
var proxima=document.getElementById('proxima')
montar()

function escolha(resposta){
    if(respondeu==false){
        for(cont=1;cont<5;cont++){
            var divEscolhida=document.getElementById(cont)
            divEscolhida.style.border='5px solid gray'
        }
        var divEscolhida=document.getElementById(resposta)
        divEscolhida.style.border='double black 5px'
        respostaFinal=resposta
        envia.disabled=false
    }
}

function enviar(){
    for(cont=1;cont<5;cont++){
        var divEscolhida=document.getElementById(cont)
        divEscolhida.style.backgroundColor='red'
        if(divEscolhida.style.border=='5px solid gray'){
            divEscolhida.style.border='none'
        }
    }
    var respostaCerta=[2,3,2,1,4]
    var divEscolhida=document.getElementById(respostaCerta[cont2])
    divEscolhida.style.backgroundColor='green'
    divResultado=document.getElementById('resultado')
    if(respostaFinal==respostaCerta[cont2]){
        divResultado.innerHTML='Você acertou!!'
        divResultado.style.color='green'
        acerto++
    }else{
        divResultado.innerHTML='Você errou!!'
        divResultado.style.color='red'
        erro++
    }
    cont2++
    envia.disabled=true
    if(cont2<=4){
        proxima.disabled=false
    }
    var acertos=document.getElementById('acertos')
    acertos.innerHTML="Acertos: "+acerto
    var erros=document.getElementById('erros')
    erros.innerHTML="Erros: "+erro
    respondeu=true
}

function montar(){
    for(cont=1;cont<5;cont++){
        var divEscolhida=document.getElementById(cont)
        divEscolhida.style.border='5px solid gray'
        divEscolhida.style.backgroundColor='white'
    }
    var pergunta=document.getElementById('pergunta')
    var questoes=document.getElementById('questoes')
    var escolha1=document.getElementById('1')
    var escolha2=document.getElementById('2')
    var escolha3=document.getElementById('3')
    var escolha4=document.getElementById('4')
    questoes.innerHTML='Questão '+ (cont2+1)+ ' de 5'
    pergunta.innerHTML=perguntas[cont2]
    escolha1.innerHTML=alternativas1[cont2]
    escolha2.innerHTML=alternativas2[cont2]
    escolha3.innerHTML=alternativas3[cont2]
    escolha4.innerHTML=alternativas4[cont2]
    proxima.disabled=true
    respondeu=false
}

function entrou(id){
    var caixa=document.getElementById(id)

    if(caixa.style.border=='5px solid gray'){
        caixa.style.border='5px solid rgb(22, 22, 22)'
    }else{
        caixa.style.border='5px solid rgb(22, 21, 22)'
    }
    
}

function saiu(id){
    var caixa=document.getElementById(id)
    if(caixa.style.border=='5px solid rgb(22, 22, 22)'){
        caixa.style.border='5px solid gray'
    }else{
        caixa.style.border='double black 5px'
    }
}