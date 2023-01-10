import { useTransition, a } from '@react-spring/web';
import { memo, useContext } from 'react';

import { IGridItem } from '../../../interfaces/objects/interface.grid-data';
import EscortType from '../../../types/type.escort';
import GoldCard from '../GoldCard';
import VipPremiumCard from '../VipPremiumCard';
import useGridCards from '../../../hooks/useGridCards';
import { AppContext } from '../../../pages/_app';

const VipPremiumCardMemo = memo(VipPremiumCard);
const GoldCardMemo = memo(GoldCard);

export interface IGridTransitionProps {
  items: readonly IGridItem[] | IGridItem[];
  transitionProps?: any;
  containerRef?: any;
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
  containerRef,
}: IGridTransitionProps) => {
  const animated = useTransition(items, transitionProps);
  const { device } = useContext(AppContext);
  const { cardsStatus } = useGridCards({
    containerRef,
    disable: device?.type !== 'mobile',
    gridItemsLength: items.length,
    querySelector: '.card-scope',
    treshold: 0.91,
  });

  return animated((style, item) => (
    <a.div id={`card-${item.id}`} className={`card-scope`} key={item.id} style={style}>
      {
        {
          VIP: <VipPremiumCardMemo data={item.data} isHightlighted={cardsStatus[item.id]} />,
          PREMIUM: <VipPremiumCardMemo data={item.data} isHightlighted={cardsStatus[item.id]} />,
          GOLD: <GoldCardMemo data={item.data} />,
        }[item.data.type as EscortType]
      }
    </a.div>
  ));
};

export default GridTransition;
