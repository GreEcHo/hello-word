//Interacccion enter JSON con AJAX

function Agregarperonsa(){
    //creo el objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();
    //tengo que definir el tipo de pedido y el elemtno a manejar
    xhr.open('GET','empleado.json',true);
    //Que va a hacer cuando se termine el pedido
    xhr.onload= function (){
        if(this.status===200){
            const persona = JSON.parse(this.responseText);
            const ruta = document.querySelector("#empleado");
            const htmlTemplate =  `
            <ul>
            <li>ID: ${persona.id}</li>
            <li>Nombre: ${persona.nombre} </li>
            <li>Trabajo: ${persona.trabajo}</li>
            <li>Empresa: ${persona.empresa} </li>
            </ul>`;
            ruta.innerHTML= htmlTemplate;
        };
    };
    xhr.send();

};
function Agregarpersonas(){
    const xhrs = new XMLHttpRequest();
    xhrs.open('GET','empleados.json',true);
    xhrs.onload = function(){
        if(this.status===200){
            const personas = JSON.parse(this.responseText);
            let htmlTemplate=''; 
            personas.forEach(
                function(item){
                    const ruta = document.querySelector("#empleados");
                    htmlTemplate +=  `
                    <ul>
                    <li>ID: ${item.oid}</li>
                    <li>Nombre: ${item.nombre} </li>
                    <li>Trabajo: ${item.trabajo}</li>
                    <li>Empresa: ${item.empresa} </li>
                    </ul>`;
                    ruta.innerHTML=htmlTemplate;                    
                }
            );
        }
    }
    xhrs.send();
};
//Event Listener para cargar la info desde un json
document.querySelector("#boton1").addEventListener("click",Agregarperonsa);
document.querySelector("#boton2").addEventListener("click",Agregarpersonas);