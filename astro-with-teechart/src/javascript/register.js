const confirmButton = document.querySelector('button.confirm-btn');

confirmButton.addEventListener('click', () => {
    const userName = document.getElementById("inputUsername").value;
    const password = document.getElementById("inputPassword").value;
    const email = document.getElementById("inputEmail").value;
    const dateOfBirth = document.getElementById("inputDateOfBirth").value;
    const planType = document.getElementById("inputPlanType").value;
    const gender = document.getElementById("inputGender").value;

    const userObj = {
        userName: userName,
        password: password,
        email: email,
        dateOfBirth: dateOfBirth,
        planType: planType,
        gender: gender
    };

    const storedUsers = JSON.parse(localStorage.getItem('Users')) || [];

    storedUsers.push(userObj);

    localStorage.setItem('Users', JSON.stringify(storedUsers));

    document.getElementById("inputUsername").value = "";
    document.getElementById("inputPassword").value = "";
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputDateOfBirth").value = "";
    document.getElementById("inputPlanType").value = "";
    document.getElementById("inputGender").value = "";
});
