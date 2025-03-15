# Rhys Butler - Personal Website

A modern, responsive personal website built with Next.js and Tailwind CSS.

## Features

- Modern, clean design
- Responsive layout for all devices
- Dark mode support
- Static site generation for fast loading
- Easy to maintain and update

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Fonts**: [Geist](https://vercel.com/font) by Vercel
- **Deployment**: Vercel (recommended), Netlify, or GitHub Pages

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

### Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a GitHub repository
2. Import the project to Vercel
3. Vercel will detect Next.js automatically and use the optimal build settings

### Other Deployment Options

- **Netlify**: Connect your GitHub repository to Netlify
- **GitHub Pages**: Use the `next export` command to generate static files

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Rhys Butler - [contact@rhysbutler.com](mailto:contact@rhysbutler.com)

---

Built with ♥ using Next.js and Tailwind CSS
