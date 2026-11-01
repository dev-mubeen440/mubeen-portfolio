import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="navbar" [class.scrolled]="isScrolled()">
      <div class="nav-container">
        <!-- Wordmark / Identity -->
        <a href="#hero" class="brand-link" (click)="scrollTo($event, 'hero')">
          <span class="brand-name">Mubeen Aslam</span>
          <span class="brand-sub">Backend Engineer</span>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="desktop-nav" aria-label="Main Navigation">
          <ul class="nav-list">
            <li><a href="#about" [class.active]="activeSection() === 'about'" (click)="scrollTo($event, 'about')">About</a></li>
            <li><a href="#experience" [class.active]="activeSection() === 'experience'" (click)="scrollTo($event, 'experience')">Experience</a></li>
            <li><a href="#projects" [class.active]="activeSection() === 'projects'" (click)="scrollTo($event, 'projects')">Projects</a></li>
            <li><a href="#skills" [class.active]="activeSection() === 'skills'" (click)="scrollTo($event, 'skills')">Skills</a></li>
            <li><a href="#education" [class.active]="activeSection() === 'education'" (click)="scrollTo($event, 'education')">Education</a></li>
          </ul>
        </nav>

        <!-- CTA Action -->
        <div class="nav-cta-group">
          <a href="#contact" class="nav-cta-btn" (click)="scrollTo($event, 'contact')">
            <span>Let's Talk</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 17L17 7"></path>
              <path d="M7 7h10v10"></path>
            </svg>
          </a>

          <!-- Mobile Hamburger Toggle -->
          <button 
            type="button" 
            class="mobile-toggle" 
            [attr.aria-expanded]="mobileMenuOpen()" 
            aria-label="Toggle navigation menu"
            (click)="toggleMenu()">
            <span class="toggle-bar" [class.top]="mobileMenuOpen()"></span>
            <span class="toggle-bar" [class.mid]="mobileMenuOpen()"></span>
            <span class="toggle-bar" [class.bot]="mobileMenuOpen()"></span>
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown Panel -->
      @if (mobileMenuOpen()) {
        <div class="mobile-panel" (click)="closeMenu()">
          <ul class="mobile-nav-list">
            <li><a href="#about" (click)="scrollTo($event, 'about')">About</a></li>
            <li><a href="#experience" (click)="scrollTo($event, 'experience')">Experience</a></li>
            <li><a href="#projects" (click)="scrollTo($event, 'projects')">Projects</a></li>
            <li><a href="#skills" (click)="scrollTo($event, 'skills')">Skills</a></li>
            <li><a href="#education" (click)="scrollTo($event, 'education')">Education</a></li>
            <li class="mobile-cta-item">
              <a href="#contact" class="mobile-contact-link" (click)="scrollTo($event, 'contact')">
                Let's Talk
              </a>
            </li>
          </ul>
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
      background: rgba(3, 20, 11, 0.75);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(156, 178, 162, 0.08);
      transition: all var(--transition-base);
    }

    .navbar.scrolled {
      background: rgba(3, 20, 11, 0.92);
      border-bottom-color: var(--color-border-line);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.45);
    }

    .nav-container {
      max-width: var(--container-max-width);
      height: 100%;
      margin: 0 auto;
      padding: 0 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;
    }

    .brand-link {
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
      text-decoration: none;
    }

    .brand-name {
      font-family: var(--font-sans);
      font-size: 1.15rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      color: var(--color-primary-text);
      line-height: 1.1;
    }

    .brand-sub {
      font-family: var(--font-sans);
      font-size: 0.72rem;
      font-weight: 500;
      color: var(--color-accent-green);
      letter-spacing: 0.03em;
    }

    .desktop-nav {
      display: none;
    }

    @media (min-width: 820px) {
      .desktop-nav {
        display: block;
      }
    }

    .nav-list {
      display: flex;
      align-items: center;
      gap: 2rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .nav-list a {
      font-family: var(--font-sans);
      font-size: 0.88rem;
      font-weight: 500;
      color: var(--color-secondary-text);
      text-decoration: none;
      padding: 0.4rem 0;
      position: relative;
      transition: color var(--transition-fast);
    }

    .nav-list a:hover {
      color: var(--color-primary-text);
    }

    .nav-list a.active {
      color: var(--color-accent-green);
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
      gap: 1rem;
    }

    .nav-cta-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      font-family: var(--font-sans);
      font-size: 0.84rem;
      font-weight: 600;
      color: #03140B;
      background: var(--color-accent-green);
      padding: 0.45rem 1.05rem;
      border-radius: var(--radius-sm);
      text-decoration: none;
      transition: all var(--transition-fast);
      box-shadow: 0 0 16px rgba(50, 205, 85, 0.25);
    }

    .nav-cta-btn:hover {
      background: #39e35f;
      transform: translateY(-1px);
    }

    .mobile-toggle {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
      width: 40px;
      height: 40px;
      background: transparent;
      border: 1px solid rgba(156, 178, 162, 0.15);
      border-radius: var(--radius-sm);
      cursor: pointer;
      padding: 8px;
    }

    @media (min-width: 820px) {
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

    .toggle-bar.top {
      transform: translateY(7px) rotate(45deg);
    }

    .toggle-bar.mid {
      opacity: 0;
    }

    .toggle-bar.bot {
      transform: translateY(-7px) rotate(-45deg);
    }

    /* Mobile panel */
    .mobile-panel {
      background: rgba(3, 20, 11, 0.98);
      border-bottom: 1px solid var(--color-border-line);
      padding: 1.5rem 2rem 2rem;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
      animation: slideDown 180ms ease-out;
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .mobile-nav-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .mobile-nav-list a {
      font-family: var(--font-sans);
      font-size: 1.05rem;
      font-weight: 500;
      color: var(--color-primary-text);
      text-decoration: none;
      display: block;
    }

    .mobile-cta-item {
      padding-top: 1rem;
      border-top: 1px solid var(--color-border-subtle);
    }

    .mobile-contact-link {
      background: var(--color-accent-green);
      color: #03140B !important;
      text-align: center;
      padding: 0.75rem;
      border-radius: var(--radius-sm);
      font-weight: 600 !important;
    }
  `]
})
export class NavbarComponent {
  isScrolled = signal<boolean>(false);
  mobileMenuOpen = signal<boolean>(false);
  activeSection = signal<string>('hero');

  private sections = ['hero', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 20);
    this.determineActiveSection();
  }

  toggleMenu() {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.mobileMenuOpen.set(false);
  }

  scrollTo(event: MouseEvent, targetId: string) {
    event.preventDefault();
    this.closeMenu();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.activeSection.set(targetId);
    }
  }

  private determineActiveSection() {
    // Use getBoundingClientRect for accurate position regardless of nesting depth
    const threshold = 160; // px from top: past this = section is "active"
    let current = this.sections[0];

    for (const sectionId of this.sections) {
      const el = document.getElementById(sectionId);
      if (el && el.getBoundingClientRect().top <= threshold) {
        current = sectionId;
      }
    }
    this.activeSection.set(current);
  }
}
