
"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ThemeSwitch } from './theme-switch';
import { Menu, X, ChevronDown, Download, Linkedin, Github, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion } from 'framer-motion';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about-me', label: 'About Me', isDropdown: true, items: [
    { href: 'https://drive.google.com/uc?export=download&id=1PY3-9VC9wAUVdzM5iyWciKlkx4n1J7uD', label: 'Download CV', isDownload: true, icon: Download, isExternal: true },
    { href: 'https://www.linkedin.com/in/pramesh-luitel-098aa3229/', label: 'LinkedIn', isExternal: true, icon: Linkedin },
    { href: 'https://github.com/PrameshLuitel', label: 'GitHub', isExternal: true, icon: Github },
    { href: 'mailto:contact@prameshluitel.com.np', label: 'Email', isExternal: true, icon: Mail },
  ]},
  { href: '#projects', label: 'Projects' },
  { href: '#research', label: 'Research' },
  { href: '/vestara', label: 'Vestara GPT' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const mainContainerRef = useRef<HTMLElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    mainContainerRef.current = document.querySelector('.scroll-container');
    const container = mainContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container?.scrollTop || 0;
      setIsScrolled(scrollPosition > 10);
      let currentActiveSection = '';

      navLinks.forEach(link => {
        if (!link.href.startsWith('#')) return;
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
    
    container?.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, [isMounted]);

  const scrollToSection = (e: React.MouseEvent<HTMLElement>, id: string) => {
    if (!id.startsWith('#')) return;
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

  const NavItem = ({ link }: { link: (typeof navLinks)[0] }) => {
    if (link.href.startsWith('/')) {
        return (
            <Link href={link.href}
                className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-primary transition-all",
                    activeSection === link.href && "text-primary"
                )}
            >
                {link.label}
            </Link>
        )
    }
      
    if (link.isDropdown) {
      return (
         <div className="flex items-center">
            <a
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-primary transition-all",
                activeSection === link.href && "text-primary"
              )}
            >
              {link.label}
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-6">
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {link.items?.map(item => (
                   <DropdownMenuItem key={item.label} asChild disabled={item.href === '#'}>
                    <a 
                      href={item.href} 
                      target={item.isExternal || item.href?.startsWith('http') || item.href?.startsWith('/projects') ? '_blank' : undefined} 
                      rel={item.isExternal || item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      download={item.isDownload && !item.isExternal ? 'pramesh-resume.pdf' : undefined}
                      onClick={(e) => {
                        if (item.href?.startsWith('/projects') || item.isExternal) {
                           // Let default behavior (navigation) happen
                        } else if (item.href?.startsWith('#')) {
                           scrollToSection(e, item.href)
                        }
                      }}
                      className="flex items-center gap-2"
                    >
                      {item.icon && <item.icon className="h-4 w-4" />}
                      {item.label}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
        </div>
      );
    }

    return (
      <a 
        href={link.href} 
        onClick={(e) => scrollToSection(e, link.href)}
        className={cn(
          "px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-primary transition-all",
          activeSection === link.href && "text-primary"
        )}
      >
        {link.label}
      </a>
    );
  };
  
  return (
    <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-md",
        isScrolled ? "border-b" : "border-b border-transparent"
    )}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-baseline gap-2">
              <motion.span layoutId="main-logo" className="text-xl font-bold text-foreground">Pramesh Luitel</motion.span>
              <motion.span layoutId="main-subtitle" className="text-xs text-muted-foreground hidden lg:block">| Creative Solutions to Eliminate Inefficiency</motion.span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavItem key={link.label} link={link} />
            ))}
            <ThemeSwitch />
          </div>
          <div className="md:hidden flex items-center">
            <ThemeSwitch />
            <Button onClick={() => setIsOpen(!isOpen)} variant="ghost" size="icon" className="ml-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                onClick={(e) => {
                    if (link.href.startsWith('/')) return;
                    scrollToSection(e, link.href);
                }}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent",
                  activeSection === link.href && "text-primary bg-accent"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
