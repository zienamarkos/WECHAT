 const button =document.getElementsByClassName("toggleButton")[0]
 const navbarLinks=document.getElementsByClassName('navbar-links')[0]
 button.addEventListener('click' ,() =>{
     navbarLinks.classList.toggle('active')

 } ) 

 const currentLocation=location.href;
 const menuItem=document.querySelectorAll('a');
 const menuLength=menuItem.length;

 for(let i=0; i<menuLength; i++){
     if(menuItem[i].href===currentLocation){
         menuItem[i].className="active";
     }
 }