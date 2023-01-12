import { memo } from 'react';
import { useTransition, a } from '@react-spring/web';

import { IGridItem } from '../../../interfaces/objects/interface.grid-data';
import EscortType from '../../../types/type.escort';
import GoldCard from '../GoldCard';
import useGridCards from '../../../hooks/useGridCards';
import VipPremiumCard from '../VipPremiumCard';

export interface IGridTransitionProps {
  autoHightlight?: boolean;
  containerRef?: any;
  items: readonly IGridItem[] | IGridItem[];
  transitionProps?: any;
}

const VipPremiumCardMemo = memo(VipPremiumCard);
const GoldCardMemo = memo(GoldCard);
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
  autoHightlight = false,
  containerRef,
  items,
  transitionProps = DEFAULT_TRANISITION_PROPS,
}: IGridTransitionProps) => {
  const animated = useTransition(items, transitionProps);
  const { cardsStatus } = useGridCards({
    containerRef,
    disable: !autoHightlight,
    gridItemsLength: items.length,
    querySelector: '.card-scope',
    treshold: 0.91,
  });

  console.count('GridTransition render');

  return animated((style, item) => (
    <a.div id={`card-${item.id}`} className={`card-scope`} key={item.id} style={style}>
      {
        {
          VIP: (
            <VipPremiumCardMemo
              data={item.data}
              isHightlighted={autoHightlight ? cardsStatus[item.id] : undefined}
            />
          ),
          PREMIUM: (
            <VipPremiumCardMemo
              data={item.data}
              isHightlighted={autoHightlight ? cardsStatus[item.id] : undefined}
            />
          ),
          GOLD: <GoldCardMemo data={item.data} />,
        }[item.data.type as EscortType]
      }
    </a.div>
  ));
};

export default GridTransition;
