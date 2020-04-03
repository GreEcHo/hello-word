//Variables
const rutabtnText = document.getElementById("txtBtn");
const rutabtnJson = document.getElementById("jsonBtn");
const rutabtnApi = document.getElementById("apiBTN");

//Funciones
CargarTxt= () => {
 fetch("datos.txt")
   .then(res => res.text())
    .then(dato=> document.getElementById("resultado").innerHTML=dato)
    .catch(error => console.log(error));
};
Cargarjson=()=>{
    fetch("empleados.json")
     .then(res => res.json())
     .then (data =>{
         let html=``;
         data.forEach(contenido => html += `<li> ${contenido.nombre} </li><li> ${contenido.puesto} </li>`)
         document.getElementById("resultado").innerHTML= html;
        })
     .catch(error=> console.log(error));
     
};

CargarApi=(e)=>{
    e.preventDefault();
    fetch("https://picsum.photos/v2/list")
        .then(res => res.json())            
        .then(data => {
            let html=``;
            data.forEach(cont=> html += `<li>${cont.author}</li><a  href="${cont.url}">Ver Imagen</a>`);
            document.getElementById("resultado").innerHTML= html;
        })
        .catch(error => console.log(error));
        };


//Event Listener
rutabtnText.addEventListener("click",CargarTxt);
rutabtnJson.addEventListener("click",Cargarjson);
rutabtnApi.addEventListener("click",CargarApi);  