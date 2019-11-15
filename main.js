var invitationList = document.querySelector('.main-section-invitation-list');
var inviteBtn = document.querySelector('#invite-btn');


inviteBtn.addEventListener('click', inviteHedgehog);
invitationList.addEventListener('click', uninviteHedgehog);

function inviteHedgehog() {
  var allergiesInput = document.querySelector('#allergies-input');
  var hogletsInput = document.querySelector('#hoglets-input');
  var nameInput = document.querySelector('#name-input');

  if ((nameInput.value === 'Name of Hedgehog') || (!nameInput.value) || (hogletsInput.value === 'Number of Hoglets') || (!hogletsInput.value) || (allergiesInput.value === 'Allergies') || (!allergiesInput.value)) {
    alert('Please fill in all fields to continue.');
  } else {
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
}

function uninviteHedgehog(event) {
  if(event.target.parentElement.parentElement.children[2].childNodes[7].id === 'uninvite-btn') {
    event.target.parentElement.remove()
  }
}
