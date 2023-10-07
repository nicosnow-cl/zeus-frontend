import {
  chakra,
  forwardRef,
  HTMLChakraProps,
  ThemingProps,
  useStyleConfig,
} from '@chakra-ui/react';

export interface SidebarLinkProps extends HTMLChakraProps<'a'>, ThemingProps {}

export const SidebarLink = forwardRef<SidebarLinkProps, 'a'>((props, ref) => {
  const { size, variant, children, ...rest } = props;
  const styles = useStyleConfig('SidebarLink', { size, variant });

  return (
    <chakra.div ref={ref} __css={styles} {...rest}>
      {children}

      <span id="aware" />
    </chakra.div>
  );
});
