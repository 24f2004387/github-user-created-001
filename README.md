# GitHub User Created Age Checker

## Summary
This static web app allows users to check the account age of any GitHub user by entering their username. The app provides real-time feedback on the lookup status and caches the last lookup for convenience.

## Setup (Local)
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
1. Enter a GitHub username in the input field.
2. Click the "Check Age" button.
3. The app will display the account age in years and provide status updates.

## Code Explanation
- The app utilizes the GitHub API to fetch user data.
- An `aria-live` alert is implemented to announce the status of the lookup process.
- The account age is calculated and displayed in the `#github-account-age` element.
- The last searched username is stored in `localStorage` for easy retrieval on subsequent visits.

## Deployment (GitHub Pages)
1. Push your changes to the `main` branch of your repository.
2. Navigate to the repository settings.
3. Under the "Pages" section, select the `main` branch as the source.
4. Your app will be live at `https://24f2004387.github.io/github-user-created-001/`.

## License (MIT)
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.