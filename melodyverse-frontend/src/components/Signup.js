import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Signup = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required').min(8, 'Password is too short - should be 8 chars minimum.'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post('http://localhost:4000/api/auth/signup', {
          username: values.username,
          email: values.email,
          password: values.password,
        });
  
        if (response.status === 201 || response.status === 200) {
          toast.success('Signup successful! Redirecting to login...');
  
          // Example: Storing user info if returned
          if (response.data?.user) {
            localStorage.setItem('user', JSON.stringify(response.data.user));
          }
  
          setTimeout(() => {
            navigate('/login');
          }, 2000);
        } else {
          toast.error('Unexpected response from server.');
        }
      } catch (error) {
        toast.error(`Signup failed: ${error.response?.data?.error || 'An error occurred'}`);
      }
    },
  });
  

  return (
    <div>

      <section class="bg-light p-3 p-md-4 p-xl-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-xxl-11">
              <div class="card border-light-subtle shadow-sm">
                <div class="row g-0">
                  <div class="col-12 col-md-6">
                    <img class="img-fluid rounded-start w-100 h-100 object-fit-cover" loading="lazy" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D" alt="Welcome back you've been missed!" />
                  </div>
                  <div class="col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <div class="col-12 col-lg-11 col-xl-10">
                      <div class="card-body p-3 p-md-4 p-xl-5">
                        <div class="row">
                          <div class="col-12">
                            <div class="mb-5">

                              <h4 class="text-center">Join us today and start your journey!</h4>

                            </div>
                          </div>
                        </div>

                        <form onSubmit={formik.handleSubmit} >
                          <div class="row gy-3 overflow-hidden">
                            <div class="col-12">
                              <div class="form-floating mb-3">
                                <input

                                  class="form-control"
                                  type="text"
                                  name="username"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.username}
                                  placeholder="name@example.com"
                                  required />
                                <label for="email" class="form-label">UserName</label>
                                {formik.touched.username && formik.errors.username ? (
                                  <div className="text-red-500 text-sm mt-2">{formik.errors.username}</div>
                                ) : null}
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="form-floating mb-3">
                                <input type="email" class="form-control" name="email" id="email"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.email}
                                  placeholder="name@example.com"
                                  required />
                                <label for="email" class="form-label">Email</label>
                                {formik.touched.email && formik.errors.email ? (
                                  <div className="text-red-500 text-sm mt-2">{formik.errors.email}</div>
                                ) : null}
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="form-floating mb-3">
                                <input type='password' class="form-control" name="password" id="password"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.password} placeholder="Password" required />
                                <label for="password" class="form-label">Password</label>

                                {formik.touched.password && formik.errors.password ? (
                                  <div className="text-red-500 text-sm mt-2">{formik.errors.password}</div>
                                ) : null}
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="form-floating mb-3">
                                <input
                                  class="form-control"
                                  id="password"
                                  type='password'
                                  name="confirmPassword"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.confirmPassword}
                                  placeholder="Password" required />
                                <label for="password" class="form-label">Confirm Password</label>

                                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                  <div className="text-red-500 text-sm mt-2">{formik.errors.confirmPassword}</div>
                                ) : null}
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" name="remember_me" id="remember_me" />
                                <label class="form-check-label text-secondary" for="remember_me">
                                  Agree with our terms & conditions.
                                </label>
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="d-grid">
                                <button class="btn btn-dark btn-lg" type="submit">Register now</button>
                              </div>
                            </div>
                          </div>
                        </form>
                        <div class="row">
                          <div class="col-12">
                            <div class="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-5">
                              <a href="/login" class="link-secondary text-decoration-none">Already have an account? Login Now.</a>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
