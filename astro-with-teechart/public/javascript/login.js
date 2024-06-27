const buttons = document.querySelectorAll('button.login-btn');

buttons.forEach((button) => {
    button.addEventListener('click', async () => {
        const inputEmail = document.getElementById('inputEmail').value;
        const inputPassword = document.getElementById('inputPassword').value;

        const response = await fetch('/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mail: inputEmail,
                password: inputPassword
            })
        });

        if (response.ok) {
            const user = await response.json();
            sessionStorage.setItem('loggedInUser', JSON.stringify(user));
            window.location.href = 'home#';
        } else {
            document.getElementById('error').textContent = 'Incorrect mail or password';
        }
    });
});
