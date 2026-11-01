import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-top">
          <div class="footer-brand">
            <span class="footer-name">Mubeen Aslam</span>
            <span class="footer-role">PHP Laravel Developer</span>
          </div>

          <div class="footer-links">
            <a href="https://github.com/dev-mubeen440" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span class="sep">/</span>
            <a href="https://www.linkedin.com/in/mubeen-aslam-177475294/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span class="sep">/</span>
            <a href="mailto:mubeenaslam440@gmail.com">Email</a>
          </div>

          <button class="back-to-top" (click)="scrollToTop()" aria-label="Back to top">
            <span>Back to top</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          </button>
        </div>

        <div class="footer-bottom">
          <p class="copyright">
            &copy; {{ currentYear }} Mubeen Aslam. Engineered with Angular & Clean Architecture.
          </p>
          <span class="location-badge">Karachi, Pakistan</span>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      border-top: 1px solid rgba(156, 178, 162, 0.1);
      background: #020e07;
      padding: 3rem 1.5rem 2.5rem;
      margin-top: 5rem;
    }

    .footer-container {
      max-width: var(--container-max-width);
      margin: 0 auto;
    }

    .footer-top {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid rgba(156, 178, 162, 0.08);
    }

    .footer-brand {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }

    .footer-name {
      font-family: var(--font-sans);
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--color-primary-text);
      letter-spacing: -0.015em;
    }

    .footer-role {
      font-size: 0.82rem;
      color: var(--color-accent-green);
    }

    .footer-links {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 0.88rem;
    }

    .footer-links a {
      color: var(--color-secondary-text);
      text-decoration: none;
      transition: color var(--transition-fast);
    }

    .footer-links a:hover {
      color: var(--color-accent-green);
    }

    .sep {
      color: rgba(156, 178, 162, 0.3);
    }

    .back-to-top {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      background: transparent;
      border: 1px solid rgba(156, 178, 162, 0.15);
      color: var(--color-secondary-text);
      font-family: var(--font-sans);
      font-size: 0.8rem;
      padding: 0.4rem 0.85rem;
      border-radius: var(--radius-sm);
      cursor: pointer;
      transition: all var(--transition-fast);
    }

    .back-to-top:hover {
      border-color: var(--color-accent-green);
      color: var(--color-primary-text);
    }

    .footer-bottom {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding-top: 1.5rem;
      font-size: 0.8rem;
      color: var(--color-muted-text);
    }

    .copyright {
      margin: 0;
      color: var(--color-muted-text);
    }

    .location-badge {
      display: inline-flex;
      align-items: center;
      font-size: 0.75rem;
      padding: 0.2rem 0.6rem;
      background: rgba(10, 38, 10, 0.4);
      border-radius: 999px;
      border: 1px solid rgba(156, 178, 162, 0.1);
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
