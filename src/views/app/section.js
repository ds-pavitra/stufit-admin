import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
// import { Row, Button, FormGroup, Form, Input, Label, } from 'reactstrap';
// import { Colxx } from 'components/common/CustomBootstrap';
import { servicePath } from 'constants/defaultValues';
import ListPageNew from 'containers/pages/ListPageNew';
import AddNewSectionModal from 'containers/pages/AddNewSectionModal';
import ListPageListing from 'containers/pages/ListPageListing';
import useMousetrap from 'hooks/use-mousetrap';

const apiUrl = `${servicePath}/cakes/paging`;

const pageSizes = [4, 8, 12, 20];

const categories = [
  { label: 'Cakes', value: 'Cakes', key: 0 },
  { label: 'Cupcakes', value: 'Cupcakes', key: 1 },
  { label: 'Desserts', value: 'Desserts', key: 2 },
];

const SectionList = ({ match }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPageSize, setSelectedPageSize] = useState(8);
  const [selectedOrderOption] = useState({
    column: 'title',
    label: 'Product Name',
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [totalItemCount, setTotalItemCount] = useState(0);
  const [search, setSearch] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [items, setItems] = useState([]);

  // const [section, setSection] = useState('');

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedPageSize, selectedOrderOption]);

  useEffect(() => {
    async function fetchData() {
      axios
        .get(
          `${apiUrl}?pageSize=${selectedPageSize}&currentPage=${currentPage}&orderBy=${selectedOrderOption.column}&search=${search}`
        )
        .then((res) => {
          return res.data;
        })
        .then((data) => {
          setItems(
            data.data.map((x) => {
              return { ...x, img: x.img.replace('img/', 'img/products/') };
            })
          );
          setSelectedItems([]);
          setTotalItemCount(data.totalItem);
          setIsLoaded(true);
        });
    }
    fetchData();
  }, [selectedPageSize, currentPage, selectedOrderOption, search]);

  const handleChangeSelectAll = (isToggle) => {
    if (selectedItems.length >= items.length) {
      if (isToggle) {
        setSelectedItems([]);
      }
    } else {
      setSelectedItems(items.map((x) => x.id));
    }
    document.activeElement.blur();
    return false;
  };

  const onContextMenuClick = (e, data) => {
    console.log('onContextMenuClick - selected items', selectedItems);
    console.log('onContextMenuClick - action : ', data.action);
  };

  const onContextMenu = (e, data) => {
    const clickedProductId = data.data;
    if (!selectedItems.includes(clickedProductId)) {
      setSelectedItems([clickedProductId]);
    }

    return true;
  };

  useMousetrap(['ctrl+a', 'command+a'], () => {
    handleChangeSelectAll(false);
  });

  useMousetrap(['ctrl+d', 'command+d'], () => {
    setSelectedItems([]);
    return false;
  });

  const handleEdit = (id) => {
    // Implement the edit functionality here
    console.log(`Edit button clicked for id: ${id}`);
    setModalOpen(!modalOpen);
  };

  const handleDelete = (id) => {
    // Implement the delete functionality here
    console.log(`Delete button clicked for id: ${id}`);
  };

  const startIndex = (currentPage - 1) * selectedPageSize;
  const endIndex = currentPage * selectedPageSize;

  const cols = React.useMemo(
    () => [
      {
        Header: 'Section',
        accessor: 'title',
        cellClass: 'text-muted w-50',
        Cell: ({ value }) => <>{value}</>,
      },
      {
        Header: 'Created',
        accessor: 'date',
        cellClass: 'text-muted w-30',
        Cell: ({ value }) => <>{value}</>,
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        cellClass: 'text-muted w-10',
        Cell: ({ row }) => (
          <>
            <div className="d-flex">
              <Button
                size="xs"
                color="primary"
                className="mr-2"
                onClick={() => handleEdit(row.original.id)}
              >
                <i className="simple-icon-pencil" />
              </Button>
              <Button
                size="xs"
                color="danger"
                className="mr-2"
                onClick={() => handleDelete(row.original.id)}
              >
                <i className="simple-icon-trash" />
              </Button>
            </div>
          </>
        ),
      },
    ],
    [handleEdit]
  );

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = {};
  //   new FormData(e.target).forEach((value, name) => {
  //     if (value.trim() !== '') {
  //       formData[name] = value;
  //     }
  //   });
  //   console.log('Form Data:', formData);
  // };

  return !isLoaded ? (
    <div className="loading" />
  ) : (
    <>
      <div className="disable-text-selection">
        <ListPageNew
          heading="menu.section"
          changePageSize={setSelectedPageSize}
          selectedPageSize={selectedPageSize}
          totalItemCount={totalItemCount}
          selectedOrderOption={selectedOrderOption}
          match={match}
          startIndex={startIndex}
          endIndex={endIndex}
          onSearchKey={(e) => {
            if (e.key === 'Enter') {
              setSearch(e.target.value.toLowerCase());
            }
          }}
          pageSizes={pageSizes}
          toggleModal={() => setModalOpen(!modalOpen)}
        />
        <AddNewSectionModal
          modalOpen={modalOpen}
          toggleModal={() => setModalOpen(!modalOpen)}
          categories={categories}
        />
        {/* 
        <Row>
          <Colxx xxs="12">
            <Row>
              <Colxx xxs="12">
                <Form className='d-flex align-items-center' lg="12" onSubmit={handleSubmit}>
                  <FormGroup className="form-group tooltip-right-bottom mr-4">
                    <Label style={{ fontSize: '14px' }}>Section </Label>
                    <Input className='mb-2' type="text" name='section' value={section} onChange={(e) => setSection(e.target.value)} />
                  </FormGroup>
                  <Button className='c-btn-height' outline color="primary" type='submit'>Filter</Button>
                </Form>
              </Colxx>
            </Row>
          </Colxx>
        </Row> */}

        <ListPageListing
          cols={cols}
          items={items}
          onContextMenuClick={onContextMenuClick}
          onContextMenu={onContextMenu}
        />
      </div>
    </>
  );
};

export default SectionList;
