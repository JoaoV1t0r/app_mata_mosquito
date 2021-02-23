//Iniciando o Jogo
function iniciarJogo(){
	var nivel = document.getElementById('nivel').value
	if (nivel === '') {
		alert('Selecione um Nível para iniciar o Jogo')
		return false
	}
	window.location.href = "./app_mata_mosquito.html?" + nivel
}
var criaMosquitoTempo = 1500
var altura = 0
var largura = 0
var vidas = 1
var tempo = 10
var nivel = window.location.search.replace('?', '')
if (nivel === 'normal') {
	criaMosquitoTempo = 1500
}else if (nivel === 'dificil') {
	criaMosquitoTempo = 1000
}else{
	criaMosquitoTempo = 750
}
//Definindo o palco do jogo

function ajustaTamanhoDoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth
	//console.log(largura,  altura)
}
ajustaTamanhoDoJogo()
	var cronometro = setInterval(function(){
		tempo--
		if (tempo < 0) {
			clearInterval(cronometro)
			clearInterval(criaMosquito)
			window.location.href = 'vitoria.html'
		}else{
			document.getElementById('cronometro').innerHTML = tempo
		}
	},1000)

function posicaoMosquito() {

	//Remover mosquito anterior
	if (document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()
		if (vidas > 3) {
			
			window.location.href = 'fim_de_jogo.html'
		}else{
			document.getElementById('v' + vidas).src = "./img/coracao_vazio.png"
			vidas++
		}
	}
	//Definindo a posição de forma randomica
	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90
	//console.log(posicaoX, posicaoY)
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	//Criar elemento HTML
	var mosquito = document.createElement('img')
	mosquito.src = 'img/mosquito.png'
	mosquito.className = tamanhoAleatorio() +' '+ ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function (){
		this.remove()
	}
	document.body.appendChild(mosquito)

}
//Definindo o Tamanho
function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)
	switch(classe){
		case 0:
			return 'mosquito1'
		case 1:
			return 'mosquito2'
		case 2:
			return 'mosquito3'
	}
}
//Definindo o Lado
function ladoAleatorio(){
	var classe = Math.floor(Math.random() * 2)
	switch(classe){
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
	}
}




