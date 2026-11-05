import { Component, HostListener, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="navbar" [class.scrolled]="isScrolled()">
      <div class="nav-container">
        <!-- Wordmark / Identity with Profile Picture -->
        <a routerLink="/" class="brand-link" (click)="closeMenu()">
          <img 
            src="/mubeen_aslam.webp" 
            alt="Mubeen Aslam" 
            class="brand-avatar-img"
            width="38" 
            height="38" />
          <div class="brand-text">
            <span class="brand-name">Mubeen Aslam</span>
            <span class="brand-sub">Backend Engineer &middot; Laravel &amp; PHP</span>
          </div>
        </a>

        <!-- Desktop Navigation Links for SPA Pages -->
        <nav class="desktop-nav" aria-label="Main Navigation">
          <ul class="nav-list">
            <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a></li>
            <li><a routerLink="/about" routerLinkActive="active">About</a></li>
            <li><a routerLink="/experience" routerLinkActive="active">Experience</a></li>
            <li><a routerLink="/projects" routerLinkActive="active">Projects</a></li>
            <li><a routerLink="/skills" routerLinkActive="active">Skills</a></li>
          </ul>
        </nav>

        <!-- CTA Action & Hamburger -->
        <div class="nav-cta-group">
          <a routerLink="/contact" class="nav-cta-btn" (click)="closeMenu()">
            <span>Let's Talk</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 17L17 7"></path>
              <path d="M7 7h10v10"></path>
            </svg>
          </a>

          <!-- Mobile Hamburger Toggle -->
          <button 
            type="button" 
            class="mobile-toggle" 
            [class.is-open]="mobileMenuOpen()"
            [attr.aria-expanded]="mobileMenuOpen()" 
            aria-label="Toggle navigation menu"
            (click)="toggleMenu()">
            <span class="toggle-bar top"></span>
            <span class="toggle-bar mid"></span>
            <span class="toggle-bar bot"></span>
          </button>
        </div>
      </div>

      <!-- Backdrop for mobile drawer -->
      @if (mobileMenuOpen()) {
        <div class="mobile-backdrop" (click)="closeMenu()"></div>
      }

      <!-- Mobile Dropdown Panel with modern drawer aesthetic -->
      @if (mobileMenuOpen()) {
        <div class="mobile-panel">
          <div class="mobile-panel-header">
            <span class="panel-kicker">Navigation</span>
            <span class="domain-pill">mubeen.site</span>
          </div>

          <ul class="mobile-nav-list">
            <li>
              <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" (click)="closeMenu()">
                <div class="nav-item-content">
                  <span class="nav-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  </span>
                  <span>Home</span>
                </div>
                <span class="chevron">&rarr;</span>
              </a>
            </li>
            <li>
              <a routerLink="/about" routerLinkActive="active" (click)="closeMenu()">
                <div class="nav-item-content">
                  <span class="nav-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </span>
                  <span>About</span>
                </div>
                <span class="chevron">&rarr;</span>
              </a>
            </li>
            <li>
              <a routerLink="/experience" routerLinkActive="active" (click)="closeMenu()">
                <div class="nav-item-content">
                  <span class="nav-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                  </span>
                  <span>Experience</span>
                </div>
                <span class="chevron">&rarr;</span>
              </a>
            </li>
            <li>
              <a routerLink="/projects" routerLinkActive="active" (click)="closeMenu()">
                <div class="nav-item-content">
                  <span class="nav-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                  </span>
                  <span>Projects</span>
                </div>
                <span class="chevron">&rarr;</span>
              </a>
            </li>
            <li>
              <a routerLink="/skills" routerLinkActive="active" (click)="closeMenu()">
                <div class="nav-item-content">
                  <span class="nav-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </span>
                  <span>Skills</span>
                </div>
                <span class="chevron">&rarr;</span>
              </a>
            </li>
            <li class="mobile-cta-item">
              <a routerLink="/contact" class="mobile-contact-link" (click)="closeMenu()">
                <span>Contact &amp; Start Discussion</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M7 17L17 7"></path>
                  <path d="M7 7h10v10"></path>
                </svg>
              </a>
            </li>
          </ul>

          <div class="mobile-panel-footer">
            <span class="loc-text">Karachi, Pakistan (UTC+5)</span>
            <span class="status-live">Open to Opportunities</span>
          </div>
        </div>
      }
    </header>
  `,
  styles: [`
    :host {
      display: block;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .navbar {
      width: 100%;
      height: var(--nav-height);
      background: rgba(255, 255, 255, 0.96);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      border-bottom: 1px solid var(--color-border-subtle);
      transition: all var(--transition-base);
      position: relative;
    }

    .navbar.scrolled {
      background: rgba(255, 255, 255, 0.98);
      border-bottom-color: rgba(14, 131, 69, 0.18);
      box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06);
    }

    .nav-container {
      max-width: var(--container-max-width);
      height: 100%;
      margin: 0 auto;
      padding: 0 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
    }

    @media (min-width: 640px) {
      .nav-container {
        padding: 0 1.5rem;
        gap: 1.5rem;
      }
    }

    .brand-link {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      text-decoration: none;
      min-width: 0;
    }

    .brand-avatar-img {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      object-fit: cover;
      object-position: center top;
      border: 2px solid var(--color-accent-green);
      box-shadow: 0 2px 8px rgba(14, 131, 69, 0.25);
      flex-shrink: 0;
      background: #f1f5f9;
    }

    .brand-text {
      display: flex;
      flex-direction: column;
      gap: 0.05rem;
      overflow: hidden;
    }

    .brand-name {
      font-family: var(--font-sans);
      font-size: 1.05rem;
      font-weight: 800;
      letter-spacing: -0.025em;
      color: var(--color-primary-text);
      line-height: 1.15;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    @media (min-width: 640px) {
      .brand-name {
        font-size: 1.15rem;
      }
    }

    .brand-sub {
      font-family: var(--font-sans);
      font-size: 0.68rem;
      font-weight: 600;
      color: var(--color-accent-green);
      letter-spacing: 0.01em;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    @media (min-width: 640px) {
      .brand-sub {
        font-size: 0.72rem;
      }
    }

    .desktop-nav {
      display: none;
    }

    @media (min-width: 860px) {
      .desktop-nav {
        display: block;
      }
    }

    .nav-list {
      display: flex;
      align-items: center;
      gap: 1.75rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .nav-list a {
      font-family: var(--font-sans);
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--color-secondary-text);
      text-decoration: none;
      padding: 0.45rem 0;
      position: relative;
      transition: color var(--transition-fast);
    }

    .nav-list a:hover {
      color: var(--color-primary-text);
    }

    .nav-list a.active {
      color: var(--color-accent-green);
      font-weight: 700;
    }

    .nav-list a.active::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--color-accent-green);
      border-radius: 2px;
    }

    .nav-cta-group {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex-shrink: 0;
    }

    .nav-cta-btn {
      display: none;
      align-items: center;
      gap: 0.45rem;
      font-family: var(--font-sans);
      font-size: 0.86rem;
      font-weight: 600;
      color: #ffffff !important;
      background: linear-gradient(135deg, #0d5c31 0%, #0e8345 50%, #10b981 100%);
      padding: 0.5rem 1.15rem;
      border-radius: var(--radius-sm);
      text-decoration: none;
      transition: all var(--transition-fast);
      box-shadow: 0 4px 12px rgba(14, 131, 69, 0.25);
    }

    @media (min-width: 520px) {
      .nav-cta-btn {
        display: inline-flex;
      }
    }

    .nav-cta-btn:hover {
      background: linear-gradient(135deg, #0a4a27 0%, #0c743d 50%, #059669 100%);
      transform: translateY(-1px);
      box-shadow: 0 6px 16px rgba(14, 131, 69, 0.35);
    }

    .mobile-toggle {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
      width: 44px;
      height: 44px;
      background: #ffffff;
      border: 1px solid var(--color-border-subtle);
      border-radius: 8px;
      cursor: pointer;
      padding: 10px;
      box-shadow: var(--shadow-sm);
      transition: all var(--transition-fast);
    }

    .mobile-toggle:active {
      transform: scale(0.96);
    }

    @media (min-width: 860px) {
      .mobile-toggle {
        display: none;
      }
    }

    .toggle-bar {
      display: block;
      width: 100%;
      height: 2px;
      background: var(--color-primary-text);
      border-radius: 2px;
      transition: all var(--transition-fast);
    }

    .mobile-toggle.is-open .top {
      transform: translateY(7px) rotate(45deg);
    }

    .mobile-toggle.is-open .mid {
      opacity: 0;
      transform: scaleX(0);
    }

    .mobile-toggle.is-open .bot {
      transform: translateY(-7px) rotate(-45deg);
    }

    /* Mobile backdrop */
    .mobile-backdrop {
      position: fixed;
      top: var(--nav-height);
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(15, 23, 42, 0.4);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      z-index: 98;
      animation: fadeIn 200ms ease-out;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    /* Mobile panel */
    .mobile-panel {
      position: absolute;
      top: var(--nav-height);
      left: 0;
      right: 0;
      background: #ffffff;
      border-bottom: 2px solid var(--color-accent-green);
      padding: 1.25rem 1.25rem 1.5rem;
      box-shadow: 0 20px 40px rgba(15, 23, 42, 0.12);
      z-index: 99;
      animation: slideDown 220ms cubic-bezier(0.16, 1, 0.3, 1);
      max-height: calc(100vh - var(--nav-height));
      overflow-y: auto;
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-12px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .mobile-panel-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 0.75rem;
      margin-bottom: 0.75rem;
      border-bottom: 1px solid var(--color-border-subtle);
    }

    .panel-kicker {
      font-family: var(--font-mono);
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--color-muted-text);
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .domain-pill {
      font-family: var(--font-mono);
      font-size: 0.72rem;
      font-weight: 600;
      color: var(--color-accent-green);
      background: rgba(14, 131, 69, 0.08);
      padding: 0.2rem 0.55rem;
      border-radius: 999px;
      border: 1px solid rgba(14, 131, 69, 0.2);
    }

    .mobile-nav-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .mobile-nav-list a {
      font-family: var(--font-sans);
      font-size: 1.02rem;
      font-weight: 600;
      color: var(--color-primary-text);
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.75rem 0.85rem;
      border-radius: 8px;
      background: #f8fafc;
      border: 1px solid transparent;
      transition: all var(--transition-fast);
    }

    .mobile-nav-list a:hover {
      background: #f1f5f9;
      border-color: #cbd5e1;
    }

    .mobile-nav-list a.active {
      background: #f0fdf4;
      color: var(--color-accent-green);
      border-color: rgba(14, 131, 69, 0.25);
    }

    .nav-item-content {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .nav-icon {
      width: 18px;
      height: 18px;
      color: var(--color-accent-green);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .nav-icon svg {
      width: 100%;
      height: 100%;
    }

    .chevron {
      color: var(--color-muted-text);
      font-size: 0.95rem;
      transition: transform var(--transition-fast);
    }

    .mobile-nav-list a.active .chevron {
      color: var(--color-accent-green);
      transform: translateX(3px);
    }

    .mobile-cta-item {
      padding-top: 0.75rem;
      border-top: 1px solid var(--color-border-subtle);
      margin-top: 0.5rem;
    }

    .mobile-contact-link {
      background: linear-gradient(135deg, #072e18 0%, #0d4a27 50%, #16733d 100%) !important;
      color: #ffffff !important;
      text-align: center;
      padding: 0.9rem !important;
      border-radius: 8px !important;
      font-weight: 700 !important;
      box-shadow: 0 4px 14px rgba(14, 131, 69, 0.25);
      border: none !important;
      justify-content: center !important;
      gap: 0.5rem;
    }

    .mobile-panel-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 1rem;
      margin-top: 1rem;
      border-top: 1px solid var(--color-border-subtle);
      font-size: 0.75rem;
      color: var(--color-muted-text);
    }

    .status-live {
      color: var(--color-accent-green);
      font-weight: 600;
    }
  `]
})
export class NavbarComponent {
  isScrolled = signal<boolean>(false);
  mobileMenuOpen = signal<boolean>(false);

  private router = inject(Router);

  constructor() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.closeMenu();
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMenu() {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.mobileMenuOpen.set(false);
  }
}
