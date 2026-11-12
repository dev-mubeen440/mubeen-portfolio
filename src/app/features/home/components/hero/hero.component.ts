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
            <span class="role-block gsap-title-role">Software Engineer | PHP &amp; Laravel</span>
          </h1>

          <p class="hero-intro gsap-fade">
            Building scalable web applications, reliable backend systems, and meaningful software solutions.
          </p>

          <p class="hero-supporting gsap-fade">
            I'm a Software Engineer specializing in PHP and Laravel, with hands-on experience developing production web applications, REST APIs, CRM systems, and database-driven platforms.
          </p>

          <!-- Action Buttons (Mobile-first stack) -->
          <div class="hero-actions gsap-fade">
            <app-button href="#projects" variant="primary" class="hero-action-btn">
              View Selected Work
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 17L17 7"></path>
                <path d="M7 7h10v10"></path>
              </svg>
            </app-button>

            <app-button href="#contact" variant="secondary" class="hero-action-btn">
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
          <div class="card-tabbar">
            <div class="card-tabs">
              <span class="tab tab-active">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
                backend-core.php
              </span>
            </div>
          </div>

          <div class="tech-code-block">
            <div class="code-gutter">
              <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span>
            </div>
            <div class="code-body">
              <div class="code-line"><span class="c-keyword">namespace</span> <span class="c-scope">App&#92;Core&#92;Architecture</span><span class="c-punct">;</span></div>
              <div class="code-line empty"></div>
              <div class="code-line"><span class="c-keyword">class</span> <span class="c-class">SoftwareEngineer</span> <span class="c-keyword">implements</span> <span class="c-interface">ScalableSystem</span> <span class="c-bracket">&#123;</span></div>
              <div class="code-line indent-1"><span class="c-keyword">use</span> <span class="c-trait">CleanCode</span><span class="c-punct">,</span> <span class="c-trait">HighPerformance</span><span class="c-punct">,</span> <span class="c-trait">ResilientAPIs</span><span class="c-punct">;</span></div>
              <div class="code-line empty"></div>
              <div class="code-line indent-1"><span class="c-doc">/** Stack capabilities &amp; pipeline */</span></div>
              <div class="code-line indent-1"><span class="c-keyword">protected array</span> <span class="c-var">$stack</span> <span class="c-op">=</span> <span class="c-bracket">[</span></div>
              <div class="code-line indent-2"><span class="c-str">'backend'</span>      <span class="c-op">=&gt;</span> <span class="c-val">'PHP · Laravel'</span><span class="c-punct">,</span></div>
              <div class="code-line indent-2"><span class="c-str">'frontend'</span>     <span class="c-op">=&gt;</span> <span class="c-val">'Angular · JavaScript · HTML · CSS'</span><span class="c-punct">,</span></div>
              <div class="code-line indent-2"><span class="c-str">'database'</span>     <span class="c-op">=&gt;</span> <span class="c-val">'MySQL · PostgreSQL · Redis'</span><span class="c-punct">,</span></div>
              <div class="code-line indent-2"><span class="c-str">'api'</span>          <span class="c-op">=&gt;</span> <span class="c-val">'REST APIs · Sanctum · RBAC'</span><span class="c-punct">,</span></div>
              <div class="code-line indent-2"><span class="c-str">'architecture'</span> <span class="c-op">=&gt;</span> <span class="c-val">'MVC · OOP · SOLID · Design Patterns'</span><span class="c-punct">,</span></div>
              <div class="code-line indent-2"><span class="c-str">'performance'</span>  <span class="c-op">=&gt;</span> <span class="c-val">'Query Optimization · Caching · Queues'</span><span class="c-punct">,</span></div>
              <div class="code-line indent-2"><span class="c-str">'devops'</span>       <span class="c-op">=&gt;</span> <span class="c-val">'Git · GitHub Actions · CI/CD · Plesk'</span><span class="c-punct">,</span></div>
              <div class="code-line indent-2"><span class="c-str">'domain'</span>       <span class="c-op">=&gt;</span> <span class="c-val">'https://mubeen.site'</span><span class="c-punct">,</span></div>
              <div class="code-line indent-1"><span class="c-bracket">]</span><span class="c-punct">;</span></div>
              <div class="code-line empty"></div>
              <div class="code-line indent-1"><span class="c-keyword">public function</span> <span class="c-func">execute</span><span class="c-bracket">()</span><span class="c-punct">:</span> <span class="c-type">ReliableResult</span></div>
              <div class="code-line indent-1"><span class="c-bracket">&#123;</span></div>
              <div class="code-line indent-2"><span class="c-keyword">return</span> <span class="c-var">$this</span><span class="c-op">-&gt;</span><span class="c-func">buildReliableSystems</span><span class="c-bracket">()</span><span class="c-punct">;</span></div>
              <div class="code-line indent-1"><span class="c-bracket">&#125;</span></div>
              <div class="code-line"><span class="c-bracket">&#125;</span></div>
              <div class="code-line empty"></div>
              <div class="code-line c-comment">// &#10003; Production Apps &middot; Clients &middot; E2E</div>
            </div>
          </div>

          <div class="tech-card-footer">
            <div class="footer-grid">
              <div class="footer-cell">
                <span class="fc-label">Role</span>
                <span class="fc-value">Software Engineer</span>
                <span class="fc-sub">QSoft &middot; Karachi</span>
              </div>
              <div class="footer-cell">
                <span class="fc-label">Education</span>
                <span class="fc-value">BSCS</span>
                <span class="fc-sub">Virtual University &middot; 2027</span>
              </div>
              <div class="footer-cell">
                <span class="fc-label">Experience</span>
                <span class="fc-value">2+ years</span>
                <span class="fc-sub">3 companies</span>
              </div>
              <div class="footer-cell">
                <span class="fc-label">Deliveries</span>
                <span class="fc-value">5+ live sites</span>
                <span class="fc-sub">APIs &middot; CRMs &middot; CMS</span>
              </div>
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
      padding: 2rem 1rem 2.5rem;
      max-width: var(--container-max-width);
      margin: 0 auto;
    }

    @media (min-width: 640px) {
      .hero-section {
        padding: 2.5rem 1.5rem 3rem;
      }
    }

    @media (min-width: 992px) {
      .hero-section {
        padding: 2rem 1.5rem 2.5rem;
      }
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.75rem;
      align-items: center;
      width: 100%;
    }

    @media (min-width: 992px) {
      .hero-grid {
        grid-template-columns: 1.15fr 0.85fr;
        gap: 3rem;
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
      margin-bottom: 1rem;
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
      margin: 0 0 0.9rem 0;
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
      margin-bottom: 0.65rem;
      max-width: 620px;
    }

    .hero-supporting {
      font-size: 0.94rem;
      line-height: 1.65;
      color: var(--color-secondary-text);
      margin-bottom: 1.5rem;
      max-width: 580px;
    }

    .hero-actions {
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
      margin-bottom: 1.5rem;
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
      background: #072e18;
      border: 1px solid rgba(14, 131, 69, 0.25);
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-lg), 0 0 28px rgba(14, 131, 69, 0.08);
      overflow: hidden;
      font-family: var(--font-mono);
      font-size: 0.74rem;
      transform-origin: center;
    }

    @media (min-width: 640px) {
      .hero-tech-card {
        font-size: 0.78rem;
      }
    }

    /* ── Tab bar ── */
    .card-tabbar {
      background: #052112;
      padding: 0.35rem 0.85rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.75rem;
      border-bottom: 1px solid rgba(14, 131, 69, 0.25);
      min-height: 42px;
      flex-wrap: wrap;
    }

    .card-tabs {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    .tab {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.35rem 0.75rem;
      font-size: 0.72rem;
      line-height: 1.2;
      color: rgba(167, 243, 208, 0.55);
      border-radius: 4px;
      white-space: nowrap;
      cursor: default;
      transition: color 0.15s ease, background 0.15s ease;
    }

    .tab.tab-active {
      color: #d1fae5;
      background: rgba(14, 131, 69, 0.25);
      font-weight: 600;
    }

    .tab.tab-active svg {
      color: #34d399;
      flex-shrink: 0;
    }

    /* ── Code area ── */
    .tech-code-block {
      display: flex;
      background: #072e18;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }

    .code-gutter {
      display: flex;
      flex-direction: column;
      padding: 0.9rem 0.55rem 0.9rem 0.75rem;
      background: rgba(0, 0, 0, 0.22);
      border-right: 1px solid rgba(14, 131, 69, 0.18);
      text-align: right;
      user-select: none;
      flex-shrink: 0;
    }

    .code-gutter span {
      display: block;
      font-size: 0.64rem;
      line-height: 1.65;
      color: rgba(167, 243, 208, 0.25);
    }

    .code-body {
      padding: 0.9rem 1rem 0.9rem 0.85rem;
      line-height: 1.65;
      flex: 1;
      min-width: 0;
    }

    .code-line {
      white-space: pre;
      display: block;
      font-size: 0.74rem;
    }

    @media (min-width: 640px) {
      .code-line {
        font-size: 0.78rem;
      }
    }

    .code-line.empty {
      height: 0.6rem;
    }

    .indent-1 { padding-left: 1.15rem; }
    .indent-2 { padding-left: 2.3rem; }

    /* Syntax highlighting */
    .c-keyword   { color: #f472b6; font-weight: 600; }
    .c-scope     { color: #e2e8f0; }
    .c-class     { color: #fbbf24; font-weight: 600; }
    .c-interface { color: #34d399; }
    .c-trait     { color: #93c5fd; }
    .c-doc       { color: rgba(167, 243, 208, 0.45); font-style: italic; }
    .c-var       { color: #93c5fd; }
    .c-str       { color: #6ee7b7; }
    .c-val       { color: #a7f3d0; }
    .c-func      { color: #67e8f9; }
    .c-op        { color: #facc15; font-weight: 600; }
    .c-bracket   { color: #facc15; font-weight: 600; }
    .c-punct     { color: #facc15; font-weight: 600; }
    .c-type      { color: #fbbf24; }
    .c-comment   { color: #34d399; font-style: italic; opacity: 0.85; }

    /* ── Footer ── */
    .tech-card-footer {
      background: #f8fafc;
      padding: 0.85rem 1rem;
      border-top: 1px solid var(--color-border-subtle);
      font-family: var(--font-sans);
    }

    @media (min-width: 640px) {
      .tech-card-footer {
        padding: 0.95rem 1.25rem;
      }
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.65rem 1rem;
    }

    .footer-cell {
      display: flex;
      flex-direction: column;
      gap: 0.1rem;
    }

    .fc-label {
      font-size: 0.62rem;
      font-weight: 700;
      color: var(--color-accent-green);
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    .fc-value {
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--color-primary-text);
      line-height: 1.25;
    }

    .fc-sub {
      font-size: 0.7rem;
      color: var(--color-muted-text);
      line-height: 1.3;
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
