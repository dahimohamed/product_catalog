import React, { useEffect, useState } from 'react';
import { PageTopActions } from '../../components/PageTopActions';
import dataFromServer from '../../api/phones.json';
import classNames from 'classnames';
import './PhonesPage.scss';
import { Phone } from '../../types/phones';
import { PerPage } from '../../types/perPage';
import { FilterBy } from '../../types/filterBy';
import { ProductCardList } from '../../components/ProductCardList';
import { filterProducts } from '../../utils/filterBy';

export const PhonesPage = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [visiblePhones, setViziblePhones] = useState<Phone[]>([]);
  const [phonesForCurrentPage, setPhonesForCurrentPage] = useState<Phone[]>([]);
  const [filterBy, setFilterBy] = useState<FilterBy | string>(FilterBy.Newest);
  const [perPage, setPerPage] = useState<PerPage>(PerPage.Sixteen);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    // fetch('../../api/phones.json')
    //   .then((resp) => resp.json())
    //   .then((data) => setPhones(data));
    setPhones(dataFromServer);
  }, []);

  useEffect(() => {
    setTotalPages(Math.ceil(phones.length / perPage));
    setCurrentPage(1);
  }, [phones, perPage]);

  useEffect(() => {
    const index = perPage * (currentPage - 1);
    const startingFromCurrentPage = visiblePhones.slice(index);

    setPhonesForCurrentPage(startingFromCurrentPage.slice(0, perPage));
  }, [currentPage, perPage, visiblePhones]);

  useEffect(() => {
    const sortedPhones = filterProducts(phones, filterBy);
    setViziblePhones(sortedPhones);
    setCurrentPage(1);
  }, [phones, filterBy]);

  return (
    <div className="phones">
      <PageTopActions title="Mobile phones" products={dataFromServer} />

      <div className="phones__filters">
        <div className="phones__filter phones__filter--sortby">
          <div className="phones__filter--text">Sort by</div>

          <select
            className="phones__filter--select"
            value={filterBy}
            onChange={(event) => {
              setFilterBy(event.target.value);
            }}
          >
            <option value={FilterBy.All}>All</option>

            <option value={FilterBy.Cheapest}>Price</option>

            <option value={FilterBy.Alph}>Name</option>

            <option value={FilterBy.Newest}>Newest</option>
          </select>
        </div>

        <div className="phones__filter phones__filter--perpage">
          <div className="phones__filter--text">Per page</div>

          <select
            className="phones__filter--select"
            value={perPage}
            onChange={(event) => {
              setPerPage(+event.target.value);
            }}
          >
            <option value={PerPage.All}>All</option>

            <option value={PerPage.Four}>4</option>

            <option value={PerPage.Eight}>8</option>

            <option value={PerPage.Sixteen}>16</option>
          </select>
        </div>
      </div>

      <div className="phones__list">
        <ProductCardList products={phonesForCurrentPage} title="no slider" />
      </div>

      <div className="phones__pagination">
        <div className="phones__pagination-icons">
          <div
            className={classNames('phones__pagination-icon-container', {
              'phones__pagination-icon-container--disabled': currentPage === 1,
            })}
            onClick={() => {
              if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
              }
            }}
          >
            <div
              className={classNames(
                'phones__pagination-icon',
                'phones__pagination-icon--left',
                {
                  'phones__pagination-icon--left--disabled': currentPage === 1,
                }
              )}
            ></div>
          </div>

          <div
            className="phones__pagination-icons
              phones__pagination-icons--middle"
          >
            {Array.from(Array(totalPages).keys()).map((index) => {
              const pageNumber = index + 1;

              return (
                <div
                  key={index}
                  className={classNames('phones__pagination-page-icon', {
                    'phones__pagination-page-icon--selected':
                      currentPage === pageNumber,
                  })}
                  onClick={() => setCurrentPage(pageNumber)}
                >
                  {pageNumber}
                </div>
              );
            })}
          </div>

          <div
            className={classNames('phones__pagination-icon-container', {
              'phones__pagination-icon-container--disabled':
                currentPage === totalPages,
            })}
            onClick={() => {
              if (currentPage < totalPages) {
                setCurrentPage(currentPage + 1);
              }
            }}
          >
            <div
              className={classNames(
                'phones__pagination-icon',
                'phones__pagination-icon--right',
                {
                  'phones__pagination-icon--right--disabled':
                    currentPage === totalPages,
                }
              )}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
