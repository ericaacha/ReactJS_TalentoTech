
const AgregarProducto = async (producto)=>{

    try{

        const respuesta = await fetch('https://691d0718d58e64bf0d34c432.mockapi.io/v1/productos',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            }

        )

        if(!respuesta.ok){
            throw new Error ('Error al agregar producto');
        }else
        {
            console.log("Producto agregado con éxito");
        }

    }catch(error){
        console.error(error);
    }




}

export {AgregarProducto};