# GitHub User Info Fetcher

## Summary
This static web app allows users to fetch and display the account creation date of a GitHub user. By utilizing the GitHub API, it provides a simple interface built with Bootstrap, where users can input a GitHub username and optionally include a personal access token for enhanced API rate limits.

## Setup (Local)
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/github-user-info-fetcher.git
   ```
2. Navigate to the project directory:
   ```bash
   cd github-user-info-fetcher
   ```
3. Open `index.html` in your preferred web browser.

## Usage
1. Enter a GitHub username in the form with `id="github-user-${seed}"`.
2. Optionally, append `?token=YOUR_ACCESS_TOKEN` to the URL for authenticated requests.
3. Click the submit button to fetch the account creation date, which will be displayed in the element with `id="github-created-at"`.

## Code Explanation
- The form is identified by `id="github-user-${seed}"`, ensuring it is correctly targeted for submission.
- A JavaScript function fetches user data from the GitHub API endpoint `https://api.github.com/users/`.
- The account creation date is extracted from the response and displayed in the `#github-created-at` element in the format YYYY-MM-DD UTC.

## Deployment (GitHub Pages)
1. Push your code to a GitHub repository.
2. Navigate to the repository settings.
3. Under the "Pages" section, select the branch you want to deploy from (usually `main`).
4. Save the settings, and your site will be available at `https://yourusername.github.io/repository-name`.

## License (MIT)
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.