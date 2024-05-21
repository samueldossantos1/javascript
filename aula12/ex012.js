var agora = new Date()
var hora = 1
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 5) {
    console.log('BOA MADRUGADA!')
} else if (hora < 12) {
    console.log('BOM DIA!')
}  else if (hora < 18) {
    console.log('BOA TARDE!')
} else {
    console.log('BOA NOITE!')
}