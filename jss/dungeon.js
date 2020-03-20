   

var itemFound;
var numberOfItems =0;
var itemNumber;
var counter = +0;
var itemFound= document.getElementById("items").textContent;

function showScrollBar(){
    $("#scrollNavBar").fadeIn();
    $("#scrollNavBar").css("display","flex");
}
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


//get and set itemFound description
     function findItems(itemNumber){
      if(itemNumber==1){
    //play sound
       var sound= new Audio();
  sound.src = "sounds/sword.mp4";
    sound.play(); 
       numberOfItems ++;
    
    //remove from body
    document.getElementById("sword").style.display ="none";
    //add description to body
   $("#items").append(" <b>Sword </b> <br>");
      
    } else if(itemNumber==2){
      var sound= new Audio();
  sound.src = "sounds/shield.mp4";
    sound.play(); 
    document.getElementById("shield").style.display ="none";
       numberOfItems ++;
  
    $("#items").append(" <b> Shield </b> <br>");
    } else if(itemNumber==3){
      var sound= new Audio();
  sound.src = "sounds/armor.wav";
    sound.play();
    document.getElementById("armor").style.display ="none";
    $("#items").append(" <b> Armor </b> <br>");
    numberOfItems ++;
  }
  if (numberOfItems=="3")
  {
    //unlock content
  var showContent = document.getElementById("showAfterGame").style.display ="block";  
  showAfterGame.style.position = "fixed";
   $("p.firstpartSecondBody").hide();
   $("p.items").hide();
  var fontshowContent = document.getElementById("fontShowAfterGame").style.color = "white";
  var imageshowContent = document.getElementById("nextPageShowAfterGame").style.opacity = 1;
  }
  }
  
    
  function destroyDoor(){
  	//play sound
  	var sound= new Audio();
	sound.src = "sounds/doorSmash.wav";
    sound.play(); 

    //get Door image and change it
  	//each time you click counter ++
  	counter++;
  	if(counter==1){
  			document.getElementById("doorDungeon").src ="Images/doorDungeon1.png";
  	}
  	else if(counter==2){
  		document.getElementById("doorDungeon").src ="Images/doorDungeon2.png";
  	} else if(counter==3){
  		document.getElementById("doorDungeon").src ="Images/doorDungeon3.png";
  		  	var sound= new Audio();
	sound.src = "sounds/Destroydoor.wav";
    sound.play();
    //unlock content after solving puzzle game
     $("#doorDungeon").css("pointer-events", "none"); 
     $("#doorDungeon").css("opacity", "0.7"); 
     $("#afterContent").slideDown();
       
       

  	}
  }
  //find item game starts when it scrolls more than needed
  $(window).scroll(function() {
    var scrollValue = window.pageYOffset; //get Value from Window height
    var limit = 1600;      //limit scroll   

     var showScrollBarLimit = 600;

      if(scrollValue> showScrollBarLimit  )
      {
        showScrollBar();
      }
      else{
         $("#scrollNavBar").slideUp();
      }    


//when it reaches the limit
    if(scrollValue > limit) {
      //set properties for new body

     $(".content").css("display","none");
      $("body").css("height","100%");
      //fade out effect
      $(".secondBody").fadeIn("10000");
     $(".secondBody").css("display", "block");
      $(".secondBody").css("background-image","url(Images/torchfire.png)");
      $(".invisibleContent").css("background-image","url(Images/deadend.jpg)");
  
    }
  
});