function getStoredUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

function setStoredUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

document.getElementById('show-signup').onclick = () => {
    document.getElementById('login-container').classList.remove('active');
    document.getElementById('signup-container').classList.add('active');
};

document.getElementById('show-login').onclick = () => {
    document.getElementById('signup-container').classList.remove('active');
    document.getElementById('login-container').classList.add('active');
};

document.getElementById('signup-btn').onclick = () => {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    let users = getStoredUsers();
    users.push({ username, password });
    setStoredUsers(users);

    alert('Sign up successful!');
    document.getElementById('signup-container').classList.remove('active');
    document.getElementById('login-container').classList.add('active');
};

document.getElementById('login-btn').onclick = () => {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    let users = getStoredUsers();
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        alert('Login successful!');
        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('login-container').classList.remove('active');
        document.getElementById('home-content').classList.remove('hidden');
    } else {
        alert('Invalid username or password.');
    }
};

document.getElementById('login-container').classList.add('active');
