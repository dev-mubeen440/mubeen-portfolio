import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';
import { SocialLinksComponent } from '../../../../shared/components/social-links/social-links.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, SocialLinksComponent, ButtonComponent],
  template: `
    <section id="contact" class="contact-section">
      <div class="contact-container">
        <app-section-heading
          title="Have a project in mind? Let's build something meaningful."
          eyebrow="Initiate Conversation"
          description="Whether you have an upcoming backend project, need Laravel architecture expertise, or wish to discuss an engineering role — reach out directly.">
        </app-section-heading>

        <div class="contact-grid">
          <!-- Primary Direct Contact Card -->
          <div class="contact-card primary-card">
            <h3 class="card-title">Direct Communication</h3>
            <p class="card-note">
              For reliable response, feel free to write to my verified email or call directly during business hours.
            </p>

            <div class="channels-list">
              <!-- Email Channel -->
              <a [href]="'mailto:' + profile.email" class="channel-item">
                <div class="channel-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div class="channel-details">
                  <span class="channel-label">Email Address</span>
                  <span class="channel-value">{{ profile.email }}</span>
                </div>
                <span class="channel-action">Send Mail &rarr;</span>
              </a>

              <!-- Phone Channel -->
              <a [href]="'tel:' + profile.phone" class="channel-item">
                <div class="channel-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div class="channel-details">
                  <span class="channel-label">Phone &amp; WhatsApp</span>
                  <span class="channel-value">{{ profile.phone }}</span>
                </div>
                <span class="channel-action">Call &rarr;</span>
              </a>
            </div>

            <!-- Social Links Component -->
            <div class="card-socials">
              <span class="socials-label">Social &amp; Developer Profiles</span>
              <app-social-links
                [githubUrl]="profile.github"
                [linkedinUrl]="profile.linkedin"
                [email]="profile.email">
              </app-social-links>
            </div>
          </div>

          <!-- Secondary Context Card / Availability note -->
          <div class="contact-card secondary-card">
            <h3 class="card-title">Professional Availability</h3>
            
            <div class="availability-status">
              <span class="status-indicator"></span>
              <div>
                <span class="status-title">Currently Engaged at QSoft</span>
                <span class="status-sub">Software Engineer &middot; Available for engineering discussions and technical inquiries</span>
              </div>
            </div>

            <div class="location-box">
              <h4 class="loc-heading">Base of Operations</h4>
              <p class="loc-text">
                Karachi, Pakistan (UTC+5)<br />
                Comfortable collaborating with remote and distributed engineering teams across global time zones.
              </p>
            </div>

            <div class="cta-direct-box">
              <p class="cta-prompt">Ready to start a conversation?</p>
              <app-button [href]="'mailto:' + profile.email" variant="primary">
                Email Me Directly
              </app-button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      padding: 4.5rem 1.25rem;
      border-top: 1px solid var(--color-border-subtle);
      background: #fafcfb;
    }

    @media (min-width: 640px) {
      .contact-section {
        padding: 5rem 1.5rem;
      }
    }

    .contact-container {
      max-width: var(--container-max-width);
      margin: 0 auto;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    @media (min-width: 900px) {
      .contact-grid {
        grid-template-columns: 1.25fr 0.85fr;
      }
    }

    .contact-card {
      background: #ffffff;
      border: 1px solid var(--color-border-subtle);
      border-radius: var(--radius-md);
      padding: 2rem 1.5rem;
      display: flex;
      flex-direction: column;
      box-shadow: var(--shadow-sm);
    }

    @media (min-width: 640px) {
      .contact-card {
        padding: 2.5rem 2rem;
      }
    }

    .primary-card {
      border-color: rgba(14, 131, 69, 0.25);
      box-shadow: var(--shadow-md);
    }

    .card-title {
      font-family: var(--font-sans);
      font-size: 1.35rem;
      font-weight: 800;
      letter-spacing: -0.015em;
      color: var(--color-primary-text);
      margin: 0 0 0.5rem 0;
    }

    .card-note {
      font-size: 0.94rem;
      color: var(--color-secondary-text);
      margin-bottom: 2rem;
    }

    .channels-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .channel-item {
      display: grid;
      grid-template-columns: 44px 1fr;
      align-items: center;
      gap: 1rem;
      background: #f8fafc;
      border: 1px solid var(--color-border-subtle);
      padding: 1.15rem 1.25rem;
      border-radius: var(--radius-sm);
      text-decoration: none;
      transition: all var(--transition-fast);
    }

    @media (min-width: 520px) {
      .channel-item {
        grid-template-columns: 44px 1fr auto;
        gap: 1.25rem;
      }
    }

    .channel-item:hover {
      border-color: var(--color-accent-green);
      background: #ffffff;
      transform: translateY(-1px);
      box-shadow: var(--shadow-sm);
    }

    .channel-icon {
      width: 44px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(14, 131, 69, 0.1);
      border: 1px solid rgba(14, 131, 69, 0.2);
      border-radius: var(--radius-sm);
      color: var(--color-accent-green);
    }

    .channel-icon svg {
      width: 20px;
      height: 20px;
    }

    .channel-details {
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
      overflow: hidden;
    }

    .channel-label {
      font-size: 0.74rem;
      font-weight: 600;
      color: var(--color-muted-text);
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }

    .channel-value {
      font-family: var(--font-mono);
      font-size: 0.95rem;
      color: var(--color-primary-text);
      font-weight: 600;
      word-break: break-all;
    }

    .channel-action {
      font-size: 0.84rem;
      color: var(--color-accent-green);
      font-weight: 700;
      display: none;
    }

    @media (min-width: 520px) {
      .channel-action {
        display: block;
      }
    }

    .card-socials {
      border-top: 1px solid var(--color-border-subtle);
      padding-top: 1.5rem;
      margin-top: auto;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .socials-label {
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--color-muted-text);
    }

    /* Secondary card */
    .availability-status {
      display: flex;
      gap: 1rem;
      align-items: flex-start;
      padding: 1.25rem;
      background: #f8fafc;
      border-radius: var(--radius-sm);
      border: 1px solid var(--color-border-subtle);
      margin-bottom: 1.75rem;
    }

    .status-indicator {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--color-accent-green);
      box-shadow: 0 0 10px rgba(16, 185, 129, 0.6);
      margin-top: 0.35rem;
      flex-shrink: 0;
    }

    .status-title {
      display: block;
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--color-primary-text);
      margin-bottom: 0.2rem;
    }

    .status-sub {
      display: block;
      font-size: 0.84rem;
      color: var(--color-secondary-text);
      line-height: 1.45;
    }

    .location-box {
      margin-bottom: 2rem;
    }

    .loc-heading {
      font-family: var(--font-sans);
      font-size: 0.88rem;
      font-weight: 700;
      color: var(--color-primary-text);
      margin: 0 0 0.5rem 0;
    }

    .loc-text {
      font-size: 0.92rem;
      line-height: 1.6;
      color: var(--color-secondary-text);
      margin: 0;
    }

    .cta-direct-box {
      margin-top: auto;
      padding-top: 1.5rem;
      border-top: 1px solid var(--color-border-subtle);
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
    }

    .cta-prompt {
      font-size: 0.9rem;
      color: var(--color-secondary-text);
      margin: 0;
      font-weight: 500;
    }
  `]
})
export class ContactComponent {
  private portfolioService = inject(PortfolioService);
  profile = this.portfolioService.profile;
}
