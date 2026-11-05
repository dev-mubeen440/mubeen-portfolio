import { Component, OnInit, AfterViewInit, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { ContactComponent } from '../home/components/contact/contact.component';
import gsap from 'gsap';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent, ContactComponent],
  template: `
    <div class="portfolio-layout">
      <app-navbar></app-navbar>

      <main class="page-container" role="main">
        <header class="page-header gsap-fade">
          <span class="page-eyebrow">COMMUNICATION &amp; INQUIRIES</span>
          <h1 class="page-title">Let's Connect &amp; Build Together</h1>
          <p class="page-subtitle">
            Whether you want to consult on system architecture, discuss a Laravel project, or explore an engineering role, I am always open to meaningful conversations.
          </p>
        </header>

        <!-- Response expectation pill -->
        <div class="response-pledge gsap-fade">
          <div class="pledge-dot"></div>
          <span class="pledge-text">
            Operating from Karachi, Pakistan (UTC+5). Direct email and phone inquiries typically answered within 24 hours.
          </span>
        </div>

        <app-contact></app-contact>
      </main>

      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .portfolio-layout {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .page-container {
      flex: 1 0 auto;
      max-width: var(--container-max-width);
      margin: 0 auto;
      width: 100%;
    }

    .page-header {
      padding: 3.5rem 1.25rem 1.5rem;
      max-width: 820px;
    }

    @media (min-width: 640px) {
      .page-header {
        padding: 4.5rem 1.5rem 1.5rem;
      }
    }

    .page-eyebrow {
      font-family: var(--font-mono);
      font-size: 0.8rem;
      color: var(--color-accent-green);
      letter-spacing: 0.08em;
      display: inline-block;
      font-weight: 700;
      margin-bottom: 0.85rem;
    }

    .page-title {
      font-family: var(--font-sans);
      font-size: clamp(2rem, 4vw, 3.2rem);
      font-weight: 800;
      color: var(--color-primary-text);
      line-height: 1.18;
      letter-spacing: -0.03em;
      margin: 0 0 1.25rem 0;
    }

    .page-subtitle {
      font-size: 1.12rem;
      line-height: 1.65;
      color: var(--color-secondary-text);
      margin: 0;
    }

    .response-pledge {
      display: inline-flex;
      align-items: center;
      gap: 0.65rem;
      margin: 0 1.25rem 2.25rem;
      background: #ffffff;
      border: 1px solid var(--color-border-subtle);
      border-left: 3px solid var(--color-accent-green);
      padding: 0.65rem 1.15rem;
      border-radius: var(--radius-sm);
      box-shadow: var(--shadow-sm);
    }

    @media (min-width: 640px) {
      .response-pledge {
        margin: 0 1.5rem 2.5rem;
      }
    }

    .pledge-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--color-accent-green);
      box-shadow: 0 0 8px rgba(16, 185, 129, 0.6);
      flex-shrink: 0;
    }

    .pledge-text {
      font-size: 0.84rem;
      color: var(--color-secondary-text);
      font-weight: 500;
    }
  `]
})
export class ContactPageComponent implements OnInit, AfterViewInit {
  private el = inject(ElementRef);
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Contact Mubeen Aslam — Software Engineer | Karachi, Pakistan',
      description: 'Get in touch with Mubeen Aslam via email, phone, or LinkedIn for backend development, Laravel consulting, and engineering inquiries on mubeen.site.',
      keywords: 'Contact Mubeen Aslam, hire Laravel developer, backend engineer Karachi, mubeen.site contact',
      canonicalPath: '/contact'
    });
  }

  ngAfterViewInit() {
    if (typeof window !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.from(this.el.nativeElement.querySelectorAll('.gsap-fade'), {
        y: 25,
        opacity: 0,
        duration: 0.75,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }
  }
}
