import aboutContent from './About.js'
import projectContent from './Project.js'

document.addEventListener("DOMContentLoaded",()=>{
    const content = document.getElementById("content");
    const nav_list=document.getElementById("list");
    const contentCount=2;
    const reader = new FileReader();


    const pages={
        about: aboutContent,

        projects: projectContent,
    }


    window.addEventListener("load",function(){
        let selected=true;
        for(let key in pages){
            console.log(key);
            let li=document.createElement("li");
            li.innerHTML=`<a href="#${key}" class="${selected? "active" : ""}">${key}</a>`;
            nav_list.appendChild(li);
            selected=!selected;
        }
    })

    window.addEventListener("hashchange",()=>{
        loadPage(window.location.hash)
    })

    function loadPage(hash){
        const page=hash.replace("#","")
        content.innerHTML=pages[page] || pages.about;
        activePage(page);
    }

    
    function activePage(page){
        const links = document.querySelectorAll("nav ul li a");
        links.forEach(link=>{
            link.classList.toggle("active",link.getAttribute("href").includes(page))
        })
    }

    loadPage(window.location.hash)

});
