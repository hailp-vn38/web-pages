import type { Locale } from '../data/site'
import { site, switchLocalePath } from '../data/site'

export function usePageSeo(locale: Locale, title: string, description: string, path: string) {
  const config = useRuntimeConfig()
  const normalizedBase = (config.public.siteUrl as string || '').replace(/\/$/, '')
  const absoluteUrl = normalizedBase ? `${normalizedBase}${path}` : undefined
  const alternates = {
    en: normalizedBase ? `${normalizedBase}${switchLocalePath('en', path)}` : undefined,
    vi: normalizedBase ? `${normalizedBase}${switchLocalePath('vi', path)}` : undefined,
  }
  useSeoMeta({
    title: `${title} — ${site.brand}`,
    description,
    ogTitle: `${title} — ${site.brand}`,
    ogDescription: description,
    ogType: 'website',
    ogUrl: absoluteUrl,
    ogImage: normalizedBase ? `${normalizedBase}/og-cover.png` : '/og-cover.png',
    twitterCard: 'summary_large_image',
    twitterTitle: `${title} — ${site.brand}`,
    twitterDescription: description,
    twitterImage: normalizedBase ? `${normalizedBase}/og-cover.png` : '/og-cover.png',
  })
  useHead({
    htmlAttrs: { lang: locale },
    link: [
      ...(absoluteUrl ? [{ rel: 'canonical', href: absoluteUrl }] : []),
      ...(alternates.en ? [{ rel: 'alternate', hreflang: 'en', href: alternates.en }] : []),
      ...(alternates.vi ? [{ rel: 'alternate', hreflang: 'vi', href: alternates.vi }] : []),
      ...(normalizedBase ? [{ rel: 'alternate', hreflang: 'x-default', href: alternates.en }] : []),
    ]
  })
}
