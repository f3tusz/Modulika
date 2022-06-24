import './app.css';

// window.addEventListener("load", function () {
  
//   let toggleNav = document.querySelector('header button');

//   let navToggle = function (e) {
//     let navbar = document.querySelector('#navbar');
//     let iconMenu = document.querySelector('.icon-menu');
//     let closeMenu = document.querySelector('.icon-close');

//     console.log(iconMenu);
//     if (iconMenu.classList.contains('block')) {
//       iconMenu.classList.replace('block', 'hidden');
//       closeMenu.classList.replace('hidden', 'block');
//       navbar.classList.replace('hidden', 'flex');
//     } else {
//       iconMenu.classList.replace('hidden', 'block');
//       closeMenu.classList.replace('block', 'hidden');
//       navbar.classList.replace('flex', 'hidden');
//     }
//   };

//   toggleNav.addEventListener("click", navToggle);
  
//   let tabMenuItems = document.querySelectorAll("[class^=nav] > a");

//   let getSiblings = function (e) {
//     let siblings = []; 
//     if(!e.parentNode) {
//       return siblings;
//     }
//     let sibling = e.parentNode.firstChild;
    
//     while (sibling) {
//       if (sibling.nodeType === 1 && sibling !== e) {
//         siblings.push(sibling);
//       }
//       sibling = sibling.nextSibling;
//     }
//     return siblings;
//   };
  
//   let tabToggle = function (tabClickEvent) {
//     tabClickEvent.preventDefault();
//     var clickedTab = tabClickEvent.currentTarget;
//     var tabSiblings = getSiblings(tabClickEvent.currentTarget);
    
//     for (let i = 0; i < tabSiblings.length; i++) {
//       tabSiblings[i].classList.remove("active");
//     }
//     clickedTab.classList.add("active");
// 		var myContentPanes = document.querySelectorAll(`.${clickedTab.dataset.panel}`);
//     // console.log(myContentPanes);
// 		var anchorReference = tabClickEvent.target;
//     var activePaneId = anchorReference.getAttribute("href");
//     var activePane = document.querySelector(activePaneId);
//     var paneSiblings = getSiblings(activePane);
//     for (let i = 0; i < paneSiblings.length; i++) {
//       paneSiblings[i].classList.remove("md:block");
//       paneSiblings[i].classList.add("md:hidden");
//     }
// 		activePane.classList.remove("md:hidden");
// 		activePane.classList.add("md:block");
//   }
  
// 	for (let i = 0; i < tabMenuItems.length; i++) {
//     tabMenuItems[i].addEventListener("click", tabToggle);
//   }
  
// });
