var allergiesInput = document.querySelector('#allergies-input');
var hogletsInput = document.querySelector('#hoglets-input');
var invitationList = document.querySelector('.main-section-invitation-list');
var inviteBtn = document.querySelector('#invite-btn');
var nameInput = document.querySelector('#name-input');

inviteBtn.addEventListener('click', addHedgehog);

function addHedgehog() {
  invitationList.innerHTML +=
    `<div class="invitation-list-items">
      <p id="name">${nameInput.value}</p>
      <p id="hoglets">${hogletsInput.value}</p>
      <p id="allergies">${allergiesInput.value}</p>
      <button id="uninvite-btn" type="button" name="uninvite">Uninvite</button>
    </div>`
    allergiesInput.value = 'Allergies';
    hogletsInput.value = 'Number of Hoglets';
    nameInput.value = 'Name of Hedgehog';
}
