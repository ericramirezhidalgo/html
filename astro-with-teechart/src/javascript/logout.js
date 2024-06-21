
const logoutButton = document.querySelector("img[alt='Logout']").parentElement;

logoutButton.addEventListener('click', () => {

  localStorage.removeItem('user');

  window.location.href = 'login#';
});
