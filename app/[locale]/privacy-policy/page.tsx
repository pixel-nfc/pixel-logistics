import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Separator } from '@/components/ui/separator';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.privacy' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function PrivacyPolicyPage() {
  const t = await getTranslations('privacy');

  const sections = ['collection', 'usage', 'security', 'rights', 'cookies', 'contact'];

  return (
    <>
      <Header />
      <main className="py-16">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">{t('title')}</h1>
              <p className="text-sm text-muted-foreground">{t('lastUpdated')}</p>
            </div>

            <Separator />

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg text-start">{t('intro')}</p>

              {sections.map((section) => (
                <div key={section} className="mt-8">
                  <h2 className="text-2xl font-semibold mb-4 text-start">
                    {t(`sections.${section}.title`)}
                  </h2>
                  <p className="text-muted-foreground text-start">
                    {t(`sections.${section}.content`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
