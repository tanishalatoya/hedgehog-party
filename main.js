var allergiesInput = document.querySelector('#allergies-input');
var hogletsInput = document.querySelector('#hoglets-input');
var invitationList = document.querySelector('.main-section-invitation-list');
var inviteBtn = document.querySelector('#invite-btn');
var inviteForm = document.querySelector('.main-section-invite-form');
var nameInput = document.querySelector('#name-input');
var allHedgehogs = [];


inviteForm.addEventListener('input', toggleInviteBtn);
inviteBtn.addEventListener('click', inviteHedgehog);
invitationList.addEventListener('click', uninviteHedgehog);


//Stringify items to put them in local storage (do I have to do this if they're not an object... do I then create an object to do that?)
// On page load, remove items from storage
// And have them populate on the page using interpolation


function toggleInviteBtn(event) {
  if (nameInput.value.length >= 3 && hogletsInput.value && allergiesInput.value.length >= 3) {
    inviteBtn.disabled = false;
    inviteBtn.classList.add('active');

  } else {
    inviteBtn.disabled = true;
    }
  };

function inviteHedgehog() {
  // For refactored version, create another if/else statement bfore this one to check only the input of the hogletsInput to ensure it is a number, and display a specific error message by changing the innerText of the alert-text // IDEA:

  var alert = document.querySelector('.alert');
  var hedgehog = new Hedgehog(nameInput.value, hogletsInput.value, allergiesInput.value);


  if ((nameInput.value === 'Name of Hedgehog') ||
  (!nameInput.value) ||
  (hogletsInput.value === 'Number of Hoglets') || (!hogletsInput.value) ||
  (isNaN(hogletsInput.value)) ||
  (allergiesInput.value === 'Allergies') ||
  (!allergiesInput.value)) {
    alert.classList.remove('display-hidden');


  } else {
    alert.classList.add('display-hidden');
    invitationList.innerHTML +=
      `<div class="invitation-list-items">
        <p id="name">${hedgehog.name}</p>
        <p id="hoglets">${hedgehog.hoglets}</p>
        <p id="allergies">${hedgehog.allergies}</p>
        <button id="uninvite-btn" type="button" name="uninvite">Uninvite</button>
      </div>`

      allHedgehogs.push(hedgehog);
      console.log(allHedgehogs);
      hedgehog.storeHedgehog();

      allergiesInput.value = 'Allergies';
      hogletsInput.value = 'Number of Hoglets';
      nameInput.value = 'Name of Hedgehog';

      inviteBtn.classList.remove('active');
  }
};

function uninviteHedgehog() {
  if(event.target.parentElement.parentElement.children[2].childNodes[7].id === 'uninvite-btn') {
    event.target.parentElement.remove();
  }
};
