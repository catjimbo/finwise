import React, { useState, useEffect } from 'react';
import  initialLessons  from './../lessons_logic/initialLessons';
import './Profile.css'

const Profile = () => {
    const [profileName, setProfileName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [lessons, setLessons] = useState([]);
    const [newProfileName, setNewProfileName] = useState('');
    const [newAvatar, setNewAvatar] = useState('');

    useEffect(() => {
        // Загрузка данных из локального хранилища
        const storedProfileName = localStorage.getItem('profileName');
        const storedAvatar = localStorage.getItem('avatar');
        const storedLessons = localStorage.getItem('lessons');

        if (storedProfileName) setProfileName(storedProfileName);
        if (storedAvatar) setAvatar(storedAvatar);
        if (storedLessons) setLessons(JSON.parse(storedLessons));
    }, []);

    const calculateLessonProgress = (lesson) => {
        const totalItems = lesson.lessons.length;
        const completedItems = lesson.lessons.filter(l => l.completed).length;
        return (completedItems / totalItems) * 100; // возвращает процент выполнения
    };

    const handleProfileNameChange = (e) => {
        setNewProfileName(e.target.value);
    };

    const handleAvatarChange = (e) => {
        setNewAvatar(e.target.value);
    };

    const updateProfile = () => {
        if (newProfileName) {
            setProfileName(newProfileName);
            localStorage.setItem('profileName', newProfileName);
        }
        if (newAvatar) {
            setAvatar(newAvatar);
            localStorage.setItem('avatar', newAvatar);
        }
    };

    const handleResetProgress = () => {
        setLessons(initialLessons);
        localStorage.removeItem('lessons');
    };

    return (
        <div className="profile-content">
            <h1>Профиль: {profileName}</h1>
            <img src={avatar} alt="Аватар" style={{width: '150px', height: '150px'}}/>
            <div className='info-update'>
                <input type="text" placeholder="Новый никнейм" value={newProfileName}
                       onChange={handleProfileNameChange}/>
                <input type="text" placeholder="URL нового аватара" value={newAvatar} onChange={handleAvatarChange}/>
                <button onClick={updateProfile}>Обновить профиль</button>
            </div>
            <h2>Достижения </h2>
            {lessons.map((lesson, index) => (
                <div key={index}>
                    <label>{lesson.name}</label>
                    <div className='progress-container'>
                        <progress  value={calculateLessonProgress(lesson)} max="100"></progress>
                    </div>
                </div>
            ))}
            <button onClick={handleResetProgress}>Сбросить прогресс уроков</button>
        </div>
    );
};

export default Profile;
