import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Rhys Butler | Head of Development at Rapid",
  description: "Personal website of Rhys Butler, Head of Development at Rapid and ex-developer",
  openGraph: {
    title: "Rhys Butler | Head of Development at Rapid",
    description: "Personal website of Rhys Butler, Head of Development at Rapid and ex-developer",
    url: "https://rhysbutler.com",
    type: "website",
    images: [
      {
        url: "https://rhysbutler.com/img/rhys-avatar.jpg",
        width: 1200,
        height: 1200,
        alt: "Rhys Butler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rhys Butler | Head of Development at Rapid",
    description: "Personal website of Rhys Butler, Head of Development at Rapid and ex-developer",
    images: ["https://rhysbutler.com/img/rhys-avatar.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  // Create structured data for the person
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rhys Butler',
    jobTitle: 'Head of Development at Rapid',
    url: 'https://rhysbutler.com',
    image: 'https://rhysbutler.com/img/rhys-avatar.jpg',
    sameAs: [
      'https://twitter.com/mrrhysbutler',
      'https://github.com/rhysbutler',
      'https://www.linkedin.com/in/rhysbutler/',
    ],
  };

  return (
    <>
      <Script
        id="person-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="pt-12 pb-8 md:pt-16 md:pb-10 lg:pt-20 lg:pb-12">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col gap-8">
              {/* Hero Section with About Content */}
              <section className="text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
                  <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-200 dark:border-gray-700 shadow-md">
                    <Image 
                      src="/img/rhys-avatar.jpg" 
                      alt="Rhys Butler" 
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 128px, 160px"
                    />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                      Hi, I&apos;m Rhys 👋
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
                      Head of Development at Rapid
                    </p>
                    <div className="prose dark:prose-invert max-w-none">
                      <p className="mb-4">
                        Based in Sydney, Australia, I specialise in crafting innovative, user-centered software products with exceptional engineering teams. I&apos;ve co-founded a few ventures along the way too.
                      </p>
                      <p className="mb-4">
                      I&apos;m also a geek, lover of beer, doting husband and proud father.
                      </p>                      
                      <p className="mb-4">
                        As Head of Development at <a href="https://rapidglobal.com" target="_blank" rel="noopener noreferrer">Rapid</a>, a global leader in AI-driven safety and compliance technology, I lead a team of experts in delivering a complete product solution to market.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6">
                      <Link 
                        href="/work" 
                        className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity text-center"
                      >
                        View My Work
                      </Link>
                      <Link 
                        href="#contact" 
                        className="border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-center"
                      >
                        Get in Touch
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Contact Section */}
              <section className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800" id="contact">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  I&apos;m always open to discussing new projects, opportunities, or just having a chat about technology and development.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <span className="font-medium mr-2">LinkedIn:</span>
                        <a 
                          href="https://linkedin.com/in/rhysbutler" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          linkedin.com/in/rhysbutler
                        </a>
                      </li>
                      <li className="flex items-center">
                        <span className="font-medium mr-2">GitHub:</span>
                        <a 
                          href="https://github.com/mrrhysbutler" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          github.com/mrrhysbutler
                        </a>
                      </li>
                      <li className="flex items-center">
                        <span className="font-medium mr-2">Twitter:</span>
                        <a 
                          href="https://twitter.com/mrrhysbutler" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          @mrrhysbutler
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
