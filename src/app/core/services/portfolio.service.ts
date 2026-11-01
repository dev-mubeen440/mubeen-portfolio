import { Injectable } from '@angular/core';
import { Experience, Project, Education, SkillCategory } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  readonly profile = {
    name: 'Mubeen Aslam',
    role: 'PHP Laravel Developer',
    location: 'Karachi, Pakistan',
    phone: '+92 309 2919847',
    email: 'mubeenaslam440@gmail.com',
    github: 'https://github.com/dev-mubeen440',
    linkedin: 'https://www.linkedin.com/in/mubeen-aslam-177475294/',
    headline: 'Building scalable web applications, reliable backend systems, and meaningful digital experiences.',
    subheadline: 'Software Engineer specializing in PHP and Laravel, with experience building production applications, REST APIs, CRM systems, and database-driven platforms.',
    cvPath: '/MubeenAslamResume.pdf',
    hasCvFile: true
  };

  getAbout() {
    return {
      heading: 'A little about me',
      paragraphs: [
        'Software Engineer with hands-on experience in PHP and Laravel development, currently working at QSoft. Skilled in building scalable web applications, CRM systems, and database-driven platforms.',
        'Experienced in MySQL database optimization, REST API development, and CI/CD deployment using GitHub Actions.',
        'Passionate about developing efficient backend systems and solving real-world problems through clean, maintainable code.'
      ],
      highlights: [
        { label: 'Primary Focus', value: 'Laravel & Backend Architecture' },
        { label: 'Engineering Craft', value: 'REST APIs & DB Optimization' },
        { label: 'Continuous Delivery', value: 'GitHub Actions CI/CD' },
        { label: 'Current Base', value: 'Karachi, Pakistan' }
      ]
    };
  }

  getExperiences(): Experience[] {
    return [
      {
        role: 'Software Engineer',
        company: 'QSoft',
        duration: 'July 2025 – Present',
        location: 'Karachi, Pakistan',
        responsibilities: [
          'Develop and maintain scalable web applications using the Laravel framework.',
          'Implement backend logic for database-driven systems.',
          'Optimize MySQL queries to improve application performance.',
          'Build REST APIs for internal and external integrations.',
          'Manage automated deployment pipelines using GitHub Actions.'
        ]
      },
      {
        role: 'Junior Software Engineer',
        company: 'Karsaaz Solutions',
        duration: 'June 2024 – July 2025',
        location: 'Karachi, Pakistan',
        responsibilities: [
          'Developed PHP-based web applications for multiple client projects.',
          'Designed backend systems and implemented database-driven features.',
          'Built responsive user interfaces using HTML, CSS, and JavaScript.',
          'Collaborated with senior developers to deliver scalable solutions.',
          'Assisted in debugging and optimizing existing software systems.'
        ]
      },
      {
        role: 'Software Development Intern',
        company: 'Khatri Services',
        duration: 'January 2024 – May 2024',
        location: 'Karachi, Pakistan',
        responsibilities: [
          'Learned database design principles and SQL fundamentals.',
          'Built backend functionality using PHP.',
          'Developed responsive interfaces using HTML, CSS, and JavaScript.',
          'Assisted in developing small internal tools and utilities.'
        ]
      }
    ];
  }

  getProjects(): Project[] {
    return [
      {
        name: 'PacMarine PIRS API',
        category: 'Maritime Software / Backend API',
        description: 'Developed a Laravel REST API for a maritime inspection and job management system.',
        technologies: ['PHP', 'Laravel', 'MySQL', 'REST APIs', 'Sanctum'],
        contributions: [
          'Authentication and role-based access control (RBAC).',
          'CRUD operations, model relationships, optimized filtering and pagination.',
          'API documentation, robust backend architecture and data management.'
        ]
      },
      {
        name: 'Ship Shore Compatibility (SSC)',
        category: 'Maritime Software / Business Application',
        description: 'Developed a Laravel and Blade-based maritime application for vessel-terminal compatibility assessment.',
        technologies: ['PHP', 'Laravel', 'Blade', 'JavaScript', 'MySQL'],
        contributions: [
          'Vessel and terminal management with operational workflows.',
          'Dynamic compatibility calculations and safety rule validation.',
          'Document handling, user roles & granular permissions, and compliance reporting.'
        ]
      },
      {
        name: 'PKF Task Management & Attendance System',
        category: 'Business Management Software',
        description: 'Developed and maintained Laravel applications for task tracking and employee attendance.',
        technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
        contributions: [
          'Task assignment and granular milestone status tracking.',
          'Attendance records, comprehensive leave management, and multi-tier approval workflows.',
          'Role-based access controls and executive management reporting.'
        ]
      },
      {
        name: 'Laravel CMS Websites',
        category: 'Delivered Web Platforms / CMS',
        description: 'Delivered production web platforms and CMS solutions built with Laravel and PHP for diverse operational environments.',
        technologies: ['PHP', 'Laravel', 'MySQL', 'Blade', 'JavaScript'],
        contributions: [
          'Configured modular content architectures, relational schemas, and responsive presentation layers.',
          'Engineered tailored administrative interfaces and performance-tuned queries for live web properties.'
        ],
        clientWebsites: [
          { title: 'Ziewnic', url: 'https://ziewnic.com' },
          { title: 'Ziewnic UAE', url: 'https://ziewnic.ae' },
          { title: 'Khatri Services', url: 'https://khatriservices.com' },
          { title: 'MCKJ', url: 'https://mckj.org.pk', badge: 'Volunteer Work' },
          { title: 'PacMarine', url: 'https://pacmarine.com' }
        ]
      }
    ];
  }

  getSkills(): SkillCategory[] {
    return [
      {
        category: 'Backend Development',
        skills: ['PHP', 'Laravel', 'REST API Development', 'MVC Architecture', 'Eloquent ORM', 'API Authentication', 'RBAC']
      },
      {
        category: 'Frontend Development',
        skills: ['HTML5', 'CSS3', 'JavaScript', 'Blade', 'Basic React', 'Basic Angular']
      },
      {
        category: 'Databases',
        skills: ['MySQL', 'PostgreSQL', 'Redis', 'Database Design', 'Query Optimization']
      },
      {
        category: 'Tools & Infrastructure',
        skills: ['Git', 'GitHub', 'GitHub Actions', 'Composer', 'CI/CD', 'Server Deployment', 'Linux']
      },
      {
        category: 'CMS & Other Technologies',
        skills: ['WordPress', 'PHPRunner']
      }
    ];
  }

  getEducation(): Education[] {
    return [
      {
        degree: 'Bachelor of Computer Science (BSCS)',
        institution: 'Virtual University of Pakistan',
        year: 'Expected Graduation: 2027'
      },
      {
        degree: 'Intermediate',
        institution: 'Habib Public High School'
      },
      {
        degree: 'Matriculation',
        institution: 'Aga Khan School'
      }
    ];
  }
}
