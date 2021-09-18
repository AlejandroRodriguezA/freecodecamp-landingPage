
const navMenu =document.querySelector(".menu");
const navLinkIconMenu = document.querySelector (".nav-link-iconMenu");

function despliegueMenu () {
    if (navMenu.classList.contains("active")){

        // Remuevo la clase activa al .menu
        navMenu.classList.remove("active");
        navLinkIconMenu.querySelector("a").textContent = "\u2630";

        
        
        
    } else {
        navMenu.classList.add("active");
        // Remuevo la clase activa a .nav-link-iconMenu
        // navLinkIconMenu.querySelector("a").textContent = "☓";
        navLinkIconMenu.querySelector("a").textContent = "\u2613";
    }

}

navLinkIconMenu.addEventListener("click", despliegueMenu,false);

// Submenu
const items = document.querySelectorAll(".nav-link");




function subMenu(){
    if (this.classList.contains("submenu-active")){
        this.classList.remove("submenu-active");
    } else if (navMenu.querySelector(".submenu-active")) {
        navMenu.querySelector(".submenu-active").classList.remove("submenu-active");
        this.classList.add("submenu-active");
    } else {
    this.classList.add("submenu-active");
  }
}
// items.addEventListener("click",subMenu, false);        

/* Event Listeners */
for (let item of items) {
    if (item.querySelector(".submenu")) {
      item.addEventListener("click", subMenu, false);
    //   item.addEventListener("keypress", toggleItem, false);
    }   
}
      
/* Close Submenu From Anywhere */
function closeSubmenu(e) {
    let isClickInside = navMenu.contains(e.target);
    // let eID = e.target.id;

    // if(eID == "nav-link-curso" || eID == "nav-link-iconMenu"){
    //     if (eID == "nav-link-curso"){
    //         subCurso();
    //     } else {
    //         // console.log(eID);

    //     }
    // } else {
    //     // console.log("NO ENTRO");
    //     // navMenu.classList.remove("active");
    //     // navLinkIconMenu.querySelector("a").textContent = "\u2630";
    //     despliegueMenu();
    // }
    
   
    if (!isClickInside && navMenu.querySelector(".submenu-active")) {
        navMenu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
  }
   
  /* Event listener */
  document.addEventListener("click", closeSubmenu, false);

//   Cierra el menu luego del click

// a.addEventListener("click",despliegueMenu,false);
        
// Menus de Cursos
const pCurso =document.querySelector("#p-Cursos");
const dCurso =  document.querySelector(".subCurso")

function subCurso(){

    if (dCurso.classList.contains("subCurso-active")){
        
        dCurso.classList.remove("subCurso-active")
    } else {
        
        dCurso.classList.add("subCurso-active");
    }
}

/* Event Listeners */
pCurso.addEventListener("click",subCurso,false)


// Menus de videos
const pVideos =document.querySelector("#p-Videos");
const dVideo =  document.querySelector(".subVideos")

function subVideo(){

    if (dVideo.classList.contains("subVideos-active")){
        console.log("A")
        dVideo.classList.remove("subVideos-active")
    } else {
        console.log("B")
        dVideo.classList.add("subVideos-active");
    }
}

/* Event Listeners */
pVideos.addEventListener("click",subVideo,false)
