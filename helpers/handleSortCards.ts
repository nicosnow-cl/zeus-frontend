import orderBy from 'lodash/orderBy';

import ICard from '../interfaces/states/interface.card';
import ISort from '../interfaces/states/interface.sort';

const handleSortCards = (cards: ICard[], sort: ISort) => {
  const { field, order } = sort;

  if (field === 'date' && order === 'desc') return cards;

  const vip = cards.filter((card) => card.type === 'VIP');
  const premium = cards.filter((card) => card.type === 'PREMIUM');
  const gold = cards.filter((card) => card.type === 'GOLD');

  switch (field) {
    case 'date':
      const vipDate = orderBy(vip, ['returnAt'], [order]);
      const premiumDate = orderBy(premium, ['returnAt'], [order]);
      const goldDate = orderBy(gold, ['returnAt'], [order]);

      return [...vipDate, ...premiumDate, ...goldDate];
    case 'age':
      const vipAge = orderBy(vip, ['age'], [order]);
      const premiumAge = orderBy(premium, ['age'], [order]);
      const goldAge = orderBy(gold, ['age'], [order]);

      return [...vipAge, ...premiumAge, ...goldAge];
    case 'price':
      const vipPrice = orderBy(vip, ['price.promo', 'price.price'], [order]);
      const premiumPrice = orderBy(premium, ['price.promo', 'price.price'], [order]);
      const goldPrice = orderBy(gold, ['price.promo', 'price.price'], [order]);

      return [...vipPrice, ...premiumPrice, ...goldPrice];

    case 'likes':
      const vipLikes = orderBy(vip, ['likes'], [order]);
      const premiumLikes = orderBy(premium, ['likes'], [order]);
      const goldLikes = orderBy(gold, ['likes'], [order]);

      return [...vipLikes, ...premiumLikes, ...goldLikes];
    case 'name':
      const vipName = orderBy(vip, ['name'], [order]);
      const premiumName = orderBy(premium, ['name'], [order]);
      const goldName = orderBy(gold, ['name'], [order]);

      return [...vipName, ...premiumName, ...goldName];
    default:
      return cards;
  }
};

export default handleSortCards;
