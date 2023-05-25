## Getting Started

After cloning, run ```npm install```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and
load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions
are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use
the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

This is how the ```<EditorWithPreview/>``` component looks like. You can turn off the intro using ```<EditorWithPreview showIntro={false} />```

![image](https://github.com/AdarshSinghal/post-editor-with-preview/assets/6784265/6ed6539c-1bcd-476b-beb6-7af6ecbd77f6)

## Components
This folder contains reusable components.

## TextField
Unlike simple textfield, this textfield has battery indicator that shows how good the length is. As you type, the bar count decreases and color changes, ultimately it becomes red when you are out of characters.

**Clone, Run and Explore more...**

