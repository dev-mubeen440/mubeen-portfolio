import { Injectable } from '@angular/core';
import { Experience, Project, Education, SkillCategory } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  readonly profile = {
    name: 'Mubeen Aslam',
    role: 'Software Engineer | PHP & Laravel',
    location: 'Karachi, Pakistan',
    phone: '+92 309 2919847',
    email: 'mubeenaslam440@gmail.com',
    github: 'https://github.com/dev-mubeen440',
    linkedin: 'https://www.linkedin.com/in/mubeen-aslam-177475294/',
    headline: 'Building scalable web applications, reliable backend systems, and meaningful software solutions.',
    subheadline: "I'm a Software Engineer specializing in PHP and Laravel, with hands-on experience developing production web applications, REST APIs, CRM systems, and database-driven platforms.",
    cvPath: '/MubeenAslamResume.pdf',
    hasCvFile: true
  };

  getAbout() {
    return {
      heading: 'About Me',
      paragraphs: [
        "I am a Software Engineer based in Karachi, Pakistan, currently working at QSoft. My primary focus is backend engineering with PHP and Laravel, where I develop and maintain production web applications, REST APIs, and database-driven platforms.",
        "My work covers relational database design, Eloquent relationships, and query optimization, as well as authentication, authorization, and role-based access control. I regularly implement background processing, third-party API integrations, and automated deployment workflows. In addition to backend systems, I have frontend development experience with Angular, JavaScript, HTML, and CSS.",
        "I approach software engineering with a focus on writing clean, maintainable code and delivering practical business solutions that operate reliably in production."
      ],
      highlights: [
        { label: 'Current Role', value: 'Software Engineer at QSoft' },
        { label: 'Primary Focus', value: 'PHP & Laravel' },
        { label: 'Frontend Experience', value: 'Angular & JavaScript' },
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
          'Developing and maintaining production web applications using PHP and Laravel across multiple client projects.',
          'Designing and optimizing relational database schemas, Eloquent relationships, and queries in MySQL.',
          'Developing REST APIs featuring token authentication, role-based access control, pagination, filtering, and external integrations.',
          'Implementing background jobs, scheduled tasks, and automated workflows to handle asynchronous processes.',
          'Configuring and maintaining GitHub Actions CI/CD pipelines and deployment workflows.',
          'Troubleshooting and resolving production issues to ensure application reliability and performance.'
        ]
      },
      {
        role: 'Junior Software Engineer',
        company: 'Karsaaz Solutions',
        duration: 'June 2024 – July 2025',
        location: 'Karachi, Pakistan',
        responsibilities: [
          'Built backend features and application logic using PHP and Laravel.',
          'Created and maintained database migrations, Eloquent relationships, and reusable components.',
          'Developed responsive frontend templates and interfaces using Blade, HTML, CSS, and JavaScript.',
          'Implemented form validation rules, handled user input, and debugged application issues.',
          'Collaborated closely with senior developers to review code and deliver features on schedule.'
        ]
      },
      {
        role: 'Software Development Intern',
        company: 'Khatri Services',
        duration: 'January 2024 – May 2024',
        location: 'Karachi, Pakistan',
        responsibilities: [
          'Applied PHP development fundamentals and learned relational database design principles.',
          'Assisted in building and updating internal administrative tools and client management pages.',
          'Contributed to frontend development, layout styling, and client-side form validation.',
          'Participated in testing, debugging, and regular application maintenance tasks.'
        ]
      }
    ];
  }

  getProjects(): Project[] {
    return [
      {
        name: 'PacMarine PIRS API',
        category: 'Maritime Inspection · REST API',
        description: 'A REST API supporting maritime inspection workflows, vessel auditing, and job coordination.',
        technologies: ['PHP', 'Laravel', 'MySQL', 'REST APIs', 'Sanctum'],
        contributions: [
          'Implemented secure token-based authentication and role-based access control using Laravel Sanctum.',
          'Engineered complete job lifecycle management workflows and secure file attachments handling.',
          'Implemented structured pagination, query filtering, and database indexing for optimal performance.'
        ]
      },
      {
        name: 'Ship Shore Compatibility (SSC)',
        category: 'Maritime Operations Platform',
        description: 'A maritime operations platform used to evaluate vessel and terminal compatibility.',
        technologies: ['PHP', 'Laravel', 'Blade', 'JavaScript', 'MySQL'],
        contributions: [
          'Implemented compatibility calculations and validation algorithms based on vessel and terminal specifications.',
          'Developed documentation management features, file uploads, and operational safety workflows.',
          'Built administrative dashboards and operational interfaces using Laravel Blade.'
        ]
      },
      {
        name: 'PKF Task & Attendance Management',
        category: 'Internal Business Management',
        description: 'An internal business management platform for tracking employee attendance, tasks, and leave requests.',
        technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
        contributions: [
          'Built daily employee attendance tracking and milestone-based task allocation systems.',
          'Engineered multi-level leave approval workflows and structured administrative processes.',
          'Implemented role-based dashboards, automated reporting, and audit records.'
        ]
      },
      {
        name: 'Production CMS & Web Platforms',
        category: 'Client Web Platforms',
        description: 'Custom corporate websites and CMS-driven platforms built with PHP and Laravel.',
        technologies: ['PHP', 'Laravel', 'MySQL', 'Blade', 'JavaScript'],
        contributions: [
          'Developed dynamic content management systems, reusable components, and administrative dashboards.',
          'Built responsive frontend interfaces with secure form handling and SEO-friendly routing.'
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
        skills: ['PHP', 'Laravel', 'REST APIs', 'OOP', 'MVC', 'SOLID', 'Authentication', 'Authorization']
      },
      {
        category: 'Frontend Development',
        skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Laravel Blade']
      },
      {
        category: 'Databases',
        skills: ['MySQL', 'PostgreSQL', 'Redis', 'Database Design', 'Query Optimization']
      },
      {
        category: 'Tools & Infrastructure',
        skills: ['Git', 'GitHub', 'Postman', 'Composer', 'GitHub Actions', 'CI/CD', 'Plesk']
      },
      {
        category: 'CMS & Other Technologies',
        skills: ['WordPress', 'API Integrations']
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
        institution: 'Habib Public High School (AKUEB)',
        year: ''
      },
      {
        degree: 'Matriculation',
        institution: 'Aga Khan School (AKUEB)',
        year: ''
      }
    ];
  }
}
