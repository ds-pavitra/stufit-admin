/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from 'reactstrap';

const DataTablePagination = ({
  page,
  pages,
  canPrevious,
  canNext,
  pageSizeOptions,
  showPageSizeOptions,
  showPageJump,
  defaultPageSize,
  onPageChange,
  onPageSizeChange,
}) => {
  const [pageState, setPageState] = useState(page);
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [showPrevNextPages, setShowPrevNextPages] = useState(true);

  useEffect(() => {
    setPageState(page);
  }, [page]);

  const getSafePage = (_page) => {
    let p = _page;
    if (Number.isNaN(_page)) {
      p = page;
    }
    return Math.min(Math.max(p, 0), pages - 1);
  };

  const changePageSize = (size) => {
    onPageSizeChange(size);
    setPageSize(size);
  };

  const changePage = (_page) => {
    const p = getSafePage(_page);

    if (p !== pageState) {
      setPageState(p);
      onPageChange(p);
      setShowPrevNextPages(true);
    }
  };

  const pageClick = (pageIndex) => {
    changePage(pageIndex);
  };

  const renderPages = () => {
    const totalPages = pages;
    const currentPage = pageState;

    if (!showPrevNextPages) {
      return null;
    }

    const pageButtons = [];
    const rangeStart = Math.max(currentPage - 1, 0);
    const rangeEnd = Math.min(currentPage + 2, totalPages);

    if (rangeStart > 0) {
      pageButtons.push(
        <PaginationItem key={0}>
          <PaginationLink onClick={() => pageClick(0)}>1</PaginationLink>
        </PaginationItem>
      );

      if (rangeStart > 1) {
        pageButtons.push(
          <PaginationItem key="ellipsis-start" disabled>
            <PaginationLink>...</PaginationLink>
          </PaginationItem>
        );
      }
    }

    for (let i = rangeStart; i < rangeEnd; i += 1) {
      const active = currentPage === i;
      pageButtons.push(
        <PaginationItem key={i} active={active}>
          <PaginationLink onClick={() => pageClick(i)}>{i + 1}</PaginationLink>
        </PaginationItem>
      );
    }

    if (rangeEnd < totalPages - 1) {
      pageButtons.push(
        <PaginationItem key="ellipsis-end" disabled>
          <PaginationLink>...</PaginationLink>
        </PaginationItem>
      );

      pageButtons.push(
        <PaginationItem key={totalPages - 1}>
          <PaginationLink onClick={() => pageClick(totalPages - 1)}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return pageButtons;
  };

  return (
    <>
      <div className="text-center">
        {showPageJump && (
          <div className="float-left pt-2">
            <span>Page </span>
            <UncontrolledDropdown className="d-inline-block">
              <DropdownToggle caret color="outline-primary" size="xs">
                {pageState + 1}
              </DropdownToggle>
              <DropdownMenu direction="left">
                {Array.from({ length: pages }, (_, i) => i).map((i) => (
                  <DropdownItem key={i} onClick={() => changePage(i)}>
                    {i + 1}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
            <span> of </span>
            {pages}
          </div>
        )}

        <Pagination
          className={`d-inline-block ${!showPrevNextPages ? 'hidden' : ''}`}
          size="sm"
          listClassName="justify-content-center"
          aria-label="Page navigation example"
        >
          <PaginationItem className={`${!canPrevious && 'disabled'}`}>
            <PaginationLink
              className="prev"
              onClick={() => {
                if (!canPrevious) return;
                changePage(page - 1);
              }}
              disabled={!canPrevious}
            >
              <i className="simple-icon-arrow-left" />
            </PaginationLink>
          </PaginationItem>

          {renderPages()}

          <PaginationItem className={`${!canNext && 'disabled'}`}>
            <PaginationLink
              className="next"
              onClick={() => {
                if (!canNext) return;
                changePage(page + 1);
                setShowPrevNextPages(true);
              }}
              disabled={!canNext}
            >
              <i className="simple-icon-arrow-right" />
            </PaginationLink>
          </PaginationItem>
        </Pagination>
        {showPageSizeOptions && (
          <div className="float-right pt-2">
            <span className="text-muted text-small mr-1">Items </span>
            <UncontrolledDropdown className="d-inline-block">
              <DropdownToggle caret color="outline-primary" size="xs">
                {pageSize}
              </DropdownToggle>
              <DropdownMenu right>
                {pageSizeOptions.map((size, index) => (
                  <DropdownItem key={index} onClick={() => changePageSize(size)}>
                    {size}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        )}
      </div>
    </>
  );
};

export default DataTablePagination;
