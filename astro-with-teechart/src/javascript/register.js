
export function registerUser() {
    const userName = document.getElementById("inputUsername").value;
    const password = document.getElementById("inputPassword").value;
    const email = document.getElementById("inputEmail").value;
    const dateOfBirth = document.getElementById("inputDateOfBirth").value;
    const gender = document.getElementById("inputGender").value;
    const planType = document.getElementById("inputPlanType").value;

    const userObj = {
        userName: userName,
        password: password,
        email: email,
        dateOfBirth: dateOfBirth,
        gender: gender,
        planType: planType
    };

    const storedUsers = JSON.parse(localStorage.getItem('Users')) || [];

    storedUsers.push(userObj);

    localStorage.setItem('Users', JSON.stringify(storedUsers));

    document.getElementById("inputUsername").value = "";
    document.getElementById("inputPassword").value = "";
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputDateOfBirth").value = "";
    document.getElementById("inputGender").value = "";
    document.getElementById("inputPlanType").value = "";
}