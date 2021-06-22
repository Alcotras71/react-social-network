import React, { useState } from 'react';
import style from './Paginator.module.css';

type PropsType = {
  totalItemsCount: number;
  pageSize: number;
  onPageChanged: (pageNumber: number) => void;
  currentPage: number;
  portionSize?: number;
};

const Paginator: React.FC<PropsType> = ({
  totalItemsCount,
  pageSize,
  onPageChanged,
  currentPage,
  portionSize = 10,
}) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  const pages: Array<number> = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);

  const [portionNumber, setPortionNumber] = useState(1);

  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div className={style.pagination__buttonWrapper}>
        {portionNumber >= 10 && (
          <button
            className={style.pagination__button}
            onClick={() => {
              setPortionNumber(1);
            }}
          >
            FIRST
          </button>
        )}
        {portionNumber > 1 && (
          <button
            className={style.pagination__button}
            onClick={() => {
              setPortionNumber(portionNumber - 1);
            }}
          >
            PREV
          </button>
        )}
      </div>

      <div className={style.pagination}>
        {pages
          .filter(
            (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
          )
          .map((p) => {
            return (
              <span
                onClick={() => {
                  onPageChanged(p);
                }}
                className={currentPage === p ? style.selectedPage : undefined}
                key={p}
              >
                {p}
              </span>
            );
          })}
      </div>

      <div className={style.pagination__buttonWrapper}>
        {portionCount > portionNumber && (
          <button
            className={style.pagination__button}
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
          >
            NEXT
          </button>
        )}

        {portionCount > portionNumber && (
          <button
            className={style.pagination__button}
            onClick={() => {
              setPortionNumber(portionCount);
            }}
          >
            LAST
          </button>
        )}
      </div>
    </div>
  );
};

export default Paginator;
