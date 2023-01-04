import { useTransition, a } from '@react-spring/web';

import GoldCard from '../../../UIElements/GoldCard';
import IEscort from '../../../../interfaces/states/interface.escort';
import PremiumCard from '../../../UIElements/PremiumCard';
import VipCard from '../../../UIElements/VipCard';
import EscortType from '../../../../types/type.escort';

export interface IGridTransitionProps {
  items: any[];
}

const GridTransition = ({ items }: IGridTransitionProps) => {
  const transitions = useTransition(items, {
    key: (item: IEscort) => item,
    from: ({ prevX, prevY, width, height }) => ({ x: prevX, y: prevY, width, height }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 1, tension: 500, friction: 100 },
    trail: 5,
  });

  return (
    <>
      {transitions((style, item) => (
        <a.div style={style}>
          {
            {
              VIP: <VipCard data={item.data} />,
              PREMIUM: <PremiumCard data={item.data} />,
              GOLD: <GoldCard data={item.data} />,
            }[item.data.type as EscortType]
          }
        </a.div>
      ))}
    </>
  );
};

export default GridTransition;
