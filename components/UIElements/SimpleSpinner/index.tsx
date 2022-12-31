import styles from './index.module.scss';

const SimpleSpinner = () => {
  return (
    <div className={`${styles.spinner}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default SimpleSpinner;
