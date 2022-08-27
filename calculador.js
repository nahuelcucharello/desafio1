function cotizador(){
    const modeloEquipo = prompt('Ingrese el modelo de cámara')
    const valorEquipo = parseInt(prompt('Ingresa el valor actual de tu equipo en pesos'))

    const resultado = valorEquipo * 0.02
    
    alert('El valor del seguro mensual de tu modelo es de: $' +resultado)

    // alert('El valor del seguro mensual de tu ' +modeloEquipo, 'es de $' +resultado) mi intención es que figure el modelo de cámara en el alert pero al ejecutarlo solo me muestra el modelo y elimina el precio.
}

cotizador();{
    let pregunta = prompt('¿Desea cotizar otro producto?')
    while(pregunta === 'si'){
        cotizador();{
            let pregunta = prompt('¿Desea cotizar otro producto?')
            while(pregunta === 'si'){
                cotizador()
        }
        alert('Gracias por usar nuestro cotizador online') 
        }
    }
}
alert('Gracias por usar nuestro cotizador online') 