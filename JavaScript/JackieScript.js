
    var selectedMaid = '';

    function selectMaid(maidName) {
  selectedMaid = maidName;

  var maidElements = document.querySelectorAll('.maid');
  maidElements.forEach(function (element) {
    element.classList.remove('selected');
  });

  var selectedMaidElement = document.querySelector(`.maid[data-maid="${maidName}"]`);
  if (selectedMaidElement) {
    selectedMaidElement.classList.add('selected');
  }

  document.getElementById('selectedDateTime').innerText = `Selected Maid: ${maidName}`;
}

function confirmReservation() {
  var selectedDate = document.getElementById('datePicker').value;
  var selectedHour = document.getElementById('hourPicker').value;

  if (selectedMaid === '') {
    alert('Please select a maid before confirming your reservation.');
    return;
  }

  if (selectedDate === '') {
    alert('Please select a Date before confirming your reservation.');
    return;
  }

  var confirmationMessage = `Reservation confirmed!\nDate: ${selectedDate}\nTime: ${selectedHour}\nMaid: ${selectedMaid}`;

  showConfirmationAlert(confirmationMessage);
}

document.querySelector('.reservation-button').addEventListener('click', confirmReservation);

function showConfirmationAlert(message) {
  document.querySelector('.reservation-button').addEventListener('click', function() {
    if (confirm(message)) {
      window.location.href = 'Rulebook.html';
    }
  });
}

