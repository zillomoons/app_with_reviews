import { i18n } from 'i18next';
import React from 'react';
import data from '../data/data.json';

type lngProp = 'en' | 'ru';

type Props = {
  title: string;
  i18n: i18n;
};

type Review = {
  name: string;
  review: string;
  date: string;
};

export class Main extends React.Component<Props> {
  state = { reviews: [] };

  componentDidMount(): void {
    const { language: lang } = this.props.i18n;
    this.setState({
      reviews: Object.values(data[lang as lngProp]),
    });
  }
  render(): React.ReactNode {
    const { title } = this.props;
    return (
      <main className='container'>
        <h1>{title}</h1>
        <div>
          {this.state.reviews.map((el: Review) => (
            <div key={el.review}>
              <h3>{el.name}</h3>
              <p>{el.review}</p>
              <p> {el.date} </p>
            </div>
          ))}
        </div>
      </main>
    );
  }
}
