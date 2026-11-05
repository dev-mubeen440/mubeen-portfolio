import { Component, AfterViewInit, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { SocialLinksComponent } from '../../../../shared/components/social-links/social-links.component';
import gsap from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, SocialLinksComponent],
  preserveWhitespaces: true,
  template: `
    <section id="hero" class="hero-section">
      <div class="hero-grid">
        <!-- Main Editorial Column -->
        <div class="hero-content">
          <div class="hero-kicker gsap-fade">
            <span class="status-dot"></span>
            <span class="kicker-text">Karachi, PK &middot; Open to Opportunities</span>
          </div>

          <h1 class="hero-title">
            <span class="name-block gsap-title-name">Mubeen Aslam</span>
            <span class="role-block gsap-title-role">PHP Laravel Developer</span>
          </h1>

          <p class="hero-intro gsap-fade">
            Building scalable web applications, reliable backend systems, and meaningful digital experiences.
          </p>

          <p class="hero-supporting gsap-fade">
            Software Engineer specializing in PHP and Laravel, with experience building production applications, REST APIs, CRM systems, and database-driven platforms.
          </p>

          <!-- Action Buttons (Mobile-first stack) -->
          <div class="hero-actions gsap-fade">
            <app-button routerLink="/projects" variant="primary" class="hero-action-btn">
              View Selected Work
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 17L17 7"></path>
                <path d="M7 7h10v10"></path>
              </svg>
            </app-button>

            <app-button routerLink="/contact" variant="secondary" class="hero-action-btn">
              Contact Me
            </app-button>

            <button type="button" class="cv-download-btn hero-action-btn" (click)="handleDownloadCv()">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Download CV</span>
            </button>
          </div>

          <!-- Socials + Direct Contact Line -->
          <div class="hero-meta gsap-fade">
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

        <!-- Technical Identity Visual Panel (Responsive on small screens) -->
        <div class="hero-tech-card gsap-card" aria-hidden="true">
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
            <div class="code-line indent-2"><span class="c-str">'domain'</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-op">=></span> <span class="c-val">'https://mubeen.site'</span>,</div>
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
      padding: 2.25rem 1rem 3.5rem;
      max-width: var(--container-max-width);
      margin: 0 auto;
    }

    @media (min-width: 640px) {
      .hero-section {
        padding: 4.5rem 1.5rem 5rem;
      }
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2.5rem;
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
      gap: 0.5rem;
      background: #f8fafc;
      border: 1px solid var(--color-border-subtle);
      border-radius: 999px;
      padding: 0.3rem 0.85rem;
      width: fit-content;
      margin-bottom: 1.25rem;
      box-shadow: var(--shadow-sm);
    }

    .status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--color-accent-green);
      box-shadow: 0 0 10px rgba(16, 185, 129, 0.6);
      animation: pulseGlow 2.5s infinite;
    }

    @keyframes pulseGlow {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(0.85); }
    }

    .kicker-text {
      font-size: 0.78rem;
      color: var(--color-secondary-text);
      font-weight: 600;
    }

    .hero-title {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      margin: 0 0 1rem 0;
      line-height: 1.12;
    }

    .name-block {
      font-family: var(--font-sans);
      font-size: clamp(2.2rem, 5vw, 4.25rem);
      font-weight: 800;
      letter-spacing: -0.035em;
      color: var(--color-primary-text);
    }

    .role-block {
      font-family: var(--font-sans);
      font-size: clamp(1.25rem, 2.7vw, 2.15rem);
      font-weight: 700;
      background: linear-gradient(135deg, #0d5c31 0%, #0e8345 50%, #10b981 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      letter-spacing: -0.02em;
    }

    .hero-intro {
      font-size: clamp(1.05rem, 1.8vw, 1.3rem);
      line-height: 1.55;
      font-weight: 500;
      color: var(--color-primary-text);
      margin-bottom: 0.85rem;
      max-width: 620px;
    }

    .hero-supporting {
      font-size: 0.94rem;
      line-height: 1.65;
      color: var(--color-secondary-text);
      margin-bottom: 1.75rem;
      max-width: 580px;
    }

    .hero-actions {
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
      margin-bottom: 2rem;
      width: 100%;
    }

    @media (min-width: 520px) {
      .hero-actions {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        width: auto;
      }
    }

    .hero-action-btn {
      width: 100%;
    }

    @media (min-width: 520px) {
      .hero-action-btn {
        width: auto;
      }
    }

    .cv-download-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      background: #ffffff;
      border: 1px solid var(--color-border-subtle);
      color: var(--color-primary-text);
      font-family: var(--font-sans);
      font-size: 0.9rem;
      font-weight: 600;
      padding: 0.7rem 1.3rem;
      border-radius: var(--radius-sm);
      cursor: pointer;
      box-shadow: var(--shadow-sm);
      transition: all var(--transition-fast);
    }

    .cv-download-btn:hover {
      background: #f8fafc;
      border-color: var(--color-accent-green);
      color: var(--color-accent-green);
      transform: translateY(-1px);
      box-shadow: var(--shadow-md);
    }

    .hero-meta {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding-top: 1.25rem;
      border-top: 1px solid var(--color-border-subtle);
    }

    .direct-contact-tags {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.55rem;
      font-size: 0.8rem;
      color: var(--color-secondary-text);
    }

    .contact-tag, .location-tag {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      color: var(--color-secondary-text);
      text-decoration: none;
      background: #f8fafc;
      padding: 0.35rem 0.75rem;
      border-radius: var(--radius-sm);
      border: 1px solid var(--color-border-subtle);
      transition: all var(--transition-fast);
      box-shadow: var(--shadow-sm);
    }

    .contact-tag:hover {
      color: var(--color-accent-green);
      border-color: var(--color-accent-green);
    }

    /* Technical visual card */
    .hero-tech-card {
      background: #ffffff;
      border: 1px solid rgba(14, 131, 69, 0.2);
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-lg), 0 0 20px rgba(14, 131, 69, 0.08);
      overflow: hidden;
      font-family: var(--font-mono);
      font-size: 0.78rem;
      transform-origin: center;
    }

    @media (min-width: 640px) {
      .hero-tech-card {
        font-size: 0.82rem;
      }
    }

    .tech-card-header {
      background: linear-gradient(135deg, #072e18 0%, #0d4a27 100%);
      padding: 0.75rem 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(14, 131, 69, 0.2);
    }

    @media (min-width: 640px) {
      .tech-card-header {
        padding: 0.85rem 1.25rem;
      }
    }

    .file-tag {
      color: #ffffff;
      font-weight: 600;
    }

    .status-indicator {
      font-size: 0.7rem;
      color: #a7f3d0;
      background: rgba(16, 185, 129, 0.2);
      padding: 0.15rem 0.55rem;
      border-radius: 999px;
      border: 1px solid rgba(16, 185, 129, 0.3);
    }

    .tech-code-block {
      padding: 1.25rem 1rem;
      line-height: 1.65;
      color: #334155;
      background: #fafcfb;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }

    @media (min-width: 640px) {
      .tech-code-block {
        padding: 1.5rem 1.25rem;
        line-height: 1.7;
      }
    }

    .code-line {
      white-space: pre;
    }
    .code-line.empty {
      height: 0.65rem;
    }
    .indent-1 { padding-left: 1rem; }
    .indent-2 { padding-left: 2rem; }

    .c-keyword { color: #dc2626; font-weight: 600; }
    .c-scope { color: #0f172a; }
    .c-class { color: #d97706; font-weight: 600; }
    .c-interface { color: #059669; }
    .c-trait { color: #2563eb; }
    .c-doc { color: #64748b; font-style: italic; }
    .c-var { color: #2563eb; }
    .c-str { color: #059669; }
    .c-val { color: #047857; font-weight: 500; }
    .c-func { color: #0284c7; }
    .c-op { color: #dc2626; font-weight: 600; }
    .c-type { color: #d97706; }

    .tech-card-footer {
      background: #f1f5f9;
      padding: 0.85rem 1rem;
      border-top: 1px solid var(--color-border-subtle);
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      font-family: var(--font-sans);
    }

    @media (min-width: 640px) {
      .tech-card-footer {
        padding: 0.95rem 1.25rem;
      }
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
      font-weight: 700;
    }
  `]
})
export class HeroComponent implements AfterViewInit {
  private el = inject(ElementRef);
  private portfolioService = inject(PortfolioService);
  profile = this.portfolioService.profile;

  ngAfterViewInit() {
    if (typeof window !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const container = this.el.nativeElement;
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(container.querySelector('.gsap-title-name'), {
        y: 35,
        opacity: 0,
        duration: 0.8
      })
      .from(container.querySelector('.gsap-title-role'), {
        y: 25,
        opacity: 0,
        duration: 0.7
      }, '-=0.5')
      .from(container.querySelectorAll('.gsap-fade'), {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12
      }, '-=0.4')
      .from(container.querySelector('.gsap-card'), {
        x: 30,
        opacity: 0,
        scale: 0.96,
        duration: 0.85
      }, '-=0.6');
    }
  }

  handleDownloadCv() {
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
