# GitHub User Status Alert

## Summary
This static web app provides an accessible way to display the status of GitHub user lookups. It utilizes an `aria-live` alert to inform users when a lookup starts, succeeds, or fails, ensuring a seamless experience for all users, including those using assistive technologies.

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
Simply enter a GitHub username in the provided input field and click the lookup button. The app will display the status of the lookup in the `aria-live` alert area, updating users on the process.

## Code Explanation
The app uses JavaScript to handle user input and fetch data from the GitHub API. Key features include:

- **`aria-live` Alert**: The alert is set to `polite`, allowing screen readers to announce updates without interrupting the user.
- **Status Updates**: The app updates the alert based on the success or failure of the API request.

Key checks include:
```javascript
document.querySelector("#github-status").getAttribute("aria-live") === "polite";
document.querySelector("script").textContent.includes("github-status");
```

## Deployment (GitHub Pages)
To deploy the app on GitHub Pages:

1. Push your changes to the `main` branch of your repository.
2. Navigate to the repository settings on GitHub.
3. Under the "Pages" section, select the `main` branch as the source.
4. Your app will be available at `https://24f2004387.github.io/github-user-created-001/`.

## License (MIT)
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.