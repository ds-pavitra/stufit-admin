import React, { useState } from 'react';
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

const AddNewClassModal = ({ modalOpen, toggleModal }) => {
  const [addUpdateclassName, setAddUpdateclassName] = useState('');
  const [errors, setErrors] = useState({
    addUpdateclassName: '',
  });

  const handleSubmit = () => {
    const newErrors = {
      addUpdateclassName: !addUpdateclassName ? 'Class Name is required' : '',
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some((error) => error !== '')) {
      return;
    }
    const formData = {
      addUpdateclassName,
    };
    console.log('Form Data:', formData);
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
        <span> Add Class</span>
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup className="form-group has-float-label tooltip-right-bottom">
            <Label style={{ fontSize: '14px' }}>Class Name </Label>
            <Input
              className="mb-2"
              value={addUpdateclassName}
              onChange={(e) => setAddUpdateclassName(e.target.value)}
              invalid={!!errors.addUpdateclassName}
            />
            <FormFeedback>{errors.addUpdateclassName}</FormFeedback>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" outline onClick={toggleModal}>
          <IntlMessages id="pages.cancel" />
        </Button>
        <Button color="primary" onClick={handleSubmit}>
          <IntlMessages id="pages.submit" />
        </Button>{' '}
      </ModalFooter>
    </Modal>
  );
};

export default AddNewClassModal;
