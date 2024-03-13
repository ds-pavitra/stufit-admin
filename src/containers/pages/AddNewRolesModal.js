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

const AddNewRolesModal = ({ modalOpen, toggleModal, listData, roleupdate, setSuccessMessage, setFailureMessage }) => {
  const [roles, setRoles] = useState('');
  const [errors, setErrors] = useState({
    roles: '',
  });
  const resetErrors = {
    roles: '',
  };
  const roleListUrl = `${apiBaseUrl}/roles`;
  const [mode, setMode] = useState('Add');

  async function getRoleData() {
    const roleUpdateURL = `${roleListUrl}/${roleupdate.roleId}`;
    apiRequestAsync('get', roleUpdateURL, null)
      .then((getRole) => {
        if (getRole.response.code === 200) {
          setRoles(getRole.data.name);
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
      getRoleData();
    } else {
      setMode('Add');
      setRoles('');
      setErrors(resetErrors);
      console.log(mode);
    }
  }, [roleupdate]);

  const resetForm = () => {
    setRoles('');
  };

  function addRoleSubmit(payload) {
    try {
      apiRequestAsync('post', roleListUrl, payload)
        .then((addRole) => {
          console.log(addRole);

          if (addRole.response.code === 200) {
            console.log(addRole);
            setSuccessMessage('Role Added Successfully');
            resetForm();
            listData();
            toggleModal();
          }

          // if (addRole.response.code !== 200) {
          //     console.log(addRole.message);
          //     setAlertColor("danger");
          //     setAlertMessage(addRole.message);
          //     setVisible(true);
          //     const t = setTimeout(() => setVisible(false), 3000);
          //     return () => clearTimeout(t);
          // }
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

  function updateRoleSubmit(payload) {
    const updateRoleURL = `${roleListUrl}/${roleupdate.roleId}`;
    try {
      apiRequestAsync('put', updateRoleURL, payload)
        .then((addRole) => {
          console.log(addRole);

          if (addRole.response.code === 200) {
            console.log(addRole);
            setSuccessMessage('Role update Successfully');
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
    const newErrors = {
      roles: !roles ? 'Roles is required' : '',
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some((error) => error !== '')) {
      return;
    }
    const formData = {
      name: roles,
    };
    if (roleupdate.roleUpdate === 'Update' && roleupdate.roleId) {
      updateRoleSubmit(formData);
    } else {
      addRoleSubmit(formData);
    }
    console.log('Form Data:', formData);
    // toggleModal();
  };

  const handleCancel = () => {
    setMode('Add');
    setRoles('');
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
        <span> {roleupdate.roleUpdate} Roles</span>
      </ModalHeader>

      <ModalBody>
        <Form>
          <FormGroup className="form-group has-float-label tooltip-right-bottom">
            <Label style={{ fontSize: '1rem' }}>Role Name </Label>
            <Input
              className="mb-2"
              style={{ fontSize: '1rem' }}
              value={roles}
              onChange={(e) => setRoles(e.target.value)}
              invalid={!!errors.roles}
            />
            <FormFeedback>{errors.roles}</FormFeedback>
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

export default AddNewRolesModal;
