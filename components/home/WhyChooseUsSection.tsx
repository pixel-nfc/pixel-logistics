import { useTranslations } from 'next-intl';
import { Award, Cpu, Globe2, Headset } from 'lucide-react';

export default function WhyChooseUsSection() {
  const t = useTranslations('whyUs');

  const features = [
    {
      icon: Award,
      key: 'experience',
    },
    {
      icon: Cpu,
      key: 'technology',
    },
    {
      icon: Globe2,
      key: 'coverage',
    },
    {
      icon: Headset,
      key: 'support',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.key}
                className="flex items-start gap-4 p-6 rounded-lg bg-background hover:shadow-lg transition-shadow"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-start">
                    {t(`${feature.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-start">
                    {t(`${feature.key}.description`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
