document.querySelector('.toggle-password').addEventListener('click', function () {
  const passwordInput = document.getElementById('password');
  const currentType = passwordInput.getAttribute('type');
  passwordInput.setAttribute('type', currentType === 'password' ? 'text' : 'password');
  this.classList.toggle('fa-eye-slash');
});
document.querySelector('.toggle-confirm-password').addEventListener('click', function () {
  const passwordInput = document.getElementById('confirm-password');
  const currentType = passwordInput.getAttribute('type');
  passwordInput.setAttribute('type', currentType === 'password' ? 'text' : 'password');
  this.classList.toggle('fa-eye-slash');
});
