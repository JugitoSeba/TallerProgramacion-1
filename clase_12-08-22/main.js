import Vehiculo from "./vehiculo.js"
const mostrar=()=>{
    const km=document.getElementById("inp_km").value;
    //creamos la instancia de clase que nos va a permitir tener acceso a los metodos y atributos de la clase
    let vehiculo=new Vehiculo(km)
    //ejecute el metodo de la clase
    vehiculo.mostrar_kilometraje()
}
//equivalente a un onclick
document.getElementById("btn_mostrar").addEventListener("click",mostrar)

//forma n°2 de enviar datos a la clase
const mostrar_forma2=()=>{
    const mod=document.getElementById("inp_modelo").value
    let vehiculo=new Vehiculo()
    vehiculo.modelo=mod
    vehiculo.mostrar_modelo()
}
document.getElementById("btn_modelo").addEventListener("click",mostrar_forma2)