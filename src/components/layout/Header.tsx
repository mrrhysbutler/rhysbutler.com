import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-6 md:py-8 border-b border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            Rhys Butler
          </Link>
          
          <ul className="flex items-center space-x-6">
            <li>
              <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/work" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                Work
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 