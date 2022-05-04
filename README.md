This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Setup

Go to the [Agora Console](https://console.agora.io), copy `.env-example` to `.env` and update the variables accordingly (`AGORA_CHANNEL` can be an arbitrary name):

![project_config](https://user-images.githubusercontent.com/5312427/166714877-16a370bb-c61c-4234-8976-356faebc631c.png)

## Libraries and documentation:

1. [https://www.npmjs.com/package/agora-rtm-sdk](agora-rtm-sdk): Agora Real-time Messaging (aka Chat).
2. [https://www.npmjs.com/package/agora-access-token](agora-access-token): Generate user tokens.

Read more at [Agora Real-time Messaging Overview](https://docs.agora.io/en/Real-time-Messaging/product_rtm?platform=Web).

**Important files:**

1. [pages/api/rtm/token.js](/pages/api/rtm/token.js): An end-point to generate user tokens.
2. [hooks/agora.js](/hooks/agora.js): Hooks to connect to the Agora services.
3. [pages/index.js](/pages/index.js): The main page (see the `connectToRtm` function).

## Start the dev server

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
