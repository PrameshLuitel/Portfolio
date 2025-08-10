
"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useSound } from '@/hooks/use-sound';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { useState } from 'react';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/pramesh-luitel-098aa3229/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/PrameshLuitel', label: 'GitHub' },
  { icon: Mail, href: 'mailto:luitelpramesh@gmail.com', label: 'Email' },
  { icon: FileText, href: 'https://drive.google.com/uc?export=download&id=1UxNWOyHX1QNOWQXf70z0-iyRWnip5f9U', label: 'CV' },
]

const ContactSection = () => {
  const { playHoverSound } = useSound();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const mailtoHref = `mailto:luitelpramesh@gmail.com?subject=Inquiry from ${name} (${email})&body=${encodeURIComponent(message)}`;

  return (
    <section id="contact" className="scroll-section p-4 md:p-8">
      <div className="z-10 container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 max-w-4xl">
        <div className="flex-1 text-center md:text-left">
          <h2 className="font-headline text-4xl md:text-5xl text-glow mb-4">Connect & Collaborate</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Seeking opportunities to drive innovation at the intersection of finance and technology. Let's discuss how my expertise can generate value for your organization.
          </p>
          <div className="flex justify-center md:justify-start space-x-6">
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
        <div className="flex-1 w-full">
          <div className="space-y-4">
            <Input 
              type="text" 
              placeholder="Your Name" 
              className="bg-background/50 backdrop-blur-sm" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input 
              type="email" 
              placeholder="Your Email" 
              className="bg-background/50 backdrop-blur-sm" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Textarea 
              placeholder="Your Message" 
              className="bg-background/50 backdrop-blur-sm" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button asChild className="w-full text-glow border-primary text-primary hover:bg-primary hover:text-primary-foreground" variant="outline" onMouseEnter={playHoverSound}>
              <a href={mailtoHref}>
                Send Inquiry
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
