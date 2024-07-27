

# Request Repeater

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Website](https://img.shields.io/badge/website-online-brightgreen)](https://mahdiasadolahzade.github.io/request-repeater/)

Request Repeater is a tool for testing and retrying URL requests with detailed response analysis. It's perfect for handling login attempts, API testing, and other types of requests where reliability and performance need to be measured.

## Features

- **Retry Requests**: Retry requests multiple times to ensure reliability.
- **Response Analysis**: Analyze response times and status codes.
- **Detailed Error Messages**: Get detailed error messages for failed requests.

## Demo

Check out the live demo of the application [here](https://mahdiasadolahzade.github.io/request-repeater/).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with Request Repeater, clone the repository and install the necessary dependencies.

```bash
git clone https://github.com/mahdiasadolahzade/request-repeater.git
cd request-repeater
npm install
```

## Usage

To run the development server, use the following command:

```bash
npm run dev
```

Navigate to `http://localhost:3000` in your browser to see the application in action.

## Project Structure

```plaintext
request-repeater
├── app
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── Instructions.tsx
│   └── RequestForm.tsx
├── lib
│   ├── request.ts
│   └── requestAndTry.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

### Main Files

- **app/globals.css**: Global CSS styles.
- **app/layout.tsx**: Main layout component with metadata.
- **app/page.tsx**: Home page component.
- **components/Instructions.tsx**: Component for displaying instructions.
- **components/RequestForm.tsx**: Component for the request form.
- **lib/request.ts**: Function to make a request.
- **lib/requestAndTry.ts**: Function to handle request retries and response analysis.

## Contributing

We welcome contributions to the project! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-branch-name`
5. Open a pull request.

Please make sure your code adheres to the project's coding standards and includes relevant tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for using Request Repeater! If you have any questions or feedback, feel free to reach out.

