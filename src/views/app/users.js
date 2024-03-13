import React, { useState, useEffect } from 'react';
// import Switch from 'rc-switch';
import {
  // Button, Row, FormGroup, Form, Input, Label, Alert} from 'reactstrap';
  Button,
} from 'reactstrap';
// import { servicePath } from 'constants/defaultValues';
// import { Colxx } from 'components/common/CustomBootstrap';
import ListPageNew from 'containers/pages/ListPageNew';
import AddNewUserModal from 'containers/pages/AddNewUserModal';
import ListPageListing from 'containers/pages/ListPageListing';
import useMousetrap from 'hooks/use-mousetrap';
import { apiBaseUrl, apiRequestAsync } from 'constants/defaultValues';
import CloseableAlert from 'containers/ui/CloseableAlert';
import DeleteConfirmationPopup from 'containers/ui/DeleteConfirmationPopup';
// import Select from 'react-select';

// const apiUrl = `${servicePath}/cakes/paging`;

const pageSizes = [4, 8, 12, 20];

const categories = [
  { label: 'Cakes', value: 'Cakes', key: 0 },
  { label: 'Cupcakes', value: 'Cupcakes', key: 1 },
  { label: 'Desserts', value: 'Desserts', key: 2 },
];

const UsersList = ({ match }) => {
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
  // const [switchStates, setSwitchStates] = useState(items.map(() => false));

  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [roleId, setRoleId] = useState();
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

  const userListUrl = `${apiBaseUrl}/users`;

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedPageSize, selectedOrderOption]);

  const fetchData = async () => {
    try {
      const data = await apiRequestAsync('get', userListUrl, null);

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
      // Handle errors if needed
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

  async function DeleteUserData(id) {
    const userDeleteURL = `${userListUrl}/${id}`;
    apiRequestAsync('delete', userDeleteURL, null)
      .then((deleteUser) => {
        if (deleteUser.code === 200) {
          fetchData();
          setSMessage('User Deleted Successfully');
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
  //   DeleteUserData(id);
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
      DeleteUserData(selectedEntry.id);
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


  // const handleChange = (id) => {
  //   // Implement the delete functionality here
  //   console.log(`change button clicked for id: ${id}`);
  //   const index = items.findIndex((item) => item.id === id);
  //   const newSwitchStates = [...switchStates];
  //   newSwitchStates[index] = !newSwitchStates[index];
  //   setSwitchStates(newSwitchStates);
  // };

  const startIndex = (currentPage - 1) * selectedPageSize;
  const endIndex = currentPage * selectedPageSize;

  const cols = React.useMemo(
    () => [
      // {
      //   Header: 'User ID',
      //   accessor: 'id',
      //   cellClass: 'list-item-heading w-15',
      //   Cell: ({ value }) => <>{value}</>,
      // },
      {
        Header: 'Name',
        accessor: 'username',
        cellClass: 'text-muted w-40',
        Cell: ({ value }) => <>{value}</>,
      },
      {
        Header: 'Email',
        accessor: 'email',
        cellClass: 'text-muted w-10',
        Cell: ({ value }) => <>{value}</>,
      },
      {
        Header: 'Roles',
        accessor: 'roles',
        cellClass: 'text-muted w-20',
        Cell: ({ value }) => <>{value}</>,
      },
      // {
      //   Header: 'Status',
      //   accessor: 'status',
      //   cellClass: 'text-muted w-10',
      //   Cell: ({ row }) => (
      //     <>
      //       <div>
      //         <Switch
      //           id={row.original.id}
      //           className="custom-switch custom-switch-primary-inverse custom-switch-small"
      //           checked={switchStates[row.index]}
      //           onChange={() => handleChange(row.original.id)}
      //         />
      //       </div>
      //     </>
      //   ),
      // },
      {
        Header: <div className="text-right mr-4">Actions</div>,
        accessor: 'actions',
        cellClass: 'text-muted w-20',
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
                onClick={() => handleDeleteClick(row.original.id, row.original.username)}
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

  // switchStates

  // const options = [
  //   { value: '1', label: 'Admin' },
  //   { value: '2', label: 'Sub Admin' },
  // ];

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = {};
  //   new FormData(e.target).forEach((value, name) => {
  //     if (value.trim() !== '') {
  //       formData[name] = value;
  //     }
  //   });
  //   if (Object.keys(formData).length > 0) {
  //     setVisible(true);
  //     const timeout = setTimeout(() => {
  //       setVisible(false);
  //     }, 3000);
  //     return () => clearTimeout(timeout);
  //   }
  //   return undefined;
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
            message={`Are you sure you want to delete User "${selectedEntry.name}"?`}
            onConfirm={handleDeleteConfirmed}
            onCancel={handleCancelDelete}
          />
        )}

        <ListPageNew
          heading="menu.employees"
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
          title="User"
        />
        <AddNewUserModal
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
                  <FormGroup className="form-group tooltip-right-bottom mr-5">
                    <Label style={{ fontSize: '14px' }}>Name </Label>
                    <Input className='mb-2' type="text" name='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                  </FormGroup>

                  <span className='mr-5'>OR</span>

                  <FormGroup className="form-group tooltip-right-bottom mr-5">
                    <Label style={{ fontSize: '14px' }}>Email </Label>
                    <Input className='mb-2' type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                  </FormGroup>

                  <span className='mr-5'>OR</span>

                  <FormGroup className="form-group tooltip-right-bottom mr-5 c-w-200" style={{ marginTop: '-8px' }}>
                    <Label style={{ fontSize: '14px' }}> Role ID </Label>
                    <Select
                      className="react-select"
                      classNamePrefix="react-select"
                      name="roleId"
                      options={options}
                      value={roleId}
                      onChange={(selectedOption) => setRoleId(selectedOption)}
                    />
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

export default UsersList;
