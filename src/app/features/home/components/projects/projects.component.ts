import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent],
  template: `
    <section id="projects" class="projects-section">
      <div class="projects-container">
        <app-section-heading
          title="Selected Projects"
          eyebrow="Engineering Showcase"
          description="Detailed architectural overviews of production systems, mission-critical maritime software, business platforms, and delivered web portals.">
        </app-section-heading>

        <div class="projects-grid">
          @for (proj of projects; track proj.name; let i = $index) {
            <article class="project-card" [class.collection-card]="!!proj.clientWebsites">
              <!-- Top bar: Category + Counter -->
              <div class="card-header">
                <span class="proj-category">{{ proj.category }}</span>
                <span class="proj-counter">0{{ i + 1 }}</span>
              </div>

              <!-- Main Info -->
              <h3 class="proj-name">{{ proj.name }}</h3>
              <p class="proj-desc">{{ proj.description }}</p>

              <!-- Technologies Pill Stack -->
              <div class="tech-stack">
                @for (tech of proj.technologies; track tech) {
                  <span class="tech-pill">{{ tech }}</span>
                }
              </div>

              <!-- Key Contributions & Architecture breakdown -->
              <div class="contributions-block">
                <h4 class="contributions-title">Key Engineering Contributions</h4>
                <ul class="contributions-list">
                  @for (item of proj.contributions; track item) {
                    <li>
                      <span class="check-icon" aria-hidden="true">&#x25AA;</span>
                      <span>{{ item }}</span>
                    </li>
                  }
                </ul>
              </div>

              <!-- If this is the Laravel CMS Delivered collection, render direct verified links -->
              @if (proj.clientWebsites && proj.clientWebsites.length > 0) {
                <div class="live-sites-panel">
                  <h4 class="sites-title">Delivered Production Properties</h4>
                  <div class="sites-grid">
                    @for (site of proj.clientWebsites; track site.url) {
                      <a 
                        [href]="site.url" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        class="site-chip" 
                        [attr.aria-label]="'Visit ' + site.title + ' website in new tab'">
                        <div class="site-chip-info">
                          <span class="site-title">{{ site.title }}</span>
                          <span class="site-host">{{ site.url.replace('https://', '') }}</span>
                        </div>
                        <div class="site-chip-right">
                          @if (site.badge) {
                            <span class="volunteer-tag">{{ site.badge }}</span>
                          }
                          <svg class="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </div>
                      </a>
                    }
                  </div>
                </div>
              }
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects-section {
      padding: 5rem 1.5rem;
      border-top: 1px solid rgba(156, 178, 162, 0.08);
    }

    .projects-container {
      max-width: var(--container-max-width);
      margin: 0 auto;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2.25rem;
    }

    @media (min-width: 900px) {
      .projects-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .project-card {
      background: #051a0e;
      border: 1px solid rgba(156, 178, 162, 0.12);
      border-radius: var(--radius-md);
      padding: 2.25rem 2rem;
      display: flex;
      flex-direction: column;
      transition: all var(--transition-fast);
      position: relative;
    }

    .project-card:hover {
      border-color: rgba(50, 205, 85, 0.35);
      box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45);
      transform: translateY(-2px);
    }

    .project-card.collection-card {
      @media (min-width: 900px) {
        grid-column: 1 / -1;
      }
      background: linear-gradient(135deg, #051c0f 0%, #04160c 100%);
      border-color: rgba(50, 205, 85, 0.22);
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.25rem;
    }

    .proj-category {
      font-size: 0.78rem;
      font-weight: 600;
      color: var(--color-accent-green);
      letter-spacing: 0.02em;
    }

    .proj-counter {
      font-family: var(--font-mono);
      font-size: 0.85rem;
      color: var(--color-muted-text);
      font-weight: 500;
    }

    .proj-name {
      font-family: var(--font-sans);
      font-size: 1.45rem;
      font-weight: 700;
      line-height: 1.3;
      letter-spacing: -0.015em;
      color: var(--color-primary-text);
      margin: 0 0 0.85rem 0;
    }

    .proj-desc {
      font-size: 0.96rem;
      line-height: 1.6;
      color: var(--color-secondary-text);
      margin-bottom: 1.5rem;
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
      margin-bottom: 1.75rem;
    }

    .tech-pill {
      font-family: var(--font-mono);
      font-size: 0.76rem;
      background: rgba(10, 38, 10, 0.6);
      color: #b5c7bb;
      padding: 0.25rem 0.65rem;
      border-radius: var(--radius-sm);
      border: 1px solid rgba(156, 178, 162, 0.1);
    }

    .contributions-block {
      border-top: 1px solid rgba(156, 178, 162, 0.1);
      padding-top: 1.25rem;
      margin-top: auto;
    }

    .contributions-title {
      font-family: var(--font-sans);
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--color-primary-text);
      margin: 0 0 0.75rem 0;
    }

    .contributions-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.55rem;
    }

    .contributions-list li {
      display: flex;
      gap: 0.6rem;
      align-items: baseline;
      font-size: 0.88rem;
      line-height: 1.5;
      color: var(--color-secondary-text);
    }

    .check-icon {
      color: var(--color-accent-green);
      font-size: 0.65rem;
    }

    /* Live sites grid for CMS Websites */
    .live-sites-panel {
      margin-top: 2rem;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(50, 205, 85, 0.2);
    }

    .sites-title {
      font-family: var(--font-sans);
      font-size: 0.82rem;
      font-weight: 600;
      color: var(--color-accent-green);
      margin: 0 0 1rem 0;
    }

    .sites-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 0.85rem;
    }

    .site-chip {
      background: rgba(3, 20, 11, 0.8);
      border: 1px solid rgba(156, 178, 162, 0.15);
      border-radius: var(--radius-sm);
      padding: 0.85rem 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-decoration: none;
      transition: all var(--transition-fast);
    }

    .site-chip:hover {
      background: rgba(10, 38, 10, 0.9);
      border-color: var(--color-accent-green);
      transform: translateY(-1px);
    }

    .site-chip-info {
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
    }

    .site-title {
      font-weight: 600;
      font-size: 0.92rem;
      color: var(--color-primary-text);
    }

    .site-host {
      font-size: 0.76rem;
      color: var(--color-muted-text);
      font-family: var(--font-mono);
    }

    .site-chip-right {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .volunteer-tag {
      font-size: 0.68rem;
      background: rgba(50, 205, 85, 0.14);
      color: var(--color-accent-green);
      padding: 0.15rem 0.45rem;
      border-radius: 999px;
      white-space: nowrap;
    }

    .external-icon {
      width: 14px;
      height: 14px;
      color: var(--color-secondary-text);
      transition: color var(--transition-fast);
    }

    .site-chip:hover .external-icon {
      color: var(--color-accent-green);
    }
  `]
})
export class ProjectsComponent {
  private portfolioService = inject(PortfolioService);
  projects = this.portfolioService.getProjects();
}
