import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  Nav,
  NavItem,
  TabContent,
  TabPane,
  Alert,
} from 'reactstrap';

import IntlMessages from 'helpers/IntlMessages';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { Colxx } from 'components/common/CustomBootstrap';
// import { apiRequestAsync } from 'constants/defaultValues';
import PhysicalAssessment from './PhysicalAssessment';
// import EyeVisionAssessment from './EyeVisionAssessment';
// import DentalOralAssessment from './DentalOralAssessment';
// import AudioSpeechAssessment from './AudioSpeechAssessment';
// import NutritionAssessment from './NutritionAssessment';
// import PsychologicalAssessment from './PsychologicalAssessment';
// import GeneralAssessment from './GeneralAssessment';

const UpdateReportModal = ({ modalOpen, toggleModal, listData }) => {
  const [activeFirstTab, setActiveFirstTab] = useState('1');
  const [visible, setVisible] = useState(false);
  const [alertColor, setAlertColor] = useState('success');
  const [alertMessage, setAlertMessage] = useState('success');

  function updateStudentSubmit() {
    // const updateUserURL = `${studentsUrl}/${roleupdate.roleId}`
    // try {
    //     apiRequestAsync('put', updateUserURL, payload)
    //         .then((updateStudent) => {
    //             if (updateStudent.response.code === 200) {
    //                 console.log(updateStudent);
    //                 setAlertColor("success");
    //                 setAlertMessage("Student updated Successfully");
    //                 setVisible(true);
    //                 resetForm();
    //                 listData();
    //                 listReport();
    //                 const t = setTimeout(() => setVisible(false), 3000);
    //                 toggleModal();
    //                 setMode('Add');
    //                 return () => clearTimeout(t);
    //             }
    //             return null;
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             setAlertColor("danger");
    //             setAlertMessage(error.message);
    //             setVisible(true);
    //             const t = setTimeout(() => setVisible(false), 5000);
    //             return () => clearTimeout(t);
    //         });
    // } catch (error) {
    //     console.log(error);
    //     setAlertColor("danger");
    //     setAlertMessage(error);
    //     setVisible(true);
    //     const t = setTimeout(() => setVisible(false), 5000);
    //     return () => clearTimeout(t);
    // }
    // return null;
    console.log('Update Report Submit');
    console.log(setAlertColor('success'));
    console.log(setAlertMessage('add Successfully'));
  }

  const handleSubmit = () => {
    updateStudentSubmit();
    console.log('Form Data:');
    toggleModal();
  };

  const handleCancel = () => {
    toggleModal();
  };

  return (
    <Modal
      isOpen={modalOpen}
      toggle={toggleModal}
      wrapClassName="modal-right"
      backdrop="static"
      style={{ maxWidth: '85%' }}
    >
      <ModalHeader toggle={toggleModal}>
        <span> Update Student Report</span>
      </ModalHeader>
      <div style={{ position: 'relative', zIndex: 9999 }}>
        <Alert
          color={alertColor}
          isOpen={visible}
          toggle={() => setVisible(!visible)}
          style={{ position: 'absolute', top: 0, right: 0 }}
        >
          {alertMessage}
        </Alert>
      </div>
      <ModalBody>
        <Row>
          <Colxx xxs="12">
            <Row>
              <Colxx xxs="12" xs="12" lg="12">
                <Card className="mb-4 flex-row">
                  <CardHeader>
                    <Nav tabs className="card-header-tabs flex-column">
                      <NavItem>
                        <NavLink
                          to="#"
                          location={{}}
                          className={classnames({
                            active: activeFirstTab === '1',
                            'nav-link': true,
                          })}
                          onClick={() => {
                            setActiveFirstTab('1');
                          }}
                        >
                          Physical Assessment
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          to="#"
                          location={{}}
                          className={classnames({
                            active: activeFirstTab === '2',
                            'nav-link': true,
                          })}
                          onClick={() => {
                            setActiveFirstTab('2');
                          }}
                        >
                          Eye & Vision Assessment
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          to="#"
                          location={{}}
                          className={classnames({
                            active: activeFirstTab === '3',
                            'nav-link': true,
                          })}
                          onClick={() => {
                            setActiveFirstTab('3');
                          }}
                        >
                          Dental And Oral Assessment
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          to="#"
                          location={{}}
                          className={classnames({
                            active: activeFirstTab === '4',
                            'nav-link': true,
                          })}
                          onClick={() => {
                            setActiveFirstTab('4');
                          }}
                        >
                          Audio and Speech Assessment
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          to="#"
                          location={{}}
                          className={classnames({
                            active: activeFirstTab === '5',
                            'nav-link': true,
                          })}
                          onClick={() => {
                            setActiveFirstTab('5');
                          }}
                        >
                          Nutrition Assessment
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          to="#"
                          location={{}}
                          className={classnames({
                            active: activeFirstTab === '6',
                            'nav-link': true,
                          })}
                          onClick={() => {
                            setActiveFirstTab('6');
                          }}
                        >
                          Psychological Assessment
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          to="#"
                          location={{}}
                          className={classnames({
                            active: activeFirstTab === '7',
                            'nav-link': true,
                          })}
                          onClick={() => {
                            setActiveFirstTab('7');
                          }}
                        >
                          General Assessment
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </CardHeader>

                  <TabContent activeTab={activeFirstTab}>
                    <TabPane tabId="1">
                      <Row>
                        <Colxx sm="12">
                          <CardBody>
                            <CardTitle className="mb-4">
                              Physical Assessment
                            </CardTitle>
                            <PhysicalAssessment formData={listData} />
                          </CardBody>
                        </Colxx>
                      </Row>
                    </TabPane>
                    <TabPane tabId="2">
                      <Row>
                        <Colxx sm="12">
                          <CardBody>
                            <CardTitle className="mb-4">
                              Eye & Vision Assessment
                            </CardTitle>
                            {/* <EyeVisionAssessment /> */}
                          </CardBody>
                        </Colxx>
                      </Row>
                    </TabPane>
                    <TabPane tabId="3">
                      <Row>
                        <Colxx sm="12">
                          <CardBody>
                            <CardTitle className="mb-4">
                              Dental And Oral Assessment
                            </CardTitle>
                            {/* <DentalOralAssessment /> */}
                          </CardBody>
                        </Colxx>
                      </Row>
                    </TabPane>
                    <TabPane tabId="4">
                      <Row>
                        <Colxx sm="12">
                          <CardBody>
                            <CardTitle className="mb-4">
                              Audio and Speech Assessment
                            </CardTitle>
                            {/* <AudioSpeechAssessment /> */}
                          </CardBody>
                        </Colxx>
                      </Row>
                    </TabPane>
                    <TabPane tabId="5">
                      <Row>
                        <Colxx sm="12">
                          <CardBody>
                            <CardTitle className="mb-4">
                              Nutrition Assessment
                            </CardTitle>
                            {/* <NutritionAssessment /> */}
                          </CardBody>
                        </Colxx>
                      </Row>
                    </TabPane>
                    <TabPane tabId="6">
                      <Row>
                        <Colxx sm="12">
                          <CardBody>
                            <CardTitle className="mb-4">
                              Psychological Assessment
                            </CardTitle>
                            {/* <PsychologicalAssessment /> */}
                          </CardBody>
                        </Colxx>
                      </Row>
                    </TabPane>
                    <TabPane tabId="7">
                      <Row>
                        <Colxx sm="12">
                          <CardBody>
                            <CardTitle className="mb-4">
                              General Assessment
                            </CardTitle>
                            {/* <GeneralAssessment /> */}
                          </CardBody>
                        </Colxx>
                      </Row>
                    </TabPane>
                  </TabContent>
                </Card>
              </Colxx>
            </Row>
          </Colxx>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" outline onClick={handleCancel}>
          <IntlMessages id="pages.cancel" />
        </Button>
        <Button color="primary" onClick={handleSubmit}>
          <IntlMessages id="pages.submit" />
        </Button>{' '}
      </ModalFooter>
    </Modal>
  );
};

export default UpdateReportModal;
