SOFT DESIGN — Project Development Instructions

1. Project Overview

SOFT DESIGN is an individually owned software development business registered in Kosovo.

The business is operated by an experienced C# software developer with more than 15 years of professional experience.

The website represents an independent software engineering business, not a large software development agency.

The primary objective is to communicate professional experience, technical expertise, credibility, and software development services to potential international clients.

Primary expertise

- C#
- Microsoft .NET
- ASP.NET Core
- Backend Development
- Software Architecture
- REST APIs and Integrations
- Custom Software Development
- Database Development
- Application Maintenance
- Legacy Application Modernization

Use verified information from the repository and the owner's supplied professional CV when relevant.

Never invent professional qualifications, certifications, customers, partnerships, projects, or achievements.

Do not expose private CV information.

2. Existing Technology Stack

The website currently uses:

- HTML5
- CSS3
- Vanilla JavaScript

Hosting and deployment:

- GitHub Pages
- GoDaddy domain management

Technology constraints

Preserve the existing technology stack.

Do not introduce React, Angular, Vue, Next.js, WordPress, or other frameworks without explicit approval.

Do not introduce a backend, database, server-side rendering, or server infrastructure unless explicitly requested.

Avoid unnecessary build tools, dependencies, and package management complexity.

The website must remain compatible with static hosting through GitHub Pages.

Preserve existing GitHub Pages configuration, domain-related configuration files, and deployment requirements.

Do not modify domain or DNS configuration.

3. Repository First

Always inspect the existing repository before making changes.

Understand:

- Directory structure.
- HTML pages.
- CSS architecture.
- JavaScript functionality.
- Existing assets.
- Navigation.
- SEO metadata.
- External integrations.
- GitHub Pages configuration.
- Existing coding conventions.

Do not assume the repository structure or rewrite existing code without understanding its purpose.

Preserve existing functionality unless changes are necessary and justified.

4. Business Positioning

Present SOFT DESIGN as an experienced, independent software engineering business.

Emphasize:

- More than 15 years of professional development experience.
- Strong C# and .NET expertise.
- Direct access to the owner and developer.
- Professional software engineering.
- Reliable and maintainable solutions.
- Technical ownership.
- Flexible cooperation.
- Long-term business relationships.

Avoid presenting the business as a large agency or implying the existence of employees or teams without verified information.

Use authentic and specific business language.

Never fabricate:

- Client names.
- Testimonials.
- Certifications.
- Partnerships.
- Projects.
- Business statistics.
- Awards.
- Team size.
- Customer results.

5. Coding Standards

Write clean, maintainable, readable code.

HTML

- Use semantic HTML5.
- Maintain a logical document structure.
- Use accessible markup.
- Avoid unnecessary nesting.
- Include appropriate metadata.
- Use descriptive attributes.

CSS

- Use consistent naming conventions.
- Prefer reusable styles.
- Maintain consistent spacing and typography.
- Use CSS custom properties for shared design tokens.
- Avoid unnecessary specificity.
- Avoid duplicated declarations.
- Organize styles logically.
- Use responsive layouts.
- Avoid excessive use of "!important".

JavaScript

- Prefer modern vanilla JavaScript.
- Use "const" by default and "let" when reassignment is necessary.
- Avoid unnecessary global variables.
- Use modular and reusable functions.
- Avoid duplicated logic.
- Handle errors explicitly.
- Avoid unsafe DOM manipulation.
- Avoid unnecessary dependencies.
- Keep scripts efficient and understandable.

Do not introduce TypeScript or a JavaScript framework without approval.

6. Design System and UX

Maintain a consistent premium B2B technology design.

Principles:

- Minimalist and professional.
- Clear typography.
- Consistent spacing.
- Strong visual hierarchy.
- Accessible contrast.
- Responsive layouts.
- Subtle animations.
- Consistent interaction patterns.

Avoid:

- Generic website templates.
- Excessive gradients.
- Unnecessary animations.
- Visual clutter.
- Excessive rounded cards.
- Decorative elements without purpose.
- Inconsistent design patterns.

Use shared CSS variables and reusable components where appropriate.

All new sections and pages must follow the established design system.

7. Responsive Design

All website changes must support:

- Desktop.
- Laptop.
- Tablet.
- Mobile.

Use responsive CSS and appropriate breakpoints.

Ensure:

- Navigation works on small screens.
- Text remains readable.
- Images scale correctly.
- No horizontal overflow.
- Interactive elements are usable.
- Layouts maintain visual consistency.

Do not optimize exclusively for desktop.

8. Accessibility

Follow WCAG 2.2 AA principles where practical.

Requirements:

- Semantic HTML.
- Keyboard navigation.
- Visible focus states.
- Proper form labels.
- Appropriate color contrast.
- Descriptive link text.
- Accessible navigation.
- Screen reader compatibility.
- Reduced-motion support.

Do not rely exclusively on color to communicate information.

9. SEO Standards

Every public page should have:

- Unique page title.
- Unique meta description.
- One primary H1.
- Logical heading hierarchy.
- Canonical URL where appropriate.
- Open Graph metadata.
- Descriptive image alt attributes.
- Relevant internal links.

Maintain:

- XML sitemap.
- Robots.txt.
- Structured data where appropriate.
- SEO-friendly URLs compatible with GitHub Pages.

Use accurate domain configuration discovered from the repository.

Avoid keyword stuffing, duplicate content, and misleading metadata.

10. Performance

Prioritize:

- Fast loading.
- Optimized images.
- Efficient CSS.
- Lightweight JavaScript.
- Minimal external dependencies.
- Appropriate caching.
- Efficient font loading.
- Core Web Vitals.

Use lazy loading for appropriate non-critical images.

Do not lazy-load critical above-the-fold content unnecessarily.

Measure actual performance whenever tools are available.

Never invent performance metrics.

11. Contact Forms and External Services

The website is hosted on GitHub Pages.

GitHub Pages does not provide server-side form processing.

Never implement a contact form that only displays a fake success message.

Before integrating a third-party service:

1. Explain why it is required.
2. Identify suitable providers.
3. Explain costs and limitations.
4. Obtain approval before introducing paid services or external account dependencies.

Never expose API keys, SMTP credentials, or private tokens in client-side JavaScript.

Provide meaningful validation and error handling.

If no working submission mechanism exists, use a clearly presented alternative such as direct email contact.

12. Security and Privacy

- Never commit secrets.
- Never expose credentials.
- Never collect unnecessary personal information.
- Validate user input.
- Avoid unsafe HTML injection.
- Avoid unnecessary third-party scripts.
- Use secure external links.
- Consider privacy implications of analytics and tracking.
- Follow appropriate security practices for external integrations.

13. Browser Compatibility

Support current versions of major browsers:

- Google Chrome.
- Microsoft Edge.
- Mozilla Firefox.
- Safari.

Use progressive enhancement where appropriate.

Avoid relying on experimental browser features without a suitable fallback.

14. Testing and Quality Assurance

Before completing a task:

- Validate HTML where possible.
- Check CSS for errors.
- Check JavaScript for errors.
- Verify all internal links.
- Verify external links where practical.
- Test navigation.
- Test contact interactions.
- Review mobile layouts.
- Check browser console errors.
- Check accessibility.
- Review SEO metadata.
- Test the static website locally.

Run available project checks and report actual results.

Never claim tests passed if they were not executed.

15. Git Workflow — Strict Rules

The owner works directly with the local repository.

All AI agents must follow these rules:

- Work directly in the current local repository.
- Do not create branches.
- Do not create worktrees.
- Do not commit changes.
- Do not push changes.
- Do not deploy changes.
- Do not modify Git remotes.
- Do not rewrite Git history.
- Do not discard uncommitted changes.
- Do not reset the repository.
- Do not run destructive Git commands.

The owner reviews all changes locally.

Git commits and pushes are permitted only after explicit instructions from the owner.

Implementation tasks do not automatically authorize Git operations.

16. Change Management

Keep changes focused and relevant to the requested task.

Before editing:

- Understand the affected files.
- Identify dependencies.
- Consider potential regressions.
- Preserve unrelated work.

After editing:

- Review the changes.
- Remove temporary code.
- Remove unused assets introduced by the implementation.
- Check for accidental modifications.
- Report important architectural changes.

Do not perform unrelated refactoring without justification.

17. Documentation

Update documentation when introducing:

- New functionality.
- New dependencies.
- New external integrations.
- New configuration requirements.
- New development workflows.
- Important architectural decisions.

Keep documentation accurate and concise.

18. Definition of Done

A task is complete when:

1. Requested functionality is implemented.
2. Existing functionality remains intact.
3. Code follows project conventions.
4. Responsive behavior is verified.
5. Accessibility has been considered.
6. SEO requirements are maintained.
7. No known critical security issues are introduced.
8. Relevant tests and checks are executed.
9. Documentation is updated where necessary.
10. Remaining limitations are clearly documented.

Always provide a concise completion report describing:

- Files modified.
- Features implemented.
- Important decisions.
- Tests performed.
- Outstanding issues.

Do not commit, push, or deploy changes unless explicitly instructed by the owner.