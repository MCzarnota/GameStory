
var turnsCounter = 9;
 var actualAngle1 = 0;
 var actualAngle2 = 0;
 var actualAngle3 = 0;
 var actualAngle4 = 0;

// SMOOTH SCROOLING TO THE TOP CODE FROM: http://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
jQuery("a").on('click', function(event) {


if (this.hash !== "") {
  // Prevent default anchor click behavior
  event.preventDefault();

  // Store hash
  var hash = this.hash;

  // Using jQuery's animate() method to add smooth page scroll
  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
  jQuery('html, body').animate({
    scrollTop: jQuery(hash).offset().top
  }, 800, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
  });
} // End if
});

//search bar and redirect to 2 page
     // search function 
     function searchBar1() {

         $("#searchbar").keyup(function(e) { // everytime key is pressed
             var inputValue = $(this).val(); // store the value from the input
             if (e.which == 13) { //enter-code number

                 localStorage.name = inputValue;
                 window.location.href = "universe.html";
                 //clear content after typing value to input
             }
         })
     };


$(window).scroll(function() {
    var scrollValue = window.pageYOffset; //get Value from Window height
    var limit = 1000;
    var showScrollBarLimit = 600;

      if(scrollValue> showScrollBarLimit  )
      {
        showScrollBar();
      }
      else{
         $("#scrollNavBar").slideUp();
      }

    

});



function showScrollBar(){
    $("#scrollNavBar").fadeIn();
    $("#scrollNavBar").css("display","flex");
}





//Lock Game when rotate element

 function rotate(element){
    if (element == 1){
         var image = document.getElementById("topleft");
     actualAngle1 += 90;
       image.style.transform = "rotate("+actualAngle1+"deg)";
         
    }   else if (element == 2) {
         var image = document.getElementById("topright");
         actualAngle2 +=90;
       image.style.transform = "rotate("+actualAngle2+"deg)";
    }   else if (element == 3) {
         var image = document.getElementById("bottomleft");
         actualAngle3 +=90;
       image.style.transform = "rotate("+actualAngle3+"deg)"
   }    else if (element == 4) {
         var image = document.getElementById("bottomright");
         actualAngle4 +=90;
       image.style.transform = "rotate("+actualAngle4+"deg)";
   }
turnsCounter--; // turn counter
//gameover
    if(turnsCounter < 0 )
    {
      $(".gameover").fadeIn();
       document.getElementById("lockMechanism").style.opacity= "0.6";
       document.getElementById("gameLock").style.pointerEvents = "none";
    } else if(turnsCounter < 5)
    {
      $("#turnCounter").css("color", "red");
    }
// launching sound every time stone is clicked
      var sound= new Audio();
sound.src = "sounds/stonesound.wav";
    sound.play(); 

//reseting the default value and ovewriting it
    var turn = document.getElementById("turns");
    if(turn)
    {
    	document.getElementById("turns").innerHTML = turnsCounter;
    }

    // unlocking content
   if (actualAngle1 == 90 *3 & actualAngle2 == 90 * 1 & actualAngle3== 90*3 & actualAngle4== 90 * 2 )
   {
   		var myElement = document.getElementById("nextContent");
   		var unlock= new Audio();
		unlock.src = "sounds/unlock.wav";
   	 	unlock.play();  
       myElement.style.display =  "block";
       document.getElementById("lockMechanism").style.opacity= "0.6";
       document.getElementById("gameLock").style.pointerEvents = "none";

   }
 }