var figureDesc;
var characterFound = 0; //character found var
//searchBar function
function searchBar() {
    input = document.getElementById("searchbarCharacter");
    var value = $(input).val().toUpperCase(); // store input inside a variable



    figureDesc = $(".characterContainer figcaption"); // get every figcaption on site

    for (x = 0; x < figureDesc.length; x++) { // go through figCaption array


        if (figureDesc[x].innerHTML.toUpperCase().indexOf(value) > -1) { // if he finds a letter in a word 
            $(figureDesc[x]).parent().show();
            characterFound++;


            $("#infoCharacters").text("Characters found " + characterFound); // display characters found
        } else {
            $(figureDesc[x]).parent().hide(); // hide parent element which is img  

        }

    }
    if (characterFound == 0) { // if cant find character 
        console.log(value);
        $("#infoCharacters").text("Can't find any characters");
    }
    if (value == "") { // if value is null 
        $("#infoCharacters").text("Heroes are the characters in Descent: Journeys in the Dark");
    }
    characterFound = 0; // resseting value
}

//when using search bar above
function searchBar1() {
    input = document.getElementById("searchbar");
    var value = $(input).val().toUpperCase(); // store input inside a variable



    figureDesc = $(".characterContainer figcaption"); // get every figcaption on site

    for (x = 0; x < figureDesc.length; x++) { // go through figCaption array


        if (figureDesc[x].innerHTML.toUpperCase().indexOf(value) > -1) { // if he finds a letter in a word 
            $(figureDesc[x]).parent().show();
            characterFound++;


            $("#infoCharacters").text("Characters found " + characterFound); // display characters found
        } else {
            $(figureDesc[x]).parent().hide(); // hide parent element which is img  

        }

    }
    if (characterFound == 0) { // if cant find character 
        console.log(value);
        $("#infoCharacters").text("Can't find any characters");
    }
    if (value == "") { // if value is null 
        $("#infoCharacters").text("Heroes are the characters in Descent: Journeys in the Dark");
    }
    characterFound = 0; // resseting value
}
//when  redirected to this site
function searchBar3() {

    input = localStorage.name; // take value from localStore
    var value = input.toUpperCase(); // store input inside a variable



    figureDesc = $(".characterContainer figcaption"); // get every figcaption on site

    for (x = 0; x < figureDesc.length; x++) { // go through figCaption array


        if (figureDesc[x].innerHTML.toUpperCase().indexOf(value) > -1) { // if he finds a letter in a word 
            $(figureDesc[x]).parent().show();
            characterFound++;


            $("#infoCharacters").text("Characters found " + characterFound); // display characters found
        } else {
            $(figureDesc[x]).parent().hide(); // hide parent element which is img  

        }

    }
    if (characterFound == 0) { // if cant find character 
        console.log(value);
        $("#infoCharacters").text("Can't find any characters");
    }
    if (value == "") { // if value is null 
        $("#infoCharacters").text("Heroes are the characters in Descent: Journeys in the Dark");
    }
    characterFound = 0; // resseting value
}
