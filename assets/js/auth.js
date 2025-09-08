// Check if user is authenticated
function checkAuth() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
        // Get the correct relative path to login.html
        const pathToRoot = window.location.pathname.includes('/js-demos/') ? '../../login.html' : 'login.html';
        window.location.href = pathToRoot;
    }
}

// Add logout functionality
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    // Get the correct relative path to login.html
    const pathToRoot = window.location.pathname.includes('/js-demos/') ? '../../login.html' : 'login.html';
    window.location.href = pathToRoot;
}

// Function to add logout button to nav
function addLogoutButton() {
    const username = localStorage.getItem('username');
    const nav = document.querySelector('.nav-container, .demo-nav .nav-container');
    
    if (nav) {
        const userDiv = document.createElement('div');
        userDiv.style.display = 'flex';
        userDiv.style.alignItems = 'center';
        userDiv.style.gap = '12px';
        
        const userSpan = document.createElement('span');
        userSpan.textContent = `Welcome, ${username}`;
        userSpan.style.color = 'var(--text)';
        
        const logoutBtn = document.createElement('button');
        logoutBtn.textContent = 'Logout';
        logoutBtn.onclick = logout;
        logoutBtn.className = 'demo-tab';
        logoutBtn.style.marginLeft = '8px';
        
        userDiv.appendChild(userSpan);
        userDiv.appendChild(logoutBtn);
        nav.appendChild(userDiv);
    }
}

// Run auth check when script loads
checkAuth();

// Add logout button when DOM is loaded
document.addEventListener('DOMContentLoaded', addLogoutButton);
