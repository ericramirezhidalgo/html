const confirmButton = document.querySelector('button.confirm-btn');
const cancelButton = document.querySelector("button.cancel-btn");

cancelButton.addEventListener('click', () => {
  window.location.href = 'login#'
})

confirmButton.addEventListener('click', async () => {
    const userName = document.getElementById("inputUsername").value;
    const password = document.getElementById("inputPassword").value;
    const email = document.getElementById("inputEmail").value;
    const dateOfBirthInput = document.getElementById("inputDateOfBirth").value;
    const dateOfBirth = new Date(dateOfBirthInput);
    console.log(dateOfBirth)
    const dateOfBirthString = dateOfBirth.toISOString().slice(0,10);
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
        console.error('userObj is not valid JSON', error);
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
