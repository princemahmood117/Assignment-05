function hide(){
    hideModalByID('modal');
}
function success(){
    ShowModalByID('modal');
}


function hideModalByID(elementID){
    const element = document.getElementById(elementID);
    element.classList.add('hidden');
}

function ShowModalByID(elementID){
    const element = document.getElementById(elementID);
    element.classList.remove('hidden');
}



function scrollDowntoBus() {
    
    let busSection = document.getElementById('busSection');

    // Scroll to the element using smooth scrolling behavior
    busSection.scrollIntoView({ behavior: 'smooth' });
}


function changeColor0() {
    let ticketAmount = document.getElementById('ticket_amount');

    let ticketText = parseInt(ticketAmount.innerText);
    let ticketNumber = ticketText + 1;

    ticketAmount.innerText = ticketNumber;





    let amount = document.getElementById('amount');

    let money = parseInt(amount.innerText);
    
    money = money + 550;

    amount.innerText = money;

           
    let bdt = document.getElementById('bdt_total');
    let calculated_money = money;
    bdt.innerText = calculated_money;




    let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;


    let button = document.getElementById('A1');
    
        button.style.backgroundColor = 'green';
}


function changeColor11() {
    let ticketAmount = document.getElementById('ticket_amount');

    let ticketText = parseInt(ticketAmount.innerText);
    let ticketNumber = ticketText + 1;

    ticketAmount.innerText = ticketNumber;





    let amount = document.getElementById('amount');

    let money = parseInt(amount.innerText);
    
    money = money + 550;

    amount.innerText = money;

           
    let bdt = document.getElementById('bdt_total');
    let calculated_money = money;
    bdt.innerText = calculated_money;

    let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('A2');

        button.style.backgroundColor = 'green';
}
function changeColor22() {
    let ticketAmount = document.getElementById('ticket_amount');

    let ticketText = parseInt(ticketAmount.innerText);
    let ticketNumber = ticketText + 1;

    ticketAmount.innerText = ticketNumber;





    let amount = document.getElementById('amount');

    let money = parseInt(amount.innerText);
    
    money = money + 550;

    amount.innerText = money;

           
    let bdt = document.getElementById('bdt_total');
    let calculated_money = money;
    bdt.innerText = calculated_money;

    let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('A3');

        button.style.backgroundColor = 'green';
}
function changeColor33() {
    let ticketAmount = document.getElementById('ticket_amount');

    let ticketText = parseInt(ticketAmount.innerText);
    let ticketNumber = ticketText + 1;

    ticketAmount.innerText = ticketNumber;





    let amount = document.getElementById('amount');

    let money = parseInt(amount.innerText);
    
    money = money + 550;

    amount.innerText = money;

           
    let bdt = document.getElementById('bdt_total');
    let calculated_money = money;
    bdt.innerText = calculated_money;

    let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('A4');

        button.style.backgroundColor = 'green';
}

function changeColor44() {
    let ticketAmount = document.getElementById('ticket_amount');

    let ticketText = parseInt(ticketAmount.innerText);
    let ticketNumber = ticketText + 1;

    ticketAmount.innerText = ticketNumber;





    let amount = document.getElementById('amount');

    let money = parseInt(amount.innerText);
    
    money = money + 550;

    amount.innerText = money;

           
    let bdt = document.getElementById('bdt_total');
    let calculated_money = money;
    bdt.innerText = calculated_money;

    let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('B1');

        button.style.backgroundColor = 'green';
}

function changeColor55() {
    let ticketAmount = document.getElementById('ticket_amount');

    let ticketText = parseInt(ticketAmount.innerText);
    let ticketNumber = ticketText + 1;

    ticketAmount.innerText = ticketNumber;





    let amount = document.getElementById('amount');

    let money = parseInt(amount.innerText);
    
    money = money + 550;

    amount.innerText = money;


           
    let bdt = document.getElementById('bdt_total');
    let calculated_money = money;
    bdt.innerText = calculated_money;

    let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('B2');

        button.style.backgroundColor = 'green';
}
function changeColor66() {

    let ticketAmount = document.getElementById('ticket_amount');

    let ticketText = parseInt(ticketAmount.innerText);
    let ticketNumber = ticketText + 1;

    ticketAmount.innerText = ticketNumber;





    let amount = document.getElementById('amount');

    let money = parseInt(amount.innerText);
    
    money = money + 550;

    amount.innerText = money;

           
    let bdt = document.getElementById('bdt_total');
    let calculated_money = money;
    bdt.innerText = calculated_money;


    let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('B3');

        button.style.backgroundColor = 'green';
}
function changeColor77() {
    let ticketAmount = document.getElementById('ticket_amount');

    let ticketText = parseInt(ticketAmount.innerText);
    let ticketNumber = ticketText + 1;

    ticketAmount.innerText = ticketNumber;





    let amount = document.getElementById('amount');

    let money = parseInt(amount.innerText);
    
    money = money + 550;

    amount.innerText = money;


           
    let bdt = document.getElementById('bdt_total');
    let calculated_money = money;
    bdt.innerText = calculated_money;


    let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('B4');

        button.style.backgroundColor = 'green';
}


function changeColor88() {
    let ticketAmount = document.getElementById('ticket_amount');

    let ticketText = parseInt(ticketAmount.innerText);
    let ticketNumber = ticketText + 1;

    ticketAmount.innerText = ticketNumber;





    let amount = document.getElementById('amount');

    let money = parseInt(amount.innerText);
    
    money = money + 550;

    amount.innerText = money;

           
    let bdt = document.getElementById('bdt_total');
    let calculated_money = money;
    bdt.innerText = calculated_money;


    let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('C1');

        button.style.backgroundColor = 'green';
}
function changeColor1() {
    let ticketAmount = document.getElementById('ticket_amount');

    let ticketText = parseInt(ticketAmount.innerText);
    let ticketNumber = ticketText + 1;

    ticketAmount.innerText = ticketNumber;





    let amount = document.getElementById('amount');

    let money = parseInt(amount.innerText);
    
    money = money + 550;

    amount.innerText = money;

           
    let bdt = document.getElementById('bdt_total');
    let calculated_money = money;
    bdt.innerText = calculated_money;

    let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('C2');

        button.style.backgroundColor = 'green';
}
function changeColor2() {
    let ticketAmount = document.getElementById('ticket_amount');

    let ticketText = parseInt(ticketAmount.innerText);
    let ticketNumber = ticketText + 1;

    ticketAmount.innerText = ticketNumber;





    let amount = document.getElementById('amount');

    let money = parseInt(amount.innerText);
    
    money = money + 550;

    amount.innerText = money;

           
    let bdt = document.getElementById('bdt_total');
    let calculated_money = money;
    bdt.innerText = calculated_money;

    let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('C3');

        button.style.backgroundColor = 'green';
}
function changeColor3() {let ticketAmount = document.getElementById('ticket_amount');

let ticketText = parseInt(ticketAmount.innerText);
let ticketNumber = ticketText + 1;

ticketAmount.innerText = ticketNumber;





let amount = document.getElementById('amount');

let money = parseInt(amount.innerText);

money = money + 550;

amount.innerText = money;

       
let bdt = document.getElementById('bdt_total');
let calculated_money = money;
bdt.innerText = calculated_money;

let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('C4');

        button.style.backgroundColor = 'green';
}
function changeColor4() {let ticketAmount = document.getElementById('ticket_amount');

let ticketText = parseInt(ticketAmount.innerText);
let ticketNumber = ticketText + 1;

ticketAmount.innerText = ticketNumber;





let amount = document.getElementById('amount');

let money = parseInt(amount.innerText);

money = money + 550;

amount.innerText = money;

       
let bdt = document.getElementById('bdt_total');
let calculated_money = money;
bdt.innerText = calculated_money;

let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('D1');

        button.style.backgroundColor = 'green';
}
function changeColor5() {let ticketAmount = document.getElementById('ticket_amount');

let ticketText = parseInt(ticketAmount.innerText);
let ticketNumber = ticketText + 1;

ticketAmount.innerText = ticketNumber;





let amount = document.getElementById('amount');

let money = parseInt(amount.innerText);

money = money + 550;

amount.innerText = money;

       
let bdt = document.getElementById('bdt_total');
let calculated_money = money;
bdt.innerText = calculated_money;

let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('D2');

        button.style.backgroundColor = 'green';
}
function changeColor6() {let ticketAmount = document.getElementById('ticket_amount');

let ticketText = parseInt(ticketAmount.innerText);
let ticketNumber = ticketText + 1;

ticketAmount.innerText = ticketNumber;





let amount = document.getElementById('amount');

let money = parseInt(amount.innerText);

money = money + 550;

amount.innerText = money;

       
let bdt = document.getElementById('bdt_total');
let calculated_money = money;
bdt.innerText = calculated_money;

let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('D3');

        button.style.backgroundColor = 'green';
}
function changeColor7() {let ticketAmount = document.getElementById('ticket_amount');

let ticketText = parseInt(ticketAmount.innerText);
let ticketNumber = ticketText + 1;

ticketAmount.innerText = ticketNumber;





let amount = document.getElementById('amount');

let money = parseInt(amount.innerText);

money = money + 550;

amount.innerText = money;

       
let bdt = document.getElementById('bdt_total');
let calculated_money = money;
bdt.innerText = calculated_money;

let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('D4');

        button.style.backgroundColor = 'green';
}
function changeColor8() {let ticketAmount = document.getElementById('ticket_amount');

let ticketText = parseInt(ticketAmount.innerText);
let ticketNumber = ticketText + 1;

ticketAmount.innerText = ticketNumber;





let amount = document.getElementById('amount');

let money = parseInt(amount.innerText);

money = money + 550;

amount.innerText = money;

       
let bdt = document.getElementById('bdt_total');
let calculated_money = money;
bdt.innerText = calculated_money;

let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('E1');

        button.style.backgroundColor = 'green';
}
function changeColor9() {let ticketAmount = document.getElementById('ticket_amount');

let ticketText = parseInt(ticketAmount.innerText);
let ticketNumber = ticketText + 1;

ticketAmount.innerText = ticketNumber;





let amount = document.getElementById('amount');

let money = parseInt(amount.innerText);

money = money + 550;

amount.innerText = money;

       
let bdt = document.getElementById('bdt_total');
let calculated_money = money;
bdt.innerText = calculated_money;

let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('E2');

        button.style.backgroundColor = 'green';
}
function changeColorA() {let ticketAmount = document.getElementById('ticket_amount');

let ticketText = parseInt(ticketAmount.innerText);
let ticketNumber = ticketText + 1;

ticketAmount.innerText = ticketNumber;





let amount = document.getElementById('amount');

let money = parseInt(amount.innerText);

money = money + 550;

amount.innerText = money;

       
let bdt = document.getElementById('bdt_total');
let calculated_money = money;
bdt.innerText = calculated_money;

let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('E3');

        button.style.backgroundColor = 'green';
}
function changeColorB() {let ticketAmount = document.getElementById('ticket_amount');

let ticketText = parseInt(ticketAmount.innerText);
let ticketNumber = ticketText + 1;

ticketAmount.innerText = ticketNumber;





let amount = document.getElementById('amount');

let money = parseInt(amount.innerText);

money = money + 550;

amount.innerText = money;

       
let bdt = document.getElementById('bdt_total');
let calculated_money = money;
bdt.innerText = calculated_money;

let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('E4');

        button.style.backgroundColor = 'green';
}
function changeColorC() {let ticketAmount = document.getElementById('ticket_amount');

let ticketText = parseInt(ticketAmount.innerText);
let ticketNumber = ticketText + 1;

ticketAmount.innerText = ticketNumber;





let amount = document.getElementById('amount');

let money = parseInt(amount.innerText);

money = money + 550;

amount.innerText = money;

       
let bdt = document.getElementById('bdt_total');
let calculated_money = money;
bdt.innerText = calculated_money;

let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('F1');

        button.style.backgroundColor = 'green';
}
function changeColorD() {let ticketAmount = document.getElementById('ticket_amount');

let ticketText = parseInt(ticketAmount.innerText);
let ticketNumber = ticketText + 1;

ticketAmount.innerText = ticketNumber;





let amount = document.getElementById('amount');

let money = parseInt(amount.innerText);

money = money + 550;

amount.innerText = money;

       
let bdt = document.getElementById('bdt_total');
let calculated_money = money;
bdt.innerText = calculated_money;

let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('F2');

        button.style.backgroundColor = 'green';
}
function changeColorE() {let ticketAmount = document.getElementById('ticket_amount');

let ticketText = parseInt(ticketAmount.innerText);
let ticketNumber = ticketText + 1;

ticketAmount.innerText = ticketNumber;





let amount = document.getElementById('amount');

let money = parseInt(amount.innerText);

money = money + 550;

amount.innerText = money;

       
let bdt = document.getElementById('bdt_total');
let calculated_money = money;
bdt.innerText = calculated_money;

let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('F3');

        button.style.backgroundColor = 'green';
}
function changeColorF() {let ticketAmount = document.getElementById('ticket_amount');

let ticketText = parseInt(ticketAmount.innerText);
let ticketNumber = ticketText + 1;

ticketAmount.innerText = ticketNumber;





let amount = document.getElementById('amount');

let money = parseInt(amount.innerText);

money = money + 550;

amount.innerText = money;

       
let bdt = document.getElementById('bdt_total');
let calculated_money = money;
bdt.innerText = calculated_money;

let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('F4');

        button.style.backgroundColor = 'green';
}
function changeColorG() {let ticketAmount = document.getElementById('ticket_amount');

let ticketText = parseInt(ticketAmount.innerText);
let ticketNumber = ticketText + 1;

ticketAmount.innerText = ticketNumber;





let amount = document.getElementById('amount');

let money = parseInt(amount.innerText);

money = money + 550;

amount.innerText = money;

       
let bdt = document.getElementById('bdt_total');
let calculated_money = money;
bdt.innerText = calculated_money;

let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('G1');

        button.style.backgroundColor = 'green';
}
function changeColorH() {let ticketAmount = document.getElementById('ticket_amount');

let ticketText = parseInt(ticketAmount.innerText);
let ticketNumber = ticketText + 1;

ticketAmount.innerText = ticketNumber;





let amount = document.getElementById('amount');

let money = parseInt(amount.innerText);

money = money + 550;

amount.innerText = money;

       
let bdt = document.getElementById('bdt_total');
let calculated_money = money;
bdt.innerText = calculated_money;

let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('G2');

        button.style.backgroundColor = 'green';
}
function changeColorI() {let ticketAmount = document.getElementById('ticket_amount');

let ticketText = parseInt(ticketAmount.innerText);
let ticketNumber = ticketText + 1;

ticketAmount.innerText = ticketNumber;



let amount = document.getElementById('amount');

let money = parseInt(amount.innerText);

money = money + 550;

amount.innerText = money;

       
let bdt = document.getElementById('bdt_total');
let calculated_money = money;
bdt.innerText = calculated_money;

let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('G3');

        button.style.backgroundColor = 'green';
}
function changeColorJ() {let ticketAmount = document.getElementById('ticket_amount');

let ticketText = parseInt(ticketAmount.innerText);
let ticketNumber = ticketText + 1;

ticketAmount.innerText = ticketNumber;





let amount = document.getElementById('amount');

let money = parseInt(amount.innerText);

money = money + 550;

amount.innerText = money;

       
let bdt = document.getElementById('bdt_total');
let calculated_money = money;
bdt.innerText = calculated_money;

let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('G4');

        button.style.backgroundColor = 'green';
}
function changeColorK() {let ticketAmount = document.getElementById('ticket_amount');

let ticketText = parseInt(ticketAmount.innerText);
let ticketNumber = ticketText + 1;

ticketAmount.innerText = ticketNumber;





let amount = document.getElementById('amount');

let money = parseInt(amount.innerText);

money = money + 550;

amount.innerText = money;

       
let bdt = document.getElementById('bdt_total');
let calculated_money = money;
bdt.innerText = calculated_money;

let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('H1');

        button.style.backgroundColor = 'green';
}
function changeColorL() {let ticketAmount = document.getElementById('ticket_amount');

let ticketText = parseInt(ticketAmount.innerText);
let ticketNumber = ticketText + 1;

ticketAmount.innerText = ticketNumber;





let amount = document.getElementById('amount');

let money = parseInt(amount.innerText);

money = money + 550;

amount.innerText = money;

       
let bdt = document.getElementById('bdt_total');
let calculated_money = money;
bdt.innerText = calculated_money;

let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('H2');

        button.style.backgroundColor = 'green';
}
function changeColorM() {let ticketAmount = document.getElementById('ticket_amount');

let ticketText = parseInt(ticketAmount.innerText);
let ticketNumber = ticketText + 1;

ticketAmount.innerText = ticketNumber;





let amount = document.getElementById('amount');

let money = parseInt(amount.innerText);

money = money + 550;

amount.innerText = money;

       
let bdt = document.getElementById('bdt_total');
let calculated_money = money;
bdt.innerText = calculated_money;

let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('H3');

        button.style.backgroundColor = 'green';
}
function changeColorN() {let ticketAmount = document.getElementById('ticket_amount');

let ticketText = parseInt(ticketAmount.innerText);
let ticketNumber = ticketText + 1;

ticketAmount.innerText = ticketNumber;





let amount = document.getElementById('amount');

let money = parseInt(amount.innerText);

money = money + 550;

amount.innerText = money;

       
let bdt = document.getElementById('bdt_total');
let calculated_money = money;
bdt.innerText = calculated_money;

let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('H4');

        button.style.backgroundColor = 'green';
}
function changeColorO() {let ticketAmount = document.getElementById('ticket_amount');

let ticketText = parseInt(ticketAmount.innerText);
let ticketNumber = ticketText + 1;

ticketAmount.innerText = ticketNumber;





let amount = document.getElementById('amount');

let money = parseInt(amount.innerText);

money = money + 550;

amount.innerText = money;

       
let bdt = document.getElementById('bdt_total');
let calculated_money = money;
bdt.innerText = calculated_money;

let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('I1');

        button.style.backgroundColor = 'green';
}
function changeColorP() {let ticketAmount = document.getElementById('ticket_amount');

let ticketText = parseInt(ticketAmount.innerText);
let ticketNumber = ticketText + 1;

ticketAmount.innerText = ticketNumber;





let amount = document.getElementById('amount');

let money = parseInt(amount.innerText);

money = money + 550;

amount.innerText = money;

       
let bdt = document.getElementById('bdt_total');
let calculated_money = money;
bdt.innerText = calculated_money;

let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('I2');

        button.style.backgroundColor = 'green';
}
function changeColorQ() {let ticketAmount = document.getElementById('ticket_amount');

let ticketText = parseInt(ticketAmount.innerText);
let ticketNumber = ticketText + 1;

ticketAmount.innerText = ticketNumber;





let amount = document.getElementById('amount');

let money = parseInt(amount.innerText);

money = money + 550;

amount.innerText = money;

       
let bdt = document.getElementById('bdt_total');
let calculated_money = money;
bdt.innerText = calculated_money;

let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('I3');

        button.style.backgroundColor = 'green';
}
function changeColorR() {
    let ticketAmount = document.getElementById('ticket_amount');

let ticketText = parseInt(ticketAmount.innerText);
let ticketNumber = ticketText + 1;

ticketAmount.innerText = ticketNumber;





let amount = document.getElementById('amount');

let money = parseInt(amount.innerText);

money = money + 550;

amount.innerText = money;

       
let bdt = document.getElementById('bdt_total');
let calculated_money = money;
bdt.innerText = calculated_money;

let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('I4');

        button.style.backgroundColor = 'green';
}

function changeColorS() {
    let ticketAmount = document.getElementById('ticket_amount');

let ticketText = parseInt(ticketAmount.innerText);
let ticketNumber = ticketText + 1;

ticketAmount.innerText = ticketNumber;





let amount = document.getElementById('amount');

let money = parseInt(amount.innerText);

money = money + 550;

amount.innerText = money;

       
let bdt = document.getElementById('bdt_total');
let calculated_money = money;
bdt.innerText = calculated_money;

let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;



    let button = document.getElementById('J1');

        button.style.backgroundColor = 'green';
}
function changeColorT() {
    let ticketAmount = document.getElementById('ticket_amount');

    let ticketText = parseInt(ticketAmount.innerText);
    let ticketNumber = ticketText + 1;

    ticketAmount.innerText = ticketNumber;




    let amount = document.getElementById('amount');

    let money = parseInt(amount.innerText);
    
    money = money + 550;

    amount.innerText = money;

           
    let bdt = document.getElementById('bdt_total');
    let calculated_money = money;
    bdt.innerText = calculated_money;

    let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;

    let button = document.getElementById('J2');

        button.style.backgroundColor = 'green';
}

function changeColorU() 
{ let ticketAmount = document.getElementById('ticket_amount');

let ticketText = parseInt(ticketAmount.innerText);
let ticketNumber = ticketText + 1;

ticketAmount.innerText = ticketNumber;



let amount = document.getElementById('amount');

let money = parseInt(amount.innerText);

money = money + 550;

amount.innerText = money;


let bdt = document.getElementById('bdt_total');
let calculated_money = money;
bdt.innerText = calculated_money;

let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;


    let button = document.getElementById('J3');

        button.style.backgroundColor = 'green';
}


function changeColorV() 

    {
        let ticketAmount = document.getElementById('ticket_amount');
    
        let ticketText = parseInt(ticketAmount.innerText);
        let ticketNumber = ticketText + 1;
    
        ticketAmount.innerText = ticketNumber;
    
    
    
    
    
        let amount = document.getElementById('amount');
    
        let money = parseInt(amount.innerText);
        
        money = money + 550;
    
        amount.innerText = money;

       
        let bdt = document.getElementById('bdt_total');
        let calculated_money = money;
        bdt.innerText = calculated_money;


        let remaining_seat = document.getElementById('seat_left');
    let converted_seat = parseInt(remaining_seat.innerText); // integer 40 got
    let rem_seat  = converted_seat - 1;
    remaining_seat.innerText = rem_seat;
        


        let button = document.getElementById('J4');
    
            button.style.backgroundColor = 'green';


         
       

       
       bdt.innerText = calculated_money;   



           
}






