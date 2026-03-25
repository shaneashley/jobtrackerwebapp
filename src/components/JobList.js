import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListContainer = styled.div`
  padding: 20px;
  color: ${(props) => props.theme.text};
`;

const FiltersContainer = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  margin-right: 10px;
  padding: 8px;
  border: 1px solid ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
`;

const Select = styled.select`
  margin-right: 10px;
  padding: 8px;
  border: 1px solid ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
`;

const JobItem = styled.div`
  background-color: ${(props) => props.theme.body};
  border: 1px solid ${(props) => props.theme.text};
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;



const JobList = ({ jobs, deleteJob }) => {
  return (
    <ListContainer>
      <h2>Job List</h2>
      {jobs.map((job) => (
        <JobItem key={job.id}>
          <div>
            {job.title} at {job.company} - {job.status}
          </div>
          <div>
            <Link to={`/edit/${job.id}`}>Edit</Link>
            <button onClick={() => deleteJob(job.id)}>Delete</button>
          </div>
        </JobItem>
      ))}
    </ListContainer>
  );

};

export default JobList;