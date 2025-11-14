Audiophile E-commerce
A modern, full-stack e-commerce website for premium audio equipment built with Next.js, TypeScript, Convex, and CSS Modules.

🚀 Features
Full-Stack Architecture: Next.js frontend with Convex backend

Modern Stack: Built with Next.js 14, TypeScript, Convex, and CSS Modules

Real-time Database: Convex for data management and real-time updates

Responsive Design: Fully responsive across all device sizes

E-commerce Ready: Product listings, categories, shopping cart, and user authentication

Performance Optimized: Fast loading with Next.js optimization features

Type Safety: Full TypeScript support for both frontend and backend

Real-time Updates: Live cart updates and inventory management

🛠️ Technology Stack
Frontend
Framework: Next.js 14 with App Router

Language: TypeScript

Styling: CSS Modules with CSS Variables

Font: Manrope (Google Fonts)

Images: Next.js Image Optimization

Icons: Lucide React

Backend & Database
Backend: Convex (Serverless backend platform)

Database: Convex Document Database

Authentication: Convex Auth integration

Real-time: WebSocket-based real-time updates

📁 Project Structure
text
audiophile/
├── app/
│   ├── components/
│   │   ├── AudioGear.tsx
│   │   ├── CategoryHeader.tsx
│   │   ├── Features.tsx
│   │   ├── Footer.tsx
│   │   ├── Gallery.tsx
│   │   ├── MoreProducts.tsx
│   │   ├── NavLink.tsx
│   │   ├── ProductPage.tsx
│   │   ├── ProductSection.tsx
│   │   └── ProductsAccesseries.tsx
│   ├── convex/
│   │   ├── schema.ts
│   │   ├── products.ts
│   │   ├── cart.ts
│   │   ├── users.ts
│   │   └── ...
│   ├── headphones/
│   │   └── page.tsx
│   ├── speakers/
│   │   └── page.tsx
│   ├── earphones/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/
│   ├── images/
│   └── fonts/
└── package.json
🗄️ Convex Backend Structure
Database Schema
typescript
// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  products: defineTable({
    name: v.string(),
    category: v.string(),
    price: v.number(),
    description: v.string(),
    imageSrc: v.string(),
    altText: v.string(),
    isNewProduct: v.boolean(),
    quantity: v.number(),
    features: v.array(v.string()),
    inTheBox: v.array(v.object({
      quantity: v.string(),
      item: v.string()
    }))
  }),

  cart: defineTable({
    userId: v.string(),
    items: v.array(v.object({
      productId: v.id("products"),
      quantity: v.number(),
      price: v.number()
    })),
    total: v.number()
  }),

  users: defineTable({
    name: v.string(),
    email: v.string(),
    // ... other user fields
  })
});
Example Convex Queries & Mutations
typescript
// convex/products.ts
import { query, mutation } from "./_generated/server";

export const getProducts = query({
  args: { category: v.optional(v.string()) },
  handler: async (ctx, args) => {
    if (args.category) {
      return await ctx.db
        .query("products")
        .filter(q => q.eq(q.field("category"), args.category))
        .collect();
    }
    return await ctx.db.query("products").collect();
  },
});

export const addToCart = mutation({
  args: { productId: v.id("products"), userId: v.string() },
  handler: async (ctx, args) => {
    // Cart logic implementation
  },
});
🎨 Design System
Colors
Primary Orange: #D87D4A

Dark Gray: #F1F1F1

Light Gray: #FAFAFA

Black: #000000

White: #FFFFFF

Typography
Font Family: Manrope

Font Weights: 200, 300, 400, 500, 600, 700, 800

Breakpoints
Mobile: 480px and below

Tablet: 768px and below

Desktop: 1100px and above

📦 Key Components
ProductSection
Reusable product display component with Convex integration:

tsx
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function ProductSection({ productId }) {
  const product = useQuery(api.products.getById, { id: productId });
  
  return (
    <ProductSection
      imageSrc={product.imageSrc}
      altText={product.altText}
      isNewProduct={product.isNewProduct}
      productName={product.name}
      productType={product.category}
      description={product.description}
      price={product.price}
      quantity={product.quantity}
      productLink={`/products/${productId}`}
      layout="left"
      variant="default"
    />
  );
}
MoreProducts
Related products section with Convex data:

tsx
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function MoreProducts({ currentProductId }) {
  const relatedProducts = useQuery(api.products.getRelated, { 
    excludeId: currentProductId 
  });

  return (
    <MoreProducts 
      products={relatedProducts}
      title="YOU MAY ALSO LIKE"
    />
  );
}
🚀 Getting Started
Prerequisites
Node.js 18.17 or later

npm or yarn

Convex account

Installation
Clone the repository

bash
git clone https://github.com/your-username/audiophile.git
cd audiophile
Install dependencies

bash
npm install
# or
yarn install
Set up Convex

bash
npx convex dev
Follow the Convex setup instructions to:

Create a new project

Configure your database

Set up environment variables

Configure environment variables

env
CONVEX_DEPLOYMENT=your-deployment-url
NEXT_PUBLIC_CONVEX_URL=your-convex-url
Run the development server

bash
npm run dev
# or
yarn dev
Open your browser
Navigate to http://localhost:3000

🔌 Convex Integration
Frontend Setup
tsx
// app/layout.tsx
import { ConvexClientProvider } from "@/components/convex-provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ConvexClientProvider>
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
Data Fetching Examples
tsx
// Using Convex queries
const products = useQuery(api.products.getByCategory, { 
  category: "headphones" 
});

// Using Convex mutations
const addToCart = useMutation(api.cart.addItem);

const handleAddToCart = (productId) => {
  addToCart({ 
    productId, 
    userId: currentUser.id 
  });
};
📱 Pages & Features
Homepage (/)
Featured products from Convex

Category navigation

Real-time promotional sections

Category Pages
Headphones (/headphones) - Filtered Convex queries

Speakers (/speakers) - Real-time inventory updates

Earphones (/earphones) - Dynamic product loading

Product Pages
Individual product details from Convex

Real-time inventory tracking

Add to cart with Convex mutations

Related products suggestions

Shopping Cart
Real-time cart updates

Persistent cart state

Live price calculations

Inventory validation

🎯 Backend Features
Convex Functions
Product Management: CRUD operations for products

Cart Operations: Add, remove, update cart items

User Authentication: User management and sessions

Order Processing: Checkout and order creation

Inventory Management: Real-time stock updates

Real-time Capabilities
Live cart synchronization across devices

Real-time inventory updates

Instant product availability

Live order status updates

🚀 Deployment
Deploy to Vercel
bash
npm run build
npx convex deploy
vercel deploy
Environment Setup
Deploy Convex backend: npx convex deploy

Set environment variables in Vercel

Deploy Next.js frontend

🔧 Development Scripts
bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npx convex dev       # Start Convex development
npx convex deploy    # Deploy Convex backend
npm run lint         # Run ESLint
🌟 Key Features
Full-Stack Type Safety: TypeScript from database to UI

Real-time Updates: Live cart and inventory synchronization

Serverless Backend: No server management with Convex

Optimized Performance: Next.js SSG and ISR capabilities

Scalable Architecture: Convex handles scaling automatically

Developer Experience: Hot reload for both frontend and backend

📄 License
This project is licensed under the MIT License.

🤝 Contributing
Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📞 Support
For support, email support@audiophile.com or join our Slack channel.

Audiophile - Premium Audio Equipment E-commerce Solution with Modern Full-Stack Architecture


