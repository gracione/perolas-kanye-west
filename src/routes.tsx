import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Perolas from './perolas/index';

export default function Rota() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Perolas/>} />
            </Routes>
        </BrowserRouter>
    );
}