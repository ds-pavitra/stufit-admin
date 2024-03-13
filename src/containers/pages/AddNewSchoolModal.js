import React, { useEffect, useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
  FormGroup,
  FormFeedback,
} from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { apiBaseUrl, apiRequestAsync } from 'constants/defaultValues';

// const generateRandomPassword = () => {
//     const characters =
//         'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[{]}|;:,<.>/?';
//     const passwordLength = 15;
//     const generatedPassword = Array.from({ length: passwordLength }, () => {
//         const randomIndex = Math.floor(Math.random() * characters.length);
//         return characters.charAt(randomIndex);
//     }).join('');
//     return generatedPassword;
// };

const AddNewSchoolModal = ({
  modalOpen,
  toggleModal,
  listData,
  roleupdate,
  setSuccessMessage,
  setFailureMessage,
}) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  const schoolListUrl = `${apiBaseUrl}/schools`;
  const [mode, setMode] = useState('Add');

  const [errors, setErrors] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    // username: '',
    // password: '',
  });

  const resetErrors = {
    name: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  };

  const resetForm = () => {
    setName('');
    setAddress('');
    setCity('');
    setState('');
    setPincode('');
    // setUsername('');
    // setPassword('');
  };

  async function getSchoolData() {
    const SchoolUpdateURL = `${schoolListUrl}/${roleupdate.roleId}`;
    apiRequestAsync('get', SchoolUpdateURL, null)
      .then((getschool) => {
        if (getschool.response.code === 200) {
          setName(getschool.data.name);
          setAddress(getschool.data.address);
          setCity(getschool.data.city);
          setState(getschool.data.state);
          setPincode(getschool.data.pincode);
        }
      })
      .catch((error) => {
        console.log(error);
        setFailureMessage(error.message);
      });
  }

  useEffect(() => {
    if (roleupdate.roleUpdate === 'Update' && roleupdate.roleId) {
      setMode('Update');
      setErrors(resetErrors);
      getSchoolData();
    } else {
      setMode('Add');
      resetForm();
      setErrors(resetErrors);
      console.log(mode);
    }
  }, [roleupdate]);

  // const handleGeneratePassword = () => {
  //     const newPassword = generateRandomPassword();
  //     setPassword(newPassword);
  // };

  function addSchoolSubmit(payload) {
    try {
      apiRequestAsync('post', schoolListUrl, payload)
        .then((addSchool) => {
          console.log(addSchool);

          if (addSchool.response.code === 200) {
            console.log(addSchool);
            setSuccessMessage('School Added Successfully');
            resetForm();
            listData();
            toggleModal();
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

  function updateSchoolSubmit(payload) {
    const updateSchoolURL = `${schoolListUrl}/${roleupdate.roleId}`;
    try {
      apiRequestAsync('put', updateSchoolURL, payload)
        .then((updateSchool) => {
          console.log(updateSchool);

          if (updateSchool.response.code === 200) {
            console.log(updateSchool);
            setSuccessMessage('School Updated Successfully');
            resetForm();
            listData();
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

  const handleSubmit = () => {
    // Perform validation here
    const newErrors = {
      name: !name ? 'School Name is required' : '',
      address: !address ? 'Address is required' : '',
      city: !city ? 'City is required' : '',
      state: !state ? 'State is required' : '',
      pincode: !pincode ? 'Pincode is required' : '',
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error !== '')) {
      return;
    }

    const formData = {
      name,
      address,
      city,
      state,
      pincode,
      // username,
      // password,
    };
    if (roleupdate.roleUpdate === 'Update' && roleupdate.roleId) {
      updateSchoolSubmit(formData);
    } else {
      addSchoolSubmit(formData);
    }
    console.log('Form Data:', formData);
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
    >
      <ModalHeader toggle={toggleModal}>
        <span>{roleupdate.roleUpdate} School</span>
      </ModalHeader>
      <ModalBody>
        <h5 className="d-block mb-4"> General Details</h5>
        <Form>
          <FormGroup className="form-group has-float-label tooltip-right-bottom">
            <Label style={{ fontSize: '1rem' }}>School Name </Label>
            <Input
              className="mb-2"
              style={{ fontSize: '1rem' }}
              value={name}
              onChange={(e) => setName(e.target.value)}
              invalid={!!errors.name}
            />
            <FormFeedback>{errors.name}</FormFeedback>
          </FormGroup>

          <FormGroup className="form-group has-float-label tooltip-right-bottom">
            <Label style={{ fontSize: '1rem' }}>Address </Label>
            <Input
              className="mb-2"
              style={{ fontSize: '1rem' }}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              invalid={!!errors.address}
            />
            <FormFeedback>{errors.address}</FormFeedback>
          </FormGroup>

          <FormGroup className="form-group has-float-label tooltip-right-bottom">
            <Label style={{ fontSize: '1rem' }}>City </Label>
            <Input
              className="mb-2"
              style={{ fontSize: '1rem' }}
              value={city}
              onChange={(e) => setCity(e.target.value)}
              invalid={!!errors.city}
            />
            <FormFeedback>{errors.city}</FormFeedback>
          </FormGroup>

          <FormGroup className="form-group has-float-label tooltip-right-bottom">
            <Label style={{ fontSize: '1rem' }}>State </Label>
            <Input
              className="mb-2"
              style={{ fontSize: '1rem' }}
              value={state}
              onChange={(e) => setState(e.target.value)}
              invalid={!!errors.state}
            />
            <FormFeedback>{errors.state}</FormFeedback>
          </FormGroup>

          <FormGroup className="form-group has-float-label tooltip-right-bottom">
            <Label style={{ fontSize: '1rem' }}>Pincode </Label>
            <Input
              className="mb-2"
              style={{ fontSize: '1rem' }}
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              invalid={!!errors.pincode}
            />
            <FormFeedback>{errors.pincode}</FormFeedback>
          </FormGroup>
        </Form>

        {/* <br />
                <h5 className='d-block mb-4'> Login Credentials</h5>

                <Form>
                    <FormGroup className="form-group has-float-label tooltip-right-bottom">
                        <Label style={{ fontSize: '1rem' }}>Username </Label>
                        <Input className='mb-2' value={username} onChange={(e) => setUsername(e.target.value)} invalid={!!errors.username} />
                        <FormFeedback>{errors.username}</FormFeedback>
                    </FormGroup>

                    <FormGroup className="form-group has-float-label tooltip-right-bottom">
                        <Label style={{ fontSize: '1rem' }}>Password</Label>
                        <Input className='mb-2' value={password} onChange={(e) => setPassword(e.target.value)} invalid={!!errors.password} />
                        <FormFeedback>{errors.password}</FormFeedback>
                        <Button size="xs" outline color="primary" onClick={handleGeneratePassword}>Generate Password</Button>
                    </FormGroup>
                </Form> */}
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

export default AddNewSchoolModal;
