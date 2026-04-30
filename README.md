# Resume Portfolio Starter

A modern resume portfolio application built with React, Vite, and Wix Design System on the frontend, and Express.js on the backend.

## 📁 Project Structure

```
portfolio/
├── client/                 # React (Vite) frontend
│   ├── src/
│   │   ├── components/
│   │   │   └── ExperienceSection.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
├── server/                 # Express.js backend
│   ├── index.js
│   └── package.json
├── package.json           # Root package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- Yarn 4

### Installation

Install all dependencies from the root directory:

```bash
yarn install
```

> **Note:** With Yarn workspaces, all dependencies are hoisted to a single `node_modules` folder at the root. This is the expected behavior and is more efficient as it deduplicates shared packages.

### Running the Application

From the root directory, run both client and server:

```bash
yarn dev
```

This will start:
- **Client**: http://localhost:5173
- **Server**: http://localhost:3001

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/resume` | Returns resume data (name, bio, experience) |
| GET | `/api/health` | Health check endpoint |

## 📚 Wix Design System Documentation

This project uses **Wix Design System (WDS)** for UI components. 

**📖 Official Documentation: https://www.wix-pages.com/wix-design-system/?path=/story/getting-started--about#Get_started**

### Key Components Used

- `<Page />` - Page layout wrapper
- `<Layout />` - Grid layout system
- `<Cell />` - Grid cells
- `<Card />` - Content cards
- `<Heading />` - Typography headings
- `<Text />` - Typography text
- `<Box />` - Flexbox container
- `<Loader />` - Loading indicator

### Recommended Components to Explore

- `<Timeline />` - Great for experience history
- `<Accordion />` - Expandable sections
- `<Badge />` - Skill tags
- `<Avatar />` - Profile images
- `<Tabs />` - Section navigation
- `<Divider />` - Visual separators

## 🎯 Student Tasks

1. **Complete `ExperienceSection.jsx`**: Implement the component to display work experience using WDS components.

2. **Add Skills Section**: Create a new component to display skills using `<Badge />` or `<Tag />` components.

3. **Add Profile Image**: Use the `<Avatar />` component in the header.

4. **Customize resume data**: through the server api

5. **Choose Your Challenge** - Pick one of the following features to implement:

   - **Option A: Projects Carousel** *(React focus)* - Create a carousel component from scratch to showcase your projects or testimonials. Use only basic WDS components - no external carousel libraries.

   - **Option B: Dark Mode Toggle** *(CSS focus)* - Implement a light/dark theme switcher that remembers the user's preference.

   - **Option C: Contact Form** *(Data + React focus, advanced)* - Add a contact section where visitors can send you a message. Include proper form validation and server-side handling.

## 🛠 Tech Stack

- **Frontend**: React 18, Vite, Wix Design System
- **Backend**: Node.js, Express.js
- **Styling**: Wix Design System (CSS-in-JS)

## 📝 License

MIT

