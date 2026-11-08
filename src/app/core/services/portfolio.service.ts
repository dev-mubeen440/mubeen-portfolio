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
    headline: 'Backend Engineer specializing in PHP & Laravel, focused on clean APIs, solid database design, and reliable web applications.',
    subheadline: 'Currently building and maintaining production web applications, RESTful services, and database-driven business systems at QSoft.',
    cvPath: '/MubeenAslamResume.pdf',
    hasCvFile: true
  };

  getAbout() {
    return {
      heading: 'About Me',
      paragraphs: [
        "I'm a backend-focused Software Engineer based in Karachi, currently working at QSoft. I specialize in PHP and Laravel, building dependable web applications, REST APIs, and database-driven business tools that teams rely on daily.",
        'My work involves writing clean MVC code, structuring and optimizing MySQL databases, integrating external and internal APIs, and automating deployments through GitHub Actions.',
        "I enjoy solving practical business problems with clean, maintainable code—delivering features that perform smoothly in production without unnecessary complexity."
      ],
      highlights: [
        { label: 'Primary Focus', value: 'PHP & Laravel Development' },
        { label: 'Core Expertise', value: 'REST APIs & MySQL' },
        { label: 'Automation', value: 'GitHub Actions CI/CD' },
        { label: 'Location', value: 'Karachi, Pakistan' }
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
          'Develop and maintain production web applications and business portals using Laravel and PHP.',
          'Design and optimize relational database schemas and queries in MySQL to keep response times fast.',
          'Build and document secure REST APIs for internal workflows and external integrations.',
          'Set up and maintain CI/CD pipelines with GitHub Actions for automated testing and deployments.',
          'Collaborate with team members on code reviews, bug fixes, and feature enhancements.'
        ]
      },
      {
        role: 'Junior Software Engineer',
        company: 'Karsaaz Solutions',
        duration: 'June 2024 – July 2025',
        location: 'Karachi, Pakistan',
        responsibilities: [
          'Built and maintained backend features across multiple client web applications using PHP and Laravel.',
          'Created database migrations, seeders, and optimized queries for business logic.',
          'Developed responsive frontend templates using Blade, HTML, CSS, and JavaScript.',
          'Worked closely with senior developers to troubleshoot issues and deliver updates on schedule.'
        ]
      },
      {
        role: 'Software Development Intern',
        company: 'Khatri Services',
        duration: 'January 2024 – May 2024',
        location: 'Karachi, Pakistan',
        responsibilities: [
          'Gained hands-on experience in PHP development and relational database design.',
          'Assisted with frontend styling, form validations, and interactive elements using JavaScript.',
          'Helped test, debug, and maintain internal client tools and administrative pages.'
        ]
      }
    ];
  }

  getProjects(): Project[] {
    return [
      {
        name: 'PacMarine PIRS API',
        category: 'Maritime Software · REST API',
        description: 'A dedicated REST API powering a maritime inspection, vessel auditing, and job coordination system.',
        technologies: ['PHP', 'Laravel', 'MySQL', 'REST APIs', 'Sanctum'],
        contributions: [
          'Engineered secure token authentication and role-based permissions (RBAC) with Laravel Sanctum.',
          'Built endpoints for job lifecycle management, file attachments, and paginated audit logs.',
          'Optimized database queries and indexing to maintain fast API response times under load.'
        ]
      },
      {
        name: 'Ship Shore Compatibility (SSC)',
        category: 'Maritime Operations Platform',
        description: 'An operational web platform used to assess and verify compatibility between marine vessels and port terminals.',
        technologies: ['PHP', 'Laravel', 'Blade', 'JavaScript', 'MySQL'],
        contributions: [
          'Implemented compatibility validation algorithms based on vessel specifications and terminal constraints.',
          'Built vessel profiling, documentation uploads, and automated safety checklist generation.',
          'Designed intuitive Blade dashboards and administrative approval workflows.'
        ]
      },
      {
        name: 'PKF Task & Attendance Management',
        category: 'Internal Business Management',
        description: 'An internal company portal streamlining daily task allocation, attendance tracking, and employee leave requests.',
        technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
        contributions: [
          'Developed real-time attendance logging, multi-level leave approvals, and daily milestone tracking.',
          'Implemented role-based dashboards for managers, team leads, and staff members.',
          'Generated automated monthly timesheet reports and exportable audit records.'
        ]
      },
      {
        name: 'Production CMS & Web Platforms',
        category: 'Client Web Platforms',
        description: 'Custom web platforms and CMS-driven corporate websites built with Laravel and PHP for corporate clients.',
        technologies: ['PHP', 'Laravel', 'MySQL', 'Blade', 'JavaScript'],
        contributions: [
          'Developed structured content schemas, dynamic page builders, and administrative dashboards.',
          'Ensured responsive rendering, secure input handling, and SEO-friendly routing.'
        ],
        clientWebsites: [
          { title: 'Ziewnic', url: 'https://ziewnic.com' },
          { title: 'Ziewnic UAE', url: 'https://ziewnic.ae' },
          { title: 'Khatri Services', url: 'https://khatriservices.com' },
          { title: 'MCKJ', url: 'https://mckj.org.pk', badge: 'Community Work' },
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
