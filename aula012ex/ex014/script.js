function carregar() {
var msg  = window.document.getElementById('msg');
var img = window.document.getElementById('imagem');
var data = new Date();
var hora = data.getHours();
var minu = data.getMinutes();
msg.innerHTML = `Agora são <strong>${hora} horas</strong> e <strong>${minu} minutos.</strong>`;
if (hora < 12) {
    texto.innerHTML = 'BOM DIA!';
    img.src = 'foto-manha.png';
    document.body.style.background = '#8F7621';
} else if (hora < 18) {
    texto.innerHTML = 'BOA TARDE!';
    img.src = 'foto-tarde.png';
    document.body.style.background = '#FC8801';
} else {
    texto.innerHTML = 'BOA NOITE!';
    img.src = 'foto-noite.png';
    document.body.style.background = '#01253B';
}

}