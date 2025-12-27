import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Package, Mail, Phone, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Package className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Pixel Logistics</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t('company.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">{t('quickLinks.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {tNav('home')}
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {tNav('services')}
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {tNav('about')}
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {tNav('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">{t('contact.title')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  {t('contact.address')}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  {t('contact.phone')}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  {t('contact.email')}
                </span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold">{t('legal.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {tNav('privacy')}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-use"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {tNav('terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          {t('copyright')}
        </div>
      </div>
    </footer>
  );
}
