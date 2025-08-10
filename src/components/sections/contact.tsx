import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Mail, href: 'mailto:#', label: 'Email' },
  { icon: FileText, href: '#', label: 'Research Papers' },
]

const ContactSection = () => {
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
              <a key={link.label} href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <link.icon className="w-8 h-8 icon-glow"/>
              </a>
            ))}
          </div>
        </div>
        <div className="flex-1 w-full">
          <form className="space-y-4">
            <Input type="text" placeholder="Your Name" className="bg-background/50 backdrop-blur-sm" />
            <Input type="email" placeholder="Your Email" className="bg-background/50 backdrop-blur-sm" />
            <Textarea placeholder="Your Message" className="bg-background/50 backdrop-blur-sm" />
            <Button type="submit" className="w-full text-glow border border-primary" variant="outline">
              Send Inquiry
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;