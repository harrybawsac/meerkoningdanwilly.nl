import { FormattedMessage } from 'react-intl';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Starterkit Presentation"
          description="Next.js starterkit is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <h1 role="heading" className="text-2xl font-bold">
        <FormattedMessage id="hi" defaultMessage="Hi" />, starterkit code for
        your Nextjs project with Tailwind CSS
      </h1>
      <p>
        Starterkit for Next.js 12+, Tailwind CSS 3 (and Tailwind UI) and
        TypeScript. Made with developer experience first: Next.js (including
        API) + TypeScript + ESLint + Prettier + Husky + Lint-Staged + Jest +
        Testing Library + VSCode + PostCSS + Tailwind CSS/UI.
      </p>
      <h2 className="text-lg font-semibold">Next js Starterkit Features</h2>
      <p>Developer experience first:</p>
      <ul>
        <li>
          <a href="https://nextjs.org" rel="nofollow">
            Next.js
          </a>{' '}
          for Static Site Generator
        </li>
        <li>
          Integrate with{' '}
          <a href="https://tailwindcss.com" rel="nofollow">
            Tailwind CSS
          </a>
        </li>
        <li>PostCSS for processing Tailwind CSS</li>
        <li>Type checking Typescript</li>
        <li>
          Linter with{' '}
          <a href="https://eslint.org" rel="nofollow">
            ESLint
          </a>
        </li>
        <li>
          Code Formatter with{' '}
          <a href="https://prettier.io" rel="nofollow">
            Prettier
          </a>
        </li>
        <li>Husky for Git Hooks</li>
        <li>Lint-staged for running linters on Git staged files</li>
        <li>
          VSCode configuration: Debug, Settings, Tasks and extension for
          PostCSS, ESLint, Prettier, TypeScript
        </li>
        <li>SEO metadata, JSON-LD and Open Graph tags with Next SEO</li>
        <li>
          <a
            href="https://www.npmjs.com/package/@next/bundle-analyzer"
            rel="nofollow"
          >
            Bundler Analyzer
          </a>
        </li>
        <li>Maximize Lighthouse score</li>
      </ul>
      <p>Built-in feature from Next.js:</p>
      <ul>
        <li>Minify HTML &amp; CSS</li>
        <li>Live reload</li>
        <li>Cache busting</li>
      </ul>
      <h2 className="text-lg font-semibold">Staterkit Philosophy</h2>
      <ul>
        <li>Minimal code</li>
        <li>SEO-friendly</li>
        <li>Production-ready</li>
      </ul>
    </Main>
  );
};

export default Index;
