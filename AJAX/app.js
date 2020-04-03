
function CargarDatos(){
    //Creo un objeto XMLTHttpRequest para cargar datos de distinto formato
    const xfr = new XMLHttpRequest();
    //  Abrimos una coneccion (a que ?)
    xfr.open('GET','datos.txt',true);
    //Una vez q carga
    //Metodo nuevo 
    /*xfr.onload= function(){
        //revision de estado
        if(this.status=== 200){
            document.querySelector("#listado").innerHTML= `<h1>${this.responseText}</h1> `;
        }};*/
    //Metodo viejo
      xfr.onreadystatechange = function(){
          if(this.readyState === 4 && this.status === 200){
              document.querySelector("#listado").innerHTML=  `<h1>${this.responseText}</h1>`;
          };

      };  */
/*
  tipos des ready change
  0 -- no incializado
  1 -- conexion establecida
  2 -- recibido
  3 -- procesando
  4 -- respuesta lista

*/
    //enviar request
    xfr.send();
};
document.querySelector("#cargar").addEventListener("click",CargarDatos);