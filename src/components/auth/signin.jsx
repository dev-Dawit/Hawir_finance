// import React from 'react';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import './signinForm.styles.scss';
// import { AuthAPI } from '../../api/authentication';

// const SigninForm = ({ handleSignInSuccess }) => {
//   const initialValues = {
//     officeUser_telephone: '',
//     officeUser_password: '',
//   };

//   const validationSchema = Yup.object({
//     officeUser_telephone: Yup.number().required('Phone number is required').typeError('Phone number must be valid'),
//     officeUser_password: Yup.string().required('Password is required'),
//   });

//   const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    
//     try {
//         const response = await AuthAPI.signin(values)
//           handleSignInSuccess(response.data);
//     } catch (error) {
//       // Handle sign-in errors
//       if (error.response && error.response.data && error.response.data.errors) {
//         const errors = error.response.data.errors.reduce((acc, curr) => {
//           acc[curr.field] = curr.message;
//           return acc;
//         }, {});
//         setErrors(errors);
//       } else {
//         console.error('Error during sign-in:', error);
//         setErrors({ officeUser_telephone: 'An error occurred during sign-in' });
//       }
//     }
  
//     setSubmitting(false);
//   };

//   return (
//     <div className="form-container">
//       <h2>Sign In</h2>
//       <Formik initialValues={initialValues}  onSubmit={handleSubmit}>
//         {({ isSubmitting }) => (
//           <Form>
//             <div className="form-input">
//               <label htmlFor="officeUser_telephone">Phone Number:</label>
//               <Field type="text" id="officeUser_telephone" name="officeUser_telephone" />
//               <ErrorMessage name="officeUser_telephone" component="div" className="error" />
//             </div>

//             <div className="form-input">
//               <label htmlFor="officeUser_password">Password:</label>
//               <Field type="password" id="officeUser_password" name="officeUser_password" />
//               <ErrorMessage name="officeUser_password" component="div" className="error" />
//             </div>

//             <button type="submit" className="form-submit-button" disabled={isSubmitting}>
//               Sign In
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default SigninForm;
