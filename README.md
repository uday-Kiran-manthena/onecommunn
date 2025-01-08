How to Install and Run the Project
Follow these steps to set up and run this project on your local machine:

Prerequisites
Ensure you have the following installed on your system:

Node.js (LTS version recommended)
npm (comes with Node.js) or yarn
Installation
Clone the Repository


git clone https://github.com/uday-Kiran-manthena/oncommunn.git
Navigate to the project directory:


cd oncommunn
Install Dependencies Use the following command to install all required packages:

npm install
Or, if you use Yarn:


yarn install
Running the Project
Start the Development Server To run the project locally in development mode, use:

npm run dev
Or, if you use Yarn:

yarn dev
Open in Browser After running the command, you’ll see a message in your terminal with a local server URL (e.g., http://localhost:3000). Open that link in your browser to view the project.

Building for Production
To create an optimized production build:

npm run build
Or, with Yarn:

yarn build
The built files will be in the dist directory.

Deploying to GitHub Pages
To deploy the project to GitHub Pages:

Update the homepage field in your package.json file to:

"homepage": "https://<your-github-username>.github.io/<your-repository-name>"
Run the following command:

npm run deploy
This will build the project and publish it to the gh-pages branch.
