import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent],
  template: `
    <section id="experience" class="experience-section">
      <div class="experience-container">
        <app-section-heading
          title="Work Experience"
          eyebrow="Career History"
          description="A summary of my roles and hands-on contributions across software development teams.">
        </app-section-heading>

        <div class="timeline">
          @for (exp of experiences; track exp.company + exp.duration; let i = $index) {
            <article class="timeline-entry" [class.is-current]="i === 0">
              <!-- Left Column: Dates & Company metadata -->
              <div class="entry-meta">
                <span class="entry-duration">{{ exp.duration }}</span>
                <span class="entry-company">{{ exp.company }}</span>
                <span class="entry-location">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  {{ exp.location }}
                </span>
                @if (i === 0) {
                  <span class="current-badge">Current Position</span>
                }
              </div>

              <!-- Center Timeline Marker -->
              <div class="timeline-axis" aria-hidden="true">
                <div class="axis-node" [class.active-node]="i === 0"></div>
                <div class="axis-line"></div>
              </div>

              <!-- Right Column: Responsibilities -->
              <div class="entry-card">
                <h3 class="entry-role">{{ exp.role }}</h3>
                <span class="mobile-meta">{{ exp.company }} &middot; {{ exp.duration }}</span>
                
                <ul class="responsibilities-list">
                  @for (resp of exp.responsibilities; track resp) {
                    <li>
                      <span class="bullet" aria-hidden="true">&mdash;</span>
                      <span class="text">{{ resp }}</span>
                    </li>
                  }
                </ul>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .experience-section {
      padding: 4.5rem 1.25rem;
      border-top: 1px solid var(--color-border-subtle);
      background: #fafcfb;
    }

    @media (min-width: 640px) {
      .experience-section {
        padding: 5rem 1.5rem;
      }
    }

    .experience-container {
      max-width: var(--container-max-width);
      margin: 0 auto;
    }

    .timeline {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 1.5rem;
    }

    .timeline-entry {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.25rem;
      position: relative;
    }

    @media (min-width: 840px) {
      .timeline-entry {
        grid-template-columns: 240px 32px 1fr;
        gap: 2rem;
        align-items: flex-start;
      }
    }

    /* Left meta */
    .entry-meta {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
    }

    .entry-duration {
      font-family: var(--font-mono);
      font-size: 0.84rem;
      font-weight: 600;
      color: var(--color-accent-green);
    }

    .entry-company {
      font-family: var(--font-sans);
      font-size: 1.3rem;
      font-weight: 800;
      color: var(--color-primary-text);
      line-height: 1.25;
      letter-spacing: -0.015em;
    }

    .entry-location {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 0.82rem;
      color: var(--color-muted-text);
      font-weight: 500;
    }

    .current-badge {
      display: inline-block;
      margin-top: 0.4rem;
      font-size: 0.74rem;
      font-weight: 600;
      color: #ffffff;
      background: linear-gradient(135deg, #0d5c31 0%, #0e8345 100%);
      padding: 0.25rem 0.65rem;
      border-radius: 999px;
      width: fit-content;
      box-shadow: 0 2px 8px rgba(14, 131, 69, 0.25);
    }

    /* Center Axis */
    .timeline-axis {
      display: none;
      flex-direction: column;
      align-items: center;
      height: 100%;
      position: relative;
    }

    @media (min-width: 840px) {
      .timeline-axis {
        display: flex;
      }
    }

    .axis-node {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #ffffff;
      border: 2px solid #cbd5e1;
      margin-top: 0.35rem;
      z-index: 2;
      transition: all var(--transition-fast);
    }

    .axis-node.active-node {
      border-color: var(--color-accent-green);
      background: var(--color-accent-green);
      box-shadow: 0 0 10px rgba(14, 131, 69, 0.4);
    }

    .axis-line {
      width: 2px;
      flex-grow: 1;
      background: #e2e8f0;
      margin-top: 0.4rem;
    }

    /* Right Card */
    .entry-card {
      background: #ffffff;
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-md);
      padding: 1.75rem 1.5rem;
      box-shadow: var(--shadow-sm);
      transition: all var(--transition-fast);
    }

    @media (min-width: 640px) {
      .entry-card {
        padding: 2rem 2.25rem;
      }
    }

    .timeline-entry.is-current .entry-card {
      border-color: rgba(14, 131, 69, 0.3);
      box-shadow: var(--shadow-md);
    }

    .entry-role {
      font-family: var(--font-sans);
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--color-primary-text);
      margin: 0 0 0.35rem 0;
    }

    .mobile-meta {
      display: block;
      font-size: 0.84rem;
      color: var(--color-accent-green);
      font-weight: 600;
      margin-bottom: 1.25rem;
    }

    @media (min-width: 840px) {
      .mobile-meta {
        display: none;
      }
    }

    .responsibilities-list {
      list-style: none;
      padding: 0;
      margin: 1.25rem 0 0 0;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .responsibilities-list li {
      display: flex;
      gap: 0.75rem;
      align-items: baseline;
      font-size: 0.95rem;
      line-height: 1.6;
      color: var(--color-secondary-text);
    }

    .bullet {
      color: var(--color-accent-green);
      font-weight: 700;
      flex-shrink: 0;
    }

    .text {
      color: var(--color-secondary-text);
    }
  `]
})
export class ExperienceComponent {
  private portfolioService = inject(PortfolioService);
  experiences = this.portfolioService.getExperiences();
}
