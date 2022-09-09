export default class Cliente{
    constructor(nombre,apellido,dni)
    {
        this.nombre=nombre
        this.apellido=apellido
        this.dni=dni
    }

    mostrar_todo()
    {
        console.log(`Mi nombre es ${this.nombre}, mi apellido es ${this.apellido} y mi dni es ${this.dni}`)  
    }
}    