import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent],
  template: `
    <section id="education" class="education-section">
      <div class="education-container">
        <app-section-heading
          title="Education"
          eyebrow="Academic Foundation"
          description="Formal academic history grounding core computer science fundamentals and analytical reasoning.">
        </app-section-heading>

        <div class="education-grid">
          @for (item of educationList; track item.degree; let i = $index) {
            <div class="education-card" [class.primary-degree]="i === 0">
              <div class="card-edge" aria-hidden="true"></div>
              <div class="card-content">
                <span class="edu-level">0{{ i + 1 }}</span>
                <h3 class="degree-title">{{ item.degree }}</h3>
                <span class="institution-name">{{ item.institution }}</span>
                @if (item.year) {
                  <span class="year-badge">{{ item.year }}</span>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .education-section {
      padding: 5.5rem 1.5rem;
      border-top: 1px solid rgba(156, 178, 162, 0.08);
    }

    .education-container {
      max-width: var(--container-max-width);
      margin: 0 auto;
    }

    .education-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.75rem;
    }

    @media (min-width: 800px) {
      .education-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .education-card {
      background: #051a0e;
      border: 1px solid rgba(156, 178, 162, 0.12);
      border-radius: var(--radius-md);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      position: relative;
      transition: all var(--transition-fast);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
    }

    .education-card:hover {
      border-color: rgba(50, 205, 85, 0.35);
      transform: translateY(-2px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
    }

    .education-card.primary-degree {
      background: linear-gradient(145deg, #072515 0%, #051a0e 100%);
      border-color: rgba(50, 205, 85, 0.32);
    }

    .card-edge {
      height: 3px;
      width: 100%;
      background: rgba(156, 178, 162, 0.2);
    }

    .primary-degree .card-edge {
      background: var(--color-accent-green);
    }

    .card-content {
      padding: 2.25rem 2rem;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      gap: 0.65rem;
    }

    .edu-level {
      font-family: var(--font-mono);
      font-size: 0.8rem;
      color: var(--color-accent-green);
      font-weight: 600;
      letter-spacing: 0.05em;
      margin-bottom: 0.35rem;
    }

    .degree-title {
      font-family: var(--font-sans);
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--color-primary-text);
      line-height: 1.45;
      letter-spacing: -0.015em;
      margin: 0;
    }

    .institution-name {
      font-size: 0.95rem;
      color: var(--color-secondary-text);
      line-height: 1.65;
      margin-bottom: 1.25rem;
    }

    .year-badge {
      display: inline-block;
      margin-top: auto;
      font-family: var(--font-mono);
      font-size: 0.78rem;
      font-weight: 500;
      color: var(--color-accent-green);
      background: rgba(50, 205, 85, 0.12);
      border: 1px solid rgba(50, 205, 85, 0.25);
      padding: 0.35rem 0.8rem;
      border-radius: 999px;
      width: fit-content;
      letter-spacing: 0.02em;
    }
  `]
})
export class EducationComponent {
  private portfolioService = inject(PortfolioService);
  educationList = this.portfolioService.getEducation();
}
