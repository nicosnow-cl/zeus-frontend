export interface IContentContainerProps {
  children: React.ReactNode | React.ReactNode[];
}

const ContentContainer = ({ children }: IContentContainerProps) => {
  return (
    <div className={`wrapper pb-5`} style={{ margin: '0 auto', paddingTop: '100px' }}>
      {children}
    </div>
  );
};

export default ContentContainer;
