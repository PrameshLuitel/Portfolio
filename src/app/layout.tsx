import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  metadataBase: new URL('https://prameshluitel.com.np'),
  title: 'Pramesh Luitel | AI in Finance, Automation & Investment Banking Portfolio',
  description: 'The official portfolio of Pramesh Luitel (also known as Pramish Luitel), a finance and technology professional specializing in AI-driven financial analytics, investment banking automation, NLP for stock prediction, and full-stack development. Discover projects, research, and the vision for Vestara GPT by Pramesh Luitel.',
  keywords: "Pramesh Luitel, Pramish Luitel, Rapmish Kuitel, Luitel, Pramesh, Pramish, AI in Finance, Investment Banking, Automation, Financial Analytics, Portfolio Management, NLP, LSTM, Python, Next.js, Vestara GPT, Nepal Stock Market, NEPSE, SEBON, Global IME Capital, Ramjas College, University of Delhi",
  creator: "Pramesh Luitel",
  authors: [{name: "Pramesh Luitel", url: "https://prameshluitel.com.np"}],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Pramesh Luitel",
    "alternateName": ["Pramish Luitel", "Rapmish Kuitel", "Luitel"],
    "url": "https://prameshluitel.com.np",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://prameshluitel.com.np"
    },
    "jobTitle": "AI in Finance Specialist | Automation Expert | Investment Banking Technologist",
    "description": "Pramesh Luitel is a finance and technology professional specializing in AI-driven financial analytics, investment banking automation, and predictive modeling for capital markets. He is the founder of Project Vestara, an AI-powered investment intelligence platform for Nepal's financial sector, and has direct experience in portfolio management services from his work at Global IME Capital Limited.",
    "nationality": "Nepalese",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "University of Delhi",
      "sameAs": "https://en.wikipedia.org/wiki/University_of_Delhi"
    },
    "knowsAbout": [
      "Artificial Intelligence (AI)",
      "Finance",
      "Investment Banking",
      "Automation",
      "Financial Analytics",
      "Portfolio Management",
      "Natural Language Processing (NLP)",
      "LSTM Models",
      "Python (Programming Language)",
      "Next.js (Web Framework)",
      "Vestara GPT",
      "Nepal Stock Market (NEPSE)",
      "Securities Board of Nepal (SEBON)",
      "Financial Modeling",
      "Sentiment Analysis",
      "Full-Stack Development"
    ],
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "bachelor's degree",
      "name": "Bachelor of Commerce (Honours)",
      "educationalLevel": "https://schema.org/BachelorDegree"
    },
    "sameAs": [
      "https://www.linkedin.com/in/pramesh-luitel-098aa3229/",
      "https://github.com/PrameshLuitel",
      "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5030130"
    ],
    "workExample": [
      {
        "@type": "CreativeWork",
        "name": "Project Vestara GPT",
        "description": "An advanced AI-powered investment intelligence platform designed to redefine how financial professionals in Nepal access, interpret, and act on critical regulatory and market data."
      },
      {
        "@type": "CreativeWork",
        "name": "Portfolio Pulse MIS System at Global IME Capital",
        "description": "An internal MIS system developed for Global IME Capital, processing Excel data into interactive dashboards for real-time portfolio analysis and replacing manual reporting processes."
      },
      {
        "@type": "ScholarlyArticle",
        "name": "Market Oscillations and Predictive Analytics: AI-Driven Insights into Nepalese Stock Market’s Indices and its Sub-Indices",
        "url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5030130",
        "author": {
          "@type": "Person",
          "name": "Pramesh Luitel"
        }
      }
    ],
    "publishingPrinciples": "https://prameshluitel.com.np/LLMs.txt"
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Space+Grotesk:wght@700&display=swap" rel="stylesheet" />
        <link rel="author" href="/humans.txt" />
        <link rel="llms" href="/LLMs.txt" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-body antialiased bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
