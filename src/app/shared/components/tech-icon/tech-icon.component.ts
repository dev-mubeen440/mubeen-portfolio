import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="icon-wrapper" [class]="'size-' + size" [attr.aria-hidden]="true">
      @switch (normalizedName) {
        @case ('php') {
          <!-- Official PHP Elephant / Pill with authentic PHP purple/blue branding -->
          <svg viewBox="0 0 128 128">
            <ellipse cx="64" cy="64" rx="60" ry="36" fill="#777BB4"/>
            <path fill="#232531" d="M38 78h-8.5l9.2-32H50c7.8 0 12.5 3.7 12.5 10.4 0 9-7.2 13.6-15.5 13.6h-6.2L38 78zm4.4-15h4.8c4.2 0 7.4-1.7 7.4-5.8 0-3.3-2.3-5-6-5h-4.4l-1.8 10.8zm39.1 15h-8.5l9.2-32H94c7.8 0 12.5 3.7 12.5 10.4 0 9-7.2 13.6-15.5 13.6h-6.2l-2.8 8zm4.4-15h4.8c4.2 0 7.4-1.7 7.4-5.8 0-3.3-2.3-5-6-5h-4.4l-1.8 10.8zM60.8 78l9.2-32h8.5l-3.3 11.6h5.8c5.4 0 8.8 2.2 8.8 6.8 0 6.8-5.7 13.6-15 13.6h-14zm8.6-14.8h4c3.4 0 5.4-1.3 5.4-4 0-2.3-1.5-3.4-4.2-3.4h-3.9l-1.3 7.4z"/>
          </svg>
        }
        @case ('laravel') {
          <!-- Official Laravel Red-Orange Emblem -->
          <svg viewBox="0 0 128 128">
            <path fill="#FF2D20" d="M112.5 34.2L68.7 9.1c-2.9-1.7-6.5-1.7-9.4 0L15.5 34.2c-2.9 1.7-4.7 4.8-4.7 8.2v50.2c0 3.4 1.8 6.5 4.7 8.2l43.8 25.1c1.5.8 3.1 1.3 4.7 1.3s3.2-.4 4.7-1.3l43.8-25.1c2.9-1.7 4.7-4.8 4.7-8.2V42.4c0-3.4-1.8-6.5-4.7-8.2zM64 16.9l38.2 21.9-14.6 8.4-38.2-21.9L64 16.9zM20.2 44.5L58.4 22.6v23.2L20.2 67.7V44.5zm43.8 66.6L25.8 89.2l14.6-8.4 38.2 21.9-14.6 8.4zm43.8-27.8l-38.2 21.9V82l38.2-21.9v23.2zm0-31.5L69.6 73.7V50.5l38.2-21.9v23.2z"/>
          </svg>
        }
        @case ('mysql') {
          <!-- Official MySQL Blue & Dolphin Orange -->
          <svg viewBox="0 0 128 128">
            <path fill="#00758F" d="M116.5 87.7c-5.8 4.3-17.7 5.7-27.1 2.2-7.8-2.9-12.7-8.9-14.1-17.5-.9-5.4.3-11.4 3.7-17.3 5.4-9.5 15.4-17.7 25.9-21.5 5.2-1.9 11.2-2.3 15.5.8 3.8 2.8 4.7 7.7 2.4 12.1-2.4 4.6-7.8 7.3-13.6 6.8-5-.4-9.3-3.1-10.9-7.1-.6-1.5-.7-2.6-.5-3.3.4-1.2 1.4-1.8 2.7-1.7 1.2.1 2.4.8 3.2 1.9.9 1.2 1.4 2.8 1.4 4.2 0 1.2-.4 2.3-1.1 3.1-.7.8-1.7 1.2-2.8 1.1-1-.1-1.9-.7-2.3-1.5-.4-.8-.4-1.8-.1-2.6.4-1 1.2-1.8 2.2-2 1-.3 2.1-.1 2.9.5.8.6 1.2 1.5 1.1 2.5 0 .8-.4 1.6-1.1 2.1-.6.5-1.4.6-2.1.4-.7-.2-1.2-.7-1.4-1.3-.2-.5-.1-1.1.2-1.6.3-.5.7-.8 1.3-.9.5 0 1 .3 1.3.7.3.4.3.9.1 1.3-.2.4-.5.7-1 .7-.4 0-.8-.2-1-.6-.2-.3-.1-.7.1-1 .2-.3.5-.4.8-.4.3 0 .6.2.7.4.2.3.1.6 0 .8-.1.2-.3.3-.5.3-.2 0-.4-.1-.5-.3-.1-.2 0-.4.1-.5.1-.1.2-.2.3-.2.1 0 .2.1.3.2z"/>
            <path fill="#F29111" d="M22 100c14-2 30-18 36-32 3.6-8.4 2.1-16.8-3.4-23.7C48 36.3 37 32.5 25 33.7c-4.2.4-8.3 1.7-12 3.7C5.3 41.5 0 50 0 59.8c0 14.3 10.9 25.5 24.8 25.5 2.8 0 5.6-.5 8.2-1.5-3.6 4.8-8.5 8.4-14.3 10.4-2.8.9-5.7 1.5-8.7 1.6 5.3 2.8 10.9 4.2 16.6 4.2h-4.6z"/>
          </svg>
        }
        @case ('postgresql') {
          <!-- Official PostgreSQL Elephant Blue -->
          <svg viewBox="0 0 128 128">
            <path fill="#336791" d="M64.6 12C36.8 12 14.2 34.6 14.2 62.4c0 13.5 5.3 25.7 14 34.8 2.5 2.6 6 4.3 9.8 4.7 1.7.2 3.5.1 5.3-.2 1.4-.3 2.6-.9 3.7-1.8.8-.7 1.4-1.5 1.9-2.4 1-1.9 1.2-4.1.8-6.2-.4-2.3-1.6-4.3-3.4-5.6-2.5-1.8-5.6-2.6-8.7-2.3-3.1.3-6 1.7-8 4-5.7-7-9.2-15.9-9.2-25.5C20.4 38 40.2 18.2 64.6 18.2s44.2 19.8 44.2 44.2c0 10.2-3.8 19.6-10.1 26.8-2.6-2.3-5.9-3.7-9.4-4-3.5-.3-7 .8-9.6 3.1-2 1.8-3.2 4.2-3.6 6.8-.4 2.6.2 5.2 1.6 7.4 1.4 2.2 3.6 3.7 6.1 4.2 2 .4 4 .2 5.9-.6 1.8-.8 3.3-2.1 4.4-3.8 7.4-8.8 11.8-20.1 11.8-32.4C115 34.6 92.4 12 64.6 12z"/>
            <path fill="#ffffff" d="M64 34c-14.4 0-26 11.6-26 26s11.6 26 26 26 26-11.6 26-26-11.6-26-26-26zm0 46c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z"/>
          </svg>
        }
        @case ('redis') {
          <!-- Official Redis Red-Crimson -->
          <svg viewBox="0 0 128 128">
            <path fill="#D82C20" d="M117 73.5L66.7 94.6c-1.7.7-3.6.7-5.3 0L11 73.5c-2.4-1-4-3.4-4-6V43.2c0-2.6 1.6-5 4-6L61.3 16c1.7-.7 3.6-.7 5.3 0L117 37.1c2.4 1 4 3.4 4 6v24.3c0 2.7-1.6 5.1-4 6.1z"/>
            <path fill="#A32018" d="M64 16.9l53 22.3-53 22.2-53-22.2 53-22.3z"/>
            <ellipse cx="64" cy="50" rx="14" ry="7" fill="#ffffff" opacity="0.3"/>
          </svg>
        }
        @case ('html5') {
          <!-- Official HTML5 Orange / Vermilion -->
          <svg viewBox="0 0 128 128">
            <path fill="#E44D26" d="M19.1 112.5L9.6 6h108.8l-9.5 106.5L63.9 122l-44.8-9.5z"/>
            <path fill="#F16529" d="M64 113.8l37.2-7.9 8.1-90.8H64v98.7z"/>
            <path fill="#EBEBEB" d="M64 53.6H46.4l-1.2-13.8H64V26.2H30.5l3.8 41.2H64V53.6zm0 33.6l-.2.1-15.6-4.2-1-11.2h-13.6l1.9 22.3 28.5 7.9V87.2z"/>
            <path fill="#FFFFFF" d="M63.9 53.6h17.4l-1.6 18.2-15.8 4.3v13.7l28.4-7.9 3.7-42.1H63.9v13.8zm0-27.4h33.6l-.3-3.6-.9-10.2H63.9v13.8z"/>
          </svg>
        }
        @case ('css3') {
          <!-- Official CSS3 Blue / Light Blue -->
          <svg viewBox="0 0 128 128">
            <path fill="#1572B6" d="M19.1 112.5L9.6 6h108.8l-9.5 106.5L63.9 122l-44.8-9.5z"/>
            <path fill="#33A9DC" d="M64 113.8l37.2-7.9 8.1-90.8H64v98.7z"/>
            <path fill="#EBEBEB" d="M64 53.6H46.4l-1.2-13.8H64V26.2H30.5l3.8 41.2H64V53.6zm0 33.6l-.2.1-15.6-4.2-1-11.2h-13.6l1.9 22.3 28.5 7.9V87.2z"/>
            <path fill="#FFFFFF" d="M63.9 53.6h17.4l-1.6 18.2-15.8 4.3v13.7l28.4-7.9 3.7-42.1H63.9v13.8zm0-27.4h33.6l-.3-3.6-.9-10.2H63.9v13.8z"/>
          </svg>
        }
        @case ('javascript') {
          <!-- Official JavaScript Yellow & Black -->
          <svg viewBox="0 0 128 128">
            <rect width="128" height="128" fill="#F7DF1E" rx="8"/>
            <path fill="#000000" d="M36.9 101.9c3.3 5.4 7.8 9.5 15.6 9.5 7.4 0 12.3-3.7 12.3-12.7V42.3h-12.3v55.8c0 3.7-1.4 5.3-4.4 5.3-2.3 0-3.9-1.5-5.2-3.8l-6 2.3zm47.2-.2c3.7 6.1 9.9 9.8 18.3 9.8 11.2 0 18.7-5.8 18.7-14.8 0-8.9-5.4-12.8-14.9-16.9l-3.3-1.4c-6.1-2.6-8.9-4.7-8.9-8.4 0-3.3 2.6-6 7.4-6 4.3 0 7.3 1.7 9.8 5.6l8.8-5.7c-4.4-7-10.7-10.1-18.6-10.1-12.1 0-19.7 6.6-19.7 15.6 0 8.5 5.2 12.8 13.9 16.5l3.3 1.4c6.8 2.9 9.9 5.3 9.9 9.3 0 4.1-3.6 6.8-9 6.8-6.1 0-10.4-3.4-13.4-8.8l-9.2 4.1z"/>
          </svg>
        }
        @case ('angular') {
          <!-- Official Angular Red / Gradient Shield -->
          <svg viewBox="0 0 128 128">
            <polygon fill="#DD0031" points="64 7.6 7.7 27.6 16.3 102 64 128.4 111.7 102 120.3 27.6"/>
            <polygon fill="#C3002F" points="64 7.6 64 128.4 111.7 102 120.3 27.6"/>
            <polygon fill="#FFFFFF" points="64 24.6 28.5 104.3 43.1 104.3 50.2 86.8 77.8 86.8 84.9 104.3 99.5 104.3"/>
            <polygon fill="#DD0031" points="64 53.6 54.9 75.8 73.1 75.8"/>
          </svg>
        }
        @case ('react') {
          <!-- Official React Cyan Blue -->
          <svg viewBox="0 0 128 128">
            <ellipse cx="64" cy="64" rx="14" ry="14" fill="#61DAFB"/>
            <g stroke="#61DAFB" stroke-width="6" fill="none">
              <ellipse cx="64" cy="64" rx="56" ry="21"/>
              <ellipse cx="64" cy="64" rx="56" ry="21" transform="rotate(60 64 64)"/>
              <ellipse cx="64" cy="64" rx="56" ry="21" transform="rotate(120 64 64)"/>
            </g>
          </svg>
        }
        @case ('git') {
          <!-- Official Git Orange -->
          <svg viewBox="0 0 128 128">
            <path fill="#F05032" d="M125.7 57.6L70.4 2.3c-3.1-3.1-8.1-3.1-11.2 0L43.8 17.7l14.2 14.2c3.3-1.1 7.2-.4 9.9 2.3 2.7 2.7 3.4 6.6 2.3 9.9l13.7 13.7c3.3-1.1 7.2-.4 9.9 2.3 3.9 3.9 3.9 10.2 0 14.1-3.9 3.9-10.2 3.9-14.1 0-2.9-2.9-3.5-7.1-2-10.4L64.8 50.7v32.5c.8.4 1.6.9 2.3 1.6 3.9 3.9 3.9 10.2 0 14.1-3.9 3.9-10.2 3.9-14.1 0-3.9-3.9-3.9-10.2 0-14.1.9-.9 2-1.6 3.1-2V49.6c-1.1-.5-2.2-1.1-3.1-2-2.9-2.9-3.5-7.1-2-10.4L37.1 23.3 2.3 58.1c-3.1 3.1-3.1 8.1 0 11.2l55.3 55.3c3.1 3.1 8.1 3.1 11.2 0l56.9-56.9c3.1-3.1 3.1-8.1 0-10.1z"/>
          </svg>
        }
        @case ('github') {
          <!-- Official GitHub Invert Dark/Slate -->
          <svg viewBox="0 0 128 128">
            <path fill="#181717" d="M64 5.3C29.7 5.3 2 33 2 67.3c0 27.4 17.8 50.7 42.4 58.9 3.1.6 4.2-1.3 4.2-3 0-1.5-.1-6.5-.1-11.8-17.2 3.7-20.9-7.3-20.9-7.3-2.8-7.2-6.9-9.1-6.9-9.1-5.6-3.8.4-3.7.4-3.7 6.2.4 9.5 6.4 9.5 6.4 5.5 9.5 14.5 6.7 18 5.2.6-4 2.2-6.7 4-8.3-13.8-1.6-28.2-6.9-28.2-30.7 0-6.8 2.4-12.3 6.4-16.6-.6-1.6-2.8-7.9.6-16.4 0 0 5.2-1.7 17.1 6.4 5-1.4 10.3-2.1 15.6-2.1 5.3 0 10.6.7 15.6 2.1 11.9-8.1 17.1-6.4 17.1-6.4 3.4 8.5 1.2 14.8.6 16.4 4 4.3 6.4 9.8 6.4 16.6 0 23.9-14.5 29.1-28.3 30.6 2.2 1.9 4.2 5.7 4.2 11.6 0 8.4-.1 15.1-.1 17.2 0 1.7 1.1 3.7 4.3 3 24.6-8.2 42.3-31.5 42.3-58.9C126 33 98.3 5.3 64 5.3z"/>
          </svg>
        }
        @case ('github-actions') {
          <!-- Official GitHub Actions Vibrant Blue -->
          <svg viewBox="0 0 128 128">
            <rect width="128" height="128" rx="24" fill="#2088FF"/>
            <path fill="#ffffff" d="M38 46a18 18 0 1 0 31.6-11.7L60 44l-4-4 8.7-8.7A18 18 0 0 0 38 46zm52 36a18 18 0 1 0-31.6 11.7L68 84l4 4-8.7 8.7A18 18 0 0 0 90 82zm-46 6a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm40-48a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"/>
          </svg>
        }
        @case ('composer') {
          <!-- Official Composer Conductor Logo -->
          <svg viewBox="0 0 128 128">
            <path fill="#885630" d="M64 12C35.3 12 12 35.3 12 64s23.3 52 52 52 52-23.3 52-52S92.7 12 64 12zm0 94c-23.2 0-42-18.8-42-42S40.8 22 64 22s42 18.8 42 42-18.8 42-42 42z"/>
            <circle cx="50" cy="54" r="8" fill="#F28D1A"/>
            <circle cx="78" cy="54" r="8" fill="#F28D1A"/>
            <path fill="#232531" d="M64 68c-10 0-18 4-18 10h36c0-6-8-10-18-10z"/>
          </svg>
        }
        @case ('linux') {
          <!-- Official Tux / Linux Yellow & Slate -->
          <svg viewBox="0 0 128 128">
            <ellipse cx="64" cy="70" rx="36" ry="46" fill="#333333"/>
            <ellipse cx="64" cy="74" rx="26" ry="36" fill="#FFFFFF"/>
            <circle cx="52" cy="40" r="4" fill="#000000"/>
            <circle cx="76" cy="40" r="4" fill="#000000"/>
            <polygon points="64 46 52 56 76 56" fill="#FFA500"/>
            <ellipse cx="44" cy="116" rx="16" ry="6" fill="#FFA500"/>
            <ellipse cx="84" cy="116" rx="16" ry="6" fill="#FFA500"/>
          </svg>
        }
        @case ('wordpress') {
          <!-- Official WordPress Blue & White -->
          <svg viewBox="0 0 128 128">
            <circle cx="64" cy="64" r="60" fill="#21759B"/>
            <path fill="#FFFFFF" d="M14.6 64c0 21.6 14.1 40 33.8 46.4L22.9 39.8C17.7 46.9 14.6 55.1 14.6 64zm72.7-3.4c0-5.8-2.1-9.9-3.9-13-2.4-4.1-4.7-7.6-4.7-11.7 0-4.6 3.5-8.9 8.5-8.9.4 0 .7 0 1.1.1-9.5-8.7-22.3-14-36.3-14-11.8 0-22.7 3.8-31.5 10.3 1 .1 1.9.1 2.9.1 4.7 0 12.1-.6 12.1-.6 2.4-.1 2.7 3.4.3 3.6 0 0-2.5.3-5.2.4l16.5 49.2 9.9-29.8-7.1-19.4c-2.4-.1-4.7-.4-4.7-.4-2.4-.1-2.1-3.7.3-3.6 0 0 7.5.6 11.9.6 4.7 0 12.1-.6 12.1-.6 2.4-.1 2.7 3.4.3 3.6 0 0-2.5.3-5.2.4l16.3 48.6 4.5-15.1c1.8-5.9 3.2-10.2 3.2-13.9zM65.1 72l-13.6 39.6c4.1 1.2 8.4 1.9 12.8 1.9 5.3 0 10.4-1 15.1-2.7L65.1 72zm43.3-31.7c.4 2.7.6 5.6.6 8.7 0 8.6-1.6 18.2-6.4 30.3L87.4 120c15.8-7.7 26.6-24 26.6-42.9 0-12.8-5.2-24.3-13.6-32.8z"/>
          </svg>
        }
        @case ('rest-api') {
          <!-- Modern Emerald/Teal API Connector -->
          <svg viewBox="0 0 128 128">
            <rect width="128" height="128" rx="20" fill="#0E8345"/>
            <circle cx="36" cy="64" r="14" fill="#FFFFFF"/>
            <circle cx="92" cy="40" r="14" fill="#A7F3D0"/>
            <circle cx="92" cy="88" r="14" fill="#A7F3D0"/>
            <path stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" d="M36 64h24l18-24h14M60 64l18 24h14"/>
          </svg>
        }
        @case ('security-auth') {
          <!-- Verified Shield / Gold Security Badge -->
          <svg viewBox="0 0 128 128">
            <path fill="#059669" d="M64 12l48 18v38c0 30-22 54-48 60C38 122 16 98 16 68V30l48-18z"/>
            <path fill="#34D399" d="M64 22l38 14v32c0 24-17 44-38 49-21-5-38-25-38-49V36l38-14z"/>
            <path fill="#FFFFFF" d="M54 62l8 8 16-16 6 6-22 22-14-14 6-6z"/>
          </svg>
        }
        @case ('mvc-architecture') {
          <!-- 3-Tier Layer Architecture -->
          <svg viewBox="0 0 128 128">
            <rect x="18" y="16" width="92" height="24" rx="6" fill="#3B82F6"/>
            <rect x="18" y="52" width="92" height="24" rx="6" fill="#10B981"/>
            <rect x="18" y="88" width="92" height="24" rx="6" fill="#8B5CF6"/>
          </svg>
        }
        @default {
          <!-- Terminal / Code Badge -->
          <svg viewBox="0 0 128 128">
            <rect width="128" height="128" rx="20" fill="#1E293B"/>
            <polyline points="40 44 20 64 40 84" stroke="#10B981" stroke-width="10" stroke-linecap="round" fill="none"/>
            <polyline points="88 44 108 64 88 84" stroke="#10B981" stroke-width="10" stroke-linecap="round" fill="none"/>
            <line x1="72" y1="36" x2="56" y2="92" stroke="#94A3B8" stroke-width="8" stroke-linecap="round"/>
          </svg>
        }
      }
    </span>
  `,
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .icon-wrapper {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      border-radius: 4px;
      overflow: hidden;
    }

    .icon-wrapper svg {
      width: 100%;
      height: 100%;
      display: block;
    }

    .size-sm {
      width: 18px;
      height: 18px;
    }

    .size-md {
      width: 22px;
      height: 22px;
    }

    .size-lg {
      width: 28px;
      height: 28px;
    }
  `]
})
export class TechIconComponent {
  @Input({ required: true }) name: string = '';
  @Input() size: 'sm' | 'md' | 'lg' = 'sm';

  get normalizedName(): string {
    const n = (this.name || '').toLowerCase().trim();
    if (n.includes('php') && !n.includes('runner')) return 'php';
    if (n.includes('laravel')) return 'laravel';
    if (n.includes('mysql')) return 'mysql';
    if (n.includes('postgresql')) return 'postgresql';
    if (n.includes('redis')) return 'redis';
    if (n.includes('html')) return 'html5';
    if (n.includes('css')) return 'css3';
    if (n.includes('javascript')) return 'javascript';
    if (n.includes('angular')) return 'angular';
    if (n.includes('react')) return 'react';
    if (n.includes('github actions')) return 'github-actions';
    if (n === 'github') return 'github';
    if (n.includes('git')) return 'git';
    if (n.includes('composer')) return 'composer';
    if (n.includes('linux')) return 'linux';
    if (n.includes('wordpress')) return 'wordpress';
    if (n.includes('rest api')) return 'rest-api';
    if (n.includes('auth') || n.includes('rbac')) return 'security-auth';
    if (n.includes('mvc')) return 'mvc-architecture';
    return 'code';
  }
}
