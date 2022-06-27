# Starterkit for Next JS, Tailwind CSS and TypeScript

Featuring: Next.js + TypeScript + FormatJS + ESLint + Prettier + Husky + Lint-Staged + Jest + Testing Library + VSCode extension suggestions + PostCSS + Tailwind CSS + Headless UI + Heroicons.

### Features

- [Next.js](https://nextjs.org) for Static Site Generation and all kinds of fun stuff
- Type checking with [TypeScript](https://www.typescriptlang.org)
- Strict mode for TypeScript and React
- Full Tailwind setup with [Tailwind CSS](https://tailwindcss.com), [Headless UI](https://headlessui.dev) and [Heroicons](https://heroicons.com) for easy [Tailwind UI](https://tailwindui.com) integration
- Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, Tailwind CSS and Airbnb configuration)
- i18n using [FormatJS](https://formatjs.io) for translations and other types of formatting
- Code formatter with [Prettier](https://prettier.io)
- Husky for git hooks
- Lint-staged for running linters on staged files
- Testing with Jest and React Testing Library
- Absolute imports using `@` prefix
- VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript, Jest
- SEO metadata, JSON-LD and Open Graph tags with Next SEO
- [Bundle Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- Maximum [Lighthouse](https://web.dev/measure) score

Built-in features from Next.js:

- Minify
- Hot reload
- Image optimazation
- API
- ...and much more

### Philosophy

- Minimal starterkit code
- SEO-friendly
- Production-ready

### Requirements

- Node.js 14+ and Yarn

### Getting started

Run the following commands on your local environment:

```shell
git clone
yarn install
yarn i18n
```

Then, you can run the development mode with hot reload:

```shell
yarn dev
```

Open http://localhost:3000 with your favorite browser to see your project.

```shell
.
├── README.md                       # README file
├── __mocks__                       # Mocks for testing
├── .husky                          # Husky configuration
├── .vscode                         # VSCode configuration
├── public                          # Public assets folder
├── src                             # Your application
│   ├── components                  # React components
│   ├── layouts                     # Layouts components
│   ├── locales                     # Locale files for local development environment
│   │   └── compiled                # Locale files for production environment after `yarn i18n`
│   ├── pages                       # Next JS Pages
│   │   └── api                     # Next JS API
│   ├── pages.test                  # Next JS Pages tests (this avoid test to treated as a Next.js pages)
│   ├── styles                      # Styles folder
│   ├── templates                   # Default templates
│   └── utils                       # Utility functions
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

### Customization

You can easily configure the starterkit. Please change the following files:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your website favicon, you can generate from https://favicon.io/favicon-converter/
- `src/styles/global.css`: your CSS file using Tailwind CSS
- `src/utils/AppConfig.ts`: configuration file
- `src/templates/Main.tsx`: default theme

### Deploy to production

You can see the results locally in production mode with:

```shell
yarn build
yarn start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also remove unused CSS from Tailwind CSS.

### Testing

All tests are colocated with the source code inside the same directory. So, it makes it easier to find them. Unfortunately, such setup is not possible with the `pages` folder, which is used by Next.js for routing. That's why there's a `pages.test` folder to write tests for files located in the `pages` folder.

### VSCode information (optional)

If you are a VSCode user, you leverage a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. VSCode will prompt the right extensions for a seamless integration. The debug configuration is also provided for frontend and backend debugging experience.

With the plugins installed on your VSCode, ESLint and Prettier can automatically fix the code and show you the errors. Same goes for testing, you can install VSCode Jest extension to automatically run your tests and it also shows the code coverage in context.

Pro tips: if you need a project wide type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac.
