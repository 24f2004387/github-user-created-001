const seed = 'abc123';
const githubStatus = document.getElementById('github-status');
const accountAge = document.getElementById('github-account-age');
const form = document.getElementById('lookup-form');
const usernameInput = document.getElementById('github-username');

// Load last lookup from localStorage
const lastLookup = localStorage.getItem(`github-user-${seed}`);
if (lastLookup) {
    usernameInput.value = lastLookup;
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = usernameInput.value;
    githubStatus.textContent = 'Looking up...';
    
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) throw new Error('User not found');
        const data = await response.json();
        
        const createdAt = new Date(data.created_at);
        const age = new Date().getFullYear() - createdAt.getFullYear();
        accountAge.textContent = `Account age: ${age} years`;
        
        // Update status and cache lookup
        githubStatus.textContent = 'Lookup successful';
        localStorage.setItem(`github-user-${seed}`, username);
    } catch (error) {
        githubStatus.textContent = 'Lookup failed: ' + error.message;
    }
    
    // Highlight code blocks if any
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block);
    });
});