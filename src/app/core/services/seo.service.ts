import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  type?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private document = inject(DOCUMENT);
  private readonly baseUrl = 'https://mubeen.site';

  updateSeo(config: SeoConfig) {
    const fullTitle = `${config.title} | Mubeen Aslam`;
    this.titleService.setTitle(fullTitle);

    const fullUrl = config.canonicalPath 
      ? `${this.baseUrl}${config.canonicalPath.startsWith('/') ? config.canonicalPath : '/' + config.canonicalPath}`
      : this.baseUrl;

    const defaultImage = `${this.baseUrl}/og-image.png`;
    const ogImage = config.ogImage || defaultImage;

    // Standard Meta
    this.metaService.updateTag({ name: 'description', content: config.description });
    if (config.keywords) {
      this.metaService.updateTag({ name: 'keywords', content: config.keywords });
    }
    this.metaService.updateTag({ name: 'author', content: 'Mubeen Aslam' });
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });

    // Open Graph
    this.metaService.updateTag({ property: 'og:site_name', content: 'Mubeen Aslam — Software Engineer' });
    this.metaService.updateTag({ property: 'og:title', content: fullTitle });
    this.metaService.updateTag({ property: 'og:description', content: config.description });
    this.metaService.updateTag({ property: 'og:url', content: fullUrl });
    this.metaService.updateTag({ property: 'og:type', content: config.type || 'website' });
    this.metaService.updateTag({ property: 'og:image', content: ogImage });

    // Twitter Card
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: fullTitle });
    this.metaService.updateTag({ name: 'twitter:description', content: config.description });
    this.metaService.updateTag({ name: 'twitter:image', content: ogImage });

    // Canonical link tag
    this.updateCanonicalUrl(fullUrl);
  }

  private updateCanonicalUrl(url: string) {
    let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
