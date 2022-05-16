// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
let date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
// ********** close links ************
let navToggle = document.querySelector('.nav-toggle');
let linksContainer = document.querySelector('.links-container');
let links = document.querySelector('.links');

// MODO DINAMICO DE ABRIR O MENU, VARIANDO DE ACORDO COM A QTDE DE LINKS.

navToggle.addEventListener('click', ()=>{
    let containerHeight = linksContainer.getBoundingClientRect().height;
    let linksHeight = links.getBoundingClientRect().height;
    
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    }
    else {
        linksContainer.style.height = 0;
    }
})
// ********** fixed navbar ************
let navBar = document.getElementById('nav');
let topLink = document.querySelector('.top-link');

window.addEventListener('scroll', ()=>{
    scrollHeight = window.scrollY;
    navHeight = navBar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navBar.classList.add('fixed-nav');
    } else {
        navBar.classList.remove('fixed-nav');
    }
    if(scrollHeight > 500){
        topLink.classList.add('show-link');
    }else {
        topLink.classList.remove('show-link');
    }
})
// ********** smooth scroll ************
// select links
let scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
    link.addEventListener('click',function(e){
        // prevent default
        e.preventDefault();
        // navigate to specific spot
        let id = e.currentTarget.getAttribute('href').slice(1); // slice (1) pega da HASHTAG para frente. ex: about
        let element = document.getElementById(id);
        let navHeight = navBar.getBoundingClientRect().height;
        let containerHeight = linksContainer.getBoundingClientRect().height;
        let fixedNav = navBar.classList.contains('fixed-nav');
        
        let position = element.offsetTop - navHeight;
        
        if(!fixedNav){
            position = position - navHeight;
        }
        if (navHeight > 82){
            position = position + containerHeight;
        }

        window.scrollTo({
            left:0,
            top:position,
        });
        linksContainer.style.height = 0;
    })
})
