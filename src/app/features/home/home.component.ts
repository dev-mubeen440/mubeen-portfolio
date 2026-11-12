import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../core/services/seo.service';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    EducationComponent,
    ContactComponent
  ],
  template: `
    <div class="portfolio-layout">
      <app-navbar></app-navbar>

      <main id="main-content" class="main-body" role="main">
        <app-hero></app-hero>
        <app-about></app-about>
        <app-experience></app-experience>
        <app-projects></app-projects>
        <app-skills></app-skills>
        <app-education></app-education>
        <app-contact></app-contact>
      </main>

      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .portfolio-layout {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .main-body {
      flex: 1 0 auto;
    }
  `]
})
export class HomeComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Mubeen Aslam — Software Engineer | PHP & Laravel',
      description: "Software Engineer specializing in PHP and Laravel, with hands-on experience developing production web applications, REST APIs, CRM systems, and database-driven platforms based in Karachi, Pakistan.",
      canonicalPath: '/'
    });
  }
}
