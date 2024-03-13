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

const PhysicalAssessment = ({
  errors,
  formData,
  handleInputChange,
  handleKeyPress,
}) => {
  return (
    <Form className="d-flex">
      <Colxx xxs="12" md="12" className="mb-5">
        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Height </Label>
          <Input
            className="mb-2 c-w-200"
            placeholder="Height in cm"
            name="pa_height"
            value={formData.pa_height}
            onChange={(e) => handleInputChange('pa_height', e.target.value)}
            onKeyPress={(e) => handleKeyPress(e, /^[0-9+\-/]*$/)}
            invalid={!!errors.pa_height}
          />
          <FormFeedback
            style={{ transform: 'translateX(-225%) translateY(100%)' }}
          >
            {errors.pa_height}
          </FormFeedback>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Weight </Label>
          <Input
            className="mb-2 c-w-200"
            placeholder="Weight in kg"
            name="pa_weight"
            value={formData.pa_weight}
            onChange={(e) => handleInputChange('pa_weight', e.target.value)}
            onKeyPress={(e) => handleKeyPress(e, /^[0-9+\-/]*$/)}
            invalid={!!errors.pa_weight}
          />
          <FormFeedback
            style={{ transform: 'translateX(-217%) translateY(100%)' }}
          >
            {errors.pa_weight}
          </FormFeedback>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">
            BMI (kg/m<sup style={{ fontSize: '0.5em' }}>2</sup>){' '}
          </Label>
          <Input
            className="mb-2 c-w-200"
            placeholder="BMI (kg/m2)"
            name="pa_bmi"
            value={formData.pa_bmi}
            onChange={(e) => handleInputChange('pa_bmi', e.target.value)}
            onKeyPress={(e) => handleKeyPress(e, /^[0-9+\-/]*$/)}
            invalid={!!errors.pa_bmi}
          />
          <FormFeedback
            style={{ transform: 'translateX(-252%) translateY(100%)' }}
          >
            {errors.pa_bmi}
          </FormFeedback>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Body Temperature </Label>
          <Input
            className="mb-2 c-w-200"
            placeholder="Temperature"
            name="pa_body_temp"
            value={formData.pa_body_temp}
            onChange={(e) => handleInputChange('pa_body_temp', e.target.value)}
            onKeyPress={(e) => handleKeyPress(e, /^[0-9+\-/]*$/)}
            invalid={!!errors.pa_body_temp}
          />
          <FormFeedback
            style={{ transform: 'translateX(-189%) translateY(100%)' }}
          >
            {errors.pa_body_temp}
          </FormFeedback>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Blood Pressure</Label>
          <div className="d-flex">
            <Input
              className="mb-2 c-w-200"
              placeholder="Systolic"
              name="pa_systolic_blood_pressure"
              value={formData.pa_systolic_blood_pressure}
              onChange={(e) =>
                handleInputChange('pa_systolic_blood_pressure', e.target.value)
              }
              onKeyPress={(e) => handleKeyPress(e, /^[0-9+\-/]*$/)}
              invalid={!!errors.pa_systolic_blood_pressure}
            />
            <FormFeedback
              style={{ transform: 'translateX(-139%) translateY(117%)' }}
            >
              {errors.pa_systolic_blood_pressure}
            </FormFeedback>
            <Input
              className="mb-2 c-w-200 ml-2"
              placeholder="Diastolic"
              name="pa_diastolic_blood_pressure"
              value={formData.pa_diastolic_blood_pressure}
              onChange={(e) =>
                handleInputChange('pa_diastolic_blood_pressure', e.target.value)
              }
              onKeyPress={(e) => handleKeyPress(e, /^[0-9+\-/]*$/)}
              invalid={!!errors.pa_diastolic_blood_pressure}
            />
            <FormFeedback
              style={{ transform: 'translateX(-34%) translateY(117%)' }}
            >
              {errors.pa_diastolic_blood_pressure}
            </FormFeedback>
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Blood Group </Label>
          <Input
            className="mb-2 c-w-200"
            placeholder="Blood Group"
            name="pa_blood_group"
            value={formData.pa_blood_group}
            onChange={(e) =>
              handleInputChange('pa_blood_group', e.target.value)
            }
            invalid={!!errors.pa_blood_group}
          />
          <FormFeedback
            style={{ transform: 'translateX(-180%) translateY(100%)' }}
          >
            {errors.pa_blood_group}
          </FormFeedback>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Pulse Rate </Label>
          <Input
            className="mb-2 c-w-200"
            placeholder="Eg. 85"
            name="pa_pulse_rate"
            value={formData.pa_pulse_rate}
            onChange={(e) => handleInputChange('pa_pulse_rate', e.target.value)}
            onKeyPress={(e) => handleKeyPress(e, /^[0-9+\-/]*$/)}
            invalid={!!errors.pa_pulse_rate}
          />
          <FormFeedback
            style={{ transform: 'translateX(-195%) translateY(100%)' }}
          >
            {errors.pa_pulse_rate}
          </FormFeedback>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Oxygen Saturation </Label>
          <Input
            className="mb-2 c-w-200"
            placeholder="Eg. 95%"
            name="pa_oxygen"
            value={formData.pa_oxygen}
            onChange={(e) => handleInputChange('pa_oxygen', e.target.value)}
            onKeyPress={(e) => handleKeyPress(e, /^[0-9+\-/]*$/)}
            invalid={!!errors.pa_oxygen}
          />
          <FormFeedback
            style={{ transform: 'translateX(-213%) translateY(100%)' }}
          >
            {errors.pa_oxygen}
          </FormFeedback>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Posture </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="pa_posture"
              id="good"
              label="Good"
              value="Good"
              checked={formData.pa_posture === 'Good'}
              onChange={() => handleInputChange('pa_posture', 'Good')}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="pa_posture"
              id="worst"
              label="Worst"
              value="Worst"
              checked={formData.pa_posture === 'Worst'}
              onChange={() => handleInputChange('pa_posture', 'Worst')}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="pa_posture"
              id="bad"
              label="Bad"
              value="Bad"
              checked={formData.pa_posture === 'Bad'}
              onChange={() => handleInputChange('pa_posture', 'Bad')}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Upper Limb ROM </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="pa_upper_limb_range_of_motion"
              id="normal"
              label="Normal"
              checked={formData.pa_upper_limb_range_of_motion === 'Normal'}
              value="Normal"
              onChange={(e) =>
                handleInputChange(
                  'pa_upper_limb_range_of_motion',
                  e.target.value
                )
              }
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="pa_upper_limb_range_of_motion"
              id="restricted"
              label="Restricted"
              checked={formData.pa_upper_limb_range_of_motion === 'Restricted'}
              value="Restricted"
              onChange={(e) =>
                handleInputChange(
                  'pa_upper_limb_range_of_motion',
                  e.target.value
                )
              }
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="pa_upper_limb_range_of_motion"
              id="hypermoves"
              label="Hypermoves"
              checked={formData.pa_upper_limb_range_of_motion === 'Hypermoves'}
              value="Hypermoves"
              onChange={(e) =>
                handleInputChange(
                  'pa_upper_limb_range_of_motion',
                  e.target.value
                )
              }
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Neck Rom </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="pa_neck_form"
              id="normal0"
              label="Normal"
              checked={formData.pa_neck_form === 'Normal'}
              value="Normal"
              onChange={(e) =>
                handleInputChange('pa_neck_form', e.target.value)
              }
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="pa_neck_form"
              id="restricted0"
              label="Restricted"
              checked={formData.pa_neck_form === 'Restricted'}
              value="Restricted"
              onChange={(e) =>
                handleInputChange('pa_neck_form', e.target.value)
              }
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="pa_neck_form"
              id="hypermoves0"
              label="Hypermoves"
              checked={formData.pa_neck_form === 'Hypermoves'}
              value="Hypermoves"
              onChange={(e) =>
                handleInputChange('pa_neck_form', e.target.value)
              }
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Lower Limb Rom </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="pa_lower_limb_range_of_motion"
              id="normal1"
              label="Normal"
              checked={formData.pa_lower_limb_range_of_motion === 'Normal'}
              value="Normal"
              onChange={(e) =>
                handleInputChange(
                  'pa_lower_limb_range_of_motion',
                  e.target.value
                )
              }
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="pa_lower_limb_range_of_motion"
              id="restricted1"
              label="Restricted"
              checked={formData.pa_lower_limb_range_of_motion === 'Restricted'}
              value="Restricted"
              onChange={(e) =>
                handleInputChange(
                  'pa_lower_limb_range_of_motion',
                  e.target.value
                )
              }
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="pa_lower_limb_range_of_motion"
              id="hypermoves1"
              label="Hypermoves"
              checked={formData.pa_lower_limb_range_of_motion === 'Hypermoves'}
              value="Hypermoves"
              onChange={(e) =>
                handleInputChange(
                  'pa_lower_limb_range_of_motion',
                  e.target.value
                )
              }
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="pa_lower_limb_range_of_motion"
              id="noRom"
              label="No"
              checked={formData.pa_lower_limb_range_of_motion === 'No'}
              value="No"
              onChange={(e) =>
                handleInputChange(
                  'pa_lower_limb_range_of_motion',
                  e.target.value
                )
              }
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Dystrophy </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="pa_dystrophy"
              id="dYes"
              label="Yes"
              checked={formData.pa_dystrophy === 'Yes'}
              value="Yes"
              onChange={(e) =>
                handleInputChange('pa_dystrophy', e.target.value)
              }
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="pa_dystrophy"
              id="dNo"
              label="No"
              checked={formData.pa_dystrophy === 'No'}
              value="No"
              onChange={(e) =>
                handleInputChange('pa_dystrophy', e.target.value)
              }
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Atrophy </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="pa_atrophy"
              id="aYes"
              label="Yes"
              checked={formData.pa_atrophy === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange('pa_atrophy', e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="pa_atrophy"
              id="aNo"
              label="No"
              checked={formData.pa_atrophy === 'No'}
              value="No"
              onChange={(e) => handleInputChange('pa_atrophy', e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Endurance </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="pa_endurance"
              id="enduranceGood"
              label="Good"
              checked={formData.pa_endurance === 'Good'}
              value="Good"
              onChange={(e) =>
                handleInputChange('pa_endurance', e.target.value)
              }
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="pa_endurance"
              id="enduranceNormal"
              label="Normal"
              checked={formData.pa_endurance === 'Average'}
              value="Average"
              onChange={(e) =>
                handleInputChange('pa_endurance', e.target.value)
              }
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="pa_endurance"
              id="enduranceWeak"
              label="Weak"
              checked={formData.pa_endurance === 'Weak'}
              value="Weak"
              onChange={(e) =>
                handleInputChange('pa_endurance', e.target.value)
              }
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Stamina </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="pa_stamina"
              id="staminaGood"
              label="Good"
              checked={formData.pa_stamina === 'Good'}
              value="Good"
              onChange={(e) => handleInputChange('pa_stamina', e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="pa_stamina"
              id="staminaNormal"
              label="Normal"
              checked={formData.pa_stamina === 'Average'}
              value="Average"
              onChange={(e) => handleInputChange('pa_stamina', e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="pa_stamina"
              id="staminaWeak"
              label="Weak"
              checked={formData.pa_stamina === 'Weak'}
              value="Weak"
              onChange={(e) => handleInputChange('pa_stamina', e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Pain </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="pa_pain"
              id="painMuscular"
              label="Muscular"
              checked={formData.pa_pain === 'Muscular'}
              value="Muscular"
              onChange={(e) => handleInputChange('pa_pain', e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="pa_pain"
              id="painNormal"
              label="Normal"
              checked={formData.pa_pain === 'Normal'}
              value="Normal"
              onChange={(e) => handleInputChange('pa_pain', e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="pa_pain"
              id="painWeak"
              label="Weak"
              checked={formData.pa_pain === 'Weak'}
              value="Weak"
              onChange={(e) => handleInputChange('pa_pain', e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="pa_pain"
              id="painNo"
              label="No Pain"
              checked={formData.pa_pain === 'No Pain'}
              value="No Pain"
              onChange={(e) => handleInputChange('pa_pain', e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Spasm </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="pa_spasm"
              id="spasmMild"
              label="Mild"
              checked={formData.pa_spasm === 'Mild'}
              value="Mild"
              onChange={(e) => handleInputChange('pa_spasm', e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="pa_spasm"
              id="spasmHeavy"
              label="Heavy"
              checked={formData.pa_spasm === 'Heavy'}
              value="Heavy"
              onChange={(e) => handleInputChange('pa_spasm', e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="pa_spasm"
              id="spasmNo"
              label="No Spasm"
              checked={formData.pa_spasm === 'No Spasm'}
              value="No Spasm"
              onChange={(e) => handleInputChange('pa_spasm', e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Advice </Label>
          <Input
            className="mb-2 c-w-500"
            placeholder="Advice"
            name="advice"
            value={formData.pa_advice}
            onChange={(e) => handleInputChange('pa_advice', e.target.value)}
            invalid={!!errors.pa_advice}
          />
          <FormFeedback style={{ transform: 'translateY(100%)' }}>
            {errors.pa_advice}
          </FormFeedback>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Remark </Label>
          <Input
            className="mb-2 c-w-500"
            placeholder="Remark"
            name="remark"
            value={formData.pa_remark}
            onChange={(e) => handleInputChange('pa_remark', e.target.value)}
            invalid={!!errors.pa_remark}
          />
          <FormFeedback style={{ transform: 'translateY(100%)' }}>
            {errors.pa_remark}
          </FormFeedback>
        </FormGroup>
      </Colxx>
    </Form>
  );
};

export default PhysicalAssessment;
