document.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem('cookieConsent')) {
    document.querySelector('.cookie-container').style.display = 'none';
  }
});

document.getElementById('accept_cookie').addEventListener('click', function () {
  localStorage.setItem('cookieConsent', 'true');
  document.querySelector('.cookie-container').style.display = 'none';
})

document.getElementById('decline_cookie').addEventListener('click', function () {
  localStorage.setItem('cookieConsent', 'false');
  document.querySelector('.cookie-container').style.display = 'none';
})
