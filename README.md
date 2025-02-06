# React TS Starter with Vite.js, TailwindCSS and Biome ⚡✨

This project is a starter template designed to kickstart the development of modern applications using **React**, **TypeScript**, **Vite.js**, **TailwindCSS**, **Biome**, and **Commitlint** for standardized commit message formatting.

## Why choose this template? 🤔
- **React with TypeScript**: The perfect combination for building scalable, reliable, and well-typed components.
- **Vite.js**: A next-generation front-end build tool that provides lightning-fast development and optimized builds.
- **TailwindCSS**: A utility-first CSS framework that simplifies styling and ensures design consistency.
- **Biome**: A powerful tool for formatting, linting, and ensuring clean, maintainable code.
- **Commitlint**: A tool to enforce commit message conventions, ensuring that all commit messages follow a consistent and standardized format.

## Key Features 🚀
- **Fully configured setup for working with TypeScript**.
- **Superfast development and build process powered by Vite.js**.
- **Modern and responsive styling with TailwindCSS pre-integrated**.
- **Integrated Biome for automated code formatting and linting**.
- **Commitlint setup for enforcing commit message standards**.
- **Development scripts optimized for a smooth workflow**.

Feel free to clone, customize, and use this as the foundation for your next project! 🎉

## How to Get Started 🛠️
1. **Clone the repository**:
    ```bash
    git clone https://github.com/gabrielmelo/react-vite-starter
    cd <repository-name>
    ```
2. **Install dependencies**:
    ```bash
    npm install
    ```
3. **Start the development server**:
    ```bash
    npm run dev
    ```
4. **Set up Commitlint**:
    - Install Commitlint dependencies:
      ```bash
      npm install --save-dev @commitlint/config-conventional @commitlint/cli
      ```
    - Create a `commitlint.config.js` file with the following content:
      ```js
      module.exports = {
        extends: ['@commitlint/config-conventional']
      };
      ```

5. **Set up a pre-commit hook** (optional but recommended):
    - Use **Husky** to ensure commit messages are linted before each commit.
    ```bash
    npx husky add .husky/pre-commit "npx --no-install commitlint --edit ${1}"
    ```

## Usage Tips 💡
- **Making Commits**: Ensure your commit messages follow the conventional format. For example:
  - `feat: add new feature`
  - `fix: resolve issue with component rendering`
- **Building for Production**:
    ```bash
    npm run build
    ```
- **Linting and Formatting**:
    ```bash
    npm run lint
    npm run format
    ```

You're now ready to build amazing, high-performance interfaces with clean and maintainable code! 💻✨

---

Let me know if you need further changes or additions! 😊
