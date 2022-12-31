import { KeyboardArrowDown } from '@mui/icons-material';
import { Select, MenuItem } from '@mui/material';

interface ICustomDropdownProps {
  customClasses?: string;
  fullwidth?: boolean;
  height?: number | string;
  iconAndTextColor?: string;
  items?: Array<{ value: string | number; label: string }>;
  selectColor?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  size?: 'small' | 'medium';
  variant?: 'standard' | 'outlined' | 'filled';
  width?: number | string;
  onClick?: () => void;
}

const CustomDropdown = ({
  customClasses,
  fullwidth,
  height,
  iconAndTextColor,
  items = [],
  selectColor,
  size = 'small',
  variant = 'standard',
  width,
  onClick,
}: ICustomDropdownProps) => {
  const sx = {
    width,
    height,
    '.MuiSelect-icon': {
      color: iconAndTextColor,
    },
    '.MuiSelect-select': {
      color: iconAndTextColor,
    },
  };

  const handleOnClick = (evt: any) => {
    evt.preventDefault();
    onClick && onClick();
  };

  return (
    <Select
      className={`${customClasses}`}
      fullWidth={fullwidth}
      size={size}
      sx={{ ...sx }}
      variant={variant}
      color={selectColor}
      IconComponent={KeyboardArrowDown}
      value={items[0].value}
      onClick={handleOnClick}
    >
      {items &&
        items.map((item, idx) => (
          <MenuItem key={idx} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
    </Select>
  );
};

export default CustomDropdown;
