"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about-me', label: 'About Me' },
  { href: '#projects', label: 'Projects' },
  { href: '#research', label: 'Research Papers' },
  { href: '#vestara', label: 'Vestara GPT' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetId = id.substring(1); 
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/80 backdrop-blur-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-foreground dark:text-glow">
              Pramesh Luitel
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(({ href, label }) => (
              <a 
                key={label}
                href={href} 
                onClick={(e) => scrollToSection(e, href)}
                className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-primary dark:hover:text-glow transition-all"
              >
                {label}
              </a>
            ))}
            <ThemeToggle />
          </div>
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <Button onClick={() => setIsOpen(!isOpen)} variant="ghost" size="icon" className="ml-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(({ href, label }) => (
              <a 
                key={label}
                href={href} 
                onClick={(e) => scrollToSection(e, href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
