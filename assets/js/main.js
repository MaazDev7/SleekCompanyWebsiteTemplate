//JS for toggling side nav bar in smaller displays.
var sidemenu = document.getElementById("sidemenu");
function openmenu()
{
  sidemenu.style.right="0";
}
function closemenu()
{
  sidemenu.style.right="-200px";
}


////the following function immediately closes navbar and and starts scrolling side by side which looks less appealing...
// function scrollToSection(event, sectionId) {
//   event.preventDefault();
//   document.querySelector(sectionId).scrollIntoView({
//     behavior: 'smooth'
//   });

//   closemenu();
// }

////the following function simply closes the navbar by sliding it to right immdediately and then starts sliding which looks more appealing..
  function scrollToSection(event, sectionId) {
  event.preventDefault();
  setTimeout(() => {
    document.querySelector(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  }, 100); // Adjust the delay as needed

  closemenu();
}



(function() {
  "use strict";
  
  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    	document.getElementById("content").style.opacity = '1'; // Fade in content
    });
  }

  // for testing in local environment having quick loading time...
// setTimeout(function()
// {
//     document.getElementById("preloader").style.display = 'none';  // hide prelaoder 
//     document.getElementById("content").style.opacity = '1'; // Fade in content
//  }, 	2000); 
 //2000ms is basically 2s


  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */

    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });


  
  // contact form to google sheets
	const scriptURL = 'YOUR-SCRIPT-URL'
	const form = document.forms['submit-to-google-sheet']   //our contact form
  
	const msg=document.getElementById("msg")
	form.addEventListener('submit', e => {
	  e.preventDefault()

	  msg.style.fontFamily="JetBrainsMono";
	  
	  msg.style.color = "white"
	  msg.innerHTML="Sending Message..."
	  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		.then(response => {

			msg.style.color="#26fe00";
			msg.innerHTML="Message Sent Successfully!"
			setTimeout(function(){
				msg.innerHTML=""
			},5000)
			form.reset()
		})
		.catch(error => console.error('Error!', error.message))
	})

})();




