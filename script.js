let isDarkMode = false;

function switchMode() {
    isDarkMode = !isDarkMode;

    // Toggle the 'dark-mode' class on the body
    document.body.classList.toggle('dark-mode');

    // Handle the Toggle Icon (Sun vs Moon)
    const switchBtn = document.getElementById('switchMode');

    if (isDarkMode) {
        // Dark Mode: Show "Sun" icon (to switch back to light)
        switchBtn.innerHTML = `<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 13C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11C16.4477 11 16 11.4477 16 12C16 12.5523 16.4477 13 17 13Z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17Z" stroke="currentColor" stroke-width="1.5"></path></svg>`;
    } else {
        // Light Mode: Show "Moon/Eclipse" icon
        switchBtn.innerHTML = `<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13C7.55228 13 8 12.5523 8 12C8 11.4477 7.55228 11 7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13Z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17Z" stroke="currentColor" stroke-width="1.5"></path></svg>`;
    }
}