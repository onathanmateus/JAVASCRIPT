function tabuada(){
    var num = document.getElementById("txtn");
    var tab = document.getElementById("seltab");
    if (num.value.length == 0){
        alert("[ERRO] Por favor, digite um número!")
    }else{
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ""
        for(c = 1; c <= 10; c++){
            var item = document.createElement("option")
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}
    