import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export const Catalogue = () => {
    return (
        <Routes>
            <Route path="*" element={<Navigate to="category" replace />} />
        </Routes>
    );
};

export default Catalogue;
