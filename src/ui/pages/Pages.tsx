import React from 'react';
import {Navigate, Routes, Route} from "react-router-dom";
import style from 'styles/pages/pages.module.css'
import {NewsPage} from "ui/pages/news/newsPage/NewsPage";
import {News} from './news/News';

export const Pages = () => (
    <div className={style.pagesContainer}>
        <Routes>
            <Route path='/' element={<Navigate to="/main"/>}/>
            <Route path='main' element={<News/>}/>
            <Route path='main/news' element={<NewsPage/>}/>
        </Routes>
    </div>
);

