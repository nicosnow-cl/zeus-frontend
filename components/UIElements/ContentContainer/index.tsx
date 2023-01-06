import useDevice from '../../../hooks/useDevice';

export interface IContentContainerProps {
  children: React.ReactNode | React.ReactNode[];
}

const ContentContainer = ({ children }: IContentContainerProps) => {
  const { device } = useDevice({});
  const paddingTop = device === 'mobile' ? '60px' : '100px';

  return (
    <div className={`wrapper pb-5`} style={{ margin: '0 auto', paddingTop }}>
      {children}
    </div>
  );
};

export default ContentContainer;
