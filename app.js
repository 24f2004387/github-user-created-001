document.title = "GitHub User Info";

document.querySelector("#github-user-df3a8fcc").addEventListener("submit", async function(event) {
    event.preventDefault();
    const username = document.querySelector("#username").value;
    const token = ''; // Optionally add token here
    const url = `https://api.github.com/users/${username}${token ? `?token=${token}` : ''}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.created_at) {
            const createdAt = new Date(data.created_at).toISOString().split('T')[0];
            document.querySelector("#github-created-at").textContent = createdAt;
        } else {
            document.querySelector("#github-created-at").textContent = "User not found";
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
});