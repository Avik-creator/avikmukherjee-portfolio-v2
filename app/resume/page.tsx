"use client";

import { useState, useEffect } from "react";
import {
  DownloadIcon,
  PrinterIcon,
  GithubIcon,
  GlobeIcon,
  LinkedinIcon,
} from "lucide-react";
import BackNavigation from "@/components/back-navigation";
import Link from "next/link";
import PeerlistIcon from "@/public/Peerlist.svg";
import Image from "next/image";

export default function ResumePage() {
  const [isPrinting, setIsPrinting] = useState(false);

  // Add print styles without styled-jsx to avoid auto-generated class names
  useEffect(() => {
    const printStyles = `
      @media print {
        body {
          background: white !important;
          color: black !important;
        }
        .print\\:hidden {
          display: none !important;
        }
        
        footer {
          display: none !important;
        }
        
        * {
          -webkit-print-color-adjust: exact !important;
          color-adjust: exact !important;
        }
        
        .text-stone-100,
        .text-neutral-100,
        .text-neutral-200,
        .text-neutral-400,
        .text-neutral-500,
        .text-gray-900,
        .text-gray-700,
        .text-gray-600 {
          color: black !important;
        }
        
        a {
          color: #2563eb !important;
        }
        
        h1 {
          font-size: 24px !important;
          font-weight: bold !important;
          text-align: center !important;
          margin-bottom: 16px !important;
        }
        
        h2 {
          font-size: 16px !important;
          font-weight: bold !important;
          border-bottom: 1px solid #d1d5db !important;
          padding-bottom: 4px !important;
          margin-bottom: 16px !important;
          margin-top: 24px !important;
        }
        
        h3 {
          font-size: 14px !important;
          font-weight: 600 !important;
        }
        
        p, li {
          font-size: 12px !important;
          line-height: 1.4 !important;
        }
        
        .space-y-12 > * + * {
          margin-top: 24px !important;
        }
        
        .space-y-8 > * + * {
          margin-top: 16px !important;
        }
        
        .space-y-6 > * + * {
          margin-top: 12px !important;
        }
        
        .space-y-2 > * + * {
          margin-top: 4px !important;
        }
        
        .space-y-1 > * + * {
          margin-top: 2px !important;
        }
        
        @page {
          margin: 0.5in;
          size: A4;
        }
        
        .max-w-4xl {
          max-width: none !important;
        }
        
        .mx-auto {
          margin-left: 0 !important;
          margin-right: 0 !important;
        }
        
        .mb-32 {
          margin-bottom: 0 !important;
        }
      }
    `;

    const styleElement = document.createElement("style");
    styleElement.textContent = printStyles;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  const handlePrint = () => {
    setIsPrinting(true);
    setTimeout(() => {
      window.print();
      setIsPrinting(false);
    }, 100);
  };

  const resumeUrl =
    "https://docs.google.com/document/d/1KZ0hvzUtQV_F0gGc8Bw6j5E-RsyaFhx6OXhyzdu_r5Y/edit?usp=sharing";

  const handleDownload = () => {
    window.open(resumeUrl, "_blank");
  };

  return (
    <div className="max-w-4xl mx-auto mb-32 text-gray-700 dark:text-neutral-400">
      <div className="print:hidden">
        <BackNavigation href="/">back</BackNavigation>
      </div>
      {/* Resume Actions - Hidden in print */}
      <div className="mb-8 print:hidden mt-8">
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div className="flex flex-col">
            <button
              onClick={handlePrint}
              disabled={isPrinting}
              className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-neutral-800 hover:bg-gray-300 dark:hover:bg-neutral-700 text-gray-800 dark:text-neutral-200 rounded-lg transition-colors disabled:opacity-50"
            >
              <PrinterIcon className="w-4 h-4" />
              {isPrinting ? "Preparing..." : "Print this page"}
            </button>
            <p className="text-xs text-gray-600 dark:text-neutral-500 mt-1">
              Save this page as PDF
            </p>
          </div>

          <div className="flex flex-col">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-neutral-800 hover:bg-gray-300 dark:hover:bg-neutral-700 text-gray-800 dark:text-neutral-200 rounded-lg transition-colors"
            >
              <DownloadIcon className="w-4 h-4" />
              Download Google Docs Version
            </button>
            <p className="text-xs text-gray-600 dark:text-neutral-500 mt-1">
              Download Google Docs Version
            </p>
          </div>
        </div>
      </div>

      {/* Resume Content */}
      <div className="space-y-12">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-3xl font-serif font-medium text-gray-900 dark:text-stone-100 mb-4">
            AVIK MUKHERJEE
          </h1>
          <div className="space-y-2 text-gray-600 dark:text-neutral-400">
            <p>
              Hyderabad |{" "}
              <Link
                href="tel:+919668066031"
                className="text-gray-700 dark:text-stone-300 underline decoration-gray-500 dark:decoration-stone-400 decoration-[0.5px] underline-offset-4 transition-colors hover:text-gray-900 dark:hover:text-stone-200"
              >
                +919668066031
              </Link>{" "}
              |{" "}
              <Link
                href="mailto:avikm744@gmail.com"
                className="text-gray-700 dark:text-stone-300 underline decoration-gray-500 dark:decoration-stone-400 decoration-[0.5px] underline-offset-4 transition-colors hover:text-gray-900 dark:hover:text-stone-200"
              >
                avikm744@gmail.com
              </Link>
            </p>
            <p>
              <div className="flex flex-wrap gap-4 justify-center">
                <span>
                  <Link
                    href="https://github.com/Avik-creator"
                    target="_blank"
                    className="text-gray-700 dark:text-stone-300 underline decoration-gray-500 dark:decoration-stone-400 decoration-[0.5px] underline-offset-4 transition-colors hover:text-gray-900 dark:hover:text-stone-200 flex items-center gap-1"
                  >
                    <GithubIcon className="w-4 h-4" />
                    Github
                  </Link>
                </span>
                <span>
                  <Link
                    href="https://avikmukherjee.me"
                    target="_blank"
                    className="text-gray-700 dark:text-stone-300 underline decoration-gray-500 dark:decoration-stone-400 decoration-[0.5px] underline-offset-4 transition-colors hover:text-gray-900 dark:hover:text-stone-200 flex items-center gap-1"
                  >
                    <GlobeIcon className="w-4 h-4" />
                    Portfolio
                  </Link>
                </span>
                <span>
                  <Link
                    href="https://www.linkedin.com/in/avik-mukherjee-8ab9911bb/"
                    target="_blank"
                    className="text-gray-700 dark:text-stone-300 underline decoration-gray-500 dark:decoration-stone-400 decoration-[0.5px] underline-offset-4 transition-colors hover:text-gray-900 dark:hover:text-stone-200 flex items-center gap-1"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    Linkedin
                  </Link>
                </span>
                <span>
                  <Link
                    href="https://peerlist.io/avikmukherjee/"
                    target="_blank"
                    className="text-gray-700 dark:text-stone-300 underline decoration-gray-500 dark:decoration-stone-400 decoration-[0.5px] underline-offset-4 transition-colors hover:text-gray-900 dark:hover:text-stone-200 flex items-center gap-1"
                  >
                    <Image
                      src={PeerlistIcon}
                      alt="Peerlist"
                      className="w-4 h-4"
                    />
                    Peerlist
                  </Link>
                </span>
              </div>
            </p>
          </div>
        </header>

        {/* Work Experience */}
        <section>
          <h2 className="text-xl font-medium text-gray-900 dark:text-neutral-100 mb-6">
            Work Experience
          </h2>

          <div className="space-y-10">
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                    SuperAlign AI
                  </h3>
                  <p className="text-gray-600 dark:text-neutral-400">
                    Software Engineer
                  </p>
                </div>
                <div className="text-right text-gray-600 dark:text-neutral-500 text-sm">
                  <p>Hyderabad</p>
                  <p>August 2025-Present</p>
                </div>
              </div>
              <div className="space-y-1 text-gray-600 dark:text-neutral-400 text-sm">
                <p>
                  • Built a Chrome Extension to capture and analyze user
                  interactions with multiple AI platforms (e.g., ChatGPT,
                  Claude, Gemini, Perplexity).
                </p>
                <p>
                  • Implemented real-time request interception and blocking,
                  preventing sensitive data from being sent and alerting users
                  through custom popups.
                </p>
                <p>
                  • Collaborated across frontend, backend, and security teams to
                  integrate captured insights into analytics workflows and
                  improve monitoring accuracy.
                </p>
              </div>
            </div>
            {/* SuperAlign AI */}
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                    SuperAlign AI
                  </h3>
                  <p className="text-gray-600 dark:text-neutral-400">
                    Software Engineer Intern
                  </p>
                </div>
                <div className="text-right text-gray-600 dark:text-neutral-500 text-sm">
                  <p>Remote</p>
                  <p>April 2025-August 2025</p>
                </div>
              </div>
              <div className="space-y-1 text-gray-600 dark:text-neutral-400 text-sm">
                <p>
                  • Developed responsive frontend interfaces using Next.js,
                  ensuring high design fidelity and performance.
                </p>
                <p>
                  • Built a scalable backend with HonoJS and DrizzleORM,
                  enabling structured API routes and efficient database
                  interactions.
                </p>
                <p>
                  • Built a Python WebScrapper using Craw4AI for scrapping web
                  pages and converting them in a markdown report.
                </p>
              </div>
            </div>

            {/* DataFoundry AI */}
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                    DataFoundry AI
                  </h3>
                  <p className="text-gray-600 dark:text-neutral-400">
                    Trainee Engineer
                  </p>
                </div>
                <div className="text-right text-gray-600 dark:text-neutral-500 text-sm">
                  <p>Remote</p>
                  <p>Sept 2024 – March 2025</p>
                </div>
              </div>
              <div className="space-y-1 text-gray-600 dark:text-neutral-400 text-sm">
                <p>
                  • Created a JavaScript script that allows automatic conversion
                  of CSV data into RDF triples along with nodes.
                </p>
                <p>
                  • Implemented Azure Data Factory pipelines to dynamically
                  process data from the Database, implementing parameterized
                  queries, Azure Blob Storage and real-time monitoring to ensure
                  efficient workflows.
                </p>
                <p>
                  • Worked with the Frontend team where my responsibility was to
                  implement Role-Based-Access-Control (RBAC) by designing
                  frontend-logic for access management.
                </p>
              </div>
            </div>

            {/* Dank */}
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                    Dank
                  </h3>
                  <p className="text-gray-600 dark:text-neutral-400">
                    Mobile Developer Intern
                  </p>
                </div>
                <div className="text-right text-gray-600 dark:text-neutral-500 text-sm">
                  <p>Remote</p>
                  <p>Nov 2023 – Feb 2024</p>
                </div>
              </div>
              <div className="space-y-1 text-gray-600 dark:text-neutral-400 text-sm">
                <p>
                  • Led the development of core features using React Native with
                  Expo accounting for over 60% of the application, and
                  significantly improving its functionality and performance
                  metrics.
                </p>
                <p>
                  • Collaborated with cross-functional teams to integrate new
                  API&apos;s, reducing application page load times by 40% and
                  enhancing overall application performance.
                </p>
              </div>
            </div>

            {/* Auctopus Technology */}
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                    Auctopus Technology
                  </h3>
                  <p className="text-gray-600 dark:text-neutral-400">
                    Frontend Developer Intern
                  </p>
                </div>
                <div className="text-right text-gray-600 dark:text-neutral-500 text-sm">
                  <p>Remote</p>
                  <p>June 2023 – Aug 2023</p>
                </div>
              </div>
              <div className="space-y-1 text-gray-600 dark:text-neutral-400 text-sm">
                <p>
                  • Implemented Redux state management which resulted in 20%
                  increase in application efficiency.
                </p>
                <p>
                  • Collaborated with cross-functional teams to integrate new
                  API&apos;s, reducing application page load times by 40% and
                  enhancing overall application performance.
                </p>
                <p>
                  • Implemented Cypress for automated application testing
                  resulting in 50% reduction in manual testing, thus improving
                  reliability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-xl font-medium text-gray-900 dark:text-neutral-100 mb-6">
            Projects
          </h2>

          <div className="space-y-8">
            {/* FormCraftAI */}
            <div className="space-y-2">
              <div>
                <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                  FROMCRAFTAI
                </h3>
                <p className="text-gray-600 dark:text-neutral-500 text-sm italic">
                  (NextJS, TailwindCSS, Zustand, TanstackQuery, Clerk, MongoDB,
                  Gemini, Polar)
                </p>
              </div>
              <div className="space-y-1 text-gray-600 dark:text-neutral-400 text-sm">
                <p>
                  • Built a scalable and responsive SaaS application with
                  Next.js, React, TypeScript, Drizzle ORM, and Tailwind CSS,
                  featuring AI-powered form generation and a drag-and-drop
                  builder, used by 30+ users.
                </p>
                <p>
                  • Implemented Clerk auth and Polar billing with secure routes,
                  subscriptions, portals, and webhook syncing.
                </p>
                <p>
                  • Built a scalable and responsive web application with Drizzle
                  ORM, Tailwind CSS, and dynamic AI-based form generation used
                  by 50 users.
                </p>
              </div>
            </div>

            {/* WebTracker */}
            <div className="space-y-2">
              <div>
                <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                  WEBTRACKER
                </h3>
                <p className="text-gray-600 dark:text-neutral-500 text-sm italic">
                  (NextJS, Postgres, DrizzleORM, Tracking Script, Recharts)
                </p>
              </div>
              <div className="space-y-1 text-gray-600 dark:text-neutral-400 text-sm">
                <p>
                  • Built a privacy-focused web analytics platform providing
                  device analytics, traffic source analysis, and performance
                  metrics.
                </p>
                <p>
                  • Designed and implemented an intuitive dashboard with live
                  charts and global audience visualizations using Recharts.
                </p>
                <p>
                  • Built a lightweight custom tracking script for seamless
                  integration across JavaScript and Next.js projects, optimizing
                  performance and preserving user privacy used by 40+ users.
                </p>
              </div>
            </div>

            {/* AI PPT Generator */}
            <div className="space-y-2">
              <div>
                <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                  Pulse Ping
                </h3>
                <p className="text-gray-600 dark:text-neutral-500 text-sm italic">
                  (NextJS, Go, PostgreSQL, Redis, Resend, Google OAuth)
                </p>
              </div>
              <div className="space-y-1 text-gray-600 dark:text-neutral-400 text-sm">
                <p>
                  • Developed a full-stack server monitoring platform with a
                  Next.js frontend and Go backend, featuring Google OAuth
                  authentication and JWT-based secure sessions.
                </p>
                <p>
                  • Implemented real-time server health checks (every 5 minutes)
                  with Redis workers and automated email notifications via
                  Resend for downtime alerts.
                </p>
                <p>
                  • Designed a scalable backend using Gin, GORM, PostgreSQL, and
                  Docker for containerized deployment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer Experience */}
        <section>
          <h2 className="text-xl font-medium text-gray-900 dark:text-neutral-100 mb-6">
            Volunteer Experience
          </h2>

          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                  GDG MAKAUT
                </h3>
                <p className="text-gray-600 dark:text-neutral-400">
                  Community Lead
                </p>
              </div>
              <div className="text-right text-gray-600 dark:text-neutral-500 text-sm">
                <p>Remote</p>
                <p>2023 – 2024</p>
              </div>
            </div>
            <div className="text-gray-600 dark:text-neutral-400 text-sm">
              <p>
                • Collaborated with various teams to conduct over 10+ events,
                engaging over 300+ students which directly contributed to an
                increment in technical awareness by 30%.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section>
          <h2 className="text-xl font-medium text-gray-900 dark:text-neutral-100 mb-6">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-2 text-sm text-gray-600 dark:text-neutral-400">
            <div className="space-y-2">
              <p>
                <span className="text-gray-800 dark:text-neutral-200">
                  Languages:
                </span>{" "}
                JavaScript, Python, Go
              </p>
              <p>
                <span className="text-gray-800 dark:text-neutral-200">
                  Frameworks:
                </span>{" "}
                Express.js, React.js, Next.js, React Native, Redux, Vite,
                Playwright, Cypress, Jest, Gin
              </p>
              <p>
                <span className="text-gray-800 dark:text-neutral-200">
                  Cloud & Platforms:
                </span>{" "}
                Azure, Linux, OSx
              </p>
            </div>
            <div className="space-y-1">
              <p>
                <span className="text-gray-800 dark:text-neutral-200">
                  Runtimes:
                </span>{" "}
                NodeJS, Bun
              </p>
              <p>
                <span className="text-gray-800 dark:text-neutral-200">
                  ORM and Database:
                </span>{" "}
                Prisma, Drizzle, Mongoose, PostgreSQL, MySQL, SQLite, MongoDB
              </p>
              <p>
                <span className="text-gray-800 dark:text-neutral-200">
                  Tools:
                </span>{" "}
                Docker, Git
              </p>
              <p>
                <span className="text-gray-800 dark:text-neutral-200">
                  Soft Skills:
                </span>{" "}
                Leadership, Event Management, Writing, Public Speaking, Time
                Management
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xl font-medium text-gray-900 dark:text-neutral-100 mb-6">
            Education
          </h2>

          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                MAULANA ABUL KALAM AZAD UNIVERSITY OF TECHNOLOGY
              </h3>
              <p className="text-gray-600 dark:text-neutral-400">
                Bachelor of Engineering
              </p>
            </div>
            <div className="text-right text-gray-600 dark:text-neutral-500 text-sm">
              <p>Kalyani, WB</p>
              <p>2021-2025</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
