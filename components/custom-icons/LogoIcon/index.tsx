import { createSvgIcon } from '@mui/material';

import LogoSvg from '../../../public/images/logo.svg';

const LogoIcon = (props: any) => {
  const Icon = createSvgIcon(LogoSvg(), 'LogoIcon');

  return <Icon {...props} />;
};

export default LogoIcon;
