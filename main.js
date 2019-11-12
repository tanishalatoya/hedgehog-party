// Target the section where the div (each invite) should be added to the page once the input has been filled in

// Need to take input values and put them in the invite List

var nameInput = document.querySelector('#name-input');
var hogletsInput = document.querySelector('#hoglets-input');
var allergiesInput = document.querySelector('#allergies-input');
var inviteBtn = document.querySelector('#invite-btn');
var invitationList = document.querySelector('.main-section-invitation-list');

inviteBtn.addEventListener('click', addHedgehog);

function addHedgehog() {
  invitationList.innerHTML +=
    `<div class="invitation-list-items">
      <p id="name">${nameInput.value}</p>
      <p id="hoglets">${hogletsInput.value}</p>
      <p id="allergies">${allergiesInput.value}</p>
      <button id="uninvite-btn" type="button" name="uninvite">Uninvite</button>
    </div>`
    nameInput.value = '';
    hogletsInput.value = '';
    allergiesInput.value = '';
}
