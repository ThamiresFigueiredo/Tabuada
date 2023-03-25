function tabuada() {
   var num = window.document.getElementById('num')
   var end = window.document.getElementById('end')
   if (num.value.length == 0 || end.value.length == 0){
    window.alert('[ERRO] Confira seus dados!')
   } else {
   
   var n = Number(num.value) //transforma o valor string em número
   var e = Number(end.value)
   var x = 0
   var r = ''
   var res = window.document.getElementById('resposta')
   r = n*e
   //res.innerHTML = `A resposta é: ${r}`
   res.innerHTML = `A tabuada do ${n} é: <br>`

   do {
    r = n*x // asssim que essa rotina terminar executa a p´roxima linha
    res.innerHTML += `${x} x ${n} = ${r} <br>`
    x++

   } while (x <=e)
}

}

//Get element sempre transforma o item em string, tem que transformar em número depois.
// += é para não substituir os valores apenas adiciionar em tela