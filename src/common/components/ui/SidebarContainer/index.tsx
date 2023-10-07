import {
  chakra,
  forwardRef,
  HTMLChakraProps,
  ThemingProps,
  useStyleConfig,
} from '@chakra-ui/react';

export interface SidebarContainerProps extends HTMLChakraProps<'div'>, ThemingProps {}

export const SidebarContainer = forwardRef<SidebarContainerProps, 'div'>((props, ref) => {
  const { size, variant, ...rest } = props;
  const styles = useStyleConfig('SidebarContainer', { size, variant });

  return <chakra.div ref={ref} __css={styles} {...rest} />;
});
