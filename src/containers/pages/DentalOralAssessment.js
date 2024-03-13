import React from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  CustomInput,
  FormFeedback,
} from 'reactstrap';
import { Colxx } from 'components/common/CustomBootstrap';

const DentalOralAssessment = ({ errors, formData, handleInputChange }) => {
  return (
    <Form className="d-flex">
      <Colxx xxs="12" md="12" className="mb-5">
        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Dental Caries </Label>
          <div className="d-flex cursor-pointer ">
            <CustomInput
              type="radio"
              name="da_caries"
              id="da_cariesInitial"
              label="Initial"
              checked={formData.da_caries === 'Initial'}
              value="Initial"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="da_caries"
              id="da_cariesModerate"
              label="Moderate"
              checked={formData.da_caries === 'Moderate'}
              value="Moderate"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="da_caries"
              id="da_cariesAverage"
              label="Average"
              checked={formData.da_caries === 'Average'}
              value="Average"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="da_caries"
              id="da_cariesNoCaries"
              label="No Caries"
              checked={formData.da_caries === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Orthodontic Correction </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="da_orthodontic_correction"
              id="orthoCorrectionAdvised"
              label="Advised"
              checked={formData.da_orthodontic_correction === 'Advised'}
              value="Advised"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="da_orthodontic_correction"
              id="orthoCorrectionNotAdvised"
              label="Not Advised"
              checked={formData.da_orthodontic_correction === 'Not Advised'}
              value="Not Advised"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Extraction </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="da_extraction"
              id="da_extractionAdvised"
              label="Advised"
              checked={formData.da_extraction === 'Advised'}
              value="Advised"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="da_extraction"
              id="da_extractionNotAdvised"
              label="Not Advised"
              checked={formData.da_extraction === 'Not Advised'}
              value="Not Advised"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Space Maintainer </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="da_space_maintainer"
              id="spaceMaintainerAdvised"
              label="Advised"
              checked={formData.da_space_maintainer === 'Advised'}
              value="Advised"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="da_space_maintainer"
              id="spaceMaintainerNotAdvised"
              label="Not Advised"
              checked={formData.da_space_maintainer === 'Not Advised'}
              value="Not Advised"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Oral Hygiene Status </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="da_oral_hygiene_status"
              id="oralHygieneGood"
              label="Good"
              checked={formData.da_oral_hygiene_status === 'Good'}
              value="Good"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="da_oral_hygiene_status"
              id="oralHygieneBad"
              label="Bad"
              checked={formData.da_oral_hygiene_status === 'Bad'}
              value="Bad"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="da_oral_hygiene_status"
              id="oralHygieneAverage"
              label="Average"
              checked={formData.da_oral_hygiene_status === 'Average'}
              value="Average"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Sugar Intake</Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="da_sugar_intake"
              id="sugarIntakeYes"
              label="Yes"
              checked={formData.da_sugar_intake === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="da_sugar_intake"
              id="sugarIntakeNo"
              label="No"
              checked={formData.da_sugar_intake === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">No Of Time Brushed </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="da_brushing"
              id="noOfTimeBrushedOnce"
              label="Once Daily"
              checked={formData.da_brushing === 'Once Daily'}
              value="Once Daily"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="da_brushing"
              id="noOfTimeBrushedTwice"
              label="Twice Daily"
              checked={formData.da_brushing === 'Twice Daily'}
              value="Twice Daily"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="da_brushing"
              id="noOfTimeBrushedNo"
              label="Not Brushed"
              checked={formData.da_brushing === 'Not Brushed'}
              value="Not Brushed"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">
            Malpositioned Tooth / Teeth
          </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="da_malpositioned_teeth"
              id="MalpositionedTeethYes"
              label="Yes"
              checked={formData.da_malpositioned_teeth === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="da_malpositioned_teeth"
              id="MalpositionedTeethNo"
              label="No"
              checked={formData.da_malpositioned_teeth === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Advice </Label>
          <Input
            className="mb-2 c-w-500"
            placeholder="Advice"
            name="da_advise"
            value={formData.da_advise}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            invalid={!!errors.da_advise}
          />
          <FormFeedback style={{ transform: 'translateY(100%)' }}>
            {errors.da_advise}
          </FormFeedback>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Remark </Label>
          <Input
            className="mb-2 c-w-500"
            placeholder="Remark"
            name="da_remark"
            value={formData.da_remark}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            invalid={!!errors.da_remark}
          />
          <FormFeedback style={{ transform: 'translateY(100%)' }}>
            {errors.da_remark}
          </FormFeedback>
        </FormGroup>
      </Colxx>
    </Form>
  );
};

export default DentalOralAssessment;
