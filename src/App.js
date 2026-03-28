// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './theme';
import Navbar from './components/Navbar';
import JobList from './components/JobList';
import JobForm from './components/JobForm';
import Dashboard from './components/Dashboard';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [jobs, setJobs] = useState(() => { 
    const storedJobs = localStorage.getItem('jobs');
    return storedJobs ? JSON.parse(storedJobs) : [];
  });

  useEffect(() => {
    localStorage.setItem('jobs', JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (job) => {
    setJobs([...jobs, { ...job, id: Date.now() }]);
  };

  const updateJob = (updatedJob) => {
    setJobs(jobs.map((job) => (job.id === updatedJob.id ? updatedJob : job)));
  };

  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <Navbar toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<JobList jobs={jobs} deleteJob={deleteJob} />} />
          <Route path="/add" element={<JobForm addJob={addJob} />} />
          <Route
            path="/edit/:id"
            element={<JobForm jobs={jobs} updateJob={updateJob} />}
          />
          <Route path="/dashboard" element={<Dashboard jobs={jobs} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
