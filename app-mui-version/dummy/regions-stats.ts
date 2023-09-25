import random from 'lodash/random';

const regionsStats = [
  {
    id: 1,
    name: 'Tarapacá',
    number: 'I',
    scorts: {
      male: random(0, 10),
      female: random(5, 20),
      trans: random(0, 5),
    },
  },
  {
    id: 2,
    name: 'Antofagasta',
    number: 'II',
    scorts: {
      male: random(0, 10),
      female: random(5, 20),
      trans: random(0, 5),
    },
  },
  {
    id: 3,
    name: 'Atacama',
    number: 'III',
    scorts: {
      male: random(0, 10),
      female: random(5, 20),
      trans: random(0, 5),
    },
  },
  {
    id: 4,
    name: 'Coquimbo',
    number: 'IV',
    scorts: {
      male: random(0, 10),
      female: random(5, 20),
      trans: random(0, 5),
    },
  },
  {
    id: 5,
    name: 'Valparaíso',
    number: 'V',
    scorts: {
      male: random(0, 10),
      female: random(5, 20),
      trans: random(0, 5),
    },
  },
  {
    id: 6,
    name: 'O’Higgins',
    number: 'VI',
    scorts: {
      male: random(0, 10),
      female: random(5, 20),
      trans: random(0, 5),
    },
  },
  {
    id: 7,
    name: 'Maule',
    number: 'VII',
    scorts: {
      male: random(0, 10),
      female: random(5, 20),
      trans: random(0, 5),
    },
  },
  {
    id: 8,
    name: 'Biobío',
    number: 'VIII',
    scorts: {
      male: random(0, 10),
      female: random(5, 20),
      trans: random(0, 5),
    },
  },
  {
    id: 9,
    name: 'La Araucanía',
    number: 'IX',
    scorts: {
      male: random(0, 10),
      female: random(5, 20),
      trans: random(0, 5),
    },
  },
  {
    id: 10,
    name: 'Los Lagos',
    number: 'X',
    scorts: {
      male: random(0, 10),
      female: random(5, 20),
      trans: random(0, 5),
    },
  },
  {
    id: 11,
    name: 'Aysén',
    number: 'XI',
    scorts: {
      male: random(0, 10),
      female: random(5, 20),
      trans: random(0, 5),
    },
  },
  {
    id: 12,
    name: 'Magallanes',
    number: 'XII',
    scorts: {
      male: random(0, 10),
      female: random(5, 20),
      trans: random(0, 5),
    },
  },
  {
    id: 13,
    name: 'Santiago',
    number: 'RM',
    scorts: {
      male: random(0, 10),
      female: random(5, 20),
      trans: random(0, 5),
    },
  },
  {
    id: 14,
    name: 'Los Ríos',
    number: 'XIV',
    scorts: {
      male: random(0, 10),
      female: random(5, 20),
      trans: random(0, 5),
    },
  },
  {
    id: 15,
    name: 'Arica',
    number: 'XV',
    scorts: {
      male: random(0, 10),
      female: random(5, 20),
      trans: random(0, 5),
    },
  },
  {
    id: 16,
    name: 'Ñuble',
    number: 'XVI',
    scorts: {
      male: random(0, 10),
      female: random(5, 20),
      trans: random(0, 5),
    },
  },
];

export default regionsStats;
