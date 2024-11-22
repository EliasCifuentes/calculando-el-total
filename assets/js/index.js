precio = 400000
cantidad = 0

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

const btnsuma = document.querySelector(".btnsuma");
btnsuma.addEventListener('click' , () =>{

    cantidad = cantidad + 1;
    agregar = document.querySelector(".cantidad");
    agregar.innerHTML = cantidad
    precioTotal = precio * cantidad

    precioFinal = document.querySelector(".valor-total");
    precioFinal.innerHTML =  precioTotal    
})

const btnresta = document.querySelector(".btnresta");
btnresta.addEventListener('click' , () =>{

    cantidad = cantidad - 1;
    agregar = document.querySelector(".cantidad");
    agregar.innerHTML = cantidad
    precioTotal = precio * cantidad

    precioFinal = document.querySelector(".valor-total");
    precioFinal.innerHTML =  precioTotal
})





