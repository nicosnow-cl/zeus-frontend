import { KeyboardArrowDown } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

import styles from './index.module.scss';

export interface IFakeDropdownProps {
  label?: string;
  width?: number | string;
  height?: number | string;
  onClick?: () => void;
}

const FakeDropdown = ({ label, width, height, onClick }: IFakeDropdownProps) => {
  return (
    <Box
      className={`d-flex jc-between ai-center pointer ${styles.fakeDropdown}`}
      sx={{ width, height }}
      onClick={onClick}
    >
      <Typography color="white">{label}</Typography>

      <KeyboardArrowDown />
    </Box>
  );
};

export default FakeDropdown;
