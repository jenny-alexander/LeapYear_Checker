//js handshake
console.log(`js`);

//JQuery handshake
$( document ).ready( onReady );

/* Instructions
Write a program that takes in a year (as an integer) and returns true if the 
year is a leap year. Years that are divisible by 4 are leap years, but years 
that are divisible by 100 are not leap years, but years that are divisible 
by 400 are leap years.
*/
/* Test data
1999 -> false (normal year)
2004 -> true (divisible by 4)
2100 -> false (divisible by 100)
2000 -> true (divisible by 400)
*/

function onReady() {
    console.log(`JQ`);

    $( "#checkYearBtn").on( 'click', checkYear );
}

function checkYear() {
    let elYear = $( '#year' ).val();
    console.log(elYear);

//Checking if year is a century and then check for div by 400
    if ( elYear % 100 === 0 && elYear % 400 != 0 ) {
        console.log("this is not a leap year");
        return false;    
    } else {
        if ( elYear % 4 === 0 ) {
            console.log("this is a leap year");
            return true;
        } else {
            console.log("this is not a leap year");
            return false;
        }
    }
}
// //1st check if the year is a century year
// if ( elYear % 100 === 0 ) {
//     if ( elYear % 400 === 0 ) {
//         console.log("this is a leap year");
//         return true;
//     } else {
//         console.log("this is not a leap year");
//         return false;
//     }
// //not a century year so do the 'regular' check if divisible by 4
// } else {
//     if ( elYear % 4 === 0 ) {
//         console.log("this is a leap year");
//         return true;
//     } else {
//         console.log("this is not a leap year");
//         return false;
//     }
// }
