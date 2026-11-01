import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { SocialLinksComponent } from '../../../../shared/components/social-links/social-links.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonComponent, SocialLinksComponent],
  preserveWhitespaces: true,
  template: `
    <section id="hero" class="hero-section">
      <div class="hero-grid">
        <!-- Main Editorial Column -->
        <div class="hero-content">
          <div class="hero-kicker">
            <span class="status-dot"></span>
            <span class="kicker-text">Karachi, Pakistan &middot; Open to Opportunities</span>
          </div>

          <h1 class="hero-title">
            <span class="name-block">Mubeen Aslam</span>
            <span class="role-block">PHP Laravel Developer</span>
          </h1>

          <p class="hero-intro">
            Building scalable web applications, reliable backend systems, and meaningful digital experiences.
          </p>

          <p class="hero-supporting">
            Software Engineer specializing in PHP and Laravel, with experience building production applications, REST APIs, CRM systems, and database-driven platforms.
          </p>

          <!-- Action Buttons -->
          <div class="hero-actions">
            <app-button href="#projects" variant="primary">
              View My Work
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 17L17 7"></path>
                <path d="M7 7h10v10"></path>
              </svg>
            </app-button>

            <app-button href="#contact" variant="secondary">
              Contact Me
            </app-button>

            <button type="button" class="cv-download-btn" (click)="handleDownloadCv()">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Download CV</span>
            </button>
          </div>

          <!-- Socials + Direct Contact Line -->
          <div class="hero-meta">
            <app-social-links 
              [githubUrl]="profile.github" 
              [linkedinUrl]="profile.linkedin" 
              [email]="profile.email">
            </app-social-links>
            
            <div class="direct-contact-tags">
              <a [href]="'tel:' + profile.phone" class="contact-tag">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>{{ profile.phone }}</span>
              </a>
              <span class="location-tag">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Karachi, PK</span>
              </span>
            </div>
          </div>
        </div>

        <!-- Technical Identity Visual Panel (Asymmetrical editorial card, not generic stock illustration) -->
        <div class="hero-tech-card" aria-hidden="true">
          <div class="tech-card-header">
            <span class="file-tag">backend-core.php</span>
            <span class="status-indicator">production-ready</span>
          </div>

          <div class="tech-code-block">
            <div class="code-line"><span class="c-keyword">namespace</span> <span class="c-scope">App\\Core\\Architecture</span>;</div>
            <div class="code-line empty"></div>
            <div class="code-line"><span class="c-keyword">class</span> <span class="c-class">BackendArchitect</span> <span class="c-keyword">implements</span> <span class="c-interface">ScalableSystem</span> &#123;</div>
            <div class="code-line indent-1"><span class="c-keyword">use</span> <span class="c-trait">CleanCode, HighPerformance, ResilientAPIs</span>;</div>
            <div class="code-line empty"></div>
            <div class="code-line indent-1"><span class="c-doc">/** Stack capabilities &amp; pipeline */</span></div>
            <div class="code-line indent-1"><span class="c-keyword">protected array</span> <span class="c-var">$stack</span> = [</div>
            <div class="code-line indent-2"><span class="c-str">'framework'</span>&nbsp;<span class="c-op">=></span> <span class="c-val">'Laravel 11 / PHP 8.3'</span>,</div>
            <div class="code-line indent-2"><span class="c-str">'database'</span>&nbsp;&nbsp;<span class="c-op">=></span> <span class="c-val">'MySQL / PostgreSQL / Redis'</span>,</div>
            <div class="code-line indent-2"><span class="c-str">'pipelines'</span>&nbsp;<span class="c-op">=></span> <span class="c-val">'GitHub Actions CI/CD'</span>,</div>
            <div class="code-line indent-2"><span class="c-str">'security'</span>&nbsp;&nbsp;<span class="c-op">=></span> <span class="c-val">'Sanctum RBAC &amp; Auth'</span>,</div>
            <div class="code-line indent-1">];</div>
            <div class="code-line empty"></div>
            <div class="code-line indent-1"><span class="c-keyword">public function</span> <span class="c-func">execute</span>(): <span class="c-type">ReliableResult</span> &#123;</div>
            <div class="code-line indent-2"><span class="c-keyword">return</span> <span class="c-var">$this</span>->deliverProductionSystems();</div>
            <div class="code-line indent-1">&#125;</div>
            <div class="code-line">&#125;</div>
          </div>

          <div class="tech-card-footer">
            <div class="stat-pill">
              <span class="stat-key">Role</span>
              <span class="stat-val">Software Engineer @ QSoft</span>
            </div>
            <div class="stat-pill">
              <span class="stat-key">Education</span>
              <span class="stat-val">BSCS (VU, 2027)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      min-height: calc(100vh - var(--nav-height));
      display: flex;
      align-items: center;
      padding: 4.5rem 1.5rem 5rem;
      max-width: var(--container-max-width);
      margin: 0 auto;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3.5rem;
      align-items: center;
      width: 100%;
    }

    @media (min-width: 992px) {
      .hero-grid {
        grid-template-columns: 1.15fr 0.85fr;
        gap: 4rem;
      }
    }

    .hero-content {
      display: flex;
      flex-direction: column;
    }

    .hero-kicker {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      background: rgba(10, 38, 10, 0.6);
      border: 1px solid var(--color-border-subtle);
      border-radius: 999px;
      padding: 0.35rem 0.95rem;
      width: fit-content;
      margin-bottom: 1.75rem;
    }

    .status-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--color-accent-green);
      box-shadow: 0 0 10px var(--color-accent-green);
      animation: pulseGlow 2.5s infinite;
    }

    @keyframes pulseGlow {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.45; transform: scale(0.85); }
    }

    .kicker-text {
      font-size: 0.8rem;
      color: var(--color-secondary-text);
      font-weight: 500;
    }

    .hero-title {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
      margin: 0 0 1.5rem 0;
      line-height: 1.12;
    }

    .name-block {
      font-family: var(--font-sans);
      font-size: clamp(2.6rem, 5.2vw, 4.25rem);
      font-weight: 800;
      letter-spacing: -0.035em;
      color: var(--color-primary-text);
    }

    .role-block {
      font-family: var(--font-sans);
      font-size: clamp(1.4rem, 2.8vw, 2.2rem);
      font-weight: 600;
      color: var(--color-accent-green);
      letter-spacing: -0.02em;
      opacity: 0.95;
    }

    .hero-intro {
      font-size: clamp(1.15rem, 1.8vw, 1.35rem);
      line-height: 1.5;
      font-weight: 400;
      color: var(--color-primary-text);
      margin-bottom: 1.1rem;
      max-width: 620px;
    }

    .hero-supporting {
      font-size: 0.98rem;
      line-height: 1.65;
      color: var(--color-secondary-text);
      margin-bottom: 2.25rem;
      max-width: 580px;
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.85rem;
      margin-bottom: 2.5rem;
    }

    .cv-download-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(10, 38, 10, 0.4);
      border: 1px solid var(--color-border-subtle);
      color: var(--color-primary-text);
      font-family: var(--font-sans);
      font-size: 0.88rem;
      font-weight: 500;
      padding: 0.65rem 1.25rem;
      border-radius: var(--radius-sm);
      cursor: pointer;
      transition: all var(--transition-fast);
    }

    .cv-download-btn:hover {
      background: rgba(23, 86, 22, 0.35);
      border-color: var(--color-accent-green);
      color: #ffffff;
      transform: translateY(-1px);
    }

    .hero-meta {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(156, 178, 162, 0.1);
    }

    .direct-contact-tags {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.75rem;
      font-size: 0.8rem;
      color: var(--color-secondary-text);
    }

    .contact-tag, .location-tag {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      color: var(--color-secondary-text);
      text-decoration: none;
      background: rgba(10, 38, 10, 0.3);
      padding: 0.3rem 0.65rem;
      border-radius: var(--radius-sm);
      border: 1px solid rgba(156, 178, 162, 0.08);
      transition: color var(--transition-fast);
    }

    .contact-tag:hover {
      color: var(--color-accent-green);
      border-color: var(--color-border-line);
    }

    /* Technical visual card */
    .hero-tech-card {
      background: #051a0e;
      border: 1px solid rgba(50, 205, 85, 0.2);
      border-radius: var(--radius-md);
      box-shadow: 0 24px 60px rgba(0, 0, 0, 0.55), 0 0 35px rgba(23, 86, 22, 0.2);
      overflow: hidden;
      font-family: var(--font-mono);
      font-size: 0.82rem;
    }

    .tech-card-header {
      background: #03140b;
      padding: 0.75rem 1.25rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(156, 178, 162, 0.12);
    }

    .file-tag {
      color: var(--color-primary-text);
      font-weight: 500;
    }

    .status-indicator {
      font-size: 0.72rem;
      color: var(--color-accent-green);
      background: rgba(50, 205, 85, 0.12);
      padding: 0.2rem 0.55rem;
      border-radius: 999px;
      border: 1px solid rgba(50, 205, 85, 0.25);
    }

    .tech-code-block {
      padding: 1.5rem 1.25rem;
      line-height: 1.7;
      color: #9cb2a2;
      overflow-x: auto;
    }

    .code-line {
      white-space: pre;
    }
    .code-line.empty {
      height: 0.75rem;
    }
    .indent-1 { padding-left: 1.25rem; }
    .indent-2 { padding-left: 2.5rem; }

    .c-keyword { color: #f28b82; font-weight: 600; }
    .c-scope { color: #e8eaed; }
    .c-class { color: #fdd663; font-weight: 600; }
    .c-interface { color: #81c995; }
    .c-trait { color: #8ab4f8; }
    .c-doc { color: #5f7a69; font-style: italic; }
    .c-var { color: #8ab4f8; }
    .c-str { color: #a8dab5; }
    .c-val { color: #81c995; }
    .c-func { color: #78d9ec; }
    .c-op { color: #f28b82; font-weight: 600; }
    .c-type { color: #fdd663; }

    .tech-card-footer {
      background: #03140b;
      padding: 0.85rem 1.25rem;
      border-top: 1px solid rgba(156, 178, 162, 0.1);
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      font-family: var(--font-sans);
    }

    .stat-pill {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.78rem;
    }

    .stat-key {
      color: var(--color-muted-text);
      font-weight: 500;
    }

    .stat-val {
      color: var(--color-primary-text);
      font-weight: 600;
    }
  `]
})
export class HeroComponent {
  private portfolioService = inject(PortfolioService);
  profile = this.portfolioService.profile;

  handleDownloadCv() {
    // Directly download verified CV file
    const link = document.createElement('a');
    link.href = this.profile.cvPath;
    link.download = 'Mubeen_Aslam_Resume.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
