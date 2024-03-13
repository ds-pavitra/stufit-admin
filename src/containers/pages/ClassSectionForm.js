import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, FormFeedback } from 'reactstrap';
import { Colxx } from 'components/common/CustomBootstrap';
import Select from 'react-select';

const ClassSectionForm = ({ errors, formData, handleInputChange }) => {
  const [classOption, setClassOption] = useState();
  const [section, setSection] = useState();

  const handleSelectChange = (key, selectedoption, setKey) => {
    setKey(selectedoption);
    key.forEach((ele, index) => {
      if (index === 1) {
        handleInputChange(ele, selectedoption.label);
      } else {
        handleInputChange(ele, selectedoption.value);
      }
    });
  };

  const classOptions = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
  ];

  const sectionOptions = [
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
    { value: 'D', label: 'D' },
    { value: 'E', label: 'E' },
    { value: 'F', label: 'F' },
    { value: 'G', label: 'G' },
  ];

  useEffect(() => {
    const selectedClass = classOptions.find(
      (option) => option.value.toString() === formData.class_id
    );
    if (selectedClass) {
      setClassOption(selectedClass);
    }

    const selectedSection = sectionOptions.find(
      (option) => option.value.toString() === formData.section_id
    );
    if (selectedSection) {
      setSection(selectedSection);
    }
  }, [formData.class_id, formData.section_id]);

  return (
    <Form className="d-flex">
      <Colxx xxs="12" md="12" className="mb-5">
        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" style={{ fontSize: '1rem' }}>
            Class
          </Label>
          <Select
            className="react-select mb-2 c-w-200"
            classNamePrefix="react-select"
            name="class_id"
            options={classOptions}
            value={classOption}
            onChange={(selectedOption) =>
              handleSelectChange(['class_id'], selectedOption, setClassOption)
            }
            invalid={!!errors.class_id}
          />
          <FormFeedback
            style={{
              display: errors.class_id ? 'block' : 'none',
              transform: 'translateX(6%) translateY(100%)',
            }}
          >
            Please select Class
          </FormFeedback>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" style={{ fontSize: '1rem' }}>
            Section
          </Label>
          <Select
            className="react-select mb-2 c-w-200"
            classNamePrefix="react-select"
            name="section_id"
            options={sectionOptions}
            value={section}
            onChange={(selectedOption) =>
              handleSelectChange(['section_id'], selectedOption, setSection)
            }
            invalid={!!errors.section_id}
          />
          <FormFeedback
            style={{
              display: errors.section_id ? 'block' : 'none',
              transform: 'translateX(7%) translateY(100%)',
            }}
          >
            Please select Section
          </FormFeedback>
        </FormGroup>
      </Colxx>
    </Form>
  );
};

export default ClassSectionForm;
