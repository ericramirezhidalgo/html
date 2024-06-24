const confirmButton = document.querySelector('button.confirm-btn');
const cancelButton = document.querySelector("button.cancel-btn");

cancelButton.addEventListener('click', () => {
  window.location.href = 'login#'
})

confirmButton.addEventListener('click', async () => {
  const errorElement = document.getElementById('error');
  errorElement.textContent = '';
  const userName = document.getElementById("inputUsername").value;
  const password = document.getElementById("inputPassword").value;
  const email = document.getElementById("inputEmail").value;
  const dateOfBirthInput = document.getElementById("inputDateOfBirth").value;
  const dateOfBirth = new Date(dateOfBirthInput);
  console.log(dateOfBirth)
  const dateOfBirthString = dateOfBirth.toISOString().slice(0, 10);
  const planType = document.getElementById("inputPlanType").value;
  const gender = document.getElementById("inputGender").value;

  const userObj = {
    username: userName,
    password: password,
    mail: email,
    dateOfBirth: dateOfBirthString,
    planType: planType,
    gender: gender
  };


  try {
    console.log(userObj.dateOfBirth)
    JSON.parse(JSON.stringify(userObj));
    console.log('userObj is valid JSON');
  } catch (error) {
    console.error('userObj is not valid JSON', error)
  }
  if (!userName || !password || !email || !dateOfBirthInput || !planType || !gender) {
    errorElement.textContent = 'All fields must be filled'
    return;
  }
  if (password.length < 8) {
    errorElement.textContent = 'Password too short!'
    return;
  }
  const userResponse = await fetch('/api/user/getUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username: userName, mail: email })
  });

  if (userResponse.status === 409) {
    errorElement.textContent = 'User already exists'
    return;
  }


  const response = await fetch('/api/user/insertUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObj)
  });

  if (response.ok) {
    console.log('User inserted');
  } else {
    console.error('Error inserting user');
  }

  document.getElementById("inputUsername").value = "";
  document.getElementById("inputPassword").value = "";
  document.getElementById("inputEmail").value = "";
  document.getElementById("inputDateOfBirth").value = "";
  document.getElementById("inputPlanType").value = "";
  document.getElementById("inputGender").value = "";
});
