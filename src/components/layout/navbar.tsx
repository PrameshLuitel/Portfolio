"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

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
  const [activeSection, setActiveSection] = useState('#home');
  const mainContainerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    mainContainerRef.current = document.querySelector('.scroll-container');

    const handleScroll = () => {
      const scrollPosition = mainContainerRef.current?.scrollTop || 0;
      let currentActiveSection = '';

      navLinks.forEach(link => {
        const section = document.getElementById(link.href.substring(1));
        if (section) {
          const sectionTop = section.offsetTop - 100; // offset for better accuracy
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentActiveSection = link.href;
          }
        }
      });
      
      if (currentActiveSection) {
        setActiveSection(currentActiveSection);
      }
    };

    const container = mainContainerRef.current;
    container?.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, []);


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
            <Link href="/" className="text-xl font-bold text-foreground">
              Pramesh Luitel
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(({ href, label }) => (
              <a 
                key={label}
                href={href} 
                onClick={(e) => scrollToSection(e, href)}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-primary dark:hover:text-primary transition-all",
                  activeSection === href && "text-primary dark:text-primary"
                )}
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
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent",
                  activeSection === href && "text-primary bg-accent"
                )}
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
