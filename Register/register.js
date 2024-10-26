// Helper functions
function getStoredUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

function setStoredUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

// Show Sign Up Form
document.getElementById('show-signup').onclick = () => {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('signup-container').style.display = 'block';
};

// Show Login Form
document.getElementById('show-login').onclick = () => {
    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
};

// Sign Up Button Click
document.getElementById('signup-btn').onclick = () => {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    if (username && password) {
        let users = getStoredUsers();
        users.push({ username, password });
        setStoredUsers(users);

        alert('Sign up successful!');
        document.getElementById('signup-container').style.display = 'none';
        document.getElementById('login-container').style.display = 'block';
    } else {
        alert('Please fill in all fields.');
    }
};

// Login Button Click
document.getElementById('login-btn').onclick = () => {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    let users = getStoredUsers();
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful!');
        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('home-content').classList.remove('hidden');
    } else {
        alert('Invalid username or password.');
    }
};
