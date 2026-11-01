import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-template #content><ng-content></ng-content></ng-template>

    @if (isExternal) {
      <a
        [href]="href"
        [target]="target"
        [rel]="target === '_blank' ? 'noopener noreferrer' : null"
        [class]="buttonClasses"
        (click)="onClick($event)">
        <ng-container *ngTemplateOutlet="content"></ng-container>
      </a>
    } @else {
      <button
        [type]="type"
        [disabled]="disabled"
        [class]="buttonClasses"
        (click)="onClick($event)">
        <ng-container *ngTemplateOutlet="content"></ng-container>
      </button>
    }
  `,
  styles: [`
    :host {
      display: inline-block;
    }

    .btn-base {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      font-family: var(--font-sans);
      font-size: 0.88rem;
      font-weight: 500;
      letter-spacing: 0.01em;
      border-radius: var(--radius-sm);
      cursor: pointer;
      text-decoration: none;
      transition: all var(--transition-fast);
      white-space: nowrap;
      border: 1px solid transparent;
    }

    .btn-md {
      padding: 0.65rem 1.35rem;
    }

    .btn-sm {
      padding: 0.45rem 0.95rem;
      font-size: 0.8rem;
    }

    /* Primary Accent */
    .btn-primary {
      background: var(--color-accent-green);
      color: #03140B;
      font-weight: 600;
      box-shadow: 0 0 20px rgba(50, 205, 85, 0.2);
    }
    .btn-primary:hover {
      background: #39e35f;
      transform: translateY(-1px);
      box-shadow: 0 4px 24px rgba(50, 205, 85, 0.35);
    }

    /* Secondary / Outline */
    .btn-secondary {
      background: rgba(10, 38, 10, 0.4);
      color: var(--color-primary-text);
      border-color: var(--color-border-subtle);
    }
    .btn-secondary:hover {
      background: rgba(10, 38, 10, 0.85);
      border-color: var(--color-border-line);
      color: #ffffff;
      transform: translateY(-1px);
    }

    /* Ghost / Minimal */
    .btn-ghost {
      background: transparent;
      color: var(--color-secondary-text);
      border-color: transparent;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
    .btn-ghost:hover {
      color: var(--color-primary-text);
    }
  `]
})
export class ButtonComponent {
  @Input() href: string | null = null;
  @Input() target: string = '_self';
  @Input() variant: 'primary' | 'secondary' | 'ghost' = 'primary';
  @Input() size: 'sm' | 'md' = 'md';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled: boolean = false;

  get isExternal(): boolean {
    return !!this.href;
  }

  get buttonClasses(): string {
    return `btn-base btn-${this.size} btn-${this.variant}`;
  }

  onClick(event: MouseEvent) {
    // Allows parent handling if needed
  }
}
