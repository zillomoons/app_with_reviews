import React from 'react';

type Props = {
  onPageChange: (page: number | string) => void;
  total: number;
  currentPage: number;
  pageSize: number;
};

type ItemProps = Omit<Props, 'total' | 'pageSize'> & {
  page: string | number;
  disabled?: boolean;
};

const range = (start: number, end: number) => {
  return [...Array(end - start).keys()].map((el) => el + start);
};

function getPagesCut({
  pagesCount,
  pagesCutCount,
  currentPage,
}: {
  pagesCount: number;
  pagesCutCount: number;
  currentPage: number;
}) {
  const ceiling = Math.ceil(pagesCutCount / 2);
  const floor = Math.floor(pagesCutCount / 2);
  if (pagesCount < pagesCutCount) {
    return { start: 1, end: pagesCount + 1 };
  } else if (currentPage >= 1 && currentPage <= ceiling) {
    return { start: 1, end: pagesCutCount + 1 };
  } else if (currentPage + floor >= pagesCount) {
    return { start: pagesCount - pagesCutCount + 1, end: pagesCount + 1 };
  } else {
    return { start: currentPage - ceiling + 1, end: currentPage + floor + 1 };
  }
}

const PaginationItem = ({
  page,
  currentPage,
  onPageChange,
  disabled = false,
}: ItemProps) => {
  const buttonClass = page === currentPage ? 'activeButton' : '';
  return (
    <button
      disabled={disabled}
      className={buttonClass}
      onClick={() => onPageChange(page)}
    >
      <span>{page}</span>
    </button>
  );
};

export default class Pagination extends React.Component<Props> {
  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (this.props.total !== prevProps.total) {
      this.props.onPageChange(1);
    }
  }
  render() {
    const { total, pageSize, currentPage, onPageChange } = this.props;
    const pagesCount = Math.ceil(total / pageSize);
    const pagesCut = getPagesCut({ pagesCount, pagesCutCount: 5, currentPage });
    const pages = range(pagesCut.start, pagesCut.end);

    return (
      <ul className='pagination'>
        <PaginationItem
          page='first'
          currentPage={currentPage}
          onPageChange={() => onPageChange(1)}
        />
        <PaginationItem
          page='prev'
          currentPage={currentPage}
          onPageChange={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {pages.map((page) => (
          <PaginationItem
            page={page}
            key={page}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        ))}
        <PaginationItem
          page='next'
          currentPage={currentPage}
          onPageChange={() => onPageChange(currentPage + 1)}
          disabled={currentPage === pagesCount}
        />
        <PaginationItem
          page='last'
          currentPage={currentPage}
          onPageChange={() => onPageChange(pagesCount)}
        />
      </ul>
    );
  }
}
