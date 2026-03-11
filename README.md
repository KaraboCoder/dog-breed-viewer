# Dog Breed Viewer 

<img width="200" height="300" alt="image" src="https://github.com/user-attachments/assets/b040eac9-e490-4fe2-8a5e-dc03babed3d5" />


A modern, fast, and beautiful dog breed explorer built with React, Vite, and Shadcn UI. This application allows users to browse breeds, search in real-time, and view random images for any selected breed.

## Features

- **Secure Login**: Authentication required to access the breed viewer.
- **Breed Discovery**: Fetch and explore all available dog breeds from the Dog API.
- **Real-time Search**: Instant filtering as you type.
- **Image Gallery**: View three random images for any breed in a premium modal.
- **Responsive Design**: Works great on mobile and desktop.
- **Clean Architecture**: Separated services, hooks, and components for easy maintenance.

## Tech Stack

- **Framework**: React 19 (Vite)
- **Routing**: TanStack Router
- **Data Fetching**: TanStack Query (React Query) & Axios
- **Styling**: Tailwind CSS 4 & Shadcn UI
- **Icons**: Lucide React

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v20+) installed on your machine.

### Setup

1. **Clone or download** the project directory.
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```
4. **Access the app**: Open [http://localhost:5173](http://localhost:5173) in your browser.

### Credentials

To login and access the explorer, use these credentials:
- **Username**: `karabo`
- **Password**: `pret0r1@`

## Building for Production

To create an optimized production build, run:

```bash
npm run build
```

The output will be in the `dist/` directory, ready to be deployed.

## Contributing

This was built as part of a clean architecture showcase. No comments were harmed (or used) in the making of this project!
