import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="heading-wrapper" [class.centered]="center">
      @if (eyebrow) {
        <span class="eyebrow">{{ eyebrow }}</span>
      }
      <h2 class="title">{{ title }}</h2>
      @if (description) {
        <p class="description">{{ description }}</p>
      }
    </div>
  `,
  styles: [`
    .heading-wrapper {
      margin-bottom: 3.5rem;
      max-width: 720px;
    }

    .heading-wrapper.centered {
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }

    .eyebrow {
      display: inline-block;
      font-family: var(--font-sans);
      font-size: 0.82rem;
      font-weight: 500;
      color: var(--color-accent-green);
      letter-spacing: 0.04em;
      margin-bottom: 0.5rem;
    }

    .title {
      font-family: var(--font-sans);
      font-size: clamp(2rem, 3.5vw, 2.75rem);
      font-weight: 700;
      line-height: 1.25;
      letter-spacing: -0.025em;
      color: var(--color-primary-text);
      margin: 0 0 0.85rem 0;
    }

    .description {
      font-size: 1.05rem;
      line-height: 1.6;
      color: var(--color-secondary-text);
      margin: 0;
    }
  `]
})
export class SectionHeadingComponent {
  @Input({ required: true }) title: string = '';
  @Input() eyebrow?: string;
  @Input() description?: string;
  @Input() center: boolean = false;
}
