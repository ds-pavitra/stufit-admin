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

const AddNewSectionModal = ({ modalOpen, toggleModal }) => {
  const [sectionName, setSectionName] = useState('');
  const [errors, setErrors] = useState({
    sectionName: '',
  });

  const handleSubmit = () => {
    const newErrors = {
      sectionName: !sectionName ? 'Section Name is required' : '',
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some((error) => error !== '')) {
      return;
    }
    const formData = {
      sectionName,
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
        <span> Add Section</span>
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup className="form-group has-float-label tooltip-right-bottom">
            <Label style={{ fontSize: '14px' }}>Section Name </Label>
            <Input
              className="mb-2"
              value={sectionName}
              onChange={(e) => setSectionName(e.target.value)}
              invalid={!!errors.sectionName}
            />
            <FormFeedback>{errors.sectionName}</FormFeedback>
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

export default AddNewSectionModal;
