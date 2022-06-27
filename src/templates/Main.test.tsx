import { render, screen } from '@testing-library/react';

import { Main } from './Main';

describe('Main template', () => {
  describe('Render method', () => {
    it('should have 3 menu items', () => {
      render(<Main meta={null}>{null}</Main>);

      const menuItemList = screen.getAllByRole('listitem');

      expect(menuItemList).toHaveLength(3);
    });

    it('should have footer stating the nane of the project: Nextjs Starterkit', () => {
      render(<Main meta={null}>{null}</Main>);

      const footerSection = screen.getByTestId('footer');

      expect(footerSection).toHaveTextContent('Nextjs Starterkit');
    });
  });
});
