import HourglassEmpty from '@mui/icons-material/HourglassEmpty';

import styles from './index.module.scss';

export interface IIconSpinnerProps {
  icon?: React.ReactNode;
}

const IconSpinner = ({ icon }: IIconSpinnerProps) => {
  return (
    <div className={`${styles.spinnerContainer}`}>
      <div className={`${styles.spinner}`}>
        <div></div>

        {icon ? icon : <HourglassEmpty />}
      </div>
    </div>
  );
};

export default IconSpinner;
