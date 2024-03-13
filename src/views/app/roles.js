import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
// import { Row, FormGroup, Form, Input, Label, } from 'reactstrap';
// import { Colxx } from 'components/common/CustomBootstrap';
import ListPageNew from 'containers/pages/ListPageNew';
import AddNewRolesModal from 'containers/pages/AddNewRolesModal';
import ListPageListing from 'containers/pages/ListPageListing';
import useMousetrap from 'hooks/use-mousetrap';
import { apiBaseUrl, apiRequestAsync } from 'constants/defaultValues';
import CloseableAlert from 'containers/ui/CloseableAlert';
import DeleteConfirmationPopup from 'containers/ui/DeleteConfirmationPopup';

const pageSizes = [4, 8, 12, 20];

const categories = [
  { label: 'Cakes', value: 'Cakes', key: 0 },
  { label: 'Cupcakes', value: 'Cupcakes', key: 1 },
  { label: 'Desserts', value: 'Desserts', key: 2 },
];

const RolesList = ({ match }) => {
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
  const [sMessage, setSMessage] = useState('');
  const [fMessage, setFMessage] = useState('');

  const closeButton = () => {
    setSMessage('');
    setFMessage('');
  };

  const [detailsObject, setDetailsObject] = useState({
    roleUpdate: 'Add',
    roleId: '',
  });

  // const [roleName, setRoleName] = useState('');

  function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Note: Month is zero-based
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  const roleListUrl = `${apiBaseUrl}/roles`;

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedPageSize, selectedOrderOption]);

  const fetchData = async () => {
    try {
      const data = await apiRequestAsync('get', roleListUrl, null);

      setItems(
        data.data.map((x) => {
          return { ...x };
        })
      );
      setSelectedItems([]);
      setTotalItemCount(data.totalItem);
      setIsLoaded(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
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

  async function DeleteRoleData(id) {
    const roleDeleteURL = `${roleListUrl}/${id}`;
    apiRequestAsync('delete', roleDeleteURL, null)
      .then((deleteRole) => {
        if (deleteRole.code === 200) {
          fetchData();
          setSMessage('Role Deleted Successfully');
        }
        return null;
      })
      .catch((error) => {
        console.log(error);
        setFMessage(error.message);
      });
  }

  const handleEdit = (id) => {
    // Implement the edit functionality here
    console.log(`Edit button clicked for id: ${id}`);
    setDetailsObject({
      roleUpdate: 'Update',
      roleId: id,
    });

    setModalOpen(!modalOpen);
  };

  const handleAdd = () => {
    setDetailsObject({
      roleUpdate: 'Add',
    });
    setModalOpen(!modalOpen);
  };

  // const handleDelete = (id) => {
  //   // Implement the delete functionality here
  //   console.log(`Delete button clicked for id: ${id}`);
  //   DeleteRoleData(id);
  // };

  const [showPopup, setShowPopup] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);

  const handleDeleteClick = (rowID, roleName) => {
    const deleteObj = {
      id: rowID,
      name: roleName
    }
    setSelectedEntry(deleteObj);
    setShowPopup(true);
  };

  const handleDeleteConfirmed = () => {
    if (selectedEntry) {
      // Perform delete operation for selectedEntry
      console.log(`Deleting entry: ${selectedEntry}`);
      DeleteRoleData(selectedEntry.id);
    }

    // // Reset selectedEntry and close the popup
    setSelectedEntry(null);
    setShowPopup(false);
  };

  const handleCancelDelete = () => {
    // Reset selectedEntry and close the popup
    setSelectedEntry(null);
    setShowPopup(false);
  };

  const startIndex = (currentPage - 1) * selectedPageSize;
  const endIndex = currentPage * selectedPageSize;

  const cols = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
        cellClass: 'text-muted w-50',
        Cell: ({ value }) => <>{value}</>,
      },
      {
        Header: 'Created',
        accessor: 'created_at',
        cellClass: 'text-muted w-30',
        Cell: ({ value }) => <>{formatDate(new Date(value))}</>,
      },
      {
        Header: <div className="text-right mr-4">Actions</div>,
        accessor: 'actions',
        cellClass: 'text-muted w-10',
        Cell: ({ row }) => (
          <>
            <div className="d-flex justify-content-end">
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
                onClick={() => handleDeleteClick(row.original.id, row.original.name)}
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
        <CloseableAlert type="success" message={sMessage} onClose={closeButton} />
        <CloseableAlert type="failure" message={fMessage} onClose={closeButton} />

        {showPopup && (
          <DeleteConfirmationPopup
            message={`Are you sure you want to delete Role " ${selectedEntry.name} "?`}
            onConfirm={handleDeleteConfirmed}
            onCancel={handleCancelDelete}
          />
        )}

        <ListPageNew
          heading="menu.roles"
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
          toggleModal={() => handleAdd()}
          title="Role"
        />
        <AddNewRolesModal
          modalOpen={modalOpen}
          toggleModal={() => setModalOpen(!modalOpen)}
          categories={categories}
          listData={fetchData}
          roleupdate={detailsObject}
          setSuccessMessage={setSMessage}
          setFailureMessage={setFMessage}
        />

        {/* <Row>
          <Colxx xxs="12">
            <Row>
              <Colxx xxs="12">
                <Form className='d-flex align-items-center' lg="12" onSubmit={handleSubmit}>
                  <FormGroup className="form-group tooltip-right-bottom mr-4">
                    <Label style={{ fontSize: '14px' }}>Name </Label>
                    <Input className='mb-2' type="text" name='roles' value={roleName} onChange={(e) => setRoleName(e.target.value)} />
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

export default RolesList;
