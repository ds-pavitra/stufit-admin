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

const NutritionAssessment = ({
  errors,
  formData,
  handleInputChange,
  handleKeyPress,
}) => {
  return (
    <Form className="d-flex">
      <Colxx xxs="12" md="12" className="mb-5">
        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="PorYSkin">
            Pale Or Yellowish Skin
          </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="na_pale_yellowish_skin"
              id="PorYSkinYes"
              label="Yes"
              checked={formData.na_pale_yellowish_skin === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="na_pale_yellowish_skin"
              id="PorYSkinNo"
              label="No"
              checked={formData.na_pale_yellowish_skin === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="irregularHeartbeats">
            Irregular Heartbeats
          </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="na_irregular_heartbeats"
              id="irregularHeartbeatsYes"
              label="Yes"
              checked={formData.na_irregular_heartbeats === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="na_irregular_heartbeats"
              id="irregularHeartbeatsNo"
              label="No"
              checked={formData.na_irregular_heartbeats === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="shortnessOfBreath">
            Shortness Of Breath
          </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="na_shortness_of_breath"
              id="shortnessOfBreathYes"
              label="Yes"
              checked={formData.na_shortness_of_breath === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="na_shortness_of_breath"
              id="shortnessOfBreathNo"
              label="No"
              checked={formData.na_shortness_of_breath === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="headedness">
            Dizziness/ Light Headedness
          </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="na_dizziness"
              id="headednessYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="na_dizziness"
              id="headednessNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="coldHandsFeet">
            Cold Hands / Feet
          </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="na_cold_hands_feet"
              id="coldHandsFeetYes"
              label="Yes"
              checked={formData.na_cold_hands_feet === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="na_cold_hands_feet"
              id="coldHandsFeetNo"
              label="No"
              checked={formData.na_cold_hands_feet === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="anemia">
            Anemia
          </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="na_anemia"
              id="anemiaSymptomatic"
              label="Symptomatic"
              checked={formData.na_anemia === 'Symptomatic'}
              value="Symptomatic"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="na_anemia"
              id="anemiaNo"
              label="No"
              checked={formData.na_anemia === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="fatigue">
            Fatigue
          </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="na_fatigue"
              id="fatigueYes"
              label="Yes"
              checked={formData.na_fatigue === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="na_fatigue"
              id="fatigueNo"
              label="No"
              checked={formData.na_fatigue === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="vitaminD">
            Vitamin D Deficiency
          </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="na_vitamin_d_deficiency"
              id="vitaminDSymptomatic"
              label="Symptomatic"
              checked={formData.na_vitamin_d_deficiency === 'Symptomatic'}
              value="Symptomatic"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="na_vitamin_d_deficiency"
              id="vitaminDNo"
              label="No"
              checked={formData.na_vitamin_d_deficiency === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="obesity">
            Obesity
          </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="na_obesity"
              id="obesityYes"
              label="Yes"
              checked={formData.na_obesity === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="na_obesity"
              id="obesityNo"
              label="No"
              checked={formData.na_obesity === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Ideal Body Weight (Kg) </Label>
          <Input
            className="mb-2 c-w-200"
            placeholder="Ideal Body Weight"
            name="na_ideal_body_weight"
            value={formData.na_ideal_body_weight}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            onKeyPress={(e) => handleKeyPress(e, /^[0-9+\-/]*$/)}
            invalid={!!errors.na_ideal_body_weight}
          />
          <FormFeedback
            style={{ transform: 'translateX(-151%) translateY(100%)' }}
          >
            {errors.na_ideal_body_weight}
          </FormFeedback>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">
            Ideal Calories Estimation / Day{' '}
          </Label>
          <Input
            className="mb-2 c-w-200"
            placeholder="KCAL/DAY"
            name="na_ideal_calories"
            value={formData.na_ideal_calories}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            invalid={!!errors.na_ideal_calories}
          />
          <FormFeedback
            style={{ transform: 'translateX(-175%) translateY(100%)' }}
          >
            {errors.na_ideal_calories}
          </FormFeedback>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Advice </Label>
          <Input
            className="mb-2 c-w-500"
            placeholder="Advice"
            name="na_advice"
            value={formData.na_advice}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            invalid={!!errors.na_advice}
          />
          <FormFeedback style={{ transform: 'translateY(100%)' }}>
            {errors.na_advice}
          </FormFeedback>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Remark </Label>
          <Input
            className="mb-2 c-w-500"
            placeholder="Remark"
            name="na_remark"
            value={formData.na_remark}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            invalid={!!errors.na_remark}
          />
          <FormFeedback style={{ transform: 'translateY(100%)' }}>
            {errors.na_remark}
          </FormFeedback>
        </FormGroup>
      </Colxx>
    </Form>
  );
};

export default NutritionAssessment;
