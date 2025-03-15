import Container from "@/components/ui/Container";
import Image from "next/image";
import { Callout } from "@/components/ui/Callout";

export const metadata = {
  title: "Work | Rhys Butler",
  description: "Professional experience and projects by Rhys Butler, Head of Development at Rapid",
};

export default function WorkPage() {
  return (
    <div className="py-12 md:py-16">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Work</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
            A selection of projects I&apos;ve worked on throughout my career.
          </p>
          
          {/* Rapid */}
          <div className="mb-16">
            <h2 className="text-xl font-semibold mb-3">Rapid - Dec 2023 to Present</h2>
            <div className="mb-4 prose dark:prose-invert">
              <p>
                Since December 2023, following the merger of Nirovision and Rapid Global, I&apos;ve been serving as Head of Development for the combined entity. In this position, I&apos;m helping the newly formed Rapid WFM team (formerly Rapid) and Rapid Aware team (formerly Nirovision) to integrate and deliver a unique whole product offering in the workplace safety and compliance space.
              </p>
              <a 
                href="https://rapidglobal.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
              >
                Visit Rapid
              </a>
            </div>
          </div>
          
          {/* Nirovision */}
          <div className="mb-16">
            <h2 className="text-xl font-semibold mb-3">Nirovision - Jan 2018 to Nov 2023</h2>
            <div className="mb-4 prose dark:prose-invert">
              <p>
                My journey with Nirovision began in January 2018 as Engineering Manager for the Aware Team, where I oversaw the development of Nirovision&apos;s mobile and desktop applications, focusing on creating exceptional user experiences.
              </p>
              <p>
                From February 2020 to November 2023, I served as Head of Development at Nirovision, leading the entire development team and overseeing the Nirovision Identity Recognition Platform and our award-winning mobile and web applications. Our focus was on delivering best-in-class face recognition, cloud and edge systems, and creating superior user experiences for our customers.
              </p>
              <div className="mt-6">
                <Callout variant="info" title="Company Milestone">
                  In February 2024, Nirovision announced a merger with Rapid Global.{" "}
                  <a 
                    href="https://www.nirovision.com/blog/nirovision-and-rapid-join-forces" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline hover:opacity-80"
                  >
                    Read more
                  </a>.
                </Callout>
              </div>
            </div>
          </div>
          
          {/* Fark Parking */}
          <div className="mb-16">
            <h2 className="text-xl font-semibold mb-3">Fark Parking - Feb 2018</h2>
            <div className="mb-4 overflow-hidden rounded-lg">
              <Image 
                src="/img/fark.png" 
                alt="Fark Parking App" 
                width={800} 
                height={450}
                className="w-full object-cover"
              />
            </div>
            <h3 className="text-lg font-medium mb-2">WHERE THE FARK DID I PARK?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
                Fark is a simple parking app designed for use in multi-level, multi-bay carparks. Never put a level, row, section or bay in notes or your camera roll ever again - Fark yeah!
            </p>
          </div>
          
          {/* Cammy */}
          <div className="mb-16">
            <h2 className="text-xl font-semibold mb-3">Cammy - 2014 ~ 2017</h2>
            <div className="mb-4 overflow-hidden rounded-lg">
              <Image 
                src="/img/cammy.jpg" 
                alt="Cammy App" 
                width={800} 
                height={450}
                className="w-full object-cover"
              />
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A home monitoring and security system, Cammy was born out of a desire to use technology to make the world safer. Watch over your home, family, pets and possessions, anytime from anywhere. Peace of mind is really this simple.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Cammy captures all motion detected events which you can view from the app. When you leave home the alarm automatically activates and sends you an alert if a person is detected. Guarantees no false alarms.
            </p>
            <a 
              href="https://cammy.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
            >
              Visit Website
            </a>
          </div>
          
          {/* The Plot */}
          <div className="mb-16">
            <h2 className="text-xl font-semibold mb-3">The Plot - 2013 ~ 2017</h2>
            <div className="mb-4 overflow-hidden rounded-lg">
              <Image 
                src="/img/theplot-mac.png" 
                alt="The Plot" 
                width={800} 
                height={450}
                className="w-full object-cover"
              />
            </div>
            <h3 className="text-lg font-medium mb-2">MUSIC FESTIVAL & INTEGRATED SOCIAL EXPERIENCE</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A partnership with veteren festival promoters Cattleyard (Groovin&apos; the Moo) led to the creation of The Plot. A fusion of Live Event and Online Experiences. Driven by Cattleyards desire to bring the audience to the forefront of an event, this tightly integrated online social system allows the audience to take claim of the festival and interact with artists, promoters and fellow dance addicts.
            </p>
            <a 
              href="http://theplot.co" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
            >
              Visit Website
            </a>
          </div>
          
          {/* Earlier Work */}
          <div className="mb-16">
            <h2 className="text-xl font-semibold mb-3">Earlier Work - Emotum</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I was previously a Development Director and co-counder of Emotum, an application developer providing bespoke and off-shelf solutions to the telecommunications industry in Australia, Europe and Asia. Emotum provides customer self help and support software solutions with a focus on User Experience and usability best practices, all conceived, developed and deployed in house by the company.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Self Install Kit</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  A software application, typically installed off CD, designed to help customers self-activate their broadband connection, with the primary goal of reducing or eliminating the need for an on-site technician or even a support call.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Connection Centre</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Connection Centre was designed for download and install post-activation for Windows clients as a sort of &quot;one-stop-shop&quot; for everything to do with your fixed line broadband service and home network.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Mobile Broadband Client</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  With a burgeoning mobile broadband market emerging in the early 2000&apos;s, Emotum saw a opportunity to improve the experience of a class of software that had received very little love with regards to design first-principles or a focus on user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
} 