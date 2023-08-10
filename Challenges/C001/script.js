function carregar(){
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >=0 && hora < 12){
        img.src = 'imagemmanha.png'
        document.body.style.backgroundColor = '#fec969'
    } else if (hora >=12 && hora < 18){
        img.src = 'imagemtarde.png'
        document.body.style.backgroundColor = '#ac6e66'
    }else{
        img.src = 'imagemnoite.png'
        document.body.style.backgroundColor = '#62445c'
    }
}

