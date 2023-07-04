import React from 'react';
import { Card, Review } from './Card';

type Props = {
  reviews: Review[];
};

export default class Cards extends React.PureComponent<Props> {
  render(): React.ReactNode {
    const { reviews } = this.props;
    return (
      <div className='cards'>
        {reviews.map((el: Review, i) => (
          <Card item={el} key={i} />
        ))}
      </div>
    );
  }
}
