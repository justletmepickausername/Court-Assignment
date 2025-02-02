
# Angular 18 Project

This is a web application built using Angular 18.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- Modern web application built with Angular 18
- Responsive design for mobile and desktop devices

---

## Requirements

Before you begin, ensure you have met the following requirements:

- **Node.js**: Version 22.11.0 or later
- **npm**: Version 10.9.0 or later
- **Angular CLI**: Version 18.2.12 or later

---

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/justletmepickausername/Court-Assignment-Front.git
   ```

2. Navigate to the project directory:
   ```bash
   cd CourtComplaintFormAssignment
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

---

## Usage

To run the application locally in development mode:

```bash
ng serve
```

Then, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload if you make changes to the source files.

---

## Deployment

To deploy the application to production:

1. Build the project for production:
   ```bash
   ng build --prod
   ```

2. The output will be in the `dist/` folder. You can deploy these files to any static file server or hosting platform (e.g., Firebase, Netlify, AWS S3).

For Firebase deployment, you can use:

```bash
ng add @angular/fire
```

Then follow the Firebase deployment steps in the [official Firebase documentation](https://firebase.google.com/docs/hosting).

---

## Contributing

We welcome contributions to this project! If you'd like to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to your branch (`git push origin feature-branch`).
5. Create a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
