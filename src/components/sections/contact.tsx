
"use client";

import { Button } from '@/components/ui/button';
import { useSound } from '@/hooks/use-sound';
import { Github, Linkedin, Mail, FileText, Send, Phone } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useState, useEffect } from 'react';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/pramesh-luitel-098aa3229/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/PrameshLuitel', label: 'GitHub' },
  { icon: Mail, href: 'mailto:contact@prameshluitel.com.np', label: 'Email' },
  { icon: Phone, href: 'tel:+9779761774474', label: 'Call' },
  { icon: FileText, href: 'https://drive.google.com/uc?export=download&id=1HXLUTJX7ggXZ-mbA8wuFiF-wG6KOo0Cg', label: 'CV' },
]

const ContactSection = () => {
  const { playHoverSound } = useSound();
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    setIsMobile(mobile);
  }, []);


  const phoneNumber = '+977-9761774474';

  const CallButton = () => {
    if (!isMounted) {
      // Render a placeholder or null on the server and initial client render
      return (
        <Button size="lg" className="flex-1" disabled>
          <Phone className="mr-2 h-5 w-5" />
          Call Me
        </Button>
      );
    }

    if (isMobile) {
      return (
        <Button asChild size="lg" className="flex-1 text-glow bg-primary text-primary-foreground hover:bg-primary/90" onMouseEnter={playHoverSound}>
          <a href={`tel:${phoneNumber}`}>
              <Phone className="mr-2 h-5 w-5" />
              Call Me
          </a>
        </Button>
      );
    }

    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button size="lg" className="flex-1 text-glow bg-primary text-primary-foreground hover:bg-primary/90" onMouseEnter={playHoverSound}>
            <Phone className="mr-2 h-5 w-5" />
            Call Me
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>My Contact Number</AlertDialogTitle>
            <AlertDialogDescription>
              You can reach me directly at the number below.
            </AlertDialogDescription>
            <div className="font-mono text-lg text-foreground bg-secondary/50 rounded-md p-3 border border-primary/20 mt-4 w-full text-center">
              {phoneNumber}
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  };


  return (
    <section id="contact" className="scroll-section p-4 md:p-8">
      <div className="z-10 container mx-auto flex flex-col items-center justify-center gap-12 max-w-4xl text-center">
        <div>
          <h2 className="font-headline text-4xl md:text-5xl text-glow text-primary dark:text-glow mb-4">Connect & Collaborate</h2>
          <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
            Seeking opportunities to drive innovation at the intersection of finance and technology. Let's discuss how my expertise can generate value for your organization.
          </p>
        </div>
        
        <div className="w-full max-w-md text-center">
            <h3 className="font-headline text-2xl text-primary mb-4">Get in Touch</h3>
            <p className="text-muted-foreground mb-2">The best way to reach me is by email or phone.</p>
            <p className="font-mono text-lg text-foreground bg-secondary/50 rounded-md p-3 inline-block border border-primary/20 mb-4">
              contact@prameshluitel.com.np
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="flex-1 text-glow bg-primary text-primary-foreground hover:bg-primary/90" onMouseEnter={playHoverSound}>
                <a href="mailto:contact@prameshluitel.com.np">
                    <Send className="mr-2 h-5 w-5" />
                    Email Me
                </a>
                </Button>
                <CallButton />
            </div>
        </div>

        <div className="w-full max-w-md text-center">
            <h3 className="font-headline text-xl text-primary mb-4">Or find me on</h3>
            <div className="flex justify-center md:justify-center space-x-6">
                {socialLinks.map(link => (
                <a 
                    key={link.label} 
                    href={link.href} 
                    aria-label={link.label} 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-foreground hover:text-primary transition-colors" 
                >
                    <link.icon className="w-8 h-8 icon-glow"/>
                </a>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
