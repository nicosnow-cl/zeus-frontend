import {
  chakra,
  forwardRef,
  HTMLChakraProps,
  ThemingProps,
  useStyleConfig,
} from '@chakra-ui/react';

export interface NavbarDownProps extends HTMLChakraProps<'div'>, ThemingProps {}

export const NavbarDown = forwardRef<NavbarDownProps, 'div'>((props, ref) => {
  const { size, variant, ...rest } = props;
  const styles = useStyleConfig('NavbarDown', { size, variant });

  return <chakra.div ref={ref} __css={styles} {...rest} />;
});
