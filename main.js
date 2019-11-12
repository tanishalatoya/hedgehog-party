// Target the section where the div (each invite) should be added to the page once the input has been filled in

// Need to take input values and put them in the invite List

var name = document.querySelector('#name');
var hoglets = document.querySelector('#hoglets');
var allergies = document.querySelector('#allergies');
var inviteBtn = document.querySelector('#invite-btn');
var invitationList = document.querySelector('.invitation-list-items');

inviteBtn.addEventListener('click', addHedgehog);

function addHedgehog() {
  console.log('It works');
}
