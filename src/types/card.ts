export type CardType = {
  id: number;
  title: string;
  taste: string;
  mouseCount?: number;
  info: string;
  portion: number;
  mass: string;
  client?: string;
  active: boolean;
  linkActive: string;
  sadTitle: string;
  sadLink: string;
}

export const cards: CardType[] = [
  {
    id: 1,
    title: 'Сказочное заморское яство',
    taste: 'с фуа-гра',
    mass: '0,5',
    portion: 10,
    info: ' мышь в подарок',
    active: true,
    linkActive: 'Печень утки разварная с артишоками.',
    sadTitle: 'Котэ не одобряет?',
    sadLink: 'Печалька, с фуа-гра закончился.'
  },
  {
    id: 2,
    title: 'Сказочное заморское яство',
    taste: 'с рыбой',
    mass: '2',
    portion: 40,
    mouseCount: 2,
    info: ' мыши в подарок',
    active: false,
    linkActive: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    sadTitle: 'Котэ не одобряет?',
    sadLink: 'Печалька, с рыбой закончился.'

  },
  {
    id: 3,
    title: 'Сказочное заморское яство',
    taste: 'с курой',
    mass: '5',
    portion: 100,
    mouseCount: 5,
    info: ' мышей в подарок',
    client: 'заказчик доволен',
    active: true,
    linkActive: 'Филе из цыплят с трюфелями в бульоне.',
    sadTitle: 'Котэ не одобряет?',
    sadLink: 'Печалька, с курой закончился.'

  }
];
