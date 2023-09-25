import Button from '@mui/material/Button';

export interface ICustomButtonProps {
  customClasses?: string;
  borderRadius?: string | number;
  color?:
    | 'primary'
    | 'secondary'
    | 'inherit'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | undefined;
  icon?: React.ReactNode;
  label?: string;
  size?: 'small' | 'medium';
  variant?: 'text' | 'outlined' | 'contained';
}

const CustomButton = ({
  customClasses = '',
  color,
  label,
  size,
  variant = 'contained',
  borderRadius = 0,
  icon,
}: ICustomButtonProps) => {
  const sx = {
    borderRadius,
    boxShadow: 0,
  };

  return (
    <Button
      className={`${customClasses}`}
      color={color}
      size={size}
      variant={variant}
      sx={{ ...sx }}
      endIcon={icon}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
