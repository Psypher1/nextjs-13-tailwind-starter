<h1 align="center">Next.js 13 Tailwind Starter</h1>

This is a starter for projects I create using Next.js and Tailwind.

This starter consists of:

- [Next.js](https://nextjs.org)
- [TailwindCSS](https://tailwindcss.com/)
  - Tailwind Typography
- [next-seo](https://github.com/garmeeh/next-seo)

## Deplyed Url: [Nextjs 13 Tailwind Starter](https://next13-tailwind-starter.vercel.app/)

## 🏗️ To Use This Start

```bash
npx create-next-app your-app-name -e https://github.com/Psypher1/nextjs-13-tailwind-starter
```

### Change Directiory & Run Dev Server

```bash
cd your-app-name
pnpm run dev # or, npm run dev , yarn dev
```

That's All!!! Now open [localhost:3000](http://localhost:3000/) to see the app.

---

## Starter Structure

```
src
├── features
├── pages
│   └── index.jsx
├── ui
└── index.jsx
```

### /ui

Your "lego blocks", single purpose React components that can be combined together to make more complicated components, known as Features

### /features

This folder is for more complex components, or features. Features are created by composing many UI components and usually, state

### /pages

This folder is for navigable components. A router automagically creates urls for anything in this folder. To create a page, combine features and ui components and put them in a component in this page. Typically state is managed in the feature, and any props that come from the server are passed through pages via the return object from getServerSideProps. Those props are then passed down into features as props, or put into a context.

---

## NOTE: Before You Start

Modify `src/styles/globals.css` to remove styles set `body` :

```css
body {
	@apply text-white bg-gray-900;
}
```

---

## Author

👤 **James 'Dante' Midzi**

- Website: [Potions Room](https://dantedecodes.vercel.app/)
- Twitter: [@Psypher1](https://twitter.com/Psypher1)
- Github: [@Psypher1](https://github.com/Psypher1)
- LinkedIn: [@jamesmidzi](https://linkedin.com/in/jamesmidzi)

---

## Show your support

Give a ⭐️ if this project helped you!
