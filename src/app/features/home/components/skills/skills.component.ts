import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';
import { TechIconComponent } from '../../../../shared/components/tech-icon/tech-icon.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, TechIconComponent],
  template: `
    <section id="skills" class="skills-section">
      <div class="skills-container">
        <app-section-heading
          title="Skills & Technologies"
          eyebrow="Toolkit"
          description="Technologies, frameworks, and developer tools I work with regularly to build backend systems and web applications.">
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
                    <app-tech-icon [name]="skill" size="sm"></app-tech-icon>
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
      padding: 4.5rem 1.25rem;
      border-top: 1px solid var(--color-border-subtle);
      background: #fafcfb;
    }

    @media (min-width: 640px) {
      .skills-section {
        padding: 5.5rem 1.5rem;
      }
    }

    .skills-container {
      max-width: var(--container-max-width);
      margin: 0 auto;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
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
      background: #ffffff;
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-md);
      padding: 1.75rem 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      transition: all var(--transition-fast);
      position: relative;
      overflow: hidden;
      box-shadow: var(--shadow-sm);
    }

    @media (min-width: 640px) {
      .skill-category-card {
        padding: 2.25rem 2rem;
      }
    }

    .skill-category-card:hover {
      border-color: rgba(14, 131, 69, 0.4);
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
    }

    .skill-category-card.highlight-card {
      border-color: rgba(14, 131, 69, 0.35);
      background: linear-gradient(150deg, #ffffff 0%, #f4fbf6 100%);
    }

    .card-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 1px solid var(--color-border-subtle);
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
      font-weight: 700;
      letter-spacing: 0.05em;
    }

    .category-name {
      font-family: var(--font-sans);
      font-size: 1.25rem;
      font-weight: 800;
      color: var(--color-primary-text);
      letter-spacing: -0.015em;
      margin: 0;
      line-height: 1.3;
    }

    .skill-count {
      font-family: var(--font-mono);
      font-size: 0.72rem;
      color: var(--color-muted-text);
      background: #f1f5f9;
      padding: 0.25rem 0.6rem;
      border-radius: 999px;
      border: 1px solid var(--color-border-subtle);
      white-space: nowrap;
      font-weight: 500;
    }

    .skills-tag-flow {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem;
    }

    .skill-tag {
      display: inline-flex;
      align-items: center;
      gap: 0.55rem;
      padding: 0.45rem 0.85rem;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: var(--radius-sm);
      font-size: 0.88rem;
      font-weight: 500;
      color: #334155;
      line-height: 1.4;
      box-shadow: 0 1px 2px rgba(15, 23, 42, 0.03);
      transition: all var(--transition-fast);
      user-select: none;
    }

    .skill-tag:hover {
      border-color: var(--color-accent-green);
      color: var(--color-accent-green);
      background: #f0fdf4;
      transform: translateY(-1px);
      box-shadow: 0 4px 10px rgba(14, 131, 69, 0.12);
    }

    .card-glow {
      position: absolute;
      top: -60px;
      right: -60px;
      width: 160px;
      height: 160px;
      background: radial-gradient(circle, rgba(14, 131, 69, 0.08) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
    }

    .highlight-card .card-glow {
      background: radial-gradient(circle, rgba(14, 131, 69, 0.12) 0%, transparent 70%);
    }
  `]
})
export class SkillsComponent {
  private portfolioService = inject(PortfolioService);
  skillCategories = this.portfolioService.getSkills();
}
