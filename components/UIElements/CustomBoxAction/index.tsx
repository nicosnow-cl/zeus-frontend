import { Box } from '@mui/system';
import { CardActionArea, Typography, useTheme } from '@mui/material';
import { Check } from '@mui/icons-material';
import { useState } from 'react';

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
  const theme = useTheme();

  return (
    <CardActionArea
      className={`p-2 pr-3 pl-3 d-flex ai-center`}
      sx={{
        backgroundColor: backgroundColor ? backgroundColor : theme.palette.grey[300],
        borderRadius: 5,
        flex: 1,
        height: height ? height : 56,
        minWidth: minWidth ? minWidth : '100%',
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Box
        className={`d-flex ai-center`}
        sx={{
          transition: 'all 0.2s ease-in-out',
          ...(isHover
            ? {
                color: theme.palette.primary.main,
              }
            : {
                color: theme.palette.grey[700],
              }),
        }}
      >
        {icon ? icon : <Check />}
      </Box>

      <Box>
        <Typography
          className={`ml-2`}
          variant="h3"
          fontSize={20}
          sx={{
            transition: 'all 0.2s ease-in-out',
            ...(isHover
              ? {
                  color: theme.palette.primary.main,
                }
              : {
                  color: theme.palette.grey[700],
                }),
          }}
        >
          {title && title}
        </Typography>

        <Typography className={`ml-2`} variant="h2" fontSize={16}>
          {subtitle && subtitle}
        </Typography>
      </Box>
    </CardActionArea>
  );
};

export default CustomBoxAction;
