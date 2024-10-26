document.getElementById('logout').onclick = () => {
    if (confirm('Are you sure you want to logout?')) {
        document.getElementById('dashboard').style.display = 'none';
        document.getElementById('login-container').classList.add('active');
    }
};

document.getElementById('home').onclick = () => {
    document.getElementById('home-content').classList.remove('hidden');
};
