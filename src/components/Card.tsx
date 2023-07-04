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
    const { item } = this.props;
    const { name, review, date } = item;
    const [secondName, firstName] = name.split(' ');
    const editedName = secondName + (firstName ? ` ${firstName[0]}.` : '');
    return (
      <div className='card'>
        <figcaption>
          <h4>{editedName}</h4>
        </figcaption>
        <blockquote>
          <p>"{review}"</p>
        </blockquote>
        <p className='date'>{date} </p>
      </div>
    );
  }
}
