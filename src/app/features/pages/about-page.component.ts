import { Component, OnInit, AfterViewInit, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { AboutComponent } from '../home/components/about/about.component';
import { EducationComponent } from '../home/components/education/education.component';
import gsap from 'gsap';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent, AboutComponent, EducationComponent],
  template: `
    <div class="portfolio-layout">
      <app-navbar></app-navbar>

      <main class="page-container" role="main">
        <header class="page-header gsap-fade">
          <span class="page-eyebrow">PROFILE &amp; ARCHITECTURE PHILOSOPHY</span>
          <h1 class="page-title">Engineering Reliable Backend Systems With Integrity</h1>
          <p class="page-subtitle">
            Get an in-depth view into my software engineering background, architectural values, problem-solving mindset, and continuous academic growth.
          </p>
        </header>

        <app-about></app-about>
        <app-education></app-education>

        <section class="about-action-strip gsap-fade">
          <div class="action-card">
            <div class="action-text">
              <h3>Interested in learning more about the systems I've built?</h3>
              <p>Explore production case studies including maritime APIs and mission-critical enterprise applications.</p>
            </div>
            <div class="action-buttons">
              <a routerLink="/projects" class="btn-primary">View Projects &rarr;</a>
              <a routerLink="/contact" class="btn-secondary">Let's Connect</a>
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

    .about-action-strip {
      padding: 2.5rem 1.25rem 2rem;
    }

    @media (min-width: 640px) {
      .about-action-strip {
        padding: 3rem 1.5rem 2rem;
      }
    }

    .action-card {
      background: linear-gradient(135deg, #072e18 0%, #0d4a27 50%, #16733d 100%);
      border-radius: var(--radius-md);
      padding: 2.5rem 1.75rem;
      display: flex;
      flex-direction: column;
      gap: 1.75rem;
      color: #ffffff;
      box-shadow: var(--shadow-lg);
    }

    @media (min-width: 800px) {
      .action-card {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 2.75rem 2.25rem;
      }
    }

    .action-text h3 {
      font-family: var(--font-sans);
      font-size: 1.35rem;
      font-weight: 800;
      color: #ffffff;
      margin: 0 0 0.5rem 0;
    }

    .action-text p {
      font-size: 0.96rem;
      color: #d1fae5;
      margin: 0;
      max-width: 560px;
    }

    .action-buttons {
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
export class AboutPageComponent implements OnInit, AfterViewInit {
  private el = inject(ElementRef);
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.updateSeo({
      title: 'About Mubeen Aslam — Software Engineer & Backend Architect',
      description: 'Discover Mubeen Aslam’s background, backend engineering principles in PHP & Laravel, database tuning, and educational foundation on mubeen.site.',
      keywords: 'Mubeen Aslam about, Laravel developer biography, PHP engineer Karachi, QSoft software engineer, Virtual University BSCS',
      canonicalPath: '/about'
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
