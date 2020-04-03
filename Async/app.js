//Prueba de un async en una simulacion en la espera de respuesta de un servidor

/*async function ObtnerClientes(){
    const clientes= new Promise(
        (resolve,reject) => {
            setTimeout( () => resolve("Clientes descargados...") ,3000)
         } 
    );
    const error = false;
    if(!error){
            const respuesta = await clientes;
            return respuesta;
    }else{
            await Promise.reject("Hubo un error");
    };
};

ObtnerClientes()
    .then(res => console.log(res))
    .catch(error => console.log(error));
 */

 //Prueba con una API
 async function LeerDatos (){
     //
     const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    
    const respuesta = await data.json();
    return respuesta;
    };
    LeerDatos()
        .then(data => console.log(data));