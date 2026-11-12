import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="footer">
      <div class="footer-container section-container">
        <!-- Top Row: Brand & Quick Action -->
        <div class="footer-header">
          <div class="footer-brand">
            <div class="brand-badge-group">
              <img 
                src="/mubeen_aslam.webp" 
                alt="Mubeen Aslam" 
                class="brand-avatar-img"
                width="42" 
                height="42" />
              <div>
                <span class="footer-name">Mubeen Aslam</span>
                <span class="footer-role">Software Engineer &middot; PHP &amp; Laravel</span>
              </div>
            </div>
            <p class="brand-tagline">
              Software Engineer specializing in PHP and Laravel, building scalable web applications and reliable backend systems.
            </p>
          </div>

          <div class="footer-actions">
            <a href="#contact" class="footer-cta-btn" (click)="scrollTo($event, 'contact')">
              <span>Let's Discuss a Project</span>
              &rarr;
            </a>
            <button class="back-to-top" (click)="scrollToTop()" aria-label="Back to top">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 19V5M5 12l7-7 7 7"/>
              </svg>
              <span>Back to top</span>
            </button>
          </div>
        </div>

        <!-- Middle Row: Navigation Links Grid -->
        <div class="footer-grid">
          <div class="grid-col">
            <span class="col-title">Navigation</span>
            <ul class="col-links">
              <li><a href="#hero" (click)="scrollTo($event, 'hero')">Top / Overview</a></li>
              <li><a href="#about" (click)="scrollTo($event, 'about')">About &amp; Principles</a></li>
              <li><a href="#experience" (click)="scrollTo($event, 'experience')">Career Experience</a></li>
              <li><a href="#projects" (click)="scrollTo($event, 'projects')">Delivered Projects</a></li>
              <li><a href="#skills" (click)="scrollTo($event, 'skills')">Technical Skills</a></li>
              <li><a href="#education" (click)="scrollTo($event, 'education')">Education</a></li>
              <li><a href="#contact" (click)="scrollTo($event, 'contact')">Contact Channels</a></li>
            </ul>
          </div>

          <div class="grid-col">
            <span class="col-title">Connect &amp; Social</span>
            <ul class="col-links">
              <li>
                <a href="https://github.com/dev-mubeen440" target="_blank" rel="noopener noreferrer">
                  <span>GitHub</span>
                  <span class="ext-arrow">&nearr;</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/mubeen-aslam-177475294/" target="_blank" rel="noopener noreferrer">
                  <span>LinkedIn</span>
                  <span class="ext-arrow">&nearr;</span>
                </a>
              </li>
              <li>
                <a href="mailto:mubeenaslam440@gmail.com">
                  <span>Email Direct</span>
                  <span class="ext-arrow">&nearr;</span>
                </a>
              </li>
              <li>
                <a href="tel:+923092919847">
                  <span>Phone &amp; WhatsApp</span>
                  <span class="ext-arrow">&nearr;</span>
                </a>
              </li>
            </ul>
          </div>

          <div class="grid-col">
            <span class="col-title">System Status</span>
            <div class="status-card">
              <div class="status-indicator-row">
                <span class="pulse-dot"></span>
                <span class="status-label">Operational &amp; Available</span>
              </div>
              <p class="status-desc">
                Currently engaged as Software Engineer at QSoft. Available for technical consultations and opportunities.
              </p>
            </div>
          </div>
        </div>

        <!-- Bottom Row: Copyright & Location -->
        <div class="footer-bottom">
          <p class="copyright">
            &copy; {{ currentYear }} Mubeen Aslam. All rights reserved.
          </p>
          <div class="footer-meta">
            <span class="location-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Karachi, PK</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      border-top: 1px solid var(--color-border-subtle);
      background: #ffffff;
      padding: 3.5rem 0 2rem;
      margin-top: 4.5rem;
    }

    @media (min-width: 640px) {
      .footer {
        padding: 4.5rem 0 2.5rem;
        margin-top: 6rem;
      }
    }

    .footer-container {
      width: 100%;
    }

    /* Top Row */
    .footer-header {
      display: flex;
      flex-direction: column;
      gap: 1.75rem;
      padding-bottom: 2.5rem;
      border-bottom: 1px solid var(--color-border-subtle);
    }

    @media (min-width: 860px) {
      .footer-header {
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
      }
    }

    .footer-brand {
      max-width: 520px;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .brand-badge-group {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .brand-avatar-img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      object-fit: cover;
      object-position: center top;
      border: 2px solid var(--color-accent-green);
      flex-shrink: 0;
      box-shadow: 0 2px 8px rgba(14, 131, 69, 0.25);
      background: #f1f5f9;
    }

    .footer-name {
      display: block;
      font-family: var(--font-sans);
      font-size: 1.15rem;
      font-weight: 800;
      color: var(--color-primary-text);
      letter-spacing: -0.015em;
    }

    .footer-role {
      display: block;
      font-size: 0.78rem;
      color: var(--color-accent-green);
      font-weight: 600;
    }

    .brand-tagline {
      font-size: 0.92rem;
      line-height: 1.6;
      color: var(--color-secondary-text);
      margin: 0;
    }

    .footer-actions {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      width: 100%;
    }

    @media (min-width: 520px) {
      .footer-actions {
        flex-direction: row;
        width: auto;
        align-items: center;
      }
    }

    .footer-cta-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      background: linear-gradient(to bottom, #03140B, #175616);
      color: #ffffff !important;
      font-weight: 700;
      font-size: 0.88rem;
      padding: 0.75rem 1.35rem;
      border-radius: var(--radius-sm);
      text-decoration: none;
      box-shadow: 0 4px 14px rgba(3, 20, 11, 0.3);
      transition: all var(--transition-fast);
      text-align: center;
    }

    .footer-cta-btn:hover {
      background: linear-gradient(to bottom, #020d07, #134712);
      transform: translateY(-1px);
      box-shadow: 0 6px 18px rgba(3, 20, 11, 0.4);
    }

    .back-to-top {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.45rem;
      background: #f8fafc;
      border: 1px solid var(--color-border-subtle);
      color: var(--color-secondary-text);
      font-family: var(--font-sans);
      font-size: 0.84rem;
      font-weight: 600;
      padding: 0.75rem 1.15rem;
      border-radius: var(--radius-sm);
      cursor: pointer;
      box-shadow: var(--shadow-sm);
      transition: all var(--transition-fast);
    }

    .back-to-top:hover {
      border-color: var(--color-accent-green);
      color: var(--color-accent-green);
      background: #ffffff;
      transform: translateY(-1px);
    }

    /* Grid Row */
    .footer-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 2.5rem 0;
      border-bottom: 1px solid var(--color-border-subtle);
    }

    @media (min-width: 600px) {
      .footer-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 900px) {
      .footer-grid {
        grid-template-columns: 1fr 1fr 1.3fr;
        gap: 3rem;
      }
    }

    .grid-col {
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
    }

    .col-title {
      font-family: var(--font-mono);
      font-size: 0.76rem;
      font-weight: 700;
      color: var(--color-accent-green);
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .col-links {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
    }

    .col-links a {
      font-size: 0.92rem;
      color: var(--color-secondary-text);
      text-decoration: none;
      font-weight: 500;
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      transition: all var(--transition-fast);
    }

    .col-links a:hover {
      color: var(--color-accent-green);
      transform: translateX(2px);
    }

    .ext-arrow {
      font-size: 0.85rem;
      color: var(--color-muted-text);
    }

    .status-card {
      background: #f8fafc;
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-sm);
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
    }

    .status-indicator-row {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .pulse-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--color-accent-green);
      box-shadow: 0 0 8px rgba(16, 185, 129, 0.6);
    }

    .status-label {
      font-size: 0.84rem;
      font-weight: 700;
      color: var(--color-primary-text);
    }

    .status-desc {
      font-size: 0.85rem;
      color: var(--color-secondary-text);
      line-height: 1.5;
      margin: 0;
    }

    .domain-badge {
      font-family: var(--font-mono);
      font-size: 0.76rem;
      font-weight: 600;
      color: var(--color-accent-green);
    }

    /* Bottom Row */
    .footer-bottom {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding-top: 1.75rem;
      font-size: 0.82rem;
      color: var(--color-muted-text);
    }

    @media (min-width: 640px) {
      .footer-bottom {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
    }

    .copyright {
      margin: 0;
      color: var(--color-muted-text);
      font-size: 0.84rem;
    }

    .footer-meta {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .location-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.78rem;
      font-weight: 600;
      padding: 0.35rem 0.75rem;
      background: #f1f5f9;
      color: var(--color-secondary-text);
      border-radius: 999px;
      border: 1px solid var(--color-border-subtle);
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  scrollToTop() {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  scrollTo(event: MouseEvent, targetId: string) {
    event.preventDefault();
    if (typeof document !== 'undefined') {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
