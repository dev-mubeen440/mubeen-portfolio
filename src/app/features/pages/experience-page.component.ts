import { Component, OnInit, AfterViewInit, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { ExperienceComponent } from '../home/components/experience/experience.component';
import gsap from 'gsap';

@Component({
  selector: 'app-experience-page',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent, ExperienceComponent],
  template: `
    <div class="portfolio-layout">
      <app-navbar></app-navbar>

      <main class="page-container" role="main">
        <header class="page-header gsap-fade">
          <span class="page-eyebrow">PROFESSIONAL TRACK RECORD</span>
          <h1 class="page-title">Engineering Experience &amp; Career Growth</h1>
          <p class="page-subtitle">
            Progressive trajectory building enterprise Laravel backends, mission-critical maritime systems, and high-performance database infrastructures.
          </p>
        </header>

        <!-- Metrics Overview Grid -->
        <div class="metrics-grid gsap-fade">
          <div class="metric-card">
            <span class="metric-num">3+</span>
            <span class="metric-label">Engineering Roles Held</span>
            <span class="metric-sub">Consistent backend evolution</span>
          </div>
          <div class="metric-card">
            <span class="metric-num">5+</span>
            <span class="metric-label">Delivered Web Platforms</span>
            <span class="metric-sub">Live production systems</span>
          </div>
          <div class="metric-card">
            <span class="metric-num">100%</span>
            <span class="metric-label">CI/CD Automation</span>
            <span class="metric-sub">GitHub Actions deployment</span>
          </div>
          <div class="metric-card">
            <span class="metric-num">Zero</span>
            <span class="metric-label">Compromise on Scalability</span>
            <span class="metric-sub">Normalized schemas &amp; clean queries</span>
          </div>
        </div>

        <app-experience></app-experience>

        <section class="experience-cta-strip gsap-fade">
          <div class="cta-banner">
            <h3>Review the projects delivered throughout these roles</h3>
            <p>From maritime job management to enterprise task systems and custom CMS architectures.</p>
            <div class="cta-actions">
              <a routerLink="/projects" class="btn-primary">View Project Portfolio &rarr;</a>
              <a routerLink="/skills" class="btn-secondary">Inspect Tech Stack</a>
            </div>
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
      max-width: 820px;
    }

    @media (min-width: 640px) {
      .page-header {
        padding: 4.5rem 1.5rem 2.5rem;
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

    /* Metrics Grid */
    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      padding: 0 1.25rem 2.5rem;
    }

    @media (min-width: 640px) {
      .metrics-grid {
        gap: 1.25rem;
        padding: 0 1.5rem 3rem;
      }
    }

    @media (min-width: 860px) {
      .metrics-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5rem;
      }
    }

    .metric-card {
      background: #ffffff;
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-md);
      padding: 1.5rem 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
      box-shadow: var(--shadow-sm);
      transition: all var(--transition-fast);
    }

    @media (min-width: 640px) {
      .metric-card {
        padding: 1.75rem 1.5rem;
      }
    }

    .metric-card:hover {
      border-color: var(--color-accent-green);
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
    }

    .metric-num {
      font-family: var(--font-mono);
      font-size: 2.2rem;
      font-weight: 800;
      color: var(--color-accent-green);
      line-height: 1.1;
    }

    .metric-label {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--color-primary-text);
    }

    .metric-sub {
      font-size: 0.8rem;
      color: var(--color-muted-text);
    }

    /* CTA strip */
    .experience-cta-strip {
      padding: 2.5rem 1.25rem 2rem;
    }

    @media (min-width: 640px) {
      .experience-cta-strip {
        padding: 3rem 1.5rem 2rem;
      }
    }

    .cta-banner {
      background: linear-gradient(135deg, #072e18 0%, #0d4a27 50%, #16733d 100%);
      border-radius: var(--radius-md);
      padding: 2.5rem 1.75rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      color: #ffffff;
      box-shadow: var(--shadow-lg);
    }

    @media (min-width: 820px) {
      .cta-banner {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 2.75rem 2.25rem;
      }
    }

    .cta-banner h3 {
      font-family: var(--font-sans);
      font-size: 1.35rem;
      font-weight: 800;
      color: #ffffff;
      margin: 0 0 0.4rem 0;
    }

    .cta-banner p {
      font-size: 0.96rem;
      color: #d1fae5;
      margin: 0;
      max-width: 540px;
    }

    .cta-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.85rem;
      flex-shrink: 0;
    }

    .btn-primary {
      background: #ffffff;
      color: #064e3b;
      font-weight: 700;
      font-size: 0.9rem;
      padding: 0.75rem 1.5rem;
      border-radius: var(--radius-sm);
      text-decoration: none;
      transition: all var(--transition-fast);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .btn-primary:hover {
      background: #f0fdf4;
      transform: translateY(-1px);
    }

    .btn-secondary {
      background: rgba(255, 255, 255, 0.12);
      border: 1px solid rgba(255, 255, 255, 0.25);
      color: #ffffff;
      font-weight: 600;
      font-size: 0.9rem;
      padding: 0.75rem 1.5rem;
      border-radius: var(--radius-sm);
      text-decoration: none;
      transition: all var(--transition-fast);
    }

    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-1px);
    }
  `]
})
export class ExperiencePageComponent implements OnInit, AfterViewInit {
  private el = inject(ElementRef);
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Experience — Mubeen Aslam | Software Engineer at QSoft',
      description: 'Review Mubeen Aslam’s engineering journey: Laravel Developer at QSoft, Karsaaz Solutions, and Khatri Services on mubeen.site.',
      keywords: 'Mubeen Aslam experience, QSoft software engineer, Laravel backend work history, PHP careers Karachi',
      canonicalPath: '/experience'
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
