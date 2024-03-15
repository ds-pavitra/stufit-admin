import React, { useState, useEffect } from 'react';
import { apiRequestAsync } from 'constants/defaultValues';
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from 'reactstrap';

const DataTablePagination = ({ apiUrl, onDataUpdate, paginationKey }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default items per page

  const fetchData = async () => {
    try {
      setIsLoaded(true);
      const response = await apiRequestAsync(
        'get',
        `${apiUrl}/${itemsPerPage}?page=${currentPage}`,
        null
      );
      onDataUpdate(
        response.data.data.map((x) => {
          return { ...x };
        })
      );
      setTotalPages(response.data.last_page);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (paginationKey === 'YES') {
      fetchData();
    } else {
      setIsLoaded(true);
      setTotalPages(1);
    }
  }, [currentPage, itemsPerPage, paginationKey]);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1); // Reset current page to 1 when items per page changes
  };

  return !isLoaded ? (
    <div className="loading" />
  ) : (
    <div className="d-flex align-items-center justify-content-between table_pagination">

      <div>Page {currentPage} of {totalPages}</div>

      {/* Pagination controls */}
      <Pagination>
        <PaginationItem disabled={currentPage === 1}>
          <PaginationLink previous onClick={goToPreviousPage} />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, index) => {
          if (
            index + 1 === currentPage ||
            index + 1 === currentPage - 1 ||
            index + 1 === currentPage + 1 ||
            index + 1 === totalPages ||
            index + 1 === 1 || // Always show the first page button
            index + 1 === totalPages // Always show the last page button
          ) {
            return (
              <PaginationItem key={index + 1} active={currentPage === index + 1}>
                <PaginationLink onClick={() => goToPage(index + 1)}>
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            );
          }
          return null;
        })}
        <PaginationItem disabled={currentPage === totalPages}>
          <PaginationLink next onClick={goToNextPage} />
        </PaginationItem>
      </Pagination>

      {/* Page count select dropdown */}
      <div>
        <UncontrolledDropdown>
          <DropdownToggle caret outline>
            {itemsPerPage}
          </DropdownToggle>
          <DropdownMenu>
            {[10, 15, 20, 30, 50].map((count) => (
              <DropdownItem key={count} onClick={() => handleItemsPerPageChange({ target: { value: count } })}>
                {count}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    </div>
  );
};

export default DataTablePagination;
