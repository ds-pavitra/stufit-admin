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

const EyeVisionAssessment = ({
  errors,
  formData,
  handleInputChange,
  handleKeyPress,
}) => {
  return (
    <Form className="d-flex">
      <Colxx xxs="12" md="12" className="mb-5">
        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Vision </Label>
          <div className="d-flex">
            <Input
              className="mb-2 c-w-200 ml-2"
              placeholder="Left Vision"
              name="va_left_eye_vision"
              value={formData.va_left_eye_vision}
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              onKeyPress={(e) => handleKeyPress(e, /^[0-9+\-/]*$/)}
              invalid={!!errors.va_left_eye_vision}
            />
            <FormFeedback
              style={{ transform: 'translateX(-165%) translateY(117%)' }}
            >
              {errors.va_left_eye_vision}
            </FormFeedback>
            <Input
              className="mb-2 c-w-200 ml-2"
              placeholder="Right Vision"
              name="va_right_eye_vision"
              value={formData.va_right_eye_vision}
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              onKeyPress={(e) => handleKeyPress(e, /^[0-9+\-/]*$/)}
              invalid={!!errors.va_right_eye_vision}
            />
            <FormFeedback
              style={{ transform: 'translateX(-42%) translateY(117%)' }}
            >
              {errors.va_right_eye_vision}
            </FormFeedback>
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Refraction </Label>
          <div className="d-flex">
            <Input
              className="mb-2 c-w-200 ml-2"
              placeholder="Refraction"
              name="va_refraction"
              value={formData.va_refraction}
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              invalid={!!errors.va_refraction}
            />
            <FormFeedback
              style={{ transform: 'translateX(-189%) translateY(117%)' }}
            >
              {errors.va_refraction}
            </FormFeedback>
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Color Vision </Label>
          <div className="d-flex">
            <div className="d-flex c-w-200 ml-2">
              <CustomInput
                type="radio"
                name="va_colour_vision"
                id="colorGoodL"
                label="Good"
                checked={formData.va_colour_vision === 'Good'}
                value="Good"
                onChange={(e) =>
                  handleInputChange(e.target.name, e.target.value)
                }
              />
              <CustomInput
                className="ml-2"
                type="radio"
                name="va_colour_vision"
                id="colorBadL"
                label="Bad"
                checked={formData.va_colour_vision === 'Bad'}
                value="Bad"
                onChange={(e) =>
                  handleInputChange(e.target.name, e.target.value)
                }
              />
            </div>
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Disease </Label>
          <div className="d-flex">
            <div className="d-flex c-w-200 ml-2">
              <CustomInput
                type="radio"
                name="va_eye_disease"
                id="diseaseYesLeft"
                label="Yes"
                checked={formData.va_eye_disease === 'Yes'}
                value="Yes"
                onChange={(e) =>
                  handleInputChange(e.target.name, e.target.value)
                }
              />
              <CustomInput
                className="ml-2"
                type="radio"
                name="va_eye_disease"
                id="diseaseNoLeft"
                label="No"
                checked={formData.va_eye_disease === 'No Disease'}
                value="No Disease"
                onChange={(e) =>
                  handleInputChange(e.target.name, e.target.value)
                }
              />
            </div>
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Squint </Label>
          <div className="d-flex c-w-200 ml-2">
            <CustomInput
              type="radio"
              name="va_squint"
              id="squintLeft"
              label="Yes"
              checked={formData.va_squint === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="va_squint"
              id="squintNoLeft"
              label="No"
              checked={formData.va_squint === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Ptosis </Label>
          <div className="d-flex c-w-200 ml-2">
            <CustomInput
              type="radio"
              name="va_ptosis"
              id="ptosisLeft"
              label="Yes"
              checked={formData.va_ptosis === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="va_ptosis"
              id="ptosisNoLeft"
              label="No"
              checked={formData.va_ptosis === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Nystagmus </Label>
          <div className="d-flex c-w-200 ml-2">
            <CustomInput
              type="radio"
              name="va_nystagmus"
              id="nystagmusLeft"
              label="Yes"
              checked={formData.va_nystagmus === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="va_nystagmus"
              id="nystagmusNoLeft"
              label="No"
              checked={formData.va_nystagmus === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Cataract</Label>
          <div className="d-flex c-w-200 ml-2">
            <CustomInput
              type="radio"
              name="va_cataract"
              id="cataractLeft"
              label="Yes"
              checked={formData.va_cataract === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="va_cataract"
              id="cataractNoLeft"
              label="No"
              checked={formData.va_cataract === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Micro Eye Ball </Label>
          <div className="d-flex c-w-200 ml-2">
            <CustomInput
              type="radio"
              name="va_micro_eye_ball"
              id="microEyeBallYesLeft"
              label="Yes"
              checked={formData.va_micro_eye_ball === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="va_micro_eye_ball"
              id="microEyeBallNoLeft"
              label="No"
              checked={formData.va_micro_eye_ball === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Itching </Label>
          <div className="d-flex c-w-200 ml-2">
            <CustomInput
              type="radio"
              name="va_itching"
              id="itchingYesLeft"
              label="Yes"
              checked={formData.va_itching === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="va_itching"
              id="itchingNoLeft"
              label="No"
              checked={formData.va_itching === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Dryness </Label>
          <div className="d-flex c-w-200 ml-2">
            <CustomInput
              type="radio"
              name="va_dryness"
              id="drynessLeft"
              label="Yes"
              checked={formData.va_dryness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="va_dryness"
              id="drynessNoLeft"
              label="No"
              checked={formData.va_dryness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Frequent Tears </Label>
          <div className="d-flex c-w-200 ml-2">
            <CustomInput
              type="radio"
              name="va_frequent_tear"
              id="frequentTearsYesLeft"
              label="Yes"
              checked={formData.va_frequent_tear === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="va_frequent_tear"
              id="frequentTearsNoLeft"
              label="No"
              checked={formData.va_frequent_tear === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Red Eyes </Label>
          <div className="d-flex c-w-200 ml-2">
            <CustomInput
              type="radio"
              name="va_red_eyes"
              id="redEyesYesLeft"
              label="Yes"
              checked={formData.va_red_eyes === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="va_red_eyes"
              id="redEyesNoLeft"
              label="No"
              checked={formData.va_red_eyes === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Yellowish Eyes </Label>
          <div className="d-flex c-w-200 ml-2">
            <CustomInput
              type="radio"
              name="va_yellowish_eyes"
              id="yellowishEyesYesLeft"
              label="Yes"
              checked={formData.va_yellowish_eyes === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="va_yellowish_eyes"
              id="yellowishEyesNoLeft"
              label="No"
              checked={formData.va_yellowish_eyes === 'No'}
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
            name="va_advise"
            value={formData.va_advise}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            invalid={!!errors.va_advise}
          />
          <FormFeedback style={{ transform: 'translateY(100%)' }}>
            {errors.va_advise}
          </FormFeedback>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Remark </Label>
          <Input
            className="mb-2 c-w-500"
            placeholder="Remark"
            name="va_remark"
            value={formData.va_remark}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            invalid={!!errors.va_remark}
          />
          <FormFeedback style={{ transform: 'translateY(100%)' }}>
            {errors.va_remark}
          </FormFeedback>
        </FormGroup>
      </Colxx>
    </Form>
  );
};

export default EyeVisionAssessment;
