import { defineStyleConfig } from '@chakra-ui/react';
import { theme } from '@chakra-ui/theme';

const Switch = defineStyleConfig({
  ...theme.components.Switch,
  // Styles for the size variations
  sizes: {
    ...theme.components.Switch.sizes,
  },
  // Styles for the visual style variations
  variants: {
    ...theme.components.Switch.variants,
  },
  // The default `size` or `variant` values
  defaultProps: {
    ...theme.components.Switch.defaultProps,
  },
});

export default Switch;
