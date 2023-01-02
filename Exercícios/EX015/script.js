function verificar(){
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = document.querySelector("input#txtano")
    var res = document.querySelector("div#res")

    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert("[ERRO] Verifique os dados e tente novamente!")
    } else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement("img")
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = "Homem"
            if (idade >=0 && idade <10){
                img.setAttribute("src", "criançam.png")
            } else if (idade <21){
                img.setAttribute("src", "jovemm.png")
            }else if (idade <50){
                img.setAttribute("src", "adultom.png")
            }else{
                img.setAttribute("src", "idosom.png")
            }
        } else if (fsex[1].checked){
            genero = "Mulher"
            if (idade >=0 && idade <10){
                img.setAttribute("src", "criançaf.png")
            } else if (idade <21){
                img.setAttribute("src", "jovemf.png")
            }else if (idade <50){
                img.setAttribute("src", "adultof.png")
            }else{
                img.setAttribute("src", "idosof.png")
            }
        }   
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}