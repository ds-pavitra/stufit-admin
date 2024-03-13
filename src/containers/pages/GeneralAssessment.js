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

const GeneralAssessment = ({ errors, formData, handleInputChange }) => {
  return (
    <Form className="d-flex">
      <Colxx xxs="12" md="12" className="mb-5">
        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="ga_chest_ausculation">
            Chest Auscultation
          </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="ga_chest_ausculation"
              id="chestAuscultationClear"
              label="Clear"
              checked={formData.ga_chest_ausculation === 'Clear'}
              value="Clear"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="ga_chest_ausculation"
              id="chestAuscultationNotClear"
              label="Not Clear"
              checked={formData.ga_chest_ausculation === 'Not Clear'}
              value="Not Clear"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="ga_abdominal_pulpitation">
            Abdominal Palpitation
          </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="ga_abdominal_pulpitation"
              id="palpitationTender"
              label="Tender"
              checked={formData.ga_abdominal_pulpitation === 'Tender'}
              value="Tender"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="ga_abdominal_pulpitation"
              id="palpitationSoft"
              label="Soft"
              checked={formData.ga_abdominal_pulpitation === 'Soft'}
              value="Soft"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="ga_abdominal_pulpitation"
              id="palpitationDistended"
              label="Distended"
              checked={formData.ga_abdominal_pulpitation === 'Distended'}
              value="Distended"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="ga_abdominal_pulpitation"
              id="palpitationNormal"
              label="Normal"
              checked={formData.ga_abdominal_pulpitation === 'Normal'}
              value="Normal"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Active Infectious Disease </Label>
          <Input
            className="mb-2 c-w-200"
            placeholder="Disease"
            name="ga_active_infectius_disease"
            value={formData.ga_active_infectius_disease}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            invalid={!!errors.ga_active_infectius_disease}
          />
          <FormFeedback
            style={{ transform: 'translateX(-132%) translateY(100%)' }}
          >
            {errors.ga_active_infectius_disease}
          </FormFeedback>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="ga_cleft_up">
            Cleft Lip/Palate
          </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="ga_cleft_up"
              id="cleftLipYes"
              label="Yes"
              checked={formData.ga_cleft_up === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="ga_cleft_up"
              id="cleftLipNo"
              label="No"
              checked={formData.ga_cleft_up === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="ga_club_foot">
            Club Foot
          </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="ga_club_foot"
              id="clubFootYes"
              label="Yes"
              checked={formData.ga_club_foot === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="ga_club_foot"
              id="clubFootNo"
              label="No"
              checked={formData.ga_club_foot === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="ga_conginital_cataract">
            Congenital Cataract
          </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="ga_conginital_cataract"
              id="congenitalCataractYes"
              label="Yes"
              checked={formData.ga_conginital_cataract === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="ga_conginital_cataract"
              id="congenitalCataractNo"
              label="No"
              checked={formData.ga_conginital_cataract === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="ga_conginital_deafness">
            Congenital Deafness
          </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="ga_conginital_deafness"
              id="congenitalDeafnessYes"
              label="Yes"
              checked={formData.ga_conginital_deafness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="ga_conginital_deafness"
              id="congenitalDeafnessNo"
              label="No"
              checked={formData.ga_conginital_deafness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="ga_skin_infection">
            Skin Condition
          </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="ga_skin_infection"
              id="skinConditionYes"
              label="Yes"
              checked={formData.ga_skin_infection === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="ga_skin_infection"
              id="skinConditionNo"
              label="No"
              checked={formData.ga_skin_infection === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="ga_otitis_media">
            Otitis Media
          </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="ga_otitis_media"
              id="otitisMediaYes"
              label="Yes"
              checked={formData.ga_otitis_media === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="ga_otitis_media"
              id="otitisMediaNo"
              label="No"
              checked={formData.ga_otitis_media === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="ga_neuromotor_impairment">
            Neuromotor Impairment
          </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="ga_neuromotor_impairment"
              id="neuromotorImpairmentYes"
              label="Yes"
              checked={formData.ga_neuromotor_impairment === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="ga_neuromotor_impairment"
              id="neuromotorImpairmentNo"
              label="No"
              checked={formData.ga_neuromotor_impairment === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="ga_body_type">
            Body Type
          </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="ga_body_type"
              id="bodyTypeThin"
              label="Thin"
              checked={formData.ga_body_type === 'Thin'}
              value="Thin"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="ga_body_type"
              id="bodyTypeAverage"
              label="Average"
              checked={formData.ga_body_type === 'Average'}
              value="Average"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="ga_body_type"
              id="bodyTypeFaty"
              label="Faty"
              checked={formData.ga_body_type === 'Faty'}
              value="Faty"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Advice </Label>
          <Input
            className="mb-2 c-w-500"
            placeholder="Advice"
            name="ga_advice"
            value={formData.ga_advice}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            invalid={!!errors.ga_advice}
          />
          <FormFeedback style={{ transform: 'translateY(100%)' }}>
            {errors.ga_advice}
          </FormFeedback>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Remark </Label>
          <Input
            className="mb-2 c-w-500"
            placeholder="Remark"
            name="ga_remark"
            value={formData.ga_remark}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            invalid={!!errors.ga_remark}
          />
          <FormFeedback style={{ transform: 'translateY(100%)' }}>
            {errors.ga_remark}
          </FormFeedback>
        </FormGroup>
      </Colxx>
    </Form>
  );
};

export default GeneralAssessment;
