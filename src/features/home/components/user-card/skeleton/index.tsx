import styles from './styles.module.scss';

export const Skeleton = () => {
  return (
    <div className="relative h-[636px] drop-shadow">
      <div className="absolute z-[2] flex h-[636px] w-full flex-col justify-end bg-accent-10">
        <div className="h-[36px] bg-accent-9" />
      </div>
      <div className={`absolute z-[1] h-[636px] w-full scale-[1.005] ${styles.box}`} />
    </div>
  );
};
