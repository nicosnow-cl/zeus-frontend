import random from 'lodash/random';

const regionsStats = [
  {
    id: 1,
    name: 'Tarapacá',
    scorts: {
      male: random(0, 10),
      female: random(5, 20),
      trans: random(0, 5),
    },
  },
  {
    id: 2,
    name: 'Antofagasta',
    scorts: {
      male: random(0, 10),
      female: random(5, 20),
      trans: random(0, 5),
    },
  },
  {
    id: 3,
    name: 'Atacama',
    scorts: {
      male: random(0, 10),
      female: random(5, 20),
      trans: random(0, 5),
    },
  },
  {
    id: 4,
    name: 'Coquimbo',
    scorts: {
      male: random(0, 10),
      female: random(5, 20),
      trans: random(0, 5),
    },
  },
  {
    id: 5,
    name: 'Valparaíso',
    scorts: {
      male: random(0, 10),
      female: random(5, 20),
      trans: random(0, 5),
    },
  },
  {
    id: 6,
    name: 'O’Higgins',
    scorts: {
      male: random(0, 10),
      female: random(5, 20),
      trans: random(0, 5),
    },
  },
  {
    id: 7,
    name: 'Maule',
    scorts: {
      male: random(0, 10),
      female: random(5, 20),
      trans: random(0, 5),
    },
  },
  {
    id: 8,
    name: 'Biobío',
    scorts: {
      male: random(0, 10),
      female: random(5, 20),
      trans: random(0, 5),
    },
  },
  {
    id: 9,
    name: 'La Araucanía',
    scorts: {
      male: random(0, 10),
      female: random(5, 20),
      trans: random(0, 5),
    },
  },
  {
    id: 10,
    name: 'Los Lagos',
    scorts: {
      male: random(0, 10),
      female: random(5, 20),
      trans: random(0, 5),
    },
  },
  {
    id: 11,
    name: 'Aysén',
    scorts: {
      male: random(0, 10),
      female: random(5, 20),
      trans: random(0, 5),
    },
  },
  {
    id: 12,
    name: 'Magallanes',
    scorts: {
      male: random(0, 10),
      female: random(5, 20),
      trans: random(0, 5),
    },
  },
  {
    id: 13,
    name: 'Santiago',
    scorts: {
      male: random(0, 10),
      female: random(5, 20),
      trans: random(0, 5),
    },
  },
  {
    id: 14,
    name: 'Los Ríos',
    scorts: {
      male: random(0, 10),
      female: random(5, 20),
      trans: random(0, 5),
    },
  },
  {
    id: 15,
    name: 'Arica',
    scorts: {
      male: random(0, 10),
      female: random(5, 20),
      trans: random(0, 5),
    },
  },
  {
    id: 16,
    name: 'Ñuble',
    scorts: {
      male: random(0, 10),
      female: random(5, 20),
      trans: random(0, 5),
    },
  },
];

export default regionsStats;
