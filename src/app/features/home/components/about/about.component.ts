import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent],
  template: `
    <section id="about" class="about-section">
      <div class="about-container section-container">
        <app-section-heading
          [title]="aboutData.heading"
          eyebrow="Background & Values">
        </app-section-heading>

        <div class="about-layout">
          <!-- Editorial Prose -->
          <div class="prose-column">
            @for (p of aboutData.paragraphs; track $index) {
              <p class="about-para" [class.lead-para]="$first">{{ p }}</p>
            }

            <div class="focus-principles">
              <div class="principle-item">
                <span class="principle-num">01</span>
                <div class="principle-body">
                  <h4>Maintainable Architecture</h4>
                  <p>Applying MVC architecture, OOP principles, and SOLID patterns to structure modular, readable, and reusable code with clear separation of concerns.</p>
                </div>
              </div>

              <div class="principle-item">
                <span class="principle-num">02</span>
                <div class="principle-body">
                  <h4>Database Engineering</h4>
                  <p>Designing structured relational schemas, modeling Eloquent relationships, and tuning database queries to ensure efficient data access and performance.</p>
                </div>
              </div>

              <div class="principle-item">
                <span class="principle-num">03</span>
                <div class="principle-body">
                  <h4>Production Reliability</h4>
                  <p>Building secure APIs, orchestrating background processing, and maintaining reliable CI/CD deployment workflows for dependable application stability.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Metric / Snapshot Column -->
          <div class="snapshot-column">
            <div class="snapshot-card">
              <h3 class="snapshot-title">Overview</h3>

              <div class="snapshot-list">
                @for (item of aboutData.highlights; track item.label) {
                  <div class="snapshot-item">
                    <span class="snapshot-label">{{ item.label }}</span>
                    <span class="snapshot-value">{{ item.value }}</span>
                  </div>
                }
              </div>

              <div class="snapshot-quote">
                <span class="quote-mark">&ldquo;</span>
                <p>I focus on building maintainable software and practical business solutions that operate reliably in production.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-section {
      padding: 4.5rem 0;
      border-top: 1px solid var(--color-border-subtle);
    }

    @media (min-width: 640px) {
      .about-section {
        padding: 5rem 0;
      }
    }

    .about-container {
      width: 100%;
    }

    .about-layout {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    @media (min-width: 900px) {
      .about-layout {
        grid-template-columns: 1.25fr 0.85fr;
        gap: 4.5rem;
      }
    }

    .prose-column {
      display: flex;
      flex-direction: column;
    }

    .about-para {
      font-size: 1.05rem;
      line-height: 1.7;
      color: var(--color-secondary-text);
      margin-bottom: 1.35rem;
    }

    .lead-para {
      font-size: 1.18rem;
      line-height: 1.6;
      color: var(--color-primary-text);
      font-weight: 500;
    }

    .focus-principles {
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 1px solid var(--color-border-subtle);
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .principle-item {
      display: grid;
      grid-template-columns: 36px 1fr;
      gap: 1.2rem;
      align-items: flex-start;
    }

    .principle-num {
      font-family: var(--font-mono);
      font-size: 1.1rem;
      color: var(--color-accent-green);
      font-weight: 700;
      line-height: 1.2;
    }

    .principle-body h4 {
      font-family: var(--font-sans);
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--color-primary-text);
      margin: 0 0 0.25rem 0;
    }

    .principle-body p {
      font-size: 0.92rem;
      line-height: 1.55;
      color: var(--color-secondary-text);
      margin: 0;
    }

    /* Snapshot Column */
    .snapshot-column {
      display: flex;
      flex-direction: column;
    }

    .snapshot-card {
      background: #ffffff;
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-md);
      padding: 2.25rem 2rem;
      box-shadow: var(--shadow-md);
      position: sticky;
      top: calc(var(--nav-height) + 2rem);
    }

    .snapshot-title {
      font-family: var(--font-sans);
      font-size: 1.25rem;
      font-weight: 800;
      color: var(--color-primary-text);
      letter-spacing: -0.015em;
      margin: 0 0 1.5rem 0;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--color-border-subtle);
    }

    .snapshot-list {
      display: flex;
      flex-direction: column;
      gap: 1.15rem;
      margin-bottom: 2rem;
    }

    .snapshot-item {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }

    .snapshot-label {
      font-size: 0.76rem;
      font-weight: 600;
      color: var(--color-accent-green);
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .snapshot-value {
      font-size: 0.98rem;
      font-weight: 600;
      color: var(--color-primary-text);
    }

    .snapshot-quote {
      position: relative;
      padding: 1.25rem 1.25rem 1.25rem 1.75rem;
      background: #f8fafc;
      border-left: 3px solid var(--color-accent-green);
      border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
    }

    .snapshot-quote p {
      font-size: 0.94rem;
      font-style: italic;
      line-height: 1.6;
      color: var(--color-secondary-text);
      margin: 0;
    }

    .quote-mark {
      position: absolute;
      top: -0.2rem;
      left: 0.45rem;
      font-family: var(--font-serif);
      font-size: 2rem;
      color: var(--color-accent-green);
      line-height: 1;
      opacity: 0.4;
    }
  `]
})
export class AboutComponent {
  private portfolioService = inject(PortfolioService);
  aboutData = this.portfolioService.getAbout();
}
