import styles from './styles.module.scss'

export const Item = ({
  children,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={`
      relative flex h-[40px] min-w-[170px] items-center overflow-hidden pl-[8px] text-2 text-woodsmoke-50 
      active:bg-crimson-10 ${styles.item} ${className}`}
      {...props}
    >
      {children}

      <span
        className={`bg-crimson-9 transition-[width,height] duration-700 ease-in-out ${styles.aware}`}
      />
    </span>
  )
}
