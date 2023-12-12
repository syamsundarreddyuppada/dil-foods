## Project Creation

1. npx create-next-app@latest
   On installation, you'll see the following prompts:

2. What is your project named? my-app
   Would you like to use TypeScript? No / Yes
   Would you like to use ESLint? No / Yes
   Would you like to use Tailwind CSS? No / Yes
   Would you like to use `src/` directory? No / Yes
   Would you like to use App Router? (recommended) No / Yes
   Would you like to customize the default import alias (@/_)? No / Yes
   What import alias would you like configured? @/_

3. Project created with basic files and folder(pages,public,styles,js.config.js,next.config.js,package-lock.js,package.json)

## Folder Structure

    Dil-foods
    │
    │
    └───assets (Directory to store all image files)
    |
    └───components (Parent directory for root)
    │   └───resource folder (Resource folder for each specific component with CSS properties)
                └───test files(resource.test.jsx) (Each specific resource file contains specific test cases for a component level)

    data (Parent directory for constant data)
    │   └───resource folder (Resource folder to store mock-data, data which can be used in components )
    |
    └───pages (Parent directory for react pages)
    |   └───index.js (Router structure & default loading page)
    |   └───resource folders (Each specific resource page folder)
    |   └───api (Contains service files)
    |   └───[subject] (Dynamic pages are specified in this folder)
    |
    └───styles (Directory to wrap all style dependencies of the application)
    |       global.scss (Parent style sheet where application level common styles are mentioned)
    |       └───styled components (Parent style sheet where application level styles are mentioned)

    └───store (Directory to redux store files)
            └───store.js (configure the store with reducers)
            └───productReducer (Directory to Configured for products store)
                └───productReducer.js (file to Configured for products reducer store)

    └───container (Directory to contain verious components in an arranged way like container)
            └───ProductContainer (Directory to product container resource like title and productCard)
                └───ProductContainer.jsx (Parent level where application level  entire product with titles are mentioned for reusability.)

    └───__tests__ (Directory to contain pages test cases)
            └───resource files (Each specific resource page file contains specific test cases for a page)

## Running Project

(for Development)

1.  npm run dev (for development serve)

(for production) 2. npm run build (Build files for production use) 3. npm run start (for production serve)

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
