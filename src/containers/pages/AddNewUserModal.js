import React, { useState, useEffect } from 'react';
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
import Select from 'react-select';
import { apiBaseUrl, apiRequestAsync } from 'constants/defaultValues';

const generateRandomPassword = () => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[{]}|;:,<.>/?';
  const passwordLength = 15;
  const generatedPassword = Array.from({ length: passwordLength }, () => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters.charAt(randomIndex);
  }).join('');
  return generatedPassword;
};

const getShortName = (name) => {
  const initials = name
    .split(' ')
    .map((word) => word.charAt(0))
    .join('');
  return initials.toUpperCase();
};

const AddNewUserModal = ({ modalOpen, toggleModal, listData, roleupdate, setSuccessMessage, setFailureMessage }) => {
  const [email, setEmail] = useState('');
  const [roleID, setRoleID] = useState();
  const [schoolID, setSchoolID] = useState();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [roleOptions, setRoleOptions] = useState();
  const [schoolOptions, setschoolOptions] = useState();
  const [mode, setMode] = useState('Add');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [image, setImage] = useState(null);
  // const [schoolVal, setSchoolVal] = useState([]);

  const handleChange = (options) => {
    const modifiedOptions = options.map((option) => ({
      ...option,
      label: option.label,
      value: option.value,
      shortName: getShortName(option.label), // Call a function to get short name
    }));
    setSelectedOptions(modifiedOptions);
    const selectedValuesArray = modifiedOptions.map((option) => option.value);
    setSchoolID(selectedValuesArray);
  };

  const resetForm = () => {
    setEmail('');
    setUsername('');
    setPassword('');
    setRoleID(null);
    setSchoolID(null);
    setImage(null);
  };

  // const roleidoptions = [
  //     { value: 'food', label: 'Food' },
  //     { value: 'beingfabulous', label: 'Being Fabulous', disabled: true },
  //     { value: 'reasonml', label: 'ReasonML' },
  //     { value: 'unicorns', label: 'Unicorns' },
  //     { value: 'kittens', label: 'Kittens' },
  // ];

  const [errors, setErrors] = useState({
    email: '',
    username: '',
    password: '',
    roleID: '',
    schoolID: '',
    image: '',
  });

  const resetErrors = {
    email: '',
    username: '',
    password: '',
    roleID: '',
    schoolID: '',
    image: '',
  };
  const roleListUrl = `${apiBaseUrl}/roles`;
  const schoolListUrl = `${apiBaseUrl}/schools`;
  const userListUrl = `${apiBaseUrl}/users`;

  async function getUserData() {
    const userUpdateURL = `${userListUrl}/${roleupdate.roleId}`;
    apiRequestAsync('get', userUpdateURL, null)
      .then((getUser) => {
        if (getUser.response.code === 200) {
          setEmail(getUser.data[0].email);
          setUsername(getUser.data[0].username);
          const userRole = getUser.data[0].roles;
          const selectedOption = roleOptions.find(
            (option) => option.label === userRole
          );
          if (selectedOption) {
            setRoleID(selectedOption);
          }

          const schooIDValues = getUser.data[0].school_id.split(',');
          if (schooIDValues) {
            const selectedSchoolValues = [];
            schooIDValues.forEach((schoolIdVal) => {
              const selectedSchoolOption = schoolOptions.find(
                (option) => option.value.toString() === schoolIdVal
              );
              if (selectedSchoolOption) {
                selectedSchoolValues.push(selectedSchoolOption);
              }
            });
            handleChange(selectedSchoolValues);
          }
        }
      })
      .catch((error) => {
        console.log(error);
        setFailureMessage(error.message);
      });
  }

  useEffect(() => {
    const fetchRoleIdData = async () => {
      try {
        const data = await apiRequestAsync('get', roleListUrl, null);
        const roleidoptions = data.data.map((role) => ({
          value: role.id,
          label: role.name,
        }));
        setRoleOptions(roleidoptions);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

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

    fetchRoleIdData();
    fetchSchoolIdData();
  }, []);

  useEffect(() => {
    if (roleupdate.roleUpdate === 'Update' && roleupdate.roleId) {
      setMode('Update');
      setSelectedOptions([]);
      setErrors(resetErrors);
      getUserData();
    } else {
      setMode('Add');
      resetForm();
      setSelectedOptions([]);
      setErrors(resetErrors);
      console.log(mode);
    }
  }, [roleupdate]);

  const handleGeneratePassword = () => {
    const newPassword = generateRandomPassword();
    setPassword(newPassword);
  };

  function addUserSubmit(payload) {
    try {
      apiRequestAsync('post', userListUrl, payload)
        .then((AddUser) => {
          console.log(AddUser);

          if (AddUser.response.code === 200) {
            console.log(AddUser);
            setSuccessMessage('User Added Successfully');
            resetForm();
            listData();
            toggleModal();
          }

          if (AddUser.response.code !== 200) {
            console.log(AddUser.message);
            setFailureMessage(AddUser.message);
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

  function updateUserSubmit(payload) {
    const updateUserURL = `${userListUrl}/${roleupdate.roleId}`;
    try {
      apiRequestAsync('put', updateUserURL, payload)
        .then((updateUser) => {
          if (updateUser.response.code === 200) {
            console.log(updateUser);
            setSuccessMessage('User update Successfully');
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
  const validateEmail = (mail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!mail) {
      return 'Email is required';
    }
    if (!emailRegex.test(mail)) {
      return 'Enter a valid email address';
    }
    return '';
  };
  const passwordMinLength = 6;

  const validatePassword = (pwd) => {
    if (!pwd) {
      return 'Password is required';
    }
    if (pwd.length < passwordMinLength) {
      return `Password must be at least ${passwordMinLength} characters`;
    }
    return '';
  };

  const handleSubmit = () => {
    let usernameError = '';
    let passwordError = '';

    if (roleupdate.roleUpdate === 'Update') {
      usernameError = '';
      passwordError = '';
    } else {
      usernameError = !username ? 'Username is required' : '';
      passwordError = validatePassword(password);
    }

    let imageError = '';
    if (roleupdate.roleUpdate === 'Update') {
      imageError = '';
    } else {
      imageError = !image ? 'Logo is required' : '';
    }

    const newErrors = {
      email: validateEmail(email),
      username: usernameError,
      password: passwordError,
      roleID:
        !roleID || (!roleID.value && roleID.value !== 0)
          ? 'Please Select Role'
          : '',
      schoolID:
        !schoolID || (!schoolID.length && schoolID[0].value !== 0)
          ? 'Please Select School'
          : '',
      image: imageError,
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error !== '')) {
      return;
    }

    const formData = {
      email,
      username,
      password,
      role_id: roleID.value,
      school_id: schoolID,
      image: image?.data ?? "",
      image_mime: image?.mimeType?.split("/")[1] ?? "",
    };
    if (mode === 'Update') {
      updateUserSubmit(formData);
    } else {
      addUserSubmit(formData);
    }
    console.log('Form Data:', formData);
    // toggleModal();
  };

  const handleCancel = () => {
    setMode('Add');
    resetForm();
    toggleModal();
  };

  const formatOptionLabel = ({ label, shortName }, { context }) => (
    <div>
      {context === 'menu' ? (
        <div>
          <div>{shortName}</div>
          <div style={{ fontSize: '80%' }}>{label}</div>
        </div>
      ) : (
        shortName
      )}
    </div>
  );

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    // Check if an image is selected and if the file type is jpg or png
    if (
      selectedImage &&
      !['image/jpeg', 'image/png'].includes(selectedImage.type)
    ) {
      setErrors({ image: 'Please upload a valid JPG or PNG image.' });
    } else {
      setErrors({}); // Clear any previous image validation errors

      // Convert the selected image to base64
      if (selectedImage) {
        const reader = new FileReader();
        reader.onloadend = () => {
          // Set the image state with base64 data and mimeType
          setImage({
            data: reader.result.split(',')[1], // Base64 data without 'data:image/png;base64,'
            mimeType: selectedImage.type,
          });
        };
        reader.readAsDataURL(selectedImage);
      } else {
        // Clear the image state if no file is selected
        setImage(null);
      }
    }
  };

  return (
    <Modal
      isOpen={modalOpen}
      toggle={toggleModal}
      wrapClassName="modal-right"
      backdrop="static"
    >
      <ModalHeader toggle={toggleModal}>
        <span> {roleupdate.roleUpdate} User</span>
      </ModalHeader>
      <ModalBody>
        {roleupdate.roleUpdate !== 'Update' && (
          <>
            <h5 className="d-block mb-4">Login Credentials</h5>
            <Form>
              <FormGroup className="form-group has-float-label tooltip-right-bottom">
                <Label style={{ fontSize: '1rem' }}>Username </Label>
                <Input
                  className="mb-2"
                  style={{ fontSize: '1rem' }}
                  value={username}
                  disabled={roleupdate.roleUpdate === 'Update'}
                  onChange={(e) => setUsername(e.target.value)}
                  invalid={!!errors.username}
                />
                <FormFeedback>{errors.username}</FormFeedback>
              </FormGroup>

              <FormGroup className="form-group has-float-label tooltip-right-bottom">
                <Label style={{ fontSize: '1rem' }}>Password</Label>
                <Input
                  className="mb-2"
                  style={{ fontSize: '1rem' }}
                  value={password}
                  disabled={roleupdate.roleUpdate === 'Update'}
                  onChange={(e) => setPassword(e.target.value)}
                  invalid={!!errors.password}
                />
                <FormFeedback>{errors.password}</FormFeedback>
                <Button
                  size="xs"
                  outline
                  color="primary"
                  disabled={roleupdate.roleUpdate === 'Update'}
                  onClick={handleGeneratePassword}
                >
                  Generate Password
                </Button>
              </FormGroup>
            </Form>
            <br />
          </>
        )}

        <h5 className="d-block mb-4"> Other Details</h5>
        <Form id="AddUserForm">
          <FormGroup className="form-group has-float-label tooltip-right-bottom">
            <Label style={{ fontSize: '1rem' }}>Email </Label>
            <Input
              className="mb-2"
              style={{ fontSize: '1rem' }}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              invalid={!!errors.email}
            />
            <FormFeedback>{errors.email}</FormFeedback>
          </FormGroup>

          <FormGroup className="form-group tooltip-right-bottom">
            <Label style={{ fontSize: '1rem' }}> Roles </Label>
            <Select
              className="react-select"
              classNamePrefix="react-select"
              name="selectRoleID"
              options={roleOptions}
              value={roleID}
              onChange={(selectedOption) => setRoleID(selectedOption)}
              isInvalid={!!errors.roleID}
            />
            <FormFeedback style={{ display: errors.roleID ? 'block' : 'none' }}>
              {errors.roleID}
            </FormFeedback>
          </FormGroup>

          <FormGroup className="form-group tooltip-right-bottom">
            <Label style={{ fontSize: '1rem' }}> Schools </Label>
            <Select
              className="react-select"
              classNamePrefix="react-select"
              isMulti
              name="selectSchoolID"
              options={schoolOptions}
              value={selectedOptions}
              onChange={(selectedOption) => handleChange(selectedOption)}
              getOptionLabel={({ label, shortName }) => (
                <div>
                  <div>{shortName}</div>
                  <div style={{ fontSize: '80%' }}>{label}</div>
                </div>
              )}
              formatOptionLabel={formatOptionLabel}
            />
            <FormFeedback
              style={{ display: errors.schoolID ? 'block' : 'none' }}
            >
              {errors.schoolID}
            </FormFeedback>
          </FormGroup>

          <FormGroup className="form-group tooltip-right-bottom">
            <Label style={{ fontSize: '1rem' }}>Upload Logo</Label>
            <Input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              invalid={!!errors.image}
            />
            <FormFeedback>{errors.image}</FormFeedback>
          </FormGroup>
        </Form>
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

export default AddNewUserModal;
