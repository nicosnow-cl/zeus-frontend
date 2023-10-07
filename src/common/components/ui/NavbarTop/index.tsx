import {
  chakra,
  forwardRef,
  HTMLChakraProps,
  ThemingProps,
  useStyleConfig,
} from '@chakra-ui/react';

export interface NavbarTopProps extends HTMLChakraProps<'div'>, ThemingProps {}

export const NavbarTop = forwardRef<NavbarTopProps, 'div'>((props, ref) => {
  const { size, variant, ...rest } = props;
  const styles = useStyleConfig('NavbarTop', { size, variant });

  return <chakra.div ref={ref} __css={styles} {...rest} />;
});
