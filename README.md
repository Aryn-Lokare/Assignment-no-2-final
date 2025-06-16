<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
# Product Management CRUD Application with Gemini AI

## Overview

This is a full-stack product management application built with Next.js, Prisma, PostgreSQL, and integrates Google's Gemini AI for generating product descriptions. It provides a user-friendly interface to view products, an admin panel for creating, updating, and deleting products, and leverages AI to enhance product data entry.

## Features

- **Product Listing:** Browse through a collection of products with a clean, responsive grid layout.
- **Product Creation:** Add new products with various details, including name, price, category, image, stock, rating, and review.
- **AI-Powered Descriptions:** Automatically generate compelling and specific product descriptions using the Google Gemini API based on product name, category, and price.
- **Admin Panel:** A dedicated interface for administrators to:
  - View all products in a structured table.
  - Update existing product details inline.
  - Delete products from the database.
- **Responsive Design:** Optimized for various screen sizes using Tailwind CSS.
- **Database Integration:** Persistent data storage using PostgreSQL and Prisma ORM.

## Technologies Used

- **Frontend:** Next.js (React Framework), Tailwind CSS
- **Backend:** Next.js API Routes, Prisma ORM
- **Database:** PostgreSQL
- **AI Integration:** Google Gemini API (`@google/generative-ai`)
- **Package Manager:** npm / Yarn

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js (LTS version recommended)
- npm or Yarn
- PostgreSQL database server
- Git

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd Assignment-no-2/crud-app
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Environment Variables

Create a `.env.local` file in the `Assignment-no-2/crud-app` directory and add the following environment variables. Replace the placeholder values with your actual database credentials and Gemini API key.

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE_NAME?schema=public"
DIRECT_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE_NAME?schema=public"
GOOGLE_API_KEY="YOUR_GEMINI_API_KEY"
```

- Replace `USER`, `PASSWORD`, `HOST`, `PORT`, `DATABASE_NAME` with your PostgreSQL database connection details.
- Get your `GOOGLE_API_KEY` from [Google AI Studio](https://makersuite.google.com/app/apikey).

### Database Setup (Prisma & PostgreSQL)

1.  **Ensure your PostgreSQL database server is running.**

2.  **Push your Prisma schema to create tables in your database:**
    Navigate to the `crud-app` directory first:

    ```bash
    cd Assignment-no-2/crud-app
    npx prisma db push
    ```

3.  **Generate Prisma Client:**
    ```bash
    npx prisma generate
    ```

### Running the Application

1.  **Start the Next.js development server:**
    Make sure you are in the `Assignment-no-2/crud-app` directory.

    ```bash
    npm run dev
    # or
    yarn dev
    ```

2.  Open your browser and navigate to:
    - **Product List:** `http://localhost:3000`
    - **Add Product:** `http://localhost:3000/create`
    - **Admin Panel:** `http://localhost:3000/admin`

## Usage

### Adding Products

Go to the `/create` page. Fill in the product details. For `Product Description`, you can leverage the AI integration:

1.  Enter the `Product Name` and `Product Category`.
2.  Click the "Generate" button next to the `Product Description` field.
3.  The AI will generate a description based on the provided details.
4.  You can then edit or accept the generated description before submitting.

### Administering Products

Visit the `/admin` page. Here you can:

- **Edit:** Click the "Edit" button next to a product. The fields will become editable. Make your changes and click "Save".
- **Delete:** Click the "Delete" button next to a product. Confirm the action to permanently remove the product from the database.

---

Feel free to contribute, report issues, or suggest improvements!
>>>>>>> fea49b0bfb8ec94b68dd5d326ebe0d0c70147af1
