# HappyCuzCats website

A website for the HappyCuzCats cafe in Provo, Utah.

👉 [Live Prod URL](https://happycuzcats.com)
👉 [Live Nonprod URL](https://dev.happycuzcats.com)

---

## 🛠️ Tech Stack

*   **Frontend:** React (Vite / Create React App), TypeScript / JavaScript 

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have **Node.js** installed on your machine.
*   [Download Node.js](https://nodejs.org) (Recommended: LTS version)

### Installation

1.  **Clone the repository**
    ```bash
    git clone git@github.com:huntercbuxton/happycuzcats.git
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
    N/A

---

## 💻 Available Scripts

In the project directory, you can run the following commands:

| Command | Description |
| :--- | :--- |
| `npm run dev` / `npm start` | Runs the app in development mode at `http://localhost:5173` or `3000`. |
| `npm run build` | Builds the app for production to the `dist` or `build` folder. |
| `npm run lint` | Lints the project files with oxlint to find and fix code style issues. | 
| `npm run test` | Runs unit tests in the project with vitest | 


---

## 📁 Project Structure

```text
src/
├── assets/          # Static assets (images, icons, etc.) **TODO: remove unused assets**
├── components/      # Reusable UI components (Button, Navbar, etc.)
├── App.tsx          # Main application component
└── main.tsx         # JavaScript/TypeScript entry point
```

## resources/links:

- [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules)
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [React compiler documentation](https://react.dev/learn/react-compiler/installation). (The React Compiler is not enabled on the generated template project because of its impact on dev & build performances.)

 