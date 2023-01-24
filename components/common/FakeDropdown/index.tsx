import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Typography from '@mui/material/Typography';

import styles from './index.module.scss';

export interface IFakeDropdownProps {
  label?: string;
  width?: number | string;
  height?: number | string;
  onClick?: () => void;
}

const FakeDropdown = ({ label, width, height, onClick }: IFakeDropdownProps) => {
  return (
    <div
      className={`d-flex jc-between ai-center pointer ${styles.fakeDropdown}`}
      onClick={onClick}
      style={{ width, height }}
    >
      <Typography color="white">{label}</Typography>

      <KeyboardArrowDown />
    </div>
  );
};

export default FakeDropdown;
