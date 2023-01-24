import { useContext, useState } from 'react';
import CardActionArea from '@mui/material/CardActionArea';
import Check from '@mui/icons-material/Check';
import Typography from '@mui/material/Typography';

import { AppContext } from '../../../pages/_app';

export interface ICustomBoxActionProps {
  backgroundColor?: string;
  height?: string | number;
  icon?: React.ReactNode;
  minWidth?: string | number;
  onClick?: () => void;
  subtitle?: string;
  title: string | JSX.Element;
}

const CustomBoxAction = ({
  backgroundColor,
  height,
  icon = <Check />,
  minWidth,
  onClick,
  subtitle,
  title,
}: ICustomBoxActionProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const { theme } = useContext(AppContext);

  const _backgroundColor = backgroundColor ? backgroundColor : theme?.palette.grey[300];
  const color = theme?.palette.getContrastText(_backgroundColor);

  return (
    <CardActionArea
      className={`p-2 pr-3 pl-3 d-flex ai-center`}
      sx={{
        backgroundColor: _backgroundColor,
        borderRadius: 5,
        flex: 1,
        height: height ? height : 56,
        minWidth: minWidth ? minWidth : '100%',
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className={`d-flex ai-center`}
        style={{
          transition: 'color 0.2s ease-in-out',
          ...(isHover ? { color: theme?.palette.primary.main } : { color }),
        }}
      >
        {icon}
      </div>

      <Typography
        className={`ml-2`}
        variant="h6"
        style={{
          transition: 'all 0.2s ease-in-out',
          ...(isHover ? { color: theme?.palette.primary.main } : { color: color }),
        }}
      >
        {title}

        {subtitle && <Typography variant="body1">{subtitle}</Typography>}
      </Typography>
    </CardActionArea>
  );
};

export default CustomBoxAction;
