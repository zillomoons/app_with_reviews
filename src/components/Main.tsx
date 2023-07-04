import React from 'react';
import data from '../data/data.json';
import Pagination from './Pagination';
import Cards from './Cards';

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
  onPageChange(page: number | string) {
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
        <Cards reviews={reviews} />
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
