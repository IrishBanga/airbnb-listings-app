# Airbnb Listings App

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app) that displays Airbnb-style listing details. This project uses Bootstrap for styling and layout, and SWR for client data fetching. It fetches listing data from a separate API (configured via environment variable) and renders listing pages and a simple index with pagination.

## Key features

- Client-side fetching with SWR on listing pages ([pages/listing/[id].js](pages/listing/[id].js)).
- Static generation used for the About page ([pages/about.js](pages/about.js)).
- Reusable UI components:
  - [`ListingDetails`](components/ListingDetails.js) - renders images, pricing, room/bed info and review scores.
  - [`MainNav`](components/MainNav.js) - top navigation bar.
  - [`Layout`](components/Layout.js) - page wrapper using `react-bootstrap` Container.
- Responsive UI using Bootstrap + React-Bootstrap.
- Simple pagination logic on the index page ([pages/index.js](pages/index.js)).

## Tech stack

- Next.js (Pages Router) - project root pages in [pages/](pages/)
- React 19
- SWR for client data fetching (see usage in [pages/listing/[id].js](pages/listing/[id].js) and [pages/index.js](pages/index.js))
- Bootstrap + react-bootstrap for styling and layout
- ESLint configured via [eslint.config.mjs](eslint.config.mjs)

## Notes on fetching behavior

- The listing detail page uses SWR to fetch a single listing by id at runtime. See [pages/listing/[id].js](pages/listing/[id].js).
- The About page demonstrates static generation via `getStaticProps` in [pages/about.js](pages/about.js).

## Troubleshooting

- If images fail to load, `ListingDetails` includes an onError fallback to a placeholder image. See [`ListingDetails`](components/ListingDetails.js).
- Ensure NEXT_PUBLIC_API_URL points to a working API that returns listing objects matching the expected shape (images.picture_url, price, review_scores, etc.).

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

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
