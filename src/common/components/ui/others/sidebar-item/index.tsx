import styles from './styles.module.scss';

export const Item = ({
  children,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={`
      relative h-[40px] min-w-[170px] pl-[8px] overflow-hidden flex items-center text-2 text-woodsmoke-50 
      active:bg-crimson-10 ${styles.item} ${className}`}
      {...props}
    >
      {children}

      <span
        className={`bg-crimson-9 transition-[width,height] duration-700 ease-in-out ${styles.aware}`}
      />
    </span>
  );
};
