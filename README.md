# 🧠 Pathfinder-AI: Your AI-Powered Job Insight Assistant

Welcome to **Pathfinder-AI**, an innovative AI-driven SaaS platform designed to empower job seekers with intelligent insights and personalized guidance to navigate the job market with confidence. Whether you're exploring career paths, refining job applications, or seeking tailored advice, Pathfinder-AI is your go-to assistant.

## 🌟 Features

- 🔐 **Secure Authentication:** Seamlessly sign in using Clerk with Google, email, or password-based authentication.
- 📝 **Job Description Management:** Easily add, edit, and manage job descriptions to keep track of opportunities.
- ⚡ **Reactive Database:** Powered by `Convex DB` for real-time data updates and smooth performance.
- 💬 **Real-Time AI Chat:** Engage in dynamic conversations with AI to get instant job market insights and advice.
- 💳 **Credit-Based System:** Flexible usage with a credit system for accessing premium AI features.
- 🤖 **AI-Powered Insights:** Leverage Gemini AI for intelligent job recommendations and career guidance.
- 🌐 **Modern Tech Stack:** Built with `Next.js 15` for a fast, scalable, and SEO-friendly experience.
- 🎨 **Beautiful UI:** Styled with Tailwind CSS and Shadcn UI for a sleek, user-friendly interface.
- 🛠️ **Robust Backend:** Seamless integration for reliable performance and scalability.

### 🚀 Getting Started

Follow these steps to set up Pathfinder-AI locally, explore a live demo, or deploy it to production.
Prerequisites

- Node.js: Version 18.x or higher
- npm or yarn: For package management
- Clerk Account: For authentication setup
- Convex Account: For database configuration
- Gemini AI API Key: For AI-powered features
- Git: To clone the repository

### Installation

Clone the Repository:
[`git clone https://github.com/TechWithEmmaYT/pathfinder-ai.git`](https://github.com/arkajitroy/pathfinder-ai.git)

Install Dependencies:
`npm install` OR `yarn install`

### Set Up Environment Variables:

Create a .env.local file in the root directory and add the following:

```bash
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Deployment used by `npx convex dev`
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=


# CLERK AUTHENTICATION CREDs
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# GEMINI AI CREDs
GEMINI_API_KEY=
```

Run the Development Server:
`npm run dev` OR `yarn dev` OR `pnpm run dev`

## 📸 Screenshots

Here’s a glimpse of Pathfinder-AI in action:

![sample screenshot](/.github/sample-1.png)
![sample screenshot 2](/.github/sample-2.png)

## 🛠️ Tech Stack

- **Frontend:** Next.js 15, React, Tailwind CSS, Shadcn UI
- **Backend:** Convex DB for real-time data management
- **Authentication:** Clerk
- **AI Integration:** Gemini AI
- **Others:** TypeScript, ESLint, Prettier

## Personal Use: Free for non-commercial, personal projects.

Commercial Use: Requires a paid license. Purchase a commercial license via Gumroad (replace with your actual Gumroad link).
Attribution: Commercial use requires attribution as outlined in the license agreement.

Thank you for exploring Pathfinder-AI! We’re excited to help you navigate the job market with confidence. Happy building! 💻✨
