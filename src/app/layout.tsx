import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'Pramesh Luitel | Portfolio',
  description: 'Portfolio of Pramesh Luitel, showcasing projects and expertise in finance, AI, and technology.',
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
    "url": "https://prameshluitel.com.np",
    "jobTitle": "Finance and Technology Professional",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "University of Delhi"
    },
    "knowsAbout": ["Finance", "Artificial Intelligence", "Automation", "Financial Analytics", "Investment Banking", "Natural Language Processing"],
    "sameAs": [
      "https://www.linkedin.com/in/pramesh-luitel-098aa3229/",
      "https://github.com/PrameshLuitel"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
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
