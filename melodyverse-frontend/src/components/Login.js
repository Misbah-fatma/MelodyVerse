import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Password is too short - should be 6 chars minimum.'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post('http://localhost:4000/api/auth/login', values);
        const { accessToken, refreshToken, accessTokenExpiryIn } = response.data;

        const expiryTime = new Date().getTime() + (accessTokenExpiryIn * 1000);

        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('accessTokenExpiry', expiryTime);

        toast.success('Login successful!');
        navigate('/');
      } catch (error) {
        toast.error('Login failed. Please check your credentials and try again.');
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

                              <h4 class="text-center">Welcome back you've been missed!</h4>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12">
                            <div class="d-flex gap-3 flex-column">
                              <a href="#!" class="btn btn-lg btn-outline-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                </svg>
                                <span class="ms-2 fs-6">Log in with Google</span>
                              </a>
                            </div>
                            <p class="text-center mt-4 mb-5">Or sign in with</p>
                          </div>
                        </div>
                        <form onSubmit={formik.handleSubmit} >
                          <div class="row gy-3 overflow-hidden">
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
                                <input type= 'password' class="form-control" name="password" id="password"
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
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" name="remember_me" id="remember_me" />
                                <label class="form-check-label text-secondary" for="remember_me">
                                  Keep me logged in
                                </label>
                              </div>
                            </div>
                            <div class="col-12">
                              <div class="d-grid">
                                <button class="btn btn-dark btn-lg" type="submit">Log in now</button>
                              </div>
                            </div>
                          </div>
                        </form>
                        <div class="row">
                          <div class="col-12">
                            <div class="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-5">
                              <a href="/signup" class="link-secondary text-decoration-none">Create new account</a>
                              <a href="/forgot-password" class="link-secondary text-decoration-none">Forgot password</a>
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

export default Login;
