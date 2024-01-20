import React from 'react';
import ProgressBar from './ProgressBar';

function Lessons({ lessons, onLessonSelect }) {
    return (
        <div>
            <h1>Начни впитывать сок знаний.</h1>
            <div>Мы готовим наш материал основываясь на академической литературе в области экономики, но стараемся преподнести это в максимально простой и удобной форме, чтобы справиться мог даже новичок в сфере финансов. Наши уроки помогут вам быстрее погрузиться в эту область и стать финансово грамотным человеком.</div>
            {lessons.map(lesson => {
                const completedLessons = lesson.lessons.filter(l => l.completed).length;
                const progress = (completedLessons / lesson.lessons.length) * 100;

                return (
                    <div key={lesson.id} onClick={() => onLessonSelect(lesson)}>
                        <h2>{lesson.name}</h2>
                        <ProgressBar progress={progress} />
                    </div>
                );
            })}
        </div>
    );
}

export default Lessons;
