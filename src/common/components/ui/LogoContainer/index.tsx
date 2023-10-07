import {
  chakra,
  forwardRef,
  HTMLChakraProps,
  ThemingProps,
  useStyleConfig,
} from '@chakra-ui/react';

export interface LogoContainerProps extends HTMLChakraProps<'div'>, ThemingProps {}

export const LogoContainer = forwardRef<LogoContainerProps, 'div'>((props, ref) => {
  const { size, variant, ...rest } = props;
  const styles = useStyleConfig('LogoContainer', { size, variant });

  return <chakra.div ref={ref} __css={styles} {...rest} />;
});
