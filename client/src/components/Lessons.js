import React from 'react';
import './Lessons.css'

function Lessons() {


    return (
        <div className="content">
            <h1 className="name">
                Начни впитывать сок знаний.
            </h1>
            <div className="lesson_bar_content">
                <button className="lesson_bar"> Валюты </button>
            </div>
            <div className="lesson_bar_content">
                <button className="lesson_bar"> Акции </button>
            </div>
            <div className="lesson_bar_content">
                <button className="lesson_bar"> Сучки </button>
            </div>
            <div className="lesson_bar_content">
                <button className="lesson_bar"> Тачки </button>
            </div>
            <div className="lesson_bar_content">
                <button className="lesson_bar"> Успех </button>
            </div>
        </div>
    )
}

export default Lessons