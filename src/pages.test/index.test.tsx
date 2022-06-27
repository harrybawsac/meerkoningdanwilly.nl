import Index from '@/pages/index';

import { render, screen } from './page-test-utils';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Index page', () => {
  describe('Render method', () => {
    it('should have h1 tag', () => {
      render(
        <Index
          playlist={{
            tracks: {
              items: [
                {
                  track: {
                    name: 'Track 1',
                  },
                },
              ],
            },
          }}
        />
      );

      const heading = screen.getByRole('heading', {
        name: /starterkit code/,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
