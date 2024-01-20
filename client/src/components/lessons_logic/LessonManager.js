import React, { useState } from 'react';
import Lessons from './Lessons';
import LessonDetails from './LessonDetails';
import  initialLessons  from './initialLessons';

function LessonManager() {
    const [lessons, setLessons] = useState(() => {
        const savedLessons = localStorage.getItem('lessons');
        return savedLessons ? JSON.parse(savedLessons) : initialLessons;
    });
    const [currentLesson, setCurrentLesson] = useState()
    const handleLessonSelect = (lesson) => {
        setCurrentLesson(lesson);
    };

    const handleBackToLessons = () => {
        setCurrentLesson(null);
    };


    const handleLessonComplete = (lessonId, lessonItemId) => {
        const updatedLessons = lessons.map(lesson => {
            if (lesson.id === lessonId) {
                return {
                    ...lesson,
                    lessons: lesson.lessons.map(l =>
                        l.id === lessonItemId ? { ...l, completed: !l.completed } : l
                    )
                };
            }
            return lesson;
        });
        setLessons(updatedLessons);
        localStorage.setItem('lessons', JSON.stringify(updatedLessons));
    };

    return (
        <div>
            {!currentLesson ? (
                <Lessons lessons={lessons} onLessonSelect={handleLessonSelect}/>
            ) : (
                <LessonDetails lesson={currentLesson} onLessonComplete={handleLessonComplete} onBackToLessons={handleBackToLessons}/>

            )}
        </div>
    );
}

export default LessonManager;
