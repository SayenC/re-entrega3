
console.log(document.body)
console.log(document.getElementsByClassName("parrafo"))

let nombreGuardado = localStorage.getItem('nombre')

if(nombreGuardado){
    alert('Bienvenido')
}else{
    let nombre = prompt('Ingrese su nombre')
    localStorage.setItem('nombre',nombre);
}

let nombre = prompt('Ingrese su nombre')

localStorage.setItem('nombre',nombre);
console.log(nombreGuardado)

//eventos
let boton = document.getElementById('boton')
function tipoDeRespuesta(evento){
    boton.addEventListener(evento,respuestaClick)
}
tipoDeRespuesta('mouseleave')

function respuestaClick(){
    console.log('Ingresar')
}

let inputNombre = document.getElementById('inputNombre')

inputNombre.addEventListener('keydown',respuestaClick)

function respuestaClick(){
    console.log('se activo el teclado')
}


let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDeFaul();
    console.log(e)
    let formulario = e.target
    console.log(e.target.children[0].value)
    
    alert('Se han enviado los datos')
    //console.log("Formulario Enviado")
}

//STORAGE//
let nombreGuardado2 = sessionStorage.getItem('nombre')

if(nombreGuardado2){
    alert('Buen dia ${nombreGuardado2}')
} else{
    let nombre2 = prompt('Ingrese su nombre');
    sessionStorage.setItem('nombre2',nombre2);
}


for (let i = 0; 1 < sessionStorage.length; i++) {
    let clave = sessionStorage.key(i);
    console.log("Clave: "+ clave);
    console.log("Valor: "+ sessionStorage.getItem(clave));

}



//localStorage.setItem("producto1", producto1);


//const enJSON       = JSON.stringify(producto1);
//localStorage.setItem("producto1", enJSON);
//let productoLocalStorage = localStorage.getItem('producto1')
//console.log(typeof productoLocalStorage)
//productoLocalStorage = JSON.parse(productoLocalStorage)
//console.log(productoLocalStorage)
//
//console.log(enJSON); {"id";2, "producto";"buzo"}
//console.log(typeof producto1); Object
//console.log(typeof enJSON);    String

//localStorage.setItem("producto1", enJSON);

const productos = [
    {id:1, nombre:'Top', precio: 500, img:'./img/top.jpg'},
    {id:2, nombre:'vestido', precio: 700, imagen: "./img/buzo.jpg"},
    {id:3, nombre:'Pantalon', precio: 1000,img: ''},
    {id:4, nombre:'Buzo', precio: 1500,img: ''}
]





function listProductos(){
    for (const producto of productos){
        let cardProducto = document.createElement('div')
        cardProducto.innerHTML = `
            <h3>${producto.nombre}</he3>
            <h3>$ ${producto.precio}</h3>
            <button class="button" id=${producto.id}>Agregar al carrito</button>
            `
        cardProducto.className = 'card'
        let lista = document.getElementById('listProductos')
        lista.append(cardProducto)
        let botonParaAgregar = document.getElementById(`${producto.id}`)
        botonParaAgregar.addEventListener('click',agregarlCarrito)
    }
}
function agregarlCarrito(e){
    let id = e.target.getAttribute('id')
    console.log(id)
}
Swal.fire({
    position: 'top-end',
    icon: 'success',
    title:'Has agregado al carrito correctamente',
    showConfirmButton: false,
    timer: 1000
})

listProductos()


