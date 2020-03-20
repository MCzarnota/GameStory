//Get text atributes globally

var divContent = $("#firstSentence").text();
var divContent2 = $("#secondSentence").text();
var divContent3 = $("#thirdSentence").text();
var divContent4 = $("#fourthSentence").text();
 var gamerName; // name of the User
console.log(divContent); //print it out 
var length = divContent.length;
var timeOut;
var character = 0;
var counter = 0; // counter  scrolling if its on 

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





    //find item game starts when it scrolls more than needed

    $(window).scroll(function() {
        var scrollValue = window.pageYOffset; //get Value from Window height
        var limit = 700;
        var showScrollBarLimit = 600;

        if (scrollValue > showScrollBarLimit) {
            showScrollBar();
        } else {
            $("#scrollNavBar").slideUp();
        }

        if (scrollValue > limit) {


            if (counter == 0) // call once when scrolling 
            {
                conversationGame();
                counter++
            }
        }

    });

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
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });




    function showScrollBar() {
        $("#scrollNavBar").fadeIn();
        $("#scrollNavBar").css("display", "flex");
    }


    function printLetterByLetter(destination, message, speed, callback) {
        var i = 0;
        document.getElementById(destination).innerHTML = ""; //clearing the content on page
        var interval = setInterval(function() {
            document.getElementById(destination).style.display = "block"; //showing it on page
            document.getElementById(destination).innerHTML += message.charAt(i); //adding elements one by one
            i++;
            if (i > message.length) {
                clearInterval(interval);
                callback(); // using callback function so the function will be executed AFTER  is completed
            }
        }, speed);
    }

    function conversationGame() {
        // FIRST SENTENCE
        printLetterByLetter("firstSentence", divContent, 80, function() { //got code from http://stackoverflow.com/questions/7264974/show-text-letter-by-letter except callback function     
            $("#firstAnswer").show(); //show input after completed
        });

        // SHOW INPUT
        $("input").keyup(function(e) { // everytime key is pressed
             gamerName = $(this).val(); // store the value from the input
            if (e.which == 13) { //enter-code number
                document.getElementById("firstSentence").innerHTML = ""; //clear content after typing value to input
                document.getElementById("firstAnswer").innerHTML = ""; // clear content after typing value to input

                //SECOND SENTENCE
                printLetterByLetter("secondSentence", divContent2 + gamerName + "?", 70, function() {
                    
                    $("#secondAnswer").show().appendTo(gamerName); // showing second answer to choose;
                    $(".firstSentenceList").click(function() {
                        document.getElementById("secondAnswer").innerHTML = ""; // clear conter after clicking on list
                        document.getElementById("secondSentence").innerHTML = ""; // clear conter after clicking on list
                        // THIRD SENTENCE
                        printLetterByLetter("thirdSentence", divContent3, 70, function() {

                            $("#thirdAnswer").show();
                            $("#thirdAnswer").click(function() {

                                document.getElementById("thirdAnswer").innerHTML = ""; // clear conter after clicking on list
                                document.getElementById("thirdSentence").innerHTML = ""; // clear conter after clicking on list
                                //FOURTH SENTENCE
                                printLetterByLetter("fourthSentence", divContent4, 70, function() {
                                    $("#fourthSentence").show();
                                    $(".game").slideDown();
                                });

                            });
                        });


                    });
                });
            }
        });
    }
