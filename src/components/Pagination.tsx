import React from 'react';

type Props = {
  onPageChange: (page: number) => void;
  total: number;
  currentPage: number;
  pageSize: number;
};

type ItemProps = Omit<Props, 'total' | 'pageSize'> & { page: number };

const range = (start: number, end: number) => {
  return [...Array(end - start).keys()].map((el) => el + start);
};

const PaginationItem = ({ page, currentPage, onPageChange }: ItemProps) => {
  const liClass = page === currentPage ? 'active' : '';
  return (
    <li className={liClass} onClick={() => onPageChange(page)}>
      <span>{page}</span>
    </li>
  );
};

export default class Pagination extends React.Component<Props> {
  render() {
    const { total, pageSize, currentPage, onPageChange } = this.props;
    const pagesCount = Math.ceil(total / pageSize);
    const pages = range(1, pagesCount);
    return (
      <ul className='pagination'>
        {pages.map((page) => (
          <PaginationItem
            page={page}
            key={page}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        ))}
      </ul>
    );
  }
}
