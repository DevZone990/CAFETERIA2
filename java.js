const seccionesOcultas = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        entry.target.classList.toggle('mostrar', entry.isIntersecting);
    })
})
seccionesOcultas.forEach((seccion)=>observer.observe(seccion));
//********************************************** */
let vistaProducto = document.querySelector('.vista-producto');
let vistaBox = vistaProducto.querySelectorAll('.vista');
let header = document.querySelector('.header');

document.querySelectorAll('.box-container .box').forEach(box =>{
    box.onclick = ()=>{
        vistaProducto.style.display ='flex';
        // header.style.display='hidden';
        let name = box.getAttribute('data-name');
        vistaBox.forEach(vista => {
          let target = vista.getAttribute('data-target');
            if(name == target){
                vista.classList.add('active');
            }
        });
    };
});

vistaBox.forEach(close =>
    close.querySelector('.bx-x-circle').onclick = () => {
        close.classList.remove('active');
        vistaProducto.style.display = 'none';
    }
    )
   

    let navbar = document.querySelector('.navbar');

    document.querySelector('#menu-btn').onclick = ()=>{
        navbar.classList.toggle('active');
        // cartItem.classList.remove('active');
        // searchForm.classList.remove('active');
    }
    
    //optenemos los enlaces del navbar
    const enlaces = navbar.querySelectorAll('a');
    //agregamos el controlador
    enlaces.forEach(function(enlace){
        enlace.addEventListener('click',function(){
            navbar.classList.remove('active');
        })
    
    });


    Window.onscroll = ()=>{
        navbar.classList.remove('active');
    }