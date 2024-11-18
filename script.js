let texto= document.querySelector(".entradaTexto")
let botaoGerar= document.querySelector(".botaoGerar")
let botaoBaixar= document.querySelector(".botaoBaixar")
let contendoQrcode= document.querySelector(".qrcode")

function GerarQRCode(){
    if(texto.value){
        contendoQrcode.innerHTML= ""
        let qrcode= new QRCode(contendoQrcode,{
            text:texto.value,
            width:256,
            height:256,
        })
        botaoBaixar.style.display = "block"
    } else {
            alert("Por favor,digite algum texto ou URL para gerara o Qr code")
        }
}

function BaixarQrcode(){
    if (contendoQrcode.firstChild){
    let link = document.createElement("a")
    link.href = contendoQrcode.firstChild.toDataURL("image/png")
    link.download = "qrcode.png"
    link.click()
    }
}


botaoGerar.addEventListener("click",GerarQRCode)
botaoBaixar.addEventListener("click",BaixarQrcode)