import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            {t('subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href="/#contact">
                {t('cta.primary')}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/#services">{t('cta.secondary')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
