
"use client";

import { Button } from '@/components/ui/button';
import { useSound } from '@/hooks/use-sound';
import { Github, Linkedin, Mail, FileText, Send, Phone } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/pramesh-luitel-098aa3229/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/PrameshLuitel', label: 'GitHub' },
  { icon: Mail, href: 'mailto:contact@prameshluitel.com.np', label: 'Email' },
  { icon: Phone, href: 'tel:+9779761774474', label: 'Call' },
  { icon: FileText, href: 'https://drive.google.com/uc?export=download&id=1PY3-9VC9wAUVdzM5iyWciKlkx4n1J7uD', label: 'CV' },
]

const ContactSection = () => {
  const { playHoverSound } = useSound();

  return (
    <section id="contact" className="scroll-section p-4 md:p-8">
      <div className="z-10 container mx-auto flex flex-col items-center justify-center gap-12 max-w-4xl text-center">
        <div>
          <h2 className="font-headline text-4xl md:text-5xl text-glow mb-4">Connect & Collaborate</h2>
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
                <Button asChild size="lg" className="flex-1 text-glow border-primary text-primary hover:bg-primary hover:text-primary-foreground" variant="outline" onMouseEnter={playHoverSound}>
                <a href="mailto:contact@prameshluitel.com.np">
                    <Send className="mr-2 h-5 w-5" />
                    Email Me
                </a>
                </Button>
                <Button asChild size="lg" className="flex-1 text-glow border-primary text-primary hover:bg-primary hover:text-primary-foreground" variant="outline" onMouseEnter={playHoverSound}>
                <a href="tel:+9779761774474">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Me
                </a>
                </Button>
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
