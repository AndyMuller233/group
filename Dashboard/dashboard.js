  // Logout Button Click
  document.getElementById('logout').onclick = () => {
    if (confirm('Are you sure you want to logout?')) {
        document.getElementById('dashboard').style.display = 'none';
        document.getElementById('login-container').classList.add('active');
    }
};

// Show Home Content when clicking 'Home'
document.getElementById('home').onclick = () => {
    document.getElementById('home-content').classList.remove('hidden');
};

// Initialize the login form to be active on page load
document.getElementById('login-container').classList.add('active');