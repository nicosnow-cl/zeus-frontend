import styles from './styles.module.scss';

export interface IProps {
  children: React.ReactNode;
  href: string;
  icon?: React.ReactNode;
}

export const Item = ({ children, href, icon }: IProps) => {
  return (
    <button
      className={`flex items-center gap-x-3 text-2 overflow-hidden active:bg-crimson-9 ${styles.item}`}
      style={{ height: 40, minWidth: 170, position: 'relative' }}
    >
      {icon}
      {children}

      <span className={`bg-crimson-9 ${styles.aware}`} />
    </button>
  );
};
