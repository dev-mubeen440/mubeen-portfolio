import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeroComponent } from '../home/components/hero/hero.component';
import { ProjectsComponent } from '../home/components/projects/projects.component';
import { SkillsComponent } from '../home/components/skills/skills.component';
import { ExperienceComponent } from '../home/components/experience/experience.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    ProjectsComponent,
    SkillsComponent,
    ExperienceComponent
  ],
  template: `
    <div class="portfolio-layout">
      <app-navbar></app-navbar>

      <main id="main-content" class="main-body" role="main">
        <app-hero></app-hero>
        
        <!-- Curated highlights section for Home overview with green gradient strip -->
        <section class="home-intro-cta">
          <div class="intro-box">
            <div class="intro-headline">
              <span class="pill-kicker">ENGINEERING PERSPECTIVE</span>
              <h2>Building resilient architectures, high-throughput APIs, and clean Laravel ecosystems.</h2>
            </div>
            <div class="intro-links">
              <a routerLink="/about" class="explore-btn">
                <span>Discover About &amp; Approach</span>
                &rarr;
              </a>
              <a routerLink="/projects" class="explore-btn">
                <span>View Full System Portfolio</span>
                &rarr;
              </a>
            </div>
          </div>
        </section>

        <app-projects></app-projects>
        <app-experience></app-experience>
        <app-skills></app-skills>

        <!-- Signature bottom CTA banner in rich green gradient -->
        <section class="home-contact-banner">
          <div class="banner-card">
            <span class="banner-tag">Get In Touch</span>
            <h3 class="banner-title">Have a project, system consultation, or engineering role in mind?</h3>
            <p class="banner-desc">
              Based in Karachi, Pakistan, operating globally across distributed teams. Let's engineer something remarkable.
            </p>
            <div class="banner-actions">
              <a routerLink="/contact" class="btn-talk">Initiate Discussion &rarr;</a>
              <a href="mailto:mubeenaslam440@gmail.com" class="btn-email">Email Directly</a>
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

    .main-body {
      flex: 1 0 auto;
    }

    .home-intro-cta {
      max-width: var(--container-max-width);
      margin: 0 auto;
      padding: 2rem 1.25rem 3.5rem;
    }

    @media (min-width: 640px) {
      .home-intro-cta {
        padding: 2.5rem 1.5rem 4rem;
      }
    }

    .intro-box {
      background: #ffffff;
      border: 1px solid var(--color-border-subtle);
      border-left: 4px solid var(--color-accent-green);
      border-radius: var(--radius-md);
      padding: 2rem 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1.75rem;
      box-shadow: var(--shadow-sm);
    }

    @media (min-width: 640px) {
      .intro-box {
        padding: 2.75rem 2.25rem;
      }
    }

    @media (min-width: 860px) {
      .intro-box {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
    }

    .intro-headline {
      max-width: 650px;
    }

    .pill-kicker {
      font-family: var(--font-mono);
      font-size: 0.74rem;
      color: var(--color-accent-green);
      letter-spacing: 0.1em;
      font-weight: 700;
      display: inline-block;
      margin-bottom: 0.75rem;
    }

    .intro-headline h2 {
      font-family: var(--font-sans);
      font-size: clamp(1.35rem, 2.2vw, 1.85rem);
      font-weight: 800;
      line-height: 1.35;
      color: var(--color-primary-text);
      letter-spacing: -0.02em;
      margin: 0;
    }

    .intro-links {
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
      flex-shrink: 0;
    }

    .explore-btn {
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      background: #ffffff;
      border: 1px solid var(--color-border-subtle);
      padding: 0.85rem 1.25rem;
      border-radius: var(--radius-sm);
      color: var(--color-primary-text);
      text-decoration: none;
      font-weight: 600;
      font-size: 0.9rem;
      box-shadow: var(--shadow-sm);
      transition: all var(--transition-fast);
    }

    .explore-btn:hover {
      border-color: var(--color-accent-green);
      color: var(--color-accent-green);
      transform: translateX(4px);
      box-shadow: var(--shadow-md);
    }

    /* Bottom banner in rich green gradient */
    .home-contact-banner {
      max-width: var(--container-max-width);
      margin: 3rem auto 1rem;
      padding: 0 1.25rem;
    }

    @media (min-width: 640px) {
      .home-contact-banner {
        margin: 4rem auto 1rem;
        padding: 0 1.5rem;
      }
    }

    .banner-card {
      background: linear-gradient(135deg, #072e18 0%, #0d4a27 50%, #16733d 100%);
      border-radius: var(--radius-md);
      padding: 2.75rem 1.5rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #ffffff;
      box-shadow: var(--shadow-lg), 0 0 30px rgba(14, 131, 69, 0.2);
    }

    @media (min-width: 640px) {
      .banner-card {
        padding: 3.5rem 2.5rem;
      }
    }

    .banner-tag {
      font-family: var(--font-mono);
      font-size: 0.76rem;
      color: #a7f3d0;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      background: rgba(255, 255, 255, 0.12);
      padding: 0.25rem 0.75rem;
      border-radius: 999px;
      margin-bottom: 1.25rem;
      font-weight: 600;
    }

    .banner-title {
      font-family: var(--font-sans);
      font-size: clamp(1.5rem, 3.2vw, 2.3rem);
      font-weight: 800;
      color: #ffffff;
      letter-spacing: -0.025em;
      max-width: 680px;
      margin: 0 0 1rem 0;
      line-height: 1.25;
    }

    .banner-desc {
      font-size: 1.02rem;
      color: #d1fae5;
      max-width: 580px;
      line-height: 1.6;
      margin: 0 0 2.25rem 0;
    }

    .banner-actions {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
    }

    .btn-talk {
      background: #ffffff;
      color: #064e3b;
      font-weight: 700;
      font-size: 0.92rem;
      padding: 0.8rem 1.85rem;
      border-radius: var(--radius-sm);
      text-decoration: none;
      transition: all var(--transition-fast);
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
    }

    .btn-talk:hover {
      background: #f0fdf4;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    }

    .btn-email {
      background: rgba(255, 255, 255, 0.12);
      border: 1px solid rgba(255, 255, 255, 0.25);
      color: #ffffff;
      font-weight: 600;
      font-size: 0.92rem;
      padding: 0.8rem 1.85rem;
      border-radius: var(--radius-sm);
      text-decoration: none;
      transition: all var(--transition-fast);
    }

    .btn-email:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
    }
  `]
})
export class HomePageComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Mubeen Aslam — PHP Laravel Software Engineer',
      description: 'Personal portfolio of Mubeen Aslam on mubeen.site. Specializing in PHP, Laravel 11, high-throughput REST APIs, MySQL query tuning, and CI/CD automation.',
      keywords: 'Mubeen Aslam, mubeen.site, PHP, Laravel, Backend Developer, Software Engineer, REST API, MySQL, Karachi, Pakistan',
      canonicalPath: '/'
    });
  }
}
