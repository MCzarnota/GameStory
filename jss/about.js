var turnsCounter = 9;
var actualAngle1 = 0;
var actualAngle2 = 0;
var actualAngle3 = 0;
var actualAngle4 = 0;
var textAreaInput = "";
var nameAreaInput ="";
var emailAreaInput ="";

$("document").ready(function() {

    //FOR FORM INPUTS
    //focus
    $("form input").focus(function() { // set values in form  inputs when focused 
        $(this).data("placeholder", $(this).attr("placeholder")) // store actual value of input in placeholder 
        $(this).attr("placeholder", ""); // remove placeholder attr 
        

    });
    //blur
    $("form input").blur(function() { // set values when inputs are blurred
        $(this).attr("placeholder", $(this).data("placeholder")); // get value from data storage
       
        if( $("#name").is(this)){ // checking  what kind input is focused and then  store to appropriate variable 
        nameAreaInput = $("#name").val();
    } else if ($("#email").is(this))
    {
    	emailAreaInput = $("#email").val();
    } 
    })

    // FOR TEXTAREA 
    textAreaInput = $("#message").val(); // get default text area
    $("#message").focus(function() {
        // get textarea input
        if ($("#message").val() == textAreaInput) { //  clear default value when focused
            $(this).val(""); // clear it 
        }
        $("#message").blur(function() {

            if (!$("#message").val()) { // if its clear
                $("#message").val(textAreaInput); //set to default value
            }

        })
    });

});
//FORM SUBMISSION 

$("form").submit(function() {
	if(emailAreaInput == "")
	{
	
		$("#labelEmail").text("Please provide an email").css("color", "red"); // change label to inform value is not filled
		event.preventDefault();
		$("#labelEmail").focus();
		
	} else{
		
		$("#labelEmail").text("Email:*").css("color","black"); // restore label to default 
		
	}

	if(nameAreaInput == "")
	{
	
		$("#labelId").text("Please provide a name").css("color", "red"); // change name label to inform value is not filled
		$("#labelId").focus();

		event.preventDefault();
		
	} else{
		
		$("#labelId").text("Name:*").css("color", "black"); // restore label to default 
		
		
		
	}
	if($("#message").val() == "" || $("#message").val() == textAreaInput)
	{
		
		$("#labelTextArea").text("Provide a message!").css("color", "red"); // check textarea 
		$("#labelTextArea").focus();
		event.preventDefault();
	} else {
		
		$("#labelTextArea").text("Message:").css("color", "black") // restoring to default
		
	}

 if($("#message").val() == "" || $("#message").val() == textAreaInput || nameAreaInput == "" || emailAreaInput == "" )
 {
 	console.log("do nothing"); 
 } else{
 	alert("Thank you for your msg");
 }
	
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
