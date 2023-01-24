import { useContext } from 'react';

import { AppContext } from '../../../pages/_app';

export interface IContentContainerProps {
  children: React.ReactNode | React.ReactNode[];
}

const ContentContainer = ({ children }: IContentContainerProps) => {
  const { device } = useContext(AppContext);
  const paddingTop = device?.type === 'mobile' ? '60px' : '100px';

  return (
    <div className={`wrapper pb-5`} style={{ margin: '0 auto', paddingTop }}>
      {children}
    </div>
  );
};

export default ContentContainer;
