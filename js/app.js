/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const divs = document.querySelectorAll('div');
const container = document.getElementsByClassName('landing__container');


for (let i = 0; i < sections.length; i++) {
    let node = document.createElement('li');
	let link = document.createElement('a');
	link.setAttribute('href', sections[i].id);
	link.innerHTML = sections[i].id;
    node.appendChild(link);
    document.getElementById("navbar__list").appendChild(node);
}



const links = document.querySelectorAll('a');
const thirdLink = links[2];
for (let i = 0; i < links.length; i++) { 
    links[i].addEventListener('click', function (event) {
        event.preventDefault();
        console.log("Look, ma! We didn't navigate to a new page!");
        //let elmnt = document.getElementById("section1");
        sections[i].scrollIntoView();
    });
}


for (let i = 0; i < sections.length; i++) {
    sections[i].addEventListener("mouseenter", function() {
      let current = document.getElementsByClassName("your-active-class");
      console.log(current.className);
      current[0].className = current[0].className.replace("your-active-class", "");
      this.className += "your-active-class";
      console.log("We are inside " + sections[i].id);
    });
  } 



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


