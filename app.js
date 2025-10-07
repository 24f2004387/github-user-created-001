document.getElementById('lookup-btn').addEventListener('click', async () => {
    const statusElement = document.getElementById('github-status');
    statusElement.textContent = 'Looking up GitHub status...';
    
    try {
        const response = await fetch('https://api.github.com');
        if (!response.ok) throw new Error('Network response was not ok');
        statusElement.textContent = 'Lookup succeeded!';
    } catch (error) {
        statusElement.textContent = 'Lookup failed: ' + error.message;
    }
    hljs.highlightAll();
});