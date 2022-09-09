//vamos a crear un objeto
let datos_personales={
    nombre:'Pepito',
    apellido:'Rodriguez',
    dni:44987654,
    correos:{
        gmail:'pepito@gmail.com',
        outlook:'pepis@outlook.com',
        yahoo:'pepe@yahoo.com.ar'
    },
    edad:25
}
//forma 1
/*
const gmail=datos_personales.correos.gmail
const outlook=datos_personales.correos.outlook
console.log(`
    Gmail: ${gmail}
    Outlook: ${outlook}
`)*/

//forma 2 - Destructuring Object
const{gmail, yahoo,outlook}= datos_personales.correos
console.log(`
    Gmail:${gmail}
    Outlook:${outlook}
    Yahoo:${yahoo}
`)

//CONSUMO DE API
async function consumir_api(){
    //realiza por defecto una solicitud HTTP a travez del metodo GET
    let publicaciones=await fetch('https://jsonplaceholder.typicode.com/posts')
    let publicaciones_definitivas=await publicaciones.json()
    publicaciones_definitivas.forEach(element => {
    console.log(element.title)        
    });
}
consumir_api()

