import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { Colxx } from 'components/common/CustomBootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';

const ProfileForm = ({
  formData,
  errors,
  handleInputChange,
  schoolOptions,
}) => {
  const [gender, setGender] = useState();
  const [school, setSchool] = useState();
  // const [classes, setClasses] = useState();
  // const [section, setSection] = useState();

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

  // const options = [
  //     { value: 'food', label: 'Food' },
  //     { value: 'beingfabulous', label: 'Being Fabulous', disabled: true },
  //     { value: 'reasonml', label: 'ReasonML' },
  //     { value: 'unicorns', label: 'Unicorns' },
  //     { value: 'kittens', label: 'Kittens' },
  // ];

  const genderOptions = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
  ];

  useEffect(() => {
    const selectedGender = genderOptions.find(
      (option) => option.label === formData.std_gender
    );
    if (selectedGender) {
      setGender(selectedGender);
    }

    const selectedSchool = schoolOptions.find(
      (option) => option.value.toString() === formData.school_id
    );
    if (selectedSchool) {
      setSchool(selectedSchool);
    }

    // const selectedClass = schoolOptions.find(option => option.value.toString() === formData.class_id);
    // if (selectedClass) {
    //     setClasses(selectedClass);
    // }

    // const selectedSection = schoolOptions.find(option => option.value.toString() === formData.section_id);
    // if (selectedSection) {
    //     setSection(selectedSection);
    // }
  }, [formData.std_gender, formData.school_id]);

  return (
    <Form className="d-flex">
      <Colxx xxs="12" md="6" className="mb-5">
        <FormGroup className="form-group tooltip-right-bottom">
          <Label style={{ fontSize: '1rem' }}>Student ID </Label>
          <Input
            className="mb-2"
            style={{ fontSize: '1rem' }}
            name="student_id"
            placeholder="Student ID"
            value={formData.student_id}
            onChange={(e) => handleInputChange('student_id', e.target.value)}
            invalid={!!errors.student_id}
          />
          <FormFeedback>{errors.student_id}</FormFeedback>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom">
          <Label style={{ fontSize: '1rem' }}>Student Name </Label>
          <Input
            className="mb-2"
            style={{ fontSize: '1rem' }}
            name="std_name"
            placeholder="Student Name"
            value={formData.std_name}
            onChange={(e) => handleInputChange('std_name', e.target.value)}
            invalid={!!errors.std_name}
          />
          <FormFeedback>{errors.std_name}</FormFeedback>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom">
          <Label style={{ fontSize: '1rem' }}> Gender </Label>
          <Select
            className="react-select"
            classNamePrefix="react-select"
            name="std_gender"
            options={genderOptions}
            value={gender}
            onChange={(selectedOption) =>
              handleSelectChange(['std_gender'], selectedOption, setGender)
            }
          />
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom">
          <Label style={{ fontSize: '1rem' }}>Email </Label>
          <Input
            className="mb-2"
            style={{ fontSize: '1rem' }}
            name="std_email"
            placeholder="Email"
            type="email"
            value={formData.std_email}
            onChange={(e) => handleInputChange('std_email', e.target.value)}
            invalid={!!errors.std_email}
          />
          <FormFeedback>{errors.std_email}</FormFeedback>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom">
          <Label style={{ fontSize: '1rem' }}>D.O.B </Label>
          <DatePicker
            selected={formData.std_dob ? new Date(formData.std_dob) : null}
            onChange={(date) => handleInputChange('std_dob', date)}
            dateFormat="dd/MM/yyyy"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            name="std_dob"
          />
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom">
          <Label style={{ fontSize: '1rem' }}>Mother Name </Label>
          <Input
            className="mb-2"
            style={{ fontSize: '1rem' }}
            name="std_mother_name"
            placeholder="Mother Name"
            value={formData.std_mother_name}
            onChange={(e) =>
              handleInputChange('std_mother_name', e.target.value)
            }
          />
        </FormGroup>

        {/* <FormGroup className="form-group tooltip-right-bottom">
                    <Label style={{ fontSize: '1rem' }}> Section </Label>
                    <Select
                        className="react-select"
                        classNamePrefix="react-select"
                        name="section_id"
                        options={sectionOptions}
                        value={section}
                        onChange={(selectedOption) => handleSelectChange(['section_id'],selectedOption, setSection)}
                    />
                </FormGroup> */}

        <FormGroup className="form-group tooltip-right-bottom">
          <Label style={{ fontSize: '1rem' }}>City </Label>
          <Input
            className="mb-2"
            style={{ fontSize: '1rem' }}
            name="std_city"
            placeholder="City"
            value={formData.std_city}
            onChange={(e) => handleInputChange('std_city', e.target.value)}
          />
        </FormGroup>
      </Colxx>

      <Colxx xxs="12" md="6" className="mb-5">
        <FormGroup className="form-group tooltip-right-bottom">
          <Label style={{ fontSize: '1rem' }}>School Name </Label>
          <Select
            className="react-select"
            classNamePrefix="react-select"
            name="school_id"
            options={schoolOptions}
            value={school}
            onChange={(selectedOption) =>
              handleSelectChange(
                ['school_id', 'school_name'],
                selectedOption,
                setSchool
              )
            }
            invalid={!!errors.school_id}
          />
          <FormFeedback
            style={{ display: errors.school_id ? 'block' : 'none' }}
          >
            {errors.school_id}
          </FormFeedback>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom">
          <Label style={{ fontSize: '1rem' }}>Address </Label>
          <Input
            className="mb-2"
            style={{ fontSize: '1rem' }}
            name="std_address"
            placeholder="Address"
            value={formData.std_address}
            onChange={(e) => handleInputChange('std_address', e.target.value)}
          />
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom">
          <Label style={{ fontSize: '1rem' }}>Emergency Contact No </Label>
          <Input
            className="mb-2"
            style={{ fontSize: '1rem' }}
            type="tel"
            name="std_contact"
            placeholder="989855666"
            value={formData.std_contact}
            onChange={(e) => handleInputChange('std_contact', e.target.value)}
            invalid={!!errors.std_contact}
          />
          <FormFeedback>{errors.std_contact}</FormFeedback>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom">
          <Label style={{ fontSize: '1rem' }}>Father Name</Label>
          <Input
            className="mb-2"
            style={{ fontSize: '1rem' }}
            type="tel"
            name="std_father_name"
            placeholder="Father Name"
            value={formData.std_father_name}
            onChange={(e) =>
              handleInputChange('std_father_name', e.target.value)
            }
          />
        </FormGroup>

        {/* <FormGroup className="form-group tooltip-right-bottom">
                    <Label style={{ fontSize: '1rem' }}>Class</Label>
                    <Select
                        className="react-select"
                        classNamePrefix="react-select"
                        name="class_id"
                        options={classOptions}
                        value={classes}
                        onChange={(selectedOption) => handleSelectChange(['class_id'],selectedOption, setClasses)}
                    />
                </FormGroup> */}

        <FormGroup className="form-group tooltip-right-bottom">
          <Label style={{ fontSize: '1rem' }}>Siblings </Label>
          <Input
            className="mb-2"
            style={{ fontSize: '1rem' }}
            type="number"
            placeholder=""
            name="std_siblings"
            value={formData.std_siblings}
            onChange={(e) => handleInputChange('std_siblings', e.target.value)}
          />
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom">
          <Label style={{ fontSize: '1rem' }}>State </Label>
          <Input
            className="mb-2"
            style={{ fontSize: '1rem' }}
            placeholder="State"
            name="std_state"
            value={formData.std_state}
            onChange={(e) => handleInputChange('std_state', e.target.value)}
          />
        </FormGroup>
      </Colxx>
    </Form>
  );
};

export default ProfileForm;
