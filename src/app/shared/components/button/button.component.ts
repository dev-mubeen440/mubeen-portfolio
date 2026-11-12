import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <ng-template #content><ng-content></ng-content></ng-template>

    @if (routerLink) {
      <a
        [routerLink]="routerLink"
        [class]="buttonClasses"
        (click)="onClick($event)">
        <ng-container *ngTemplateOutlet="content"></ng-container>
      </a>
    } @else if (isExternal) {
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
      display: inline-flex;
      vertical-align: middle;
      border: none !important;
      outline: none !important;
      background: transparent !important;
      box-shadow: none !important;
      padding: 0 !important;
      margin: 0 !important;
    }

    .btn-base {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      font-family: var(--font-sans);
      font-size: 0.9rem;
      font-weight: 600;
      letter-spacing: -0.01em;
      border-radius: var(--radius-sm);
      cursor: pointer;
      text-decoration: none;
      transition: all var(--transition-fast);
      white-space: nowrap;
      border: none;
      outline: none;
      appearance: none;
      -webkit-appearance: none;
      box-sizing: border-box;
      line-height: 1.2;
    }

    .btn-md {
      padding: 0.7rem 1.4rem;
    }

    .btn-sm {
      padding: 0.45rem 0.95rem;
      font-size: 0.82rem;
    }

    /* Primary Accent: Green Gradient */
    .btn-primary {
      background: linear-gradient(to bottom, #03140B, #175616);
      color: #ffffff !important;
      box-shadow: 0 4px 14px rgba(3, 20, 11, 0.35);
    }
    .btn-primary:hover {
      background: linear-gradient(to bottom, #020d07, #134712);
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(3, 20, 11, 0.45);
    }

    /* Secondary / Clean White surface with 1px border */
    .btn-secondary {
      background: #ffffff;
      color: var(--color-primary-text) !important;
      border: 1px solid #cbd5e1;
      box-shadow: var(--shadow-sm);
    }
    .btn-secondary:hover {
      background: #f8fafc;
      border-color: var(--color-accent-green);
      color: var(--color-accent-green) !important;
      transform: translateY(-1px);
      box-shadow: var(--shadow-md);
    }

    /* Ghost */
    .btn-ghost {
      background: transparent;
      color: var(--color-secondary-text) !important;
      border: none;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
    .btn-ghost:hover {
      color: var(--color-accent-green) !important;
    }
  `]
})
export class ButtonComponent {
  @Input() routerLink: string | any[] | null = null;
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
