// FormDataContext.js

import React, { createContext, useContext, useReducer } from 'react';

const FormDataContext = createContext();

const initialState = {
  student_id: '',
  std_code: '',
  school_name: '',
  std_name: '',
  std_gender: null,
  std_email: '',
  std_dob: null,
  std_mother_name: '',
  // section_id: null,
  std_city: '',
  school_id: null,
  std_address: '',
  std_contact: '',
  std_father_name: '',
  // class_id: null,
  std_siblings: '',
  std_state: '',
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    // Add other cases as needed
    default:
      return state;
  }
};

export const FormDataProvider = ({ children }) => {
  const [formData, dispatch] = useReducer(formReducer, initialState);

  const updateField = (field, value) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };

  return (
    <FormDataContext.Provider value={{ formData, updateField }}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error('useFormData must be used within a FormDataProvider');
  }
  return context;
};
