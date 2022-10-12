import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import CreateEmployeePage from './page/CreateEmployeePage';
import CurrentEmployeePage from './page/CurrentEmployeePage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<CreateEmployeePage />} />
          <Route path="/current-employees" element={<CurrentEmployeePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
