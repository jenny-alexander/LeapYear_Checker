/* Instructions:
Write a program that takes in a year (as an integer) and returns true if the year is a leap year. 
Century years (divisile by 100) are usually leap years except if they are also divisibile by 400. 
Then they are not a leap year.
If not a century year, then if year is divisible by 4, year is a leap year.
*/
/* Test data
1999 -> false (normal year)
2004 -> true (divisible by 4)
2100 -> false (divisible by 100)
2000 -> true (divisible by 400)
*/

//JQuery handshake
$( document ).ready( onReady );

function onReady() {
 
    $( "#checkYearBtn").on( 'click', checkYear );
}

function checkYear( ) {
    let elYear = $( '#year' ).val();
    let returnText;

//Checking if year is a century and then check for div by 400
    if ( elYear % 100 === 0 && elYear % 400 != 0 ) {
        returnText = "This is not a leap year!"; 
    } else {
        if ( elYear % 4 === 0 ) {
            returnText = "This is a leap year!"; 
        } else {
            returnText = "This is not a leap year!"; 
        }
    }

    console.log(returnText);
    //Output the answer to the DOM
    //Get the main container
    let elMain = $( '.container' );
    //Dynamically create the p tag to hold the result
    elMain.append('<p>' + returnText + '</p>');

}

