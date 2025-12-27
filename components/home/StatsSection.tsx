import { useTranslations } from 'next-intl';

export default function StatsSection() {
  const t = useTranslations('stats');

  const stats = ['clients', 'shipments', 'countries', 'satisfaction'];

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat}
              className="text-center p-6 rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {t(`${stat}.value`)}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                {t(`${stat}.label`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
