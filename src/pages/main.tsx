import {Cards} from '../components/cards/cards';
import {CardType} from '../types/card';

type MainProp = {
  cards: CardType[];
}

export function Main({cards}:MainProp) : JSX.Element {
  return (
    <>
      <h1>Ты сегодня покормил кота?</h1>
      <Cards cards={cards} />
    </>
  );
}
