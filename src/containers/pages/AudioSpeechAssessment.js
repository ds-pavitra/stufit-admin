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

const AudioSpeechAssessment = ({ errors, formData, handleInputChange }) => {
  return (
    <Form className="d-flex">
      <Colxx xxs="12" md="12" className="mb-5">
        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Speech Milestone </Label>
          <Input
            className="mb-2 c-w-200"
            placeholder="Speech Milestone"
            name="sa_speech_milestone"
            value={formData.sa_speech_milestone}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            invalid={!!errors.sa_speech_milestone}
          />
          <FormFeedback
            style={{ transform: 'translateX(-153%) translateY(100%)' }}
          >
            {errors.sa_speech_milestone}
          </FormFeedback>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Comprehension </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="sa_comprehesion"
              id="sa_comprehesionVerbal"
              label="Verbal"
              checked={formData.sa_comprehesion === 'Verbal'}
              value="Verbal"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="sa_comprehesion"
              id="sa_comprehesionNonVerbal"
              label="Non Verbal"
              checked={formData.sa_comprehesion === 'Non Verbal'}
              value="Non Verbal"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="sa_comprehesion"
              id="sa_comprehesionGesture"
              label="Gesture"
              checked={formData.sa_comprehesion === 'Gesture'}
              value="Gesture"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="sa_comprehesion"
              id="sa_comprehesionLanguageAge"
              label="Language Age"
              checked={formData.sa_comprehesion === 'Language Age'}
              value="Language Age"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Expression </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="sa_expression"
              id="sa_expressionVerbal"
              label="Verbal"
              checked={formData.sa_expression === 'Verbal'}
              value="Verbal"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="sa_expression"
              id="sa_expressionNonVerbal"
              label="Non Verbal"
              checked={formData.sa_expression === 'Non Verbal'}
              value="Non Verbal"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="sa_expression"
              id="sa_expressionGesture"
              label="Gesture"
              checked={formData.sa_expression === 'Gesture'}
              value="Gesture"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="sa_expression"
              id="sa_expressionLanguageAge"
              label="Language Age"
              checked={formData.sa_expression === 'Language Age'}
              value="Language Age"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Mode Of Communication </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="sa_mode_of_communication"
              id="mocVerbal"
              label="Verbal"
              checked={formData.sa_mode_of_communication === 'Verbal'}
              value="Verbal"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="sa_mode_of_communication"
              id="mocNonVerbal"
              label="Non Verbal"
              checked={formData.sa_mode_of_communication === 'Non Verbal'}
              value="Non Verbal"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Auditory Skill </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="sa_audiotory_skills"
              id="auditSkillProper"
              label="Proper"
              checked={formData.sa_audiotory_skills === 'Proper'}
              value="Proper"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="sa_audiotory_skills"
              id="auditSkillImproper"
              label="Improper"
              checked={formData.sa_audiotory_skills === 'Improper'}
              value="Improper"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Hearing Loss </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="sa_hearing_loss"
              id="hearingLossYes"
              label="Yes"
              checked={formData.sa_hearing_loss === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="sa_hearing_loss"
              id="hearingLossNo"
              label="No"
              checked={formData.sa_hearing_loss === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="sa_hearing_loss"
              id="hearingLossStatic"
              label="Static"
              checked={formData.sa_hearing_loss === 'Static'}
              value="Static"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="sa_hearing_loss"
              id="hearingLossProgressive"
              label="Progressive"
              checked={formData.sa_hearing_loss === 'Progressive'}
              value="Progressive"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Tinnitus</Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="sa_tinnitus"
              id="tinnitusYes"
              label="Yes"
              checked={formData.sa_tinnitus === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="sa_tinnitus"
              id="tinnitusNo"
              label="No"
              checked={formData.sa_tinnitus === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Ear Perforation </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="sa_ear_performation"
              id="earPerforationYes"
              label="Yes"
              checked={formData.sa_ear_performation === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="sa_ear_performation"
              id="earPerforationNo"
              label="No"
              checked={formData.sa_ear_performation === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Respond On Named Call</Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="sa_respond_on_named_calls"
              id="respondOnNamedCallYes"
              label="Yes"
              checked={formData.sa_respond_on_named_calls === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="sa_respond_on_named_calls"
              id="respondOnNamedCallNo"
              label="No"
              checked={formData.sa_respond_on_named_calls === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Hearing Assessment Result </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="sa_hearing_assesment_result"
              id="hearingResultPTA"
              label="PTA"
              checked={formData.sa_hearing_assesment_result === 'Pta'}
              value="Pta"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="sa_hearing_assesment_result"
              id="hearingResultBOA"
              label="BOA"
              checked={formData.sa_hearing_assesment_result === 'Boa'}
              value="Boa"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="sa_hearing_assesment_result"
              id="hearingResultVRA"
              label="VRA"
              checked={formData.sa_hearing_assesment_result === 'Vra'}
              value="Vra"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="sa_hearing_assesment_result"
              id="hearingResultAVR"
              label="AVR"
              checked={formData.sa_hearing_assesment_result === 'Avr'}
              value="Avr"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Wax </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="sa_ear_wax"
              id="waxLeftEar"
              label="Left Ear"
              checked={formData.sa_ear_wax === 'Left Ear'}
              value="Left Ear"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="sa_ear_wax"
              id="waxRightEar"
              label="Right Ear"
              checked={formData.sa_ear_wax === 'Right Ear'}
              value="Right Ear"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="sa_ear_wax"
              id="waxBilateral"
              label="Bilateral"
              checked={formData.sa_ear_wax === 'Bilateral'}
              value="Bilateral"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="sa_ear_wax"
              id="waxNo"
              label="No"
              checked={formData.sa_ear_wax === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Ear Pain </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="sa_ear_pain"
              id="painLeftEar"
              label="Left Ear"
              checked={formData.sa_ear_pain === 'Left Ear'}
              value="Left Ear"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="sa_ear_pain"
              id="painRightEar"
              label="Right Ear"
              checked={formData.sa_ear_pain === 'Right Ear'}
              value="Right Ear"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="sa_ear_pain"
              id="painBilateral"
              label="Bilateral"
              checked={formData.sa_ear_pain === 'Bilateral'}
              value="Bilateral"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="sa_ear_pain"
              id="painNo"
              label="No"
              checked={formData.sa_ear_pain === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Medical History</Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="sa_medical_history"
              id="medicalHistoryYes"
              label="Yes"
              checked={formData.sa_medical_history === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="sa_medical_history"
              id="medicalHistoryNo"
              label="No"
              checked={formData.sa_medical_history === 'No'}
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
            name="sa_advice"
            value={formData.sa_advice}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            invalid={!!errors.sa_advice}
          />
          <FormFeedback style={{ transform: 'translateY(100%)' }}>
            {errors.sa_advice}
          </FormFeedback>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Remark </Label>
          <Input
            className="mb-2 c-w-500"
            placeholder="Remark"
            name="sa_remark"
            value={formData.sa_remark}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            invalid={!!errors.sa_remark}
          />
          <FormFeedback style={{ transform: 'translateY(100%)' }}>
            {errors.sa_remark}
          </FormFeedback>
        </FormGroup>
      </Colxx>
    </Form>
  );
};

export default AudioSpeechAssessment;
