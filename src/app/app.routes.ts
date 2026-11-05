import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/pages/home-page.component').then(m => m.HomePageComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./features/pages/about-page.component').then(m => m.AboutPageComponent)
  },
  {
    path: 'experience',
    loadComponent: () => import('./features/pages/experience-page.component').then(m => m.ExperiencePageComponent)
  },
  {
    path: 'projects',
    loadComponent: () => import('./features/pages/projects-page.component').then(m => m.ProjectsPageComponent)
  },
  {
    path: 'skills',
    loadComponent: () => import('./features/pages/skills-page.component').then(m => m.SkillsPageComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/pages/contact-page.component').then(m => m.ContactPageComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
