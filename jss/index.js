 var delayMillis = 1000;

 function delay() {
     //play sound when clicked the start button
     var sound = new Audio();
     sound.src = "sounds/start.wav";
     sound.play();

     //delay on click 
     setTimeout(function() {
         //set html link to a element
         var url = document.getElementById("startGameButton");
         url.href = "story.html";
         //redirect to another page
         window.location.href = "story.html";
     }, delayMillis);
 };
 //search bar and redirect to universe page
 // search function 
 function searchBar1() {

     $("#searchbar").keyup(function(e) { // everytime key is pressed
         var inputValue = $(this).val(); // store the value from the input
         if (e.which == 13) { //enter-code number

             localStorage.name = inputValue;
             window.location.href = "universe.html";
             
         }
     })
 };
