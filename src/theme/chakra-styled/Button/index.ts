import { defineStyleConfig } from '@chakra-ui/react';
import { theme } from '@chakra-ui/theme';

const Button = defineStyleConfig({
  // Styles for the base style
  baseStyle: {
    ...theme.components.Button.baseStyle,
  },
  // Styles for the size variations
  sizes: {
    ...theme.components.Button.sizes,
  },
  // Styles for the visual style variations
  variants: {
    ...theme.components.Button.variants,
  },
  // The default `size` or `variant` values
  defaultProps: {
    ...theme.components.Button.defaultProps,
  },
});

export default Button;
