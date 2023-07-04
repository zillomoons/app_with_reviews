import React from 'react';

export type Review = {
  name: string;
  review: string;
  date: string;
};

type Props = {
  item: Review;
};

export class Card extends React.Component<Props> {
  render(): React.ReactNode {
    const { name, review, date } = this.props.item;
    const [secondName, firstName] = name.split(' ');
    const editedName = secondName + (firstName ? ` ${firstName[0]}.` : '');
    return (
      <div className='card'>
        <figcaption>
          <h4>{editedName}</h4>
        </figcaption>
        <blockquote>"{review}"</blockquote>
        <small className='date'>{date}</small>
      </div>
    );
  }
}
