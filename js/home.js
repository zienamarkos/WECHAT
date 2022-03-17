 const button =document.getElementsByClassName("toggleButton")[0]
 const navbarLinks=document.getElementsByClassName('navbar-links')[0]
 button.addEventListener('click' ,() =>{
     navbarLinks.classList.toggle('active')

 } ) 