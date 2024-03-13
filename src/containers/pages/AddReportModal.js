import React, { useState, useEffect } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Card,
  CardBody,
  CardHeader,
  Nav,
  NavItem,
  TabContent,
  TabPane,
  Badge,
} from 'reactstrap';

import IntlMessages from 'helpers/IntlMessages';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { Colxx } from 'components/common/CustomBootstrap';
import { apiBaseUrl, apiRequestAsync } from 'constants/defaultValues';
import { AddReportFormData } from './AddReportFormData';
import PhysicalAssessment from './PhysicalAssessment';
import EyeVisionAssessment from './EyeVisionAssessment';
import DentalOralAssessment from './DentalOralAssessment';
import AudioSpeechAssessment from './AudioSpeechAssessment';
import NutritionAssessment from './NutritionAssessment';
import GeneralAssessment from './GeneralAssessment';
import ClassSectionForm from './ClassSectionForm';

const AddReportModal = ({
  modalOpen,
  toggleModal,
  listData,
  listReport,
  roleupdate,
  setSuccessMessage, 
  setFailureMessage,
}) => {
  const { formData, updateField, resetForm } = AddReportFormData();
  const [activeFirstTab, setActiveFirstTab] = useState('1');
  const [title, setTitle] = useState('Add');
  const [tabBadgeCounts, setTabBadgeCounts] = useState({});
  const [badgeVisible, setBadgeVisible] = useState(false);
  const newErrors = {};
  const [badgeVisibleForTab, setBadgeVisibleForTab] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
  });

  const tabs = ['1', '2', '3', '4', '5', '6', '7'];

  const tabNames = {
    1: 'Class & Section Assessment',
    2: 'Physical Assessment',
    3: 'Eye & Vision Assessment',
    4: 'Dental And Oral Assessment',
    5: 'Audio and Speech Assessment',
    6: 'Nutrition Assessment',
    7: 'General Assessment',
  };

  const [errors, setErrors] = useState({
    ga_advice: '',
    da_advise: '',
    na_advice: '',
    pa_advice: '',
    sa_advice: '',
    va_advise: '',
    ga_remark: '',
    da_remark: '',
    na_remark: '',
    pa_remark: '',
    sa_remark: '',
    va_remark: '',
    ga_active_infectius_disease: '',
    na_ideal_body_weight: '',
    na_ideal_calories: '',
    pa_height: '',
    pa_weight: '',
    pa_bmi: '',
    pa_body_temp: '',
    pa_systolic_blood_pressure: '',
    pa_diastolic_blood_pressure: '',
    pa_blood_group: '',
    pa_pulse_rate: '',
    pa_oxygen: '',
    sa_speech_milestone: '',
    va_right_eye_vision: '',
    va_left_eye_vision: '',
    va_refraction: '',
    class_id: '',
    section_id: '',
  });

  const resetErrors = {
    ga_advice: '',
    da_advise: '',
    na_advice: '',
    pa_advice: '',
    sa_advice: '',
    va_advise: '',
    ga_remark: '',
    da_remark: '',
    na_remark: '',
    pa_remark: '',
    sa_remark: '',
    va_remark: '',
    ga_active_infectius_disease: '',
    na_ideal_body_weight: '',
    na_ideal_calories: '',
    pa_height: '',
    pa_weight: '',
    pa_bmi: '',
    pa_body_temp: '',
    pa_systolic_blood_pressure: '',
    pa_diastolic_blood_pressure: '',
    pa_blood_group: '',
    pa_pulse_rate: '',
    pa_oxygen: '',
    sa_speech_milestone: '',
    va_right_eye_vision: '',
    va_left_eye_vision: '',
    va_refraction: '',
    class_id: '',
    section_id: '',
  };

  useEffect(() => {
    if (roleupdate.roleUpdate === 'AddReport') {
      setTitle('Add');
      resetForm();
      setErrors(resetErrors);
      setBadgeVisible(false);
      setBadgeVisibleForTab({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
      });
    }
    if (roleupdate.roleUpdate === 'UpdateReport') {
      setTitle('Update');
      resetForm();
      setErrors(resetErrors);
      setBadgeVisible(false);
      setBadgeVisibleForTab({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
      });
      if (listData) {
        Object.entries(listData).forEach(([key, value]) => {
          if (key in formData) {
            updateField(key, value);
          }
        });
      }
    }
  }, [roleupdate]);

  const addReportUrl = `${apiBaseUrl}/profile/${roleupdate.roleId}/report`;
  function addStudentReportSubmit(payload) {
    try {
      apiRequestAsync('post', addReportUrl, payload)
        .then((AddReport) => {
          console.log(AddReport);

          if (AddReport.response.code === 200) {
            console.log(AddReport);
            setSuccessMessage('Report Added Successfully');
            resetForm();
            listData();
            listReport();
            toggleModal();
          }

          if (AddReport.response.code !== 200) {
            console.log(AddReport.message);
            setFailureMessage(AddReport.message);
          }
          return null;
        })
        .catch((error) => {
          console.log(error);
          setFailureMessage(error.message);
        });
    } catch (error) {
      console.log(error);
      setFailureMessage(error.message);;
    }
    return null;
  }

  const UpdateReportUrl = `${apiBaseUrl}/profile/${roleupdate.roleId[1]}/report/${roleupdate.roleId[0]}`;
  function UpdateStudentReportSubmit(payload) {
    try {
      apiRequestAsync('put', UpdateReportUrl, payload).then((UpdateReport) => {
        console.log(UpdateReport);

        if (UpdateReport.response.code === 200) {
          console.log(UpdateReport);
          setSuccessMessage('Report update Successfully');          
          toggleModal();
          window.location.reload();
        }

        if (UpdateReport.response.code !== 200) {
          console.log(UpdateReport.message);
          setFailureMessage(UpdateReport.message);
        }
        return null;
      });
    } catch (error) {
      console.log(error);
      setFailureMessage(error.message);
    }
    return null;
  }

  const errorFields = [
    'ga_advice',
    'da_advise',
    'na_advice',
    'pa_advice',
    'sa_advice',
    'va_advise',
    'ga_remark',
    'da_remark',
    'na_remark',
    'pa_remark',
    'sa_remark',
    'va_remark',
    'ga_active_infectius_disease',
    'na_ideal_calories',
    'sa_speech_milestone',
    'va_refraction',
    'va_right_eye_vision',
    'va_left_eye_vision',
    'na_ideal_body_weight',
    'pa_height',
    'pa_weight',
    'pa_bmi',
    'pa_body_temp',
    'pa_systolic_blood_pressure',
    'pa_blood_group',
    'pa_diastolic_blood_pressure',
    'pa_pulse_rate',
    'pa_oxygen',
    'class_id',
    'section_id',
  ];

  const errorFieldsWithTabs = {
    ga_advice: '7',
    ga_remark: '7',
    ga_active_infectius_disease: '7',
    da_advise: '4',
    da_remark: '4',
    na_advice: '6',
    na_remark: '6',
    na_ideal_calories: '6',
    na_ideal_body_weight: '6',
    pa_advice: '2',
    pa_remark: '2',
    pa_height: '2',
    pa_weight: '2',
    pa_bmi: '2',
    pa_body_temp: '2',
    pa_blood_group: '2',
    pa_systolic_blood_pressure: '2',
    pa_diastolic_blood_pressure: '2',
    pa_pulse_rate: '2',
    pa_oxygen: '2',
    sa_advice: '5',
    sa_remark: '5',
    sa_speech_milestone: '5',
    va_advise: '3',
    va_remark: '3',
    va_refraction: '3',
    va_right_eye_vision: '3',
    va_left_eye_vision: '3',
    class_id: '1',
    section_id: '1',
  };

  const validateErrorField = (value, field, tab) => {
    const fieldName =
      field.split('_').slice(1).join(' ').charAt(0).toUpperCase() +
      field.split('_').slice(1).join(' ').slice(1);
    console.log(fieldName);
    const error = value ? '' : `${fieldName} is required`;

    return { error, tab };
  };
  const handleInputChange = (field, value) => {
    updateField(field, value);
  };

  const handleKeyPress = (e, allowedCharsRegex) => {
    const charCode = e.charCode || e.keyCode;

    if (!allowedCharsRegex.test(String.fromCharCode(charCode))) {
      e.preventDefault();
    }
  };

  const handleSubmit = () => {
    const tabErrors = {};
    errorFields.forEach((field) => {
      const tab = errorFieldsWithTabs[field];
      const { error } = validateErrorField(formData[field], field, tab);

      if (error) {
        tabErrors[tab] = (tabErrors[tab] || 0) + 1;
      }

      newErrors[field] = error;
    });

    const updatedTabs = { ...tabBadgeCounts };
    Object.entries(tabErrors).forEach(([tab, count]) => {
      updatedTabs[tab] = count;
    });

    setTabBadgeCounts(updatedTabs);

    const tabsWithErrors = Object.keys(tabErrors);

    // Update visibility for tabs with errors
    setBadgeVisibleForTab((prevVisibleTabs) => {
      const newVisibleTabs = { ...prevVisibleTabs };
      tabs.forEach((tab) => {
        newVisibleTabs[tab] = tabsWithErrors.includes(tab);
      });
      return newVisibleTabs;
    });

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error !== '')) {
      setBadgeVisible(true);
      return;
    }
    console.log('Form Data:', formData);
    console.log('listData:', listData);

    if (roleupdate.roleUpdate === 'AddReport') {
      addStudentReportSubmit(formData);
    }
    if (roleupdate.roleUpdate === 'UpdateReport') {
      UpdateStudentReportSubmit(formData);
    }

    // toggleModal();
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
        <span> {title} Student Report</span>
      </ModalHeader>
      <ModalBody>
        <Row>
          <Colxx xxs="12">
            <Row>
              <Colxx xxs="12" xs="12" lg="12">
                <Card className="mb-4 flex-row">
                  <CardHeader>
                    <Nav
                      tabs
                      className="card-header-tabs flex-column"
                      style={{ width: 'max-content' }}
                    >
                      {tabs.map((tab) => (
                        <NavItem key={tab}>
                          <NavLink
                            to="#"
                            location={{}}
                            className={classnames({
                              active: activeFirstTab === tab,
                              'nav-link': true,
                            })}
                            onClick={() => {
                              setActiveFirstTab(tab);
                            }}
                          >
                            {tabNames[tab]}
                            {badgeVisible && badgeVisibleForTab[tab] && (
                              <Badge
                                color="outline-danger p-1 ml-2"
                                style={{ verticalAlign: 'middle' }}
                                size="xs"
                                pill
                                className="mb-1"
                              >
                                {tabBadgeCounts[tab]}
                              </Badge>
                            )}
                          </NavLink>
                        </NavItem>
                      ))}
                    </Nav>
                  </CardHeader>

                  <TabContent activeTab={activeFirstTab}>
                    <TabPane tabId="1">
                      <Row>
                        <Colxx sm="12">
                          <CardBody>
                            <ClassSectionForm
                              errors={errors}
                              formData={formData}
                              handleInputChange={handleInputChange}
                              handleKeyPress={handleKeyPress}
                            />
                          </CardBody>
                        </Colxx>
                      </Row>
                    </TabPane>
                    <TabPane tabId="2">
                      <Row>
                        <Colxx sm="12">
                          <CardBody>
                            <PhysicalAssessment
                              errors={errors}
                              formData={formData}
                              handleInputChange={handleInputChange}
                              handleKeyPress={handleKeyPress}
                            />
                          </CardBody>
                        </Colxx>
                      </Row>
                    </TabPane>
                    <TabPane tabId="3">
                      <Row>
                        <Colxx sm="12">
                          <CardBody>
                            <EyeVisionAssessment
                              errors={errors}
                              formData={formData}
                              handleInputChange={handleInputChange}
                              handleKeyPress={handleKeyPress}
                            />
                          </CardBody>
                        </Colxx>
                      </Row>
                    </TabPane>
                    <TabPane tabId="4">
                      <Row>
                        <Colxx sm="12">
                          <CardBody>
                            <DentalOralAssessment
                              errors={errors}
                              formData={formData}
                              handleInputChange={handleInputChange}
                            />
                          </CardBody>
                        </Colxx>
                      </Row>
                    </TabPane>
                    <TabPane tabId="5">
                      <Row>
                        <Colxx sm="12">
                          <CardBody>
                            <AudioSpeechAssessment
                              errors={errors}
                              formData={formData}
                              handleInputChange={handleInputChange}
                            />
                          </CardBody>
                        </Colxx>
                      </Row>
                    </TabPane>
                    <TabPane tabId="6">
                      <Row>
                        <Colxx sm="12">
                          <CardBody>
                            <NutritionAssessment
                              errors={errors}
                              formData={formData}
                              handleInputChange={handleInputChange}
                              handleKeyPress={handleKeyPress}
                            />
                          </CardBody>
                        </Colxx>
                      </Row>
                    </TabPane>
                    <TabPane tabId="7">
                      <Row>
                        <Colxx sm="12">
                          <CardBody>
                            <GeneralAssessment
                              errors={errors}
                              formData={formData}
                              handleInputChange={handleInputChange}
                            />
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

export default AddReportModal;
