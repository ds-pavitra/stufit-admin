import React, { useState, useEffect } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
} from 'reactstrap';

import IntlMessages from 'helpers/IntlMessages';
import { Colxx } from 'components/common/CustomBootstrap';
import { apiBaseUrl, apiRequestAsync } from 'constants/defaultValues';
import { useFormData } from './FormDataContext';
import ProfileForm from './ProfileForm';

const AddNewStudentModal = ({
  modalOpen,
  toggleModal,
  roleupdate,
  listData,
  listReport,
  setSuccessMessage, 
  setFailureMessage,
}) => {
  const { formData, updateField } = useFormData();
  
  const [mode, setMode] = useState('Add');
  const [schoolOptions, setschoolOptions] = useState();
  // const [classOptions, setClassOptions] = useState();
  // const [sectionOptions, setSectionOptions] = useState();

  const resetForm = () => {
    updateField('student_id', '');
    updateField('std_code', '');
    updateField('school_name', '');
    updateField('std_name', '');
    updateField('std_gender', '');
    updateField('std_email', '');
    updateField('std_dob', '');
    updateField('std_mother_name', '');
    // updateField("section_id", "");
    updateField('std_city', '');
    updateField('school_id', '');
    updateField('std_address', '');
    updateField('std_contact', '');
    updateField('std_father_name', '');
    // updateField("class_id", "");
    updateField('std_siblings', '');
    updateField('std_state', '');
  };

  const schoolListUrl = `${apiBaseUrl}/schools`;
  // const classListUrl = `${apiBaseUrl}/classes`;
  // const sectionListUrl = `${apiBaseUrl}/sections`;

  const [errors, setErrors] = useState({
    std_name: '',
    school_id: '',
    std_contact: '',
    std_email: '',
    student_id: '',
  });

  const resetErrors = {
    std_name: '',
    school_id: '',
    std_contact: '',
    std_email: '',
    student_id: '',
  };

  const validateIndianContactNumber = (contactNumber) => {
    const indianPhoneRegex = /^[6-9]\d{9}$/;
    return indianPhoneRegex.test(contactNumber);
  };
  const handleInputChange = (field, value) => {
    updateField(field, value);

    setErrors({ ...errors, [field]: '' });
  };

  const studentsUrl = `${apiBaseUrl}/students`;
  async function getUserData() {
    const userUpdateURL = `${studentsUrl}/${roleupdate.roleId}`;
    apiRequestAsync('get', userUpdateURL, null)
      .then((getUser) => {
        if (getUser.response.code === 200) {
          console.log(getUser.data);
          Object.keys(formData).forEach((key) => {
            if (key in getUser.data) {
              const value = getUser.data[key];
              updateField(key, value);
            }
          });
          console.log(formData);
        }
      })
      .catch((error) => {
        console.log(error);
        setFailureMessage(error.message);
      });
  }

  useEffect(() => {
    const fetchSchoolIdData = async () => {
      try {
        const data = await apiRequestAsync('get', schoolListUrl, null);
        const schoolidoptions = data.data.map((school) => ({
          value: school.id,
          label: school.name,
        }));
        setschoolOptions(schoolidoptions);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // const fetchClassIdData = async () => {
    //     try {
    //         const data = await apiRequestAsync('get', classListUrl, null);
    //         const classidoptions = data.data.map((classes) => ({
    //             value: classes.id,
    //             label: classes.class_name,
    //         }));
    //         setClassOptions(classidoptions);
    //         console.log(data);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };

    // const fetchSectionIdData = async () => {
    //     try {
    //         const data = await apiRequestAsync('get', sectionListUrl, null);
    //         const sectionidoptions = data.data.map((sections) => ({
    //             value: sections.id,
    //             label: sections.section_name,
    //         }));
    //         setSectionOptions(sectionidoptions);
    //         console.log(data);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };
    fetchSchoolIdData();
    // fetchClassIdData();
    // fetchSectionIdData();
  }, []);

  useEffect(() => {
    if (roleupdate.roleUpdate === 'Update' && roleupdate.roleId) {
      setMode('Update');
      setErrors(resetErrors);
      resetForm();
      getUserData();
    } else {
      setMode('Add');
      resetForm();
      setErrors(resetErrors);
      console.log(mode);
    }
  }, [roleupdate]);

  function addStudentSubmit(payload) {
    try {
      apiRequestAsync('post', studentsUrl, payload)
        .then((AddStudent) => {
          console.log(AddStudent);

          if (AddStudent.response.code === 200) {
            console.log(AddStudent);
            setSuccessMessage('Student Added Successfully');
            resetForm();
            listData();
            listReport();
            toggleModal();
          }

          if (AddStudent.response.code !== 200) {
            console.log(AddStudent.message);
            setFailureMessage(AddStudent.message);
          }
          return null;
        })
        .catch((error) => {
          console.log(error);
          setFailureMessage(error.message);
        });
    } catch (error) {
      console.log(error);
      setFailureMessage(error.message);
    }
    return null;
  }

  function updateStudentSubmit(payload) {
    const updateUserURL = `${studentsUrl}/${roleupdate.roleId}`;
    try {
      apiRequestAsync('put', updateUserURL, payload)
        .then((updateStudent) => {
          if (updateStudent.response.code === 200) {
            console.log(updateStudent);
            setSuccessMessage('Student Updated Successfully');
            resetForm();
            listData();
            listReport();
            toggleModal();
            setMode('Add');
          }
          return null;
        })
        .catch((error) => {
          console.log(error);
          setFailureMessage(error.message);
        });
    } catch (error) {
      console.log(error);
      setFailureMessage(error.message);
    }
    return null;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let emailError = '';
  if (!formData.std_email) {
    emailError = 'Email is required';
  } else if (!emailRegex.test(formData.std_email)) {
    emailError = 'Enter a valid email address';
  }

  const handleSubmit = () => {
    const isContactNumberValid = validateIndianContactNumber(
      formData.std_contact
    );
    const newErrors = {
      std_name: !formData.std_name ? 'Student Name is required' : '',
      school_id: !formData.school_id ? 'School Name is required' : '',
      std_contact: isContactNumberValid ? '' : 'Contact number invalid',
      std_email: emailError,
      student_id: !formData.student_id ? 'Student ID is required' : '',
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error !== '')) {
      return;
    }

    if (mode === 'Update') {
      updateStudentSubmit(formData);
    } else {
      addStudentSubmit(formData);
    }
    console.log('Form Data:', formData);
    toggleModal();
  };

  const handleCancel = () => {
    setMode('Add');
    resetForm();
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
        <span> {roleupdate.roleUpdate} Student</span>
      </ModalHeader>
      <ModalBody>
        <Row>
          <Colxx xxs="12">
            <ProfileForm
              formData={formData}
              errors={errors}
              handleInputChange={handleInputChange}
              schoolOptions={schoolOptions}
              // classOptions={classOptions}
              // sectionOptions={sectionOptions}
            />
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

export default AddNewStudentModal;
