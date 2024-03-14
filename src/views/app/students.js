import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import {
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  // FormGroup,
  // Form,
  // Input,
  // Label,
} from 'reactstrap';
// import { servicePath } from 'constants/defaultValues';
import TooltipCustom from 'components/common/TooltipCustom';
import ListPageNew from 'containers/pages/ListPageNew';
import AddNewStudentModal from 'containers/pages/AddNewStudentModal';
import AddReportModal from 'containers/pages/AddReportModal';
import ListPageListing from 'containers/pages/ListPageListing';
import useMousetrap from 'hooks/use-mousetrap';
import { FormDataProvider } from 'containers/pages/FormDataContext';
import { FormDataProviderReport } from 'containers/pages/AddReportFormData';
import {
  stufitAdminRoot,
  apiBaseUrl,
  apiRequestAsync,
} from 'constants/defaultValues';
import CloseableAlert from 'containers/ui/CloseableAlert';

// const apiUrl = `${servicePath}/cakes/paging`;
const apiUrl = `${apiBaseUrl}/students/list/10`;
const apiUrlReport = `${apiBaseUrl}/students/report`;

const pageSizes = [4, 8, 12, 20];

const categories = [
  { label: 'Cakes', value: 'Cakes', key: 0 },
  { label: 'Cupcakes', value: 'Cupcakes', key: 1 },
  { label: 'Desserts', value: 'Desserts', key: 2 },
];

// function formatDate(date) {
//     const day = date.getDate().toString().padStart(2, '0');
//     const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Note: Month is zero-based
//     const year = date.getFullYear();

//     return `${day}/${month}/${year}`;
// }

// // Example usage:
// const today = new Date();
// const formattedDate = formatDate(today);

const StudentsList = ({ match }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPageSize, setSelectedPageSize] = useState(8);
  const [selectedOrderOption] = useState({
    column: 'first-name',
    label: 'Name',
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);

  const [totalItemCount, setTotalItemCount] = useState(0);
  // const [search, setSearch] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [items, setItems] = useState([]);
  const [reportItems, setReportItems] = useState([]);

  const [sMessage, setSMessage] = useState('');
  const [fMessage, setFMessage] = useState('');

  const closeButton = () => {
    setSMessage('');
    setFMessage('');
  };

  // const [schoolFilter, setSchoolFilter] = useState('');
  // const [classFilter, setClassFilter] = useState('');
  // const [sectionFilter, setSectionFilter] = useState('');
  // const [filteredItems, setFilteredItems] = useState([]);

  // const [updateName, setUpdateName] = useState('Select');
  // const [reportIDVal, setReportIDVal] = useState('');

  const getUserRole = () => {
    const userCurrentRole = JSON.parse(
      localStorage.getItem('stufit_current_user')
    );
    const userRole = userCurrentRole.uid.user_role;
    return userRole;
  };

  const userRole = getUserRole();

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedOrderOption]);

  const [detailsObject, setDetailsObject] = useState({
    roleUpdate: 'Add',
    roleId: '',
  });

  const [reportObject, setReportObject] = useState({
    roleUpdate: 'Add',
    roleId: '',
  });

  const fetchData = async () => {
    try {
      const data = await apiRequestAsync('get', apiUrl, null);

      setItems(
        data.data.data.map((x) => {
          return { ...x };
        })
      );
      setSelectedItems([]);
      setTotalItemCount(data.totalItem);
      setIsLoaded(true);
    } catch (error) {
      console.error('Error fetching data:', error);
      setFMessage(error.message);
    }
  };

  const fetchDataReports = async () => {
    setIsLoaded(false);
    try {
      const data = await apiRequestAsync('get', apiUrlReport, null);

      setReportItems(
        data.data.map((x) => {
          return { ...x };
        })
      );
      // setIsLoaded(true);
    } catch (error) {
      console.error('Error fetching data:', error);
      setFMessage(error.message);
    }
  };

  useEffect(() => {
    fetchData();
    fetchDataReports();
  }, []);

  // const applyFilters = () => {
  //   let filteredData = [...items];

  //   if (schoolFilter) {
  //     const lowerCaseSchoolFilter = schoolFilter.toLowerCase();
  //     filteredData = filteredData.filter((entry) =>
  //       entry.school_name.toLowerCase().includes(lowerCaseSchoolFilter)
  //     );
  //   }

  //   if (classFilter) {
  //     const lowerCaseClassFilter = classFilter.toLowerCase();
  //     filteredData = filteredData.filter((entry) =>
  //       entry.class_id.toLowerCase().includes(lowerCaseClassFilter)
  //     );
  //   }

  //   if (sectionFilter) {
  //     const lowerCaseSectionFilter = sectionFilter.toLowerCase();
  //     filteredData = filteredData.filter((entry) =>
  //       entry.section_id.toLowerCase().includes(lowerCaseSectionFilter)
  //     );
  //   }

  //   setFilteredItems(filteredData);
  // };

  // useEffect(() => {
  //   applyFilters();
  // }, [items, schoolFilter, classFilter, sectionFilter]);

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
    // let count = id;
    // count = "588"
    console.log(`Edit button clicked for id: ${id}`);
    setDetailsObject({
      roleUpdate: 'Update',
      roleId: id,
    });
    setModalOpen(!modalOpen);
  };

  const handleAddReport = (id) => {
    console.log(`Handle Add Report button clicked for id: ${id}`);
    setReportModalOpen(!modalOpen);
    setReportObject({
      roleUpdate: 'AddReport',
      roleId: id,
    });
  };

  const handleAdd = () => {
    setDetailsObject({
      roleUpdate: 'Add',
    });
    setModalOpen(!modalOpen);
  };

  // const handleDelete = (id) => {
  //     // Implement the delete functionality here
  //     console.log(`Delete button clicked for id: ${id}`);
  // };

  // const handleDropdownSelect = (key, label) => {
  //     console.log(`Selected Report ID: ${key}`);
  //     setUpdateName(label);
  //     setReportIDVal(key)
  // };

  const handleView = (id, profileid) => {
    // let count = id;
    // count = "588"
    console.log(`View button clicked for id: ${id}`);
    window.open(
      `${stufitAdminRoot}/healthReportCard/${id}/${profileid}`,
      '_blank'
    );
  };


  const startIndex = (currentPage - 1) * selectedPageSize;
  const endIndex = currentPage * selectedPageSize;

  const cols = React.useMemo(
    () => [
      {
        Header: 'Student ID',
        accessor: 'student_id',
        cellClass: 'list-item-heading w-20',
        Cell: ({ value }) => <>{value}</>,
      },
      {
        Header: 'Name',
        accessor: 'std_name',
        cellClass: 'text-muted w-20',
        Cell: ({ value }) => <>{value}</>,
      },
      {
        Header: 'School Name',
        accessor: 'school_name',
        cellClass: 'text-muted w-20',
        Cell: ({ value }) => <>{value}</>,
      },
      {
        Header: 'Gender',
        accessor: 'std_gender',
        cellClass: 'text-muted w-20',
        Cell: ({ value }) => <>{value}</>,
      },
      {
        Header: 'Mobile',
        accessor: 'std_contact',
        cellClass: 'text-muted w-10',
        Cell: ({ value }) => <>{value}</>,
      },
      // {
      //     Header: "Father's Name",
      //     accessor: 'std_father_name',
      //     cellClass: 'text-muted w-20',
      //     Cell: ({ value }) => <>{value}</>,
      // },
      {
        Header: <div className="text-right mr-5">Actions</div>,
        accessor: 'actions',
        cellClass: 'text-muted w-20',
        Cell: ({ row }) => {
          const matchingReportItems = reportItems.filter(
            (reportItem) => row.original.id === reportItem.profile_id
          );

          const reportItemsVal = matchingReportItems.flatMap((reportItem) => {
            const reportIdValues = reportItem.report_id.split(',');
            return reportIdValues.map((reportId, index) => (
              <DropdownItem
                className="rounded"
                key={reportId}
                onClick={() => handleView(reportId, row.original.id)}
              >
                {`Report ${index + 1}`}
              </DropdownItem>
            ));
          });
          // const reportItems = reportIdValues.map((reportId, index) => (
          //     <DropdownItem
          //         className="rounded"
          //         key={reportId}
          //         label={reportId}
          //         onClick={() => handleDropdownSelect(reportId, `Report ${index + 1}`)}
          //     >
          //         {`Report ${index + 1}`}
          //     </DropdownItem>
          // ));

          // const editItems = reportIdValues.map((reportId, index) => (
          //     <DropdownItem className="rounded" key={reportId} onClick={() => handleEdit(reportId)}>
          //         {`Report ${index + 1}`} {/* {`Report: ${reportId.trim()}`} */}
          //     </DropdownItem>
          // ));

          return (
            <>
              <div className="d-flex justify-content-end">
                {userRole === 'Super Admin' && (
                  <div className="d-flex">
                    <Button
                      size="xs"
                      color="primary"
                      className="mr-2"
                      id={`edit_${row.original.id}`}
                      onClick={() => handleEdit(row.original.id)}
                    >
                      <i className="simple-icon-pencil" />
                    </Button>
                    <TooltipCustom
                      placement="top"
                      target={`edit_${row.original.id}`}
                      body="Edit Student profile"
                    />
                  </div>
                )}
                {/* <div className='d-flex mr-2'>
                                    {reportIdValues.length > 0 && (
                                        <UncontrolledDropdown>
                                            <DropdownToggle size="xs" className="nav-link" caret color="primary">
                                            <i className="simple-icon-pencil" />
                                            </DropdownToggle>
                                            <DropdownMenu className='c-dropdownMenu'>
                                                {editItems}
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    )}
                                </div> */}
                <div className="d-flex">
                  {matchingReportItems.length > 0 && (
                    <>
                      <UncontrolledDropdown
                        className="mr-2"
                        id={`view_${row.original.id}`}
                      >
                        <DropdownToggle
                          size="xs"
                          className="nav-link"
                          caret
                          color="info"
                        >
                          <i className="simple-icon-eye" />
                        </DropdownToggle>
                        <DropdownMenu className="c-dropdownMenu">
                          {reportItemsVal}
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <TooltipCustom
                        placement="top"
                        target={`view_${row.original.id}`}
                        body="view reports"
                      />
                    </>
                  )}

                  {userRole === 'Super Admin' ? (
                    <>
                      <Button
                        size="xs"
                        color="dark"
                        className="mr-2"
                        id={`addnew_${row.original.id}`}
                        onClick={() => handleAddReport(row.original.id)}
                      >
                        <span className="d-flex">
                          {' '}
                          + <i className="iconsminds-add-file" />{' '}
                        </span>
                      </Button>
                      <TooltipCustom
                        placement="top"
                        target={`addnew_${row.original.id}`}
                        body="Add new report"
                      />
                    </>
                  ) : null}
                </div>
                {/* <Button
                                size="xs"
                                color='danger'
                                className="mr-2"
                                onClick={() => handleDelete(row.original.student_id)}
                            >
                                <i className="simple-icon-trash" />
                            </Button> */}
                {/* Add more buttons as needed */}
              </div>
            </>
          );
        },
      },
    ],
    [handleEdit]
  );
  // [handleEdit, handleDelete]

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const formData = {};
  //     new FormData(e.target).forEach((value, name) => {
  //         if (value.trim() !== '') {
  //             formData[name] = value;
  //         }
  //     });
  //     console.log('Form Data:', formData);
  // };

  return !isLoaded ? (
    <div className="loading" />
  ) : (
    <>
      <div className="disable-text-selection">
        {/* <h1>
                    Students
                </h1>

                <Breadcrumb match={match} /> */}

        <CloseableAlert type="success" message={sMessage} onClose={closeButton} />
        <CloseableAlert type="failure" message={fMessage} onClose={closeButton} />

        <ListPageNew
          heading="menu.students"
          changePageSize={setSelectedPageSize}
          selectedPageSize={selectedPageSize}
          totalItemCount={totalItemCount}
          selectedOrderOption={selectedOrderOption}
          match={match}
          startIndex={startIndex}
          endIndex={endIndex}
          onSearchKey
          pageSizes={pageSizes}
          toggleModal={() => handleAdd()}
          title="Student"
        />

        <FormDataProvider>
          <AddNewStudentModal
            modalOpen={modalOpen}
            toggleModal={() => setModalOpen(!modalOpen)}
            categories={categories}
            roleupdate={detailsObject}
            listData={fetchData}
            listReport={fetchDataReports}
            setSuccessMessage={setSMessage}
            setFailureMessage={setFMessage}
          />
        </FormDataProvider>

        <FormDataProviderReport>
          <AddReportModal
            modalOpen={reportModalOpen}
            toggleModal={() => setReportModalOpen(!reportModalOpen)}
            listData={fetchData}
            listReport={fetchDataReports}
            roleupdate={reportObject}
            setSuccessMessage={setSMessage}
            setFailureMessage={setFMessage}
          />
        </FormDataProviderReport>

       {/* <Form className="d-flex align-items-center">
           <FormGroup className="form-group tooltip-right-bottom mr-4">
            <Label style={{ fontSize: '14px' }}>School Name </Label>
            <Input
              className="mb-2"
              type="text"
              name="schoolName"
              value={schoolFilter}
              onChange={(e) => setSchoolFilter(e.target.value)}
            />
          </FormGroup>

          <FormGroup className="form-group tooltip-right-bottom mr-4">
            <Label style={{ fontSize: '14px' }}>Class ID </Label>
            <Input
              className="mb-2"
              type="text"
              name="classId"
              value={classFilter}
              onChange={(e) => setClassFilter(e.target.value)}
            />
          </FormGroup>

          <FormGroup className="form-group tooltip-right-bottom mr-4">
            <Label style={{ fontSize: '14px' }}>Section ID </Label>
            <Input
              className="mb-2"
              type="text"
              name="sectionId"
              value={sectionFilter}
              onChange={(e) => setSectionFilter(e.target.value)}
            />
          </FormGroup> */}

          {/* <Button className='c-btn-height' outline color="primary" onClick={() => applyFilters()}>
                        Filter
                    </Button> */}
        {/* </Form> */}

        <ListPageListing
          cols={cols}
          items={items}
          onContextMenuClick={onContextMenuClick}
          onContextMenu={onContextMenu}
        />
      </div>

      {/* <HealthReportCard /> */}
    </>
  );
};

export default StudentsList;
