    const buttons = document.querySelectorAll('button.login-btn');

    buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert('Login success');
    });
    });


    /* const storedUsers = JSON.parse(localStorage.getItem('Users')) || [];
    const inputEmail = document.getElementById('inputEmail').value;
    const inputPassword = document.getElementById('inputPassword').value;

    const user = storedUsers.find(u => u.email === inputEmail && u.password === inputPassword);

    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = 'home.html';

    } else {
        document.getElementById('error').textContent = 'Incorrect email or password';
    }*/
