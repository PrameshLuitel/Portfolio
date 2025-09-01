import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vestara GPT | AI-Powered Investment Intelligence for NEPSE',
  description: 'Project Vestara is an advanced AI-powered investment intelligence platform designed to redefine how financial professionals in Nepal access, interpret, and act on critical regulatory and market data.',
};

export default function VestaraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
        {children}
    </section>
  );
}
