let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento){
    evento.preventDefault()
  
    let cajaUsuario=document.getElementById("cajausuario")
    let cajaContraseña=document.getElementById("cajacontraseña")
    let cajaCorreo=document.getElementById("cajacorreo")
    let cajaCiudad=document.getElementById("cajaciudad")
    let cajaTelefono=document.getElementById("cajatelefono")

    let datosDelFormulario={
        usuario:cajaUsuario.value,
        contraseña:cajaContraseña.value,
        correo:cajaCorreo.value,
        ciudad:cajaCiudad.value,
        telefono:cajaTelefono.value,

    }
     
})