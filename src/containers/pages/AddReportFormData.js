// AddReportFormData.js

import React, { createContext, useContext, useReducer } from 'react';

const FormDataContext = createContext();

const initialState = {
  section_id: '',
  class_id: '',
  ga_chest_ausculation: 'Clear',
  ga_abdominal_pulpitation: 'Normal',
  ga_active_infectius_disease: '',
  ga_cleft_up: 'No',
  ga_club_foot: 'No',
  ga_conginital_cataract: 'No',
  ga_conginital_deafness: 'No',
  ga_skin_infection: 'No',
  ga_otitis_media: 'No',
  ga_neuromotor_impairment: 'No',
  ga_body_type: 'Average',
  ga_advice: '',
  ga_remark: '',
  da_caries: 'No Caries',
  da_orthodontic_correction: 'Not Advised',
  da_extraction: 'Not Advised',
  da_space_maintainer: 'Not Advised',
  da_oral_hygiene_status: 'Average',
  da_sugar_intake: 'No',
  da_brushing: 'Not Brushed',
  da_malpositioned_teeth: 'No',
  da_advise: '',
  da_remark: '',
  na_pale_yellowish_skin: 'No',
  na_irregular_heartbeats: 'No',
  na_shortness_of_breath: 'No',
  na_dizziness: 'No',
  na_cold_hands_feet: 'No',
  na_anemia: 'No',
  na_fatigue: 'No',
  na_vitamin_d_deficiency: 'No',
  na_obesity: 'No',
  na_ideal_body_weight: '',
  na_ideal_calories: '',
  na_advice: '',
  na_remark: '',
  pa_height: '',
  pa_weight: '',
  pa_bmi: '',
  pa_body_temp: '',
  pa_systolic_blood_pressure: '',
  pa_diastolic_blood_pressure: '',
  pa_blood_group: '',
  pa_pulse_rate: '',
  pa_oxygen: '',
  pa_posture: 'Good',
  pa_upper_limb_range_of_motion: 'Normal',
  pa_neck_form: 'Normal',
  pa_lower_limb_range_of_motion: 'Normal',
  pa_dystrophy: 'No',
  pa_atrophy: 'No',
  pa_endurance: 'Normal',
  pa_stamina: 'Normal',
  pa_pain: 'No Pain',
  pa_spasm: 'No Spasm',
  pa_advice: '',
  pa_remark: '',
  sa_speech_milestone: '',
  sa_comprehesion: 'Verbal',
  sa_expression: 'Verbal',
  sa_mode_of_communication: 'Verbal',
  sa_audiotory_skills: 'Proper',
  sa_hearing_loss: 'No',
  sa_tinnitus: 'No',
  sa_ear_performation: 'No',
  sa_respond_on_named_calls: 'No',
  sa_hearing_assesment_result: 'Pta',
  sa_ear_wax: 'No',
  sa_ear_pain: 'No',
  sa_medical_history: 'No',
  sa_advice: '',
  sa_remark: '',
  va_right_eye_vision: '',
  va_left_eye_vision: '',
  va_refraction: '',
  va_colour_vision: 'Good',
  va_eye_disease: 'No Disease',
  va_squint: 'No',
  va_ptosis: 'No',
  va_nystagmus: 'No',
  va_cataract: 'No',
  va_micro_eye_ball: 'No',
  va_itching: 'No',
  va_dryness: 'No',
  va_frequent_tear: 'No',
  va_red_eyes: 'No',
  va_yellowish_eyes: 'No',
  va_advise: '',
  va_remark: '',
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
};

export const FormDataProviderReport = ({ children }) => {
  const [formData, dispatch] = useReducer(formReducer, initialState);

  const updateField = (field, value) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };

  const resetForm = () => {
    dispatch({ type: 'RESET_FORM' });
  };

  return (
    <FormDataContext.Provider value={{ formData, updateField, resetForm }}>
      {children}
    </FormDataContext.Provider>
  );
};

export const AddReportFormData = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error(
      'AddReportFormData must be used within a FormDataProviderReport'
    );
  }
  return context;
};
