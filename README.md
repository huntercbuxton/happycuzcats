# HappyCuzCats website

A website for the HappyCuzCats cafe in Provo, Utah.

👉 [Live Demo URL](https://happycuzcats.com)

---

## 🛠️ Tech Stack

*   **Frontend:** React (Vite / Create React App), TypeScript / JavaScript
*   **Styling:** Tailwind CSS / Styled Components
*   **State Management:** Redux Toolkit / Context API
*   **Routing:** React Router DOM

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have **Node.js** installed on your machine.
*   [Download Node.js](https://nodejs.org) (Recommended: LTS version)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com
    cd your-repo-name
    ```

2.  **Install dependencies**
    If using npm:
    ```bash
    npm install
    ```
    If using Yarn:
    ```bash
    yarn install
    ```

3.  **Set up Environment Variables**
    Create a `.env` file in the root directory and add your keys:
    ```env
    VITE_API_URL=https://example.com
    ```

---

## 💻 Available Scripts

In the project directory, you can run the following commands:

| Command | Description |
| :--- | :--- |
| `npm run dev` / `npm start` | Runs the app in development mode at `http://localhost:5173` or `3000`. |
| `npm run build` | Builds the app for production to the `dist` or `build` folder. |
| `npm run lint` | Lints the project files to find and fix code style issues. |
| `npm test` | Launches the test runner in interactive watch mode. |

---

## 📁 Project Structure

```text
src/
├── assets/          # Static assets (images, icons, etc.)
├── components/      # Reusable UI components (Button, Navbar, etc.)
├── hooks/           # Custom React hooks
├── pages/           # Page-level components / Views
├── services/        # API integration and network requests
├── store/           # Redux/State management configuration
├── App.tsx          # Main application component
└── main.tsx         # JavaScript/TypeScript entry point
```

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.


## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

### React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

### Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
