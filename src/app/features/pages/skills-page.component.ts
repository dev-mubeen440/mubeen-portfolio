import { Component, OnInit, AfterViewInit, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { SkillsComponent } from '../home/components/skills/skills.component';
import gsap from 'gsap';

@Component({
  selector: 'app-skills-page',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent, SkillsComponent],
  template: `
    <div class="portfolio-layout">
      <app-navbar></app-navbar>

      <main class="page-container" role="main">
        <header class="page-header gsap-fade">
          <span class="page-eyebrow">TECHNICAL MATRIX &amp; CAPABILITIES</span>
          <h1 class="page-title">Skills, Frameworks &amp; Tooling Stack</h1>
          <p class="page-subtitle">
            An organized inventory of technologies used daily to architect, secure, optimize, and deploy production software.
          </p>
        </header>

        <!-- Engineering Standards bar -->
        <div class="standards-grid gsap-fade">
          <div class="standard-card">
            <h4>Clean Architecture</h4>
            <p>Strict MVC separation, dedicated action classes, service layers, and predictable domain modeling.</p>
          </div>
          <div class="standard-card">
            <h4>Data Layer Mastery</h4>
            <p>Relational schema design, index optimization, query execution analysis, and caching strategies.</p>
          </div>
          <div class="standard-card">
            <h4>Automated Delivery</h4>
            <p>Git-driven branching workflows, linting, tests, and automated GitHub Actions deployment runs.</p>
          </div>
        </div>

        <app-skills></app-skills>

        <section class="skills-cta-strip gsap-fade">
          <div class="cta-banner">
            <div>
              <h3>Looking for these specific technical capabilities in your team?</h3>
              <p>I am readily available for technical conversations, code audits, or engineering opportunities.</p>
            </div>
            <a routerLink="/contact" class="btn-talk">Get in Touch &rarr;</a>
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

    .standards-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.25rem;
      padding: 0 1.25rem 2.5rem;
    }

    @media (min-width: 640px) {
      .standards-grid {
        padding: 0 1.5rem 3rem;
      }
    }

    @media (min-width: 840px) {
      .standards-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .standard-card {
      background: #ffffff;
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-md);
      padding: 1.75rem 1.5rem;
      border-top: 3px solid var(--color-accent-green);
      box-shadow: var(--shadow-sm);
    }

    .standard-card h4 {
      font-family: var(--font-sans);
      font-size: 1.1rem;
      font-weight: 800;
      color: var(--color-primary-text);
      margin: 0 0 0.5rem 0;
    }

    .standard-card p {
      font-size: 0.92rem;
      line-height: 1.6;
      color: var(--color-secondary-text);
      margin: 0;
    }

    .skills-cta-strip {
      padding: 2.5rem 1.25rem 2rem;
    }

    @media (min-width: 640px) {
      .skills-cta-strip {
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

    @media (min-width: 800px) {
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
export class SkillsPageComponent implements OnInit, AfterViewInit {
  private el = inject(ElementRef);
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Skills & Tech Stack — Mubeen Aslam | PHP, Laravel, MySQL',
      description: 'Review technical competencies of Mubeen Aslam: PHP 8+, Laravel, MySQL, PostgreSQL, Redis, REST APIs, Git, GitHub Actions, and Linux on mubeen.site.',
      keywords: 'Mubeen Aslam skills, Laravel developer stack, PHP backend competencies, MySQL optimization, REST API developer',
      canonicalPath: '/skills'
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
