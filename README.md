# 🛍️ MINI E-COMMERCE

A modern and responsive **Mini E-Commerce Frontend** built using **Next.js (App Router), React 18, TypeScript, and Tailwind CSS**.

This project was developed as part of the **SammTech Frontend Developer Intern Task** to demonstrate frontend development skills including dynamic routing, filtering, responsive design, and clean code structure.

---

# 🌐 Live Demo

> Add your deployed Vercel link here  
`https://your-vercel-link.vercel.app`

---

# 🔗 GitHub Repository

👉 https://github.com/akib2012/mini_ecommerce_website.git

---

# ✨ FEATURES

---

## 🛒 Product Listing Page

- Fetches product data from `/public/products.json`
- Displays:
  - Product Image  
  - Title  
  - Price  
  - Short Description  

### 📱 Responsive Grid Layout

- 📱 **Mobile** → 2 cards  
- 💻 **Medium screens** → 4 cards  
- 🖥 **Large screens** → 5 cards  

✔ Modern card design  
✔ Smooth hover animation  

---

## 🔎 Filtering System

- Filter by **Category**
- Filter by **Price Range**
- Dynamic filtering without page reload
- Clean and responsive filter UI

---

## 📄 Product Details Page

- Dynamic routing using Next.js `[id]`
- Displays:
  - Large product image  
  - Full description  
  - Price  
  - Category  

✔ Responsive layout  
✔ Go Back navigation button  
✔ Skeleton loading state  

---

## ⏳ Loading Skeleton

- Placeholder UI while fetching data
- Smooth pulse animation
- Improves perceived performance and UX

---

## 📱 Fully Responsive Design

Optimized for:

- Mobile  
- Tablet  
- Desktop  

✔ Consistent card heights  
✔ Proper image aspect ratios  

---

# 🛠 TECH STACK

| Technology | Usage |
|------------|--------|
| **Next.js (App Router)** | Framework |
| **React 18** | UI Library |
| **TypeScript** | Type Safety |
| **Tailwind CSS** | Styling |
| **Git & GitHub** | Version Control |
| **Vercel** | Deployment |

---

# 📁 PROJECT STRUCTURE
/app
   page.tsx                 # Home page
   /product/[id]/page.tsx   # Product Details page
/components
   Navbar.tsx
   Hero.tsx
   ProductCard.tsx
   ProductCardSkeleton.tsx
   Filter.tsx
/types
   Product.ts
/public
   products.json            # Dummy product data




# 🚀 GETTING STARTED

# 1️⃣ Clone the Repository

```bash
git clone https://github.com/akib2012/mini_ecommerce_website.git
cd mini_ecommerce_website

2️⃣ Install Dependencies
npm install

3️⃣ Run Development Server
npm run dev
🌍 Now open in your browser:
http://localhost:3000
🔄 GIT WORKFLOW

This project follows a structured Git workflow:

main → Production-ready code

dev → Development branch







feature/* → Individual feature branches

✔ Meaningful commit messages
✔ Clean branch management

🎯 LEARNING HIGHLIGHTS

Next.js App Router

Dynamic Routing

Client-side Filtering

Skeleton Loading UX

Responsive Tailwind Layouts

Clean Component Architecture

TypeScript Best Practices

📌 FUTURE IMPROVEMENTS

Add Cart functionality

Add Search feature

Add Pagination

Connect with real backend API

Add State Management (Redux / Zustand)

Implement Authentication

👨‍💻 AUTHOR

Md. Perbej Bhuiyan Akib
Frontend Developer

GitHub: https://github.com/akib2012

📜 LICENSE

This project is developed for internship evaluation purposes.