import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="py-12 md:py-16 lg:py-20">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col gap-8">
            {/* Hero Section with About Content */}
            <section className="text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
                <div className="w-32 h-32 relative rounded-full overflow-hidden flex-shrink-0">
                  <Image 
                    src="/img/memoji.png" 
                    alt="Rhys Butler" 
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Hi, I'm Rhys Butler
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
                    Head of Development at Rapid
                  </p>
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="mb-4">
                      Hi, I'm Rhys, I live in Sydney, Australia, and I love making awesome software!
                    </p>
                    <p className="mb-4">
                      While I love designing code and user-centered software, I've also had the privilege to lead some fantastic engineering teams and work with some great companies.
                    </p>
                    <p className="mb-4">
                      I've even co-founded a few companies of my own.
                    </p>
                    <p className="mb-4">
                      I'm currently working at <a href="https://rapidglobal.com" target="_blank" rel="noopener noreferrer">Rapid</a> as Head of Development, helping the newly formed Rapid WFM team (Formerly Rapid) and Rapid Aware team (Formerly Nirovision) to come together to deliver a unique whole product offering in the Workplace safety and compliance space.
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
                I'm always open to discussing new projects, opportunities, or just having a chat about technology and development.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Email:</span>
                      <a 
                        href="mailto:contact@rhysbutler.com" 
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        contact@rhysbutler.com
                      </a>
                    </li>
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
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Quick Message</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Feel free to reach out via email or connect with me on social media. I'll get back to you as soon as possible.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    For professional inquiries, LinkedIn is the best way to reach me.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
