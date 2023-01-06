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
  title?: string;
}

const CustomBoxAction = ({
  backgroundColor,
  height,
  icon,
  minWidth,
  onClick,
  subtitle,
  title,
}: ICustomBoxActionProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const { theme } = useContext(AppContext);

  return (
    <CardActionArea
      className={`p-2 pr-3 pl-3 d-flex ai-center`}
      sx={{
        backgroundColor: backgroundColor ? backgroundColor : theme?.palette.grey[300],
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
          transition: 'all 0.2s ease-in-out',
          ...(isHover
            ? {
                color: theme?.palette.primary.main,
              }
            : {
                color: theme?.palette.grey[700],
              }),
        }}
      >
        {icon ? icon : <Check />}
      </div>

      <div>
        <Typography
          className={`ml-2`}
          variant="h3"
          fontSize={20}
          style={{
            transition: 'all 0.2s ease-in-out',
            ...(isHover
              ? {
                  color: theme?.palette.primary.main,
                }
              : {
                  color: theme?.palette.grey[700],
                }),
          }}
        >
          {title && title}
        </Typography>

        <Typography className={`ml-2`} variant="h2" fontSize={16}>
          {subtitle && subtitle}
        </Typography>
      </div>
    </CardActionArea>
  );
};

export default CustomBoxAction;
