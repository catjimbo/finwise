import React from 'react';
import './lessonDetails.css'

function LessonDetails({ lesson, onLessonComplete, onBackToLessons }) {



    return (
        <div className="lesson-details">
            <h2>{lesson.name}</h2>
            <ul>
                {lesson.lessons.map(l => (
                    <li key={l.id}>
                        <h3>{l.name}</h3>
                        <p>{l.content}</p>
                        <button onClick={() => onLessonComplete(lesson.id, l.id)}>
                            {l.completed ? 'Отметить как незавершенный' : 'Отметить как завершенный'}
                        </button>
                    </li>
                ))}
            </ul>
            <button id='back' onClick={onBackToLessons}>Вернуться к занятиям</button>
        </div>
    );
}

export default LessonDetails;
