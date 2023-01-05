import { useTransition, a } from '@react-spring/web';

import { IGridItem } from '../../../interfaces/objects/interface.grid-data';
import EscortType from '../../../types/type.escort';
import GoldCard from '../GoldCard';
import PremiumCard from '../PremiumCard';
import VipCard from '../VipCard';

export interface IGridTransitionProps {
  items: readonly IGridItem[] | IGridItem[];
  transitionProps?: any;
}

const DEFAULT_TRANISITION_PROPS = {
  keys: (item: any) => item.id,
  from: ({ initialX, initialY, width, height, zIndex }: any) => ({
    x: initialX,
    y: initialY,
    width,
    height,
    zIndex,
  }),
  enter: ({ endingX, endingY, width, height, zIndex }: any) => ({
    x: endingX,
    y: endingY,
    width,
    height,
    zIndex,
  }),
  update: ({ endingX, endingY, width, height, zIndex }: any) => ({
    x: endingX,
    y: endingY,
    width,
    height,
    zIndex,
  }),
  leave: { height: 0, opacity: 0 },
  config: { mass: 5, tension: 350, friction: 110 },
  trail: 5,
};

const GridTransition = ({
  items,
  transitionProps = DEFAULT_TRANISITION_PROPS,
}: IGridTransitionProps) => {
  const animated = useTransition(items, transitionProps);

  return animated((style, item) => (
    <a.div key={item.id} style={style}>
      {
        {
          VIP: <VipCard data={item.data} />,
          PREMIUM: <PremiumCard data={item.data} />,
          GOLD: <GoldCard data={item.data} />,
        }[item.data.type as EscortType]
      }
    </a.div>
  ));
};

export default GridTransition;
