import SvgIcon from '@mui/material/SvgIcon';

import LogoSvg from '../../../public/images/logo.svg';

const LogoIcon = (props: any) => {
  return <SvgIcon {...props} component={LogoSvg} inheritViewBox />;
};

export default LogoIcon;
