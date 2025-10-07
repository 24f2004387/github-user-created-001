# GitHub User Status Alert

## Summary
This static web app provides an accessible way to display the status of GitHub user lookups. It utilizes an `aria-live` alert to inform users when a lookup starts, succeeds, or fails, enhancing the user experience for screen reader users.

## Setup (Local)
To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/24f2004387/github-user-created-001.git
   ```
2. Navigate to the project directory:
   ```bash
   cd github-user-created-001
   ```
3. Open `index.html` in your preferred web browser.

## Usage
Simply enter a GitHub username in the input field and initiate the lookup. The status of the lookup will be announced via the `aria-live` alert, providing real-time feedback on the operation's success or failure.

## Code Explanation
The app uses the following key features:
- An `aria-live` region with the ID `github-status` to announce status updates.
- JavaScript to handle the lookup process and update the `aria-live` alert based on the outcome.
- The `polite` setting for `aria-live` ensures that updates do not interrupt the user.

Key checks include:
```javascript
document.querySelector("#github-status").getAttribute("aria-live") === "polite";
document.querySelector("script").textContent.includes("github-status");
```

## Deployment (GitHub Pages)
To deploy the app on GitHub Pages:

1. Push your local changes to the `main` branch of your repository.
2. Navigate to the repository settings on GitHub.
3. Under the "Pages" section, select the `main` branch as the source.
4. Your app will be available at `https://24f2004387.github.io/github-user-created-001/`.

## License (MIT)
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.