async function generar_tabla() {
                    //consigue los datos de la api
    let datos=await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    let monedas=await datos.json()

    let filas=[]
            //por cada elemento de monedas hacer esto
    monedas.forEach(element => {
        let fila=`
            <tr>
                <td>${element.symbol}</td>
                <td>${element.name}</td>
                <td><img style="width: 4rem" src="${element.image}"></td>
                <td>${element.current_price}</td>
                <td>${element.total_volume}</td>


            </tr>    
        `
        filas.push(fila)    
    });

    document.getElementById("cuerpo").innerHTML=filas.join('')
}
generar_tabla()