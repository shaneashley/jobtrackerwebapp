// components/JobForm.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

const FormContainer = styled.div`
  padding: 20px;
  color: ${(props) => props.theme.text};
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
`;

const Select = styled.select`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.buttonText};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

const JobForm = ({ addJob, updateJob, jobs }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState('applied');

  useEffect(() => {
    if (id && jobs) {
      const job = jobs.find((job) => job.id === parseInt(id));
      if (job) {
        setTitle(job.title);
        setCompany(job.company);
        setStatus(job.status);
      }
    }
  }, [id, jobs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const jobData = {
      title,
      company,
      status,
    };

    if (id) {
      updateJob({ ...jobData, id: parseInt(id) });
    } else {
      addJob(jobData);
    }

    navigate('/');
  };

  return (
    <FormContainer>
      <h2>{id ? 'Edit Job' : 'Add Job'}</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <Select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="applied">Applied</option>
          <option value="interview">Interview</option>
          <option value="offer">Offer</option>
          <option value="rejected">Rejected</option>
        </Select>
        <Button type="submit">{id ? 'Update' : 'Add'}</Button>
      </form>
    </FormContainer>
  );
};

export default JobForm;