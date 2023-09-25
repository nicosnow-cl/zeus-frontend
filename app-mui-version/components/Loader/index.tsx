import styles from './index.module.scss';

const Loader = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`spinner`}>
        {[...Array(100)].map((_, idx) => (
          <i key={idx}>
            <b></b>
          </i>
        ))}
      </div>
    </div>
  );
};

export default Loader;
