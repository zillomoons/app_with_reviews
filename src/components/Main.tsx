import React from 'react';
import data from '../data/data.json';
import { Card, Review } from './Card';
import Pagination from './Pagination';

type lngProp = 'en' | 'ru';

type Props = {
  title: string;
  currentLang: string;
};

export class Main extends React.PureComponent<Props> {
  state = {
    reviews: Object.values(data[this.props.currentLang as lngProp]),
    currentPage: 1,
  };

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (this.props.currentLang !== prevProps.currentLang) {
      this.setState({
        reviews: Object.values(data[this.props.currentLang as lngProp]),
      });
    }
  }
  onPageChange(page: number) {
    this.setState({
      currentPage: page,
    });
  }
  render(): React.ReactNode {
    const { title } = this.props;
    const pageSize = 10;
    const firstPageIdx = (this.state.currentPage - 1) * pageSize;
    const lastPageIdx = firstPageIdx + pageSize;
    const reviews = this.state.reviews.slice(firstPageIdx, lastPageIdx);
    return (
      <main className='container'>
        <h1>{title}</h1>
        <div className='cards'>
          {reviews.map((el: Review, i) => (
            <Card item={el} key={i} />
          ))}
        </div>
        <Pagination
          currentPage={this.state.currentPage}
          total={this.state.reviews.length}
          pageSize={pageSize}
          onPageChange={this.onPageChange.bind(this)}
        />
      </main>
    );
  }
}
