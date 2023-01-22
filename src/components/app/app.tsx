import {Main} from '../../pages/main';
import {cards} from '../../types/card';

export function App(): JSX.Element {
  return (
    <Main cards={cards}/>
  );
}
