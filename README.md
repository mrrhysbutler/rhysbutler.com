# Personal Website Repository

This repository contains the source code for my personal website. I embarked on this project as an excuse to explore the Cursor AI editor and revamp my simple (and admittedly poxy) website during a cruisy Saturday afternoon. The site is built with Next.js and is currently hosted on Vercel.

## Project Overview

The layout is intentionally minimalistic, allowing me to start with a clean slate and leverage the capabilities of Claude-3.7-Sonnet. I'm no designer, but I managed to achieve the desired aesthetic with the following steps:

- **Fresh Project Initialization**: Kicked off a new Next.js project using Cursor and **Claude-3.7-Sonnet**
- **Content Migration & Updares**: Transferred content from the previous version of the website. Made minor updates to refresh outdated content.
- **Site Structure Organization**: Arranged (and rearranged) the layout for better navigation.
- **GitHub Pages / Vercel Deployment**: Experimented with GitHub Actions for deployment, landed on Vercel.

## Features

- Simple, clean design
- Responsive layout for all devices
- Dark mode support
- Static site generation for fast loading
- Easy to maintain and update

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Fonts**: [Geist](https://vercel.com/font) by Vercel
- **Deployment**: Vercel with custom domain (rhysbutler.com)
- **Testing**: Jest, React Testing Library, and Axe for accessibility testing

## Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/rhysbutler.com.git
   cd rhysbutler.com
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
src/
├── app/               # Next.js app router pages
├── components/        # React components
│   ├── layout/        # Layout components (Header, Footer)
│   └── ui/            # UI components
└── content/           # Content data
```

## Customization

### Content

- Update personal information in the page files
- Modify project details in `src/app/projects/page.tsx`
- Update contact information in `src/app/contact/page.tsx`

### Styling

- Global styles are in `src/app/globals.css`
- The site uses Tailwind CSS for styling - refer to the [Tailwind documentation](https://tailwindcss.com/docs) for customization options

## Deployment

The website is currently hosted on Vercel with the domain rhysbutler.com.

## Testing

The project includes a lightweight testing setup to ensure basic functionality and accessibility:

### Running Tests

```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch

# Run tests for CI
npm run test:ci
```

### Test Types

- **Component Tests**: Basic tests to ensure components render correctly
- **Accessibility Tests**: Using Axe to check for accessibility violations
- **Responsive Tests**: Simple tests to verify layout on different screen sizes

### CI/CD

The project uses GitHub Actions to run tests on pull requests and pushes to the main branch. The workflow includes:

1. Linting
2. Running tests
3. Building the application

## Post Release Updates

I can't imagine I'll want to update the structure of the website much, but we'll see.

- [ ] Possibly add more periodic content (blog posts?). It could be interesting to drive this from markdown files—I'll have to investigate best practices here.
- [ ] It might be fun to try and restyle/rebrand the page, just to see how Claude performs at this.
- [ ] It could also be interesting to have different models evaluate the code.
- [x] Some basic testing — but it seems laborious for a project like this. Update: Cursor set up some tests to provide some safety without requiring significant time investment or maintenance burden.

---

Built with ♥ using Next.js, Tailwind CSS on Cursor and maximum vibe.
