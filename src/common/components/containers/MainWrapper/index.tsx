import {
  chakra,
  forwardRef,
  HTMLChakraProps,
  ThemingProps,
  useStyleConfig,
} from '@chakra-ui/react';

export interface MainWrapperProps extends HTMLChakraProps<'div'>, ThemingProps {}

export const MainWrapper = forwardRef<MainWrapperProps, 'div'>((props, ref) => {
  const { size, variant, ...rest } = props;
  const styles = useStyleConfig('MainWrapper', { size, variant });

  return <chakra.div ref={ref} __css={styles} {...rest} />;
});
