# Getting Started with WriteAway Locally

**Prerequisites**: Ensure that you have a Postgres database running, such as pgAdmin.

## Frontend Setup

1. Clone the project repository.
2. Install dependencies by running the command: `npm install`.

## Backend Setup

1. In pgAdmin, set up your Postgres database.
2. Run the queries found in the `init_db.sql` file to initialize the necessary tables.
3. Adjust the values in the `src/server/pool.js` file to match your database configuration.

## Available Scripts

In the project directory, you can run the following scripts:

### `npm run clint`

Runs the WriteAway application in development mode.\
Open [http://localhost:3000](http://localhost:3000) in your browser to view it.

The page will automatically reload when you make changes.\
Lint errors will be displayed in the console.

### `npm run server`

Launches the test runner in interactive watch mode.\
Refer to the [running tests](https://facebook.github.io/create-react-app/docs/running-tests) section for more information.

## TINYMCE API Key

To obtain a TinyMCE API key, visit the [TinyMCE API Documentation](https://www.tiny.cloud/docs/api/tinymce/).\
Create an `.env` file in the project root directory and assign your API key to the `REACT_APP_TINYMCE_API_KEY` variable.

Remember to keep your API key secure and do not share it publicly.

We hope this guide helps you get started with WriteAway on your local environment. If you encounter any issues or need further assistance, please contact our support team at [support@example.com](mailto:support@example.com).
