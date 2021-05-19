var agora = new Date() // O new Date()  é sempre usado para hora.
var hora = agora.getHours()  //Pega a hora atual que está rodando no script no caso está rodando no cliente é no cliente, se caso está rodando no servidor é o do servidor.
var min = agora.getMinutes()
var sec = agora.getSeconds()
console.log (`Agora são exatamente ${hora} horas  ${min} minutos ` + `${sec} segundos`)
if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
}else{
    console.log('Boa Noite!')
}
4