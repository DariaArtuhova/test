import {CardType} from '../../types/card';
import { Card } from '../card/card';

type CardsProp = {
  cards: CardType[];
}

export function Cards({cards}: CardsProp): JSX.Element {

  return (
    <div className="product-cards">
      {cards.map((card) => <Card card={card} key={card.id}/>)}
    </div>
  );
}
