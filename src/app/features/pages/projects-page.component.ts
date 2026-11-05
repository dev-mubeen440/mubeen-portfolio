import { Component, OnInit, AfterViewInit, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { ProjectsComponent } from '../home/components/projects/projects.component';
import gsap from 'gsap';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent, ProjectsComponent],
  template: `
    <div class="portfolio-layout">
      <app-navbar></app-navbar>

      <main class="page-container" role="main">
        <header class="page-header gsap-fade">
          <span class="page-eyebrow">SYSTEMS ARCHITECTURE &amp; PRODUCTION WORK</span>
          <h1 class="page-title">Selected Projects &amp; Delivered Platforms</h1>
          <p class="page-subtitle">
            Comprehensive breakdown of custom Laravel systems, high-integrity maritime compliance engines, enterprise operational tools, and verified production CMS solutions.
          </p>
        </header>

        <!-- Technical Highlights bar -->
        <div class="tech-focus-bar gsap-fade">
          <div class="focus-chip">
            <span class="chip-dot"></span>
            <span>REST API &amp; Sanctum Auth</span>
          </div>
          <div class="focus-chip">
            <span class="chip-dot"></span>
            <span>Role-Based Access Control (RBAC)</span>
          </div>
          <div class="focus-chip">
            <span class="chip-dot"></span>
            <span>Maritime Safety &amp; SSC Algorithms</span>
          </div>
          <div class="focus-chip">
            <span class="chip-dot"></span>
            <span>Multi-Tenant &amp; Relational Schemas</span>
          </div>
        </div>

        <app-projects></app-projects>

        <section class="projects-contact-cta gsap-fade">
          <div class="cta-inner">
            <div class="cta-copy">
              <h3>Need a custom backend or API engineered?</h3>
              <p>Let's discuss requirements, architecture patterns, and deployment pipelines tailored to your needs.</p>
            </div>
            <a routerLink="/contact" class="btn-talk">Start Discussion &rarr;</a>
          </div>
        </section>
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
      padding: 3.5rem 1.25rem 2rem;
      max-width: 860px;
    }

    @media (min-width: 640px) {
      .page-header {
        padding: 4.5rem 1.5rem 2rem;
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

    .tech-focus-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 0.65rem;
      padding: 0 1.25rem 2.5rem;
    }

    @media (min-width: 640px) {
      .tech-focus-bar {
        padding: 0 1.5rem 2.5rem;
        gap: 0.75rem;
      }
    }

    .focus-chip {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: #ffffff;
      border: 1px solid var(--color-border-subtle);
      padding: 0.4rem 0.95rem;
      border-radius: 999px;
      font-family: var(--font-mono);
      font-size: 0.8rem;
      color: var(--color-secondary-text);
      font-weight: 500;
      box-shadow: var(--shadow-sm);
    }

    .chip-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--color-accent-green);
    }

    .projects-contact-cta {
      padding: 2.5rem 1.25rem 2rem;
    }

    @media (min-width: 640px) {
      .projects-contact-cta {
        padding: 3rem 1.5rem 2rem;
      }
    }

    .cta-inner {
      background: linear-gradient(135deg, #072e18 0%, #0d4a27 50%, #16733d 100%);
      border-radius: var(--radius-md);
      padding: 2.5rem 1.75rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      color: #ffffff;
      box-shadow: var(--shadow-lg);
    }

    @media (min-width: 800px) {
      .cta-inner {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 2.75rem 2.25rem;
      }
    }

    .cta-copy h3 {
      font-family: var(--font-sans);
      font-size: 1.35rem;
      font-weight: 800;
      color: #ffffff;
      margin: 0 0 0.4rem 0;
    }

    .cta-copy p {
      font-size: 0.96rem;
      color: #d1fae5;
      margin: 0;
      max-width: 540px;
    }

    .btn-talk {
      background: #ffffff;
      color: #064e3b;
      font-weight: 700;
      font-size: 0.9rem;
      padding: 0.75rem 1.6rem;
      border-radius: var(--radius-sm);
      text-decoration: none;
      transition: all var(--transition-fast);
      white-space: nowrap;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .btn-talk:hover {
      background: #f0fdf4;
      transform: translateY(-1px);
    }
  `]
})
export class ProjectsPageComponent implements OnInit, AfterViewInit {
  private el = inject(ElementRef);
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Projects & Platforms — Mubeen Aslam | Laravel & REST APIs',
      description: 'Explore PacMarine PIRS API, Ship Shore Compatibility (SSC), PKF Task Management, and production web platforms engineered by Mubeen Aslam on mubeen.site.',
      keywords: 'Mubeen Aslam projects, PacMarine API, Ship Shore Compatibility, Laravel projects, PHP software portfolio, mubeen.site',
      canonicalPath: '/projects'
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
