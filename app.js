document.getElementById('lookup-btn').addEventListener('click', function() {
    const statusElement = document.getElementById('github-status');
    statusElement.textContent = 'Looking up GitHub status...';
    
    fetch('https://api.github.com')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            statusElement.textContent = 'Lookup succeeded!';
        })
        .catch(error => {
            statusElement.textContent = 'Lookup failed: ' + error.message;
        });
});