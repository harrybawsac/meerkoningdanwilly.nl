import type { FC } from 'react';
import { useId } from 'react';
import { FormattedMessage } from 'react-intl';

import Track from '@/components/Track';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const Index: FC<any> = (props) => {
  const id = useId();

  return (
    <Main
      meta={
        <Meta
          title="Meer Koning dan Willy"
          description="Hands down the best playlist to have ever existed."
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
      {props.playlist.tracks.items.map((track: any) => {
        return <Track key={id} track={track.track} />;
      })}
    </Main>
  );
};

export default Index;

export async function getStaticProps() {
  const res = await fetch(`${AppConfig.base_url}/api/playlist`);
  const playlist = await res.json();

  return {
    props: {
      playlist,
    },
    revalidate: 1800,
  };
}
