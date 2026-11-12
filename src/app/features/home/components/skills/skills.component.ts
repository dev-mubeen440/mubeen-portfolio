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
      <div class="skills-container section-container">
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
      padding: 4.5rem 0;
      border-top: 1px solid var(--color-border-subtle);
      background: #fafcfb;
    }

    @media (min-width: 640px) {
      .skills-section {
        padding: 5.5rem 0;
      }
    }

    .skills-container {
      width: 100%;
    }

    /* ── Grid layout ── */
    .skills-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.25rem;
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

    /* ── Card ── */
    .skill-category-card {
      background: #ffffff;
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-md);
      padding: 1.6rem 1.5rem 1.75rem;
      display: flex;
      flex-direction: column;
      gap: 1.1rem;
      transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
      position: relative;
      overflow: hidden;
      box-shadow: 0 1px 4px rgba(15, 23, 42, 0.05), 0 0 0 1px rgba(15, 23, 42, 0.03);
    }

    @media (min-width: 640px) {
      .skill-category-card {
        padding: 2rem 1.85rem 2.1rem;
      }
    }

    .skill-category-card:hover {
      border-color: rgba(14, 131, 69, 0.4);
      transform: translateY(-3px);
      box-shadow: 0 8px 24px rgba(14, 131, 69, 0.1), 0 2px 8px rgba(15, 23, 42, 0.07);
    }

    .skill-category-card.highlight-card {
      border-color: rgba(14, 131, 69, 0.3);
      background: linear-gradient(145deg, #ffffff 0%, #f4fbf6 100%);
      box-shadow: 0 2px 10px rgba(14, 131, 69, 0.08), 0 1px 3px rgba(15, 23, 42, 0.05);
    }

    /* ── Card glow ── */
    .card-glow {
      position: absolute;
      top: -50px;
      right: -50px;
      width: 140px;
      height: 140px;
      background: radial-gradient(circle, rgba(14, 131, 69, 0.07) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      transition: opacity 0.3s ease;
    }

    .highlight-card .card-glow {
      background: radial-gradient(circle, rgba(14, 131, 69, 0.13) 0%, transparent 70%);
      width: 180px;
      height: 180px;
      top: -70px;
      right: -70px;
    }

    .skill-category-card:hover .card-glow {
      opacity: 1.5;
    }

    /* ── Card header ── */
    .card-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--color-border-subtle);
    }

    .header-left {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
    }

    .category-index {
      font-family: var(--font-mono);
      font-size: 0.72rem;
      color: var(--color-accent-green);
      font-weight: 700;
      letter-spacing: 0.08em;
      opacity: 0.85;
    }

    .category-name {
      font-family: var(--font-sans);
      font-size: 1.15rem;
      font-weight: 800;
      color: var(--color-primary-text);
      letter-spacing: -0.02em;
      margin: 0;
      line-height: 1.25;
    }

    .skill-count {
      font-family: var(--font-mono);
      font-size: 0.7rem;
      color: var(--color-muted-text);
      background: #f1f5f9;
      padding: 0.28rem 0.65rem;
      border-radius: 999px;
      border: 1px solid var(--color-border-subtle);
      white-space: nowrap;
      font-weight: 600;
      letter-spacing: 0.02em;
      align-self: flex-start;
      margin-top: 0.1rem;
    }

    .highlight-card .skill-count {
      background: rgba(14, 131, 69, 0.07);
      border-color: rgba(14, 131, 69, 0.2);
      color: var(--color-accent-green);
    }

    /* ── Tag flow ── */
    .skills-tag-flow {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .skill-tag {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.42rem 0.8rem;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      font-size: 0.84rem;
      font-weight: 500;
      color: #334155;
      line-height: 1.4;
      box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
      transition: border-color 0.15s ease, color 0.15s ease, background 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
      user-select: none;
      cursor: default;
    }

    .highlight-card .skill-tag {
      background: #ffffff;
    }

    .skill-tag:hover {
      border-color: var(--color-accent-green);
      color: var(--color-accent-green);
      background: #f0fdf4;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(14, 131, 69, 0.14);
    }

    .skill-name {
      white-space: nowrap;
    }
  `]
})
export class SkillsComponent {
  private portfolioService = inject(PortfolioService);
  skillCategories = this.portfolioService.getSkills();
}
