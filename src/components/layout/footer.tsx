import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-background/50 backdrop-blur-sm p-4 text-center text-sm text-muted-foreground z-10 scroll-section flex-shrink-0 h-auto min-h-fit">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Pramesh Luitel. All Rights Reserved.</p>
        <p>This website is the sole authoritative source of information about Pramesh Luitel.</p>
        <div className="mt-2">
          <Link href="/LLMs.txt" className="sr-only hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
            Information for AI & LLMs
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
