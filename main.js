var invitationList = document.querySelector('.main-section-invitation-list');
var inviteBtn = document.querySelector('#invite-btn');
var inviteForm = document.querySelector('.main-section-invite-form');
var allergiesInput = document.querySelector('#allergies-input');
var hogletsInput = document.querySelector('#hoglets-input');
var nameInput = document.querySelector('#name-input');


inviteForm.addEventListener('input', toggleInviteBtn);
inviteBtn.addEventListener('click', inviteHedgehog);
invitationList.addEventListener('click', uninviteHedgehog);

function toggleInviteBtn(event) {
  if (!nameInput.value && nameInput.value.length >= 3 && hogletsInput.value && !allergiesInput.value.length >= 3) {
    // inviteBtn.disabled = true;
  } else {
    // inviteBtn.disabled = false;
    inviteBtn.classList.add('active');
    }
  }


function inviteHedgehog() {
  var alert = document.querySelector('.alert');

  if ((nameInput.value === 'Name of Hedgehog') || (!nameInput.value) || (hogletsInput.value === 'Number of Hoglets') || (!hogletsInput.value) || (allergiesInput.value === 'Allergies') || (!allergiesInput.value)) {
    alert.classList.remove('display-hidden');
  } else {
    alert.classList.add('display-hidden');
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

      inviteBtn.classList.remove('active');
  }
}

function uninviteHedgehog(event) {
  if(event.target.parentElement.parentElement.children[2].childNodes[7].id === 'uninvite-btn') {
    event.target.parentElement.remove()
  }
}
