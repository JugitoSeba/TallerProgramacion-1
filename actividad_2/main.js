import Pitagoras from "./pitagoras.js"

const calcular=()=>{
    const co=document.getElementById("inp_co").value
    const ca=document.getElementById("inp_ca").value
    let pitagoras=new Pitagoras()
    pitagoras.cateto1 = co
    pitagoras.cateto2 = ca
    pitagoras.calcular_pitagoras()
}
document.getElementById("btn_calculo").addEventListener("click",calcular)