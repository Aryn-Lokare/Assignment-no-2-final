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
