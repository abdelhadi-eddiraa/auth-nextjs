# Next.js Authentication with Google and GitHub

This project is a web application built with Next.js, Tailwind CSS, and TypeScript. It includes user authentication using Google and GitHub through `next-auth`, and uses Prisma for database management. The project aims to provide a customizable and scalable foundation for building content management systems with modern web technologies.

## Features

- User authentication with Google and GitHub using `next-auth`
- Role and permissions system
- Dynamic and visually appealing main page


## Main Page
![Main Page](https://postimg.cc/Q9TgHRt9)

This main page showcases the core features of the application, providing a dynamic and visually appealing interface that highlights its capabilities.

## Login
![Login](https://postimg.cc/TyhJXyvc)

The login page allows users to authenticate using their Google or GitHub accounts. It also includes options for managing user profiles and access control.

## Register
![Register](https://postimg.cc/NyV7Gggv)

The registration page enables new users to create accounts. It integrates with the user management system to ensure proper role assignment and permissions.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm or yarn
- PostgreSQL or any other database supported by Prisma

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Create a `.env` file in the root of the project and add the following environment variables:
    ```env
    DATABASE_URL="your-database-url"
    NEXTAUTH_URL="http://localhost:3000"
    NEXTAUTH_SECRET="your-secret"
    GITHUB_ID="your-github-client-id"
    GITHUB_SECRET="your-github-client-secret"
    GOOGLE_ID="your-google-client-id"
    GOOGLE_SECRET="your-google-client-secret"
    ```

4. Set up the database with Prisma:
    ```bash
    npx prisma migrate dev --name init
    npx prisma generate
    ```

### Running the Development Server

Run the following command to start the development server:
```bash
npm run dev
# or
yarn dev



## Sponsors

<table width="100%">
  <tr height="187px">
    <td align="center" width="33%">
      <a href="https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://github.com/ixartz/Next-js-Boilerplate/assets/1328388/a3cd2a25-377b-4c0d-a3d3-bce121df2c94">
          <source media="(prefers-color-scheme: light)" srcset="https://github.com/ixartz/Next-js-Boilerplate/assets/1328388/3459074d-c3e2-46c5-8be4-b836cb7989ea">
          <img alt="Clerk – Authentication & User Management for Next.js" src="https://github.com/ixartz/Next-js-Boilerplate/assets/1328388/3459074d-c3e2-46c5-8be4-b836cb7989ea">
        </picture>
      </a>
    </td>
    <td align="center" width="33%">
      <a href="https://turso.tech/?utm_source=nextjsstarterbp">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="public/assets/images/turso-light.png?raw=true">
          <source media="(prefers-color-scheme: light)" srcset="public/assets/images/turso-dark.png?raw=true">
          <img alt="Turso - SQLite for Production" src="public/assets/images/turso-dark.png?raw=true">
        </picture>
      </a>
    </td>
    <td align="center" width="33%">
      <a href="https://l.crowdin.com/next-js">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="public/assets/images/crowdin-white.png?raw=true">
          <source media="(prefers-color-scheme: light)" srcset="public/assets/images/crowdin-dark.png?raw=true">
          <img alt="Crowdin" src="public/assets/images/crowdin-dark.png?raw=true">
        </picture>
      </a>
    </td>
  </tr>
  <tr height="187px">
    <td align="center" width="33%">
      <a href="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="public/assets/images/sentry-white.png?raw=true">
          <source media="(prefers-color-scheme: light)" srcset="public/assets/images/sentry-dark.png?raw=true">
          <img alt="Sentry" src="public/assets/images/sentry-dark.png?raw=true">
        </picture>
      </a>
      <a href="https://about.codecov.io/codecov-free-trial/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="public/assets/images/codecov-white.svg?raw=true">
          <source media="(prefers-color-scheme: light)" srcset="public/assets/images/codecov-dark.svg?raw=true">
          <img alt="Codecov" src="public/assets/images/codecov-dark.svg?raw=true">
        </picture>
      </a>
    </td>
    <td align="center" width="33%">
      <a href="https://posthog.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://posthog.com/brand/posthog-logo-white.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://posthog.com/brand/posthog-logo.svg">
          <img alt="PostHog" src="https://posthog.com/brand/posthog-logo.svg">
        </picture>
      </a>
    </td>
    <td align="center" width="33%">
      <a href="https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="public/assets/images/better-stack-white.png?raw=true">
          <source media="(prefers-color-scheme: light)" srcset="public/assets/images/better-stack-dark.png?raw=true">
          <img alt="Better Stack" src="public/assets/images/better-stack-dark.png?raw=true">
        </picture>
      </a>
    </td>
  </tr>
  <tr height="187px">
    <td align="center" width="33%">
      <a href="https://upstash.com/?utm_source=nextjs-boilerplate">
        <img src="https://raw.githubusercontent.com/upstash/sponsorship/master/redis.png" alt="Upstash">
      </a>
    </td>
    <td align="center" width="33%">
      <a href="https://www.checklyhq.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="public/assets/images/checkly-logo-dark.png?raw=true">
          <source media="(prefers-color-scheme: light)" srcset="public/assets/images/checkly-logo-light.png?raw=true">
          <img alt="Checkly" src="public/assets/images/checkly-logo-light.png?raw=true">
        </picture>
      </a>
    </td>
    <td align="center" style=width="33%">
      <a href="https://nextlessjs.com">
        <img src="public/assets/images/nextlessjs.png?raw=true" alt="React SaaS Boilerplate Next.js" />
      </a>
    </td>
  </tr>
  <tr height="187px">
    <td align="center" width="33%">
      <a href="mailto:contact@creativedesignsguru.com">
        Add your logo here
      </a>
    </td>
  </tr>
</table>





### Features

Developer experience first, extremely flexible code structure and only keep what you need:

- ⚡ [Next.js](https://nextjs.org) with App Router support
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 Integrate with [Tailwind CSS](https://tailwindcss.com)
- ✅ Strict Mode for TypeScript and React 18
- 🔒 Authentication with [Clerk](https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate): Sign up, Sign in, Sign out, Forgot password, Reset password, and more.
- 📦 Type-safe ORM with DrizzleORM, compatible with SQLite, PostgreSQL, and MySQL
- 💽 Global Database with [Turso](https://turso.tech/?utm_source=nextjsstarterbp)
- 🌐 Multi-language (i18n) with [next-intl](https://next-intl-docs.vercel.app/) and [Crowdin](https://l.crowdin.com/next-js)
- ♻️ Type-safe environment variables with T3 Env
- ⌨️ Form handling with React Hook Form
- 🔴 Validation library with Zod
- 📏 Linter with [ESLint](https://eslint.org) (default Next.js, Next.js Core Web Vitals, Tailwind CSS and Airbnb configuration)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🚓 Lint git commit with Commitlint
- 📓 Write standard compliant commit messages with Commitizen
- 🦺 Unit Testing with Jest and React Testing Library
- 🧪 Integration and E2E Testing with Playwright
- 👷 Run tests on pull request with GitHub Actions
- 🎉 Storybook for UI development
- 🚨 Error Monitoring with [Sentry](https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo)
- ☂️ Code coverage with [Codecov](https://about.codecov.io/codecov-free-trial/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo)
- 📝 Logging with Pino.js and Log Management with [Better Stack](https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate)
- 🖥️ Monitoring as Code with [Checkly](https://www.checklyhq.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate)
- 🎁 Automatic changelog generation with Semantic Release
- 🔍 Visual testing with Percy (Optional)
- 💡 Absolute Imports using `@` prefix
- 🗂 VSCode configuration: Debug, Settings, Tasks and Extensions
- 🤖 SEO metadata, JSON-LD and Open Graph tags
- 🗺️ Sitemap.xml and robots.txt
- ⌘ Database exploration with Drizzle Studio and CLI migration tool with Drizzle Kit
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 🌈 Include a FREE minimalist theme
- 💯 Maximize lighthouse score

Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

### Philosophy

- Nothing is hidden from you, so you have the freedom to make the necessary adjustments to fit your needs and preferences.
- Easy to customize
- Minimal code
- SEO-friendly
- 🚀 Production-ready

### Requirements

- Node.js 18+ and npm


=======

