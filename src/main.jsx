import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";

import './index.css'
import App from './pages/App.jsx'
import AuthLayout from './layouts/AuthLayout.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import ResetPassword from './pages/ResetPassword.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Jobs from './pages/Jobs.jsx';
import DashboardLayout from './layouts/DashboardLayout.jsx';
import JobDetails from './pages/JobDetails.jsx';
import NewJob from './pages/NewJob.jsx';
import EditJob from './pages/EditJob.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="jobs/new" element={<NewJob />} />
          <Route path="jobs/:id" element={<JobDetails />} />
          <Route path="jobs/:id/edit" element={<EditJob />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
