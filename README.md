# Token Price Explorer

A simple token price viewer that lets users select two tokens and input a USD amount to see the approximate equivalent amounts in those tokens.

Live demo link on Vercel

---

## Setup & Running Locally

1. **Clone the repository**

   ```bash
   git clone git@github.com:kim-jenny5/token-swap.git
   cd token-swap
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

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

## AI Assistance

I used ChatGPT to:

- Solve TypeScript type errors.
- Refactor repetitive code (e.g., splitting out the token panels into reusable components instead of keeping everything in one file).
- Rewrite functions to be more human-readable and reword comments/messages.
- Write this README.

---

## Future Improvements

If this were a real production project, features I'd consider adding include:

- **Security**: move API key server-side
- **Accessibility**: add proper ARIA attributes, keyboard navigation support, and screen reader optimizations to make the interface usable for all users.
- **Enhanced error handling & loading states**: while basic error handling is already implemented, I’d extend it to display user-friendly error messages and visual loading indicators, especially when token data takes longer to fetch.
- **Responsive refinements**: further optimize the layout for smaller viewports and touch interactions.
- **Unit tests**: add tests for core logic like token switching, dropdown selection, and USD-to-token conversions.
- **Live swapping**: integrate actual swap functionality instead of static conversions, so the UI reflects real transactions.
- **Animations & polish**: smooth transitions when switching tokens or updating values to improve perceived performance and user delight.
