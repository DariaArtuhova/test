import {CardType} from '../../types/card';
import {useState} from 'react';

type CardProp = {
  card: CardType;
}

export function Card({card}: CardProp): JSX.Element {
  const {id, title, taste, info, portion, mass, mouseCount, client, linkActive, sadTitle, active, sadLink} = card;

  const [isActive, isDisabled] = useState(false);
  const [isMouseOver, isMouseLeave] = useState(true);
  const getFooterText = () => {
   if (active) {
      return (
        <p className="sad-link"> {sadLink}</p>
      )
    } else if (isActive) {
      return (
        <p className="link">{linkActive}</p>
    )
    } else if(!isActive) {
      return (
        <p className="link">Чего сидишь? Порадуй котэ, <span><a href="#">купи</a>.</span></p>
      )
    }
  }

  return (
    <div id={
      isActive ?
        'selected' :
        ''
    }
    className={
      active ?
        'product-card disabled' :
        'product-card'
    }
    onClick={() => {
      isActive ? isDisabled(false) : isDisabled(true);
    }}

    onMouseLeave={() => {
      isMouseOver ? isMouseLeave(false) : isMouseLeave(true);
    }}
    onMouseOver={() => {
      isMouseOver ? isMouseLeave(false) : isMouseLeave(false);
    }}
    key={id}
         aria-disabled={active}
    >
      <header className="card-header">
        <div className="card-corner"></div>
        <div className='card-rectangle'>
          {
            isMouseOver && isActive ?
              <span className="card-desc sad" data-replace="cardDesc">{sadTitle}</span>
              :
              <span className="card-desc" data-replace="cardDesc">{title}</span>
          }
        </div>
      </header>
      <div className="product-info">
        <h2>Нямушка<span className="taste">{taste}</span></h2>
        <p>
          <p><span>{portion}</span> порций<br/>
            <span>{mouseCount}</span>
            {info}<br/>
            {client}
          </p>
        </p>
        <img src="img/Photo.png" alt=""/>
        <div className={
          isMouseOver && !isActive?
            'card-circle'
:
            'card-circle-hover'
        }>
          <div className="product-weight">
            <span className="product-weight number">{mass}</span>
            <span className="product-weight mass">кг</span>
          </div>
        </div>
      </div>
      {getFooterText()}
    </div>
  );
}
