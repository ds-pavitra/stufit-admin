import React, { useState, useEffect } from 'react';
// import Switch from 'rc-switch';
import { Button } from 'reactstrap';
// import { Row, Button, FormGroup, Form, Input, Label, } from 'reactstrap';
// import { Colxx } from 'components/common/CustomBootstrap';
import ListPageNew from 'containers/pages/ListPageNew';
import AddNewSchoolModal from 'containers/pages/AddNewSchoolModal';
import ListPageListing from 'containers/pages/ListPageListing';
import useMousetrap from 'hooks/use-mousetrap';
import { apiBaseUrl, apiRequestAsync } from 'constants/defaultValues';
import CloseableAlert from 'containers/ui/CloseableAlert';
import DeleteConfirmationPopup from 'containers/ui/DeleteConfirmationPopup';

// const apiUrl = `${servicePath}/cakes/paging`;

const pageSizes = [4, 8, 12, 20];

const categories = [
  { label: 'Cakes', value: 'Cakes', key: 0 },
  { label: 'Cupcakes', value: 'Cupcakes', key: 1 },
  { label: 'Desserts', value: 'Desserts', key: 2 },
];

const SchoolListPages = ({ match }) => {
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

  const schoolListUrl = `${apiBaseUrl}/schools`;

  const getUserRole = () => {
    const userCurrentRole = JSON.parse(
      localStorage.getItem('stufit_current_user')
    );
    const userRole = userCurrentRole.uid.user_role;
    return userRole;
  };

  const userRole = getUserRole();

  // const [schoolName, setSchoolName] = useState('');
  // const [email, setEmail] = useState('');
  // const [city, setCity] = useState('');
  // const [pincode, setPincode] = useState('');

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedPageSize, selectedOrderOption]);

  const fetchData = async () => {
    try {
      const data = await apiRequestAsync('get', schoolListUrl, null);

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

  async function DeleteSchoolData(id) {
    const schoolDeleteURL = `${schoolListUrl}/${id}`;
    apiRequestAsync('delete', schoolDeleteURL, null)
      .then((deleteSchool) => {
        if (deleteSchool.code === 200) {
          fetchData();
          setSMessage('School Deleted Successfully');
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
  //   DeleteSchoolData(id);
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
      DeleteSchoolData(selectedEntry.id);
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
      //   Header: 'School ID',
      //   accessor: 'id',
      //   cellClass: 'list-item-heading w-10',
      //   Cell: ({ value }) => <>{value}</>,
      // },
      {
        Header: 'Name',
        accessor: 'name',
        cellClass: 'text-muted w-40',
        Cell: ({ value }) => <>{value}</>,
      },
      {
        Header: 'City',
        accessor: 'city',
        cellClass: 'text-muted w-10',
        Cell: ({ value }) => <>{value}</>,
      },
      {
        Header: 'State',
        accessor: 'state',
        cellClass: 'text-muted w-10',
        Cell: ({ value }) => <>{value}</>,
      },
      {
        Header: 'Pincode',
        accessor: 'pincode',
        cellClass: 'text-muted w-10',
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
                {/* iconsminds-file-edit */}
              </Button>

              {userRole === 'Super Admin' && (
                <Button
                  size="xs"
                  color="danger"
                  className="mr-2"
                  onClick={() => handleDeleteClick(row.original.id, row.original.name)}
                >
                  <i className="simple-icon-trash" />
                </Button>
              )}
              {/* Add more buttons as needed */}
            </div>
          </>
        ),
      },
    ],
    [handleEdit, handleDeleteClick]
  );

  // switchStates

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
            message={`Are you sure you want to delete School " ${selectedEntry.name} "?`}
            onConfirm={handleDeleteConfirmed}
            onCancel={handleCancelDelete}
          />
        )}

        <ListPageNew
          heading="menu.school-list"
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
          title="School"
        />
        <AddNewSchoolModal
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
                    <Input className='mb-2' type="text" name='schoolName' value={schoolName} onChange={(e) => setSchoolName(e.target.value)}/>
                  </FormGroup>

                  <span className='mr-4'>OR</span>

                  <FormGroup className="form-group tooltip-right-bottom mr-4">
                    <Label style={{ fontSize: '14px' }}>Email </Label>
                    <Input className='mb-2' type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                  </FormGroup>

                  <span className='mr-4'>OR</span>

                  <FormGroup className="form-group tooltip-right-bottom mr-4">
                    <Label style={{ fontSize: '14px' }}>City </Label>
                    <Input className='mb-2' type="text" name='city' value={city} onChange={(e) => setCity(e.target.value)} />
                  </FormGroup>

                  <span className='mr-4'>OR</span>

                  <FormGroup className="form-group tooltip-right-bottom mr-4">
                    <Label style={{ fontSize: '14px' }}>Pincode </Label>
                    <Input className='mb-2' type="text" name='pincode' maxLength={6} value={pincode} onChange={(e) => setPincode(e.target.value)} />
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
          paginationKey="NO"
        />
      </div>
    </>
  );
};

export default SchoolListPages;
