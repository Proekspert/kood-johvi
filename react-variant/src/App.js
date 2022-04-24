import { BrowserRouter, Route, Routes } from "react-router-dom";

import Employee from './components/Employee';
import Project from './components/Project';
import React from 'react';

function App() {
  const [project, setProject] = React.useState(null);

  React.useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: new Headers({
        'Authorization': 'Bearer f9e5c768e6682bb22a8f197f5b2e4c4d4e4f6722ae85f589c43eb13e9d13a80c',
        'Content-Type': 'application/json'
      }),
    };
      fetch('https://intra.proekspert.ee/pulse-johvi/api/employees?expand=skills', requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<span>Go to either /project or /employee</span>}/>
        <Route path="project" element={<Project/>}/>
        <Route path="employee" element={<Employee/>}/>
        <Route path="*" element={(
          <span>Nothing here</span>
        )}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
