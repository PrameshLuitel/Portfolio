import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedCounter from '@/components/animated-counter';
import { ArrowDownLeft, BarChart, DollarSign, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: ArrowDownLeft,
    value: 40,
    label: 'Workload Reduction',
    suffix: '%',
  },
  {
    icon: DollarSign,
    value: 25,
    label: 'Seed Capital Raised',
    prefix: '$',
    suffix: 'M',
  },
  {
    icon: TrendingUp,
    value: 50,
    label: 'AUM Growth',
    prefix: '$',
    suffix: 'M',
  },
  {
    icon: BarChart,
    value: 300,
    label: 'Campaign Oversubscription',
    suffix: '%',
  },
];

const InfographicsSection = () => {
  return (
    <section className="scroll-section p-4 md:p-8">
      <div className="z-10 container mx-auto flex flex-col items-center justify-center">
        <h2 className="font-headline text-4xl md:text-5xl text-glow mb-12 text-center">Quantifiable Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-primary/20 text-center hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4 icon-glow" />
                <CardTitle className="text-lg text-muted-foreground">{stat.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-5xl font-headline text-glow">
                  {stat.prefix}
                  <AnimatedCounter target={stat.value} />
                  {stat.suffix}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfographicsSection;
