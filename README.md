# Token Price Explorer

A simple token price viewer that lets users select two tokens and input a USD amount to see the approximate equivalent amounts in those tokens.

> This project was created as a **take-home assessment for Fun.xyz**.

[**Live Demo →** ]

---

## Features

- **Select two tokens** (source & target) from dropdowns.
- **Enter a USD amount** to see its equivalent in both tokens.
- **Switch tokens** with a single click using the middle toggle button (e.g., if USDC is on the left and ETH is on the right, clicking it will put ETH on the left and USDC on the right).
- **Fun confetti animation** when clicking the currently defunct swap button (purely for entertainment).
- **Automatic token selection adjustment** to prevent the same token being selected on both panels.

---

## Libraries Used

- **[Tailwind CSS](https://tailwindcss.com/)** — utility-first CSS for quick, consistent styling.
- **[Headless UI](https://headlessui.dev/)** — accessible, unstyled UI components that work seamlessly with Tailwind CSS and used for the token dropdown menus.
- **[Heroicons](https://heroicons.com/)** — SVG icons for the switch button.
- **[js-confetti](https://github.com/loonywizard/js-confetti)** — adds a fun confetti effect for the swap button.

---

## Assumptions & Design Decisions

Initially, I interpreted the task as a classic token swap UI (like Uniswap) where the user would input a value directly into the source panel (e.g., “100 WBTC”).

However, the instructions — _"input a USD amount to see the approximate equivalent amounts in those tokens"_ — led me to instead provide a **dedicated USD input field** separate from the token panels.

### Key Choices:

- **Dropdowns instead of chips**  
  The wireframe included four token “chips” at the top, but I found this restrictive and less intuitive. A dropdown allows the user to directly select a token for each panel without having to re-click chips or guess the intended interaction.
- **Middle toggle button for switching**  
  Allows the user to flip the source and target tokens quickly without reselecting both manually.
- **Token conflict handling**  
  If the user tries to select the same token on both sides, the app automatically advances the conflicting side to the next token in the list.
- **Confetti instead of real swaps**  
  Since no actual token swapping is happening, the swap button triggers a fun confetti animation instead.

---

## AI Assistance

I used ChatGPT to:

- Solve TypeScript type errors.
- Refactor repetitive code (e.g., splitting out the token panels into reusable components instead of keeping everything in one file).
- Rewrite functions to be more human-readable.
- Write this README.

---

## Setup & Running Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/kim-jenny5/fun-take-home.git
   cd fun-take-home
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   pnpm run dev
   ```
