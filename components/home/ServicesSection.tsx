import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plane, Warehouse, Truck, FileCheck, ShoppingCart, MapPin } from 'lucide-react';

export default function ServicesSection() {
  const t = useTranslations('services');

  const services = [
    {
      icon: Plane,
      key: 'freight',
    },
    {
      icon: Warehouse,
      key: 'warehousing',
    },
    {
      icon: Truck,
      key: 'distribution',
    },
    {
      icon: FileCheck,
      key: 'customs',
    },
    {
      icon: ShoppingCart,
      key: 'ecommerce',
    },
    {
      icon: MapPin,
      key: 'tracking',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.key} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{t(`${service.key}.title`)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-start">
                    {t(`${service.key}.description`)}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
