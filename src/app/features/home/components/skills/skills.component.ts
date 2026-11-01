import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent],
  template: `
    <section id="skills" class="skills-section">
      <div class="skills-container">
        <app-section-heading
          title="Technical Competencies"
          eyebrow="Specialization & Tooling"
          description="Structured grouping of backend architectures, engineering frameworks, datastores, and development infrastructure.">
        </app-section-heading>

        <div class="skills-grid">
          @for (cat of skillCategories; track cat.category; let i = $index) {
            <div class="skill-category-card" [class.highlight-card]="i === 0">
              <div class="card-glow" aria-hidden="true"></div>
              <div class="card-top">
                <div class="header-left">
                  <span class="category-index">0{{ i + 1 }}</span>
                  <h3 class="category-name">{{ cat.category }}</h3>
                </div>
                <span class="skill-count">{{ cat.skills.length }} skills</span>
              </div>

              <div class="skills-tag-flow">
                @for (skill of cat.skills; track skill) {
                  <span class="skill-tag">
                    <span class="skill-accent-bar" aria-hidden="true"></span>
                    <span class="skill-name">{{ skill }}</span>
                  </span>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-section {
      padding: 5.5rem 1.5rem;
      border-top: 1px solid rgba(156, 178, 162, 0.08);
      background: rgba(4, 23, 12, 0.4);
    }

    .skills-container {
      max-width: var(--container-max-width);
      margin: 0 auto;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.75rem;
    }

    @media (min-width: 768px) {
      .skills-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 1080px) {
      .skills-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .skill-category-card {
      background: #051a0e;
      border: 1px solid rgba(156, 178, 162, 0.12);
      border-radius: var(--radius-md);
      padding: 2.25rem 2rem;
      display: flex;
      flex-direction: column;
      gap: 1.75rem;
      transition: all var(--transition-fast);
      position: relative;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
    }

    .skill-category-card:hover {
      border-color: rgba(50, 205, 85, 0.4);
      transform: translateY(-3px);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45);
    }

    .skill-category-card.highlight-card {
      border-color: rgba(50, 205, 85, 0.35);
      background: linear-gradient(150deg, #072917 0%, #051a0e 100%);
    }

    .card-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 1px solid rgba(156, 178, 162, 0.12);
      padding-bottom: 1.25rem;
    }

    .header-left {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
    }

    .category-index {
      font-family: var(--font-mono);
      font-size: 0.8rem;
      color: var(--color-accent-green);
      font-weight: 600;
      letter-spacing: 0.05em;
    }

    .category-name {
      font-family: var(--font-sans);
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--color-primary-text);
      letter-spacing: -0.015em;
      margin: 0;
      line-height: 1.3;
    }

    .skill-count {
      font-family: var(--font-mono);
      font-size: 0.72rem;
      color: var(--color-muted-text);
      background: rgba(10, 38, 10, 0.6);
      padding: 0.25rem 0.6rem;
      border-radius: 999px;
      border: 1px solid rgba(156, 178, 162, 0.1);
      white-space: nowrap;
    }

    .skills-tag-flow {
      display: flex;
      flex-wrap: wrap;
      gap: 0.65rem;
    }

    .skill-tag {
      display: inline-flex;
      align-items: center;
      gap: 0.55rem;
      padding: 0.5rem 0.95rem;
      background: rgba(10, 38, 10, 0.55);
      border: 1px solid rgba(156, 178, 162, 0.14);
      border-radius: var(--radius-sm);
      font-size: 0.88rem;
      font-weight: 500;
      color: #e0ece4;
      line-height: 1.4;
      transition: all var(--transition-fast);
      user-select: none;
    }

    .skill-tag:hover {
      border-color: var(--color-accent-green);
      color: #ffffff;
      background: rgba(23, 86, 22, 0.45);
      transform: translateY(-1px);
    }

    .skill-accent-bar {
      width: 4px;
      height: 12px;
      border-radius: 2px;
      background: var(--color-accent-green);
      opacity: 0.65;
      transition: opacity var(--transition-fast), transform var(--transition-fast);
    }

    .skill-tag:hover .skill-accent-bar {
      opacity: 1;
      transform: scaleY(1.2);
    }

    .card-glow {
      position: absolute;
      top: -60px;
      right: -60px;
      width: 160px;
      height: 160px;
      background: radial-gradient(circle, rgba(50, 205, 85, 0.08) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
    }

    .highlight-card .card-glow {
      background: radial-gradient(circle, rgba(50, 205, 85, 0.14) 0%, transparent 70%);
    }
  `]
})
export class SkillsComponent {
  private portfolioService = inject(PortfolioService);
  skillCategories = this.portfolioService.getSkills();
}
