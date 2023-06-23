import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';

const Main = () => {
  return (
      <Routes>
          <Route path="*" element={<Navigate to="dashboard" replace />} />
      </Routes>
  );
}

export default Main