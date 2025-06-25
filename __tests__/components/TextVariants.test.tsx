import React from 'react';
import { render } from '@testing-library/react-native';
import colours from '@constants/colours';


import BodyMedium from '@components/atoms/text/bodyMedium';
import BodySmall  from '@components/atoms/text/bodySmall';
import H1         from '@components/atoms/text/h1';
import H2         from '@components/atoms/text/h2';
import H3         from '@components/atoms/text/h3';
import H4         from '@components/atoms/text/h4';
import H5         from '@components/atoms/text/h5';
import H6         from '@components/atoms/text/h6';

type Variant = {
  name: string;
  Component: React.ComponentType<any>;
};

const variants: Variant[] = [
  { name: 'BodyMedium', Component: BodyMedium },
  { name: 'BodySmall',  Component: BodySmall  },
  { name: 'H1',         Component: H1         },
  { name: 'H2',         Component: H2         },
  { name: 'H3',         Component: H3         },
  { name: 'H4',         Component: H4         },
  { name: 'H5',         Component: H5         },
  { name: 'H6',         Component: H6         },
];

describe('Typography variants', () => {
  variants.forEach(({ name, Component }) => {
    describe(`${name} Component`, () => {
      it('renders correctly with default props', () => {
        const { getByText } = render(<Component>Sample Text</Component>);
        expect(getByText('Sample Text')).toBeTruthy();
      });

      it('applies custom text style', () => {
        const { getByText } = render(
          <Component textStyle={{ fontWeight: 'bold' }}>Bold Text</Component>
        );
        const textElement = getByText('Bold Text');
        // Styles come as an array; flatten before asserting
        const flattened = Array.isArray(textElement.props.style)
          ? Object.assign({}, ...textElement.props.style)
          : textElement.props.style;

        expect(flattened.fontWeight).toBe('bold');
      });

      it('uses the correct default colour', () => {
        const { getByText } = render(<Component>Colour Test</Component>);
        const styles = getByText('Colour Test').props.style;
        const flattened = Array.isArray(styles)
          ? Object.assign({}, ...styles)
          : styles;

        expect(flattened.color).toBe(colours.darkBase400);
      });

      it('renders with overridden colour', () => {
        const customColour = 'purple';
        const { getByText } = render(
          <Component colour={customColour}>Purple Text</Component>
        );
        const styles = getByText('Purple Text').props.style;
        const flattened = Array.isArray(styles)
          ? Object.assign({}, ...styles)
          : styles;

        expect(flattened.color).toBe(customColour);
      });
    });
  });
});
