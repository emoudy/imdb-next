This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The purpose of this application is to learn to work with Next.JS and Tailwind.  This project was done as a tutorial by Sahand Ghavidel in his course, "Next.js 14 (reactjs framework) Projects. 4 NextJS 14 projects. IMDB, Instagram, Twitter, Google clone using Next js 14". The link to the tutorial repo is https://github.com/sahandghavidel/imdb-next and the final project by the instructor can be viewed in imdb.100jsprojects.com/.  

My version can be viewed at https://imdb-next-x8zp-6nzdecrl8-emoudys-projects.vercel.app/  and it has some minor adjustments which include:
* Wrapping the <SubNavBarItem> in <Suspense> to handle data loading.
* Adjusting the <DarkModeSwitch> to wait for the component to be mounted.  This was needed because the icon would default to Light mode and if the user had the dark mode preference on their system, the icon would be incorrect.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Additional Resources used

- APIs being used for this application is from https://www.themoviedb.org 
- The animated loading icon was downloaded from https://loading.io/ 
