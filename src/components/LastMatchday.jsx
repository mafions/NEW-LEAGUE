import React, { useState, useEffect } from 'react';
import Table from './Table';

const apiUrl = 'https://api.example.com/data'; // Sizning API URL

const fetchMatchesFromAPI = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

const searchMatches = async (query) => {
  const data = await fetchMatchesFromAPI();
  if (!data) {
    return []; // Ma'lumot topilmagan holatda bo'sh ro'yxat qaytarish
  }

  // Query ga mos keladigan ma'lumotlarni izlash
  const results = data.filter(match => {
    // Masalan, agar matchning nomi query ichida bo'lsa true qaytaradi
    return match.name.toLowerCase().includes(query.toLowerCase());
  });

  return results;
};

export const LastMatchday = () => {
  const [currentMatchday, setCurrentMatchday] = useState(null);
  const [matches, setMatches] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const totalMatchdays = 38;

  useEffect(() => {
    const fetchMatchesForMatchday = async (matchday) => {
      const localMatches = localStorage.getItem(`matchesMatchday${matchday}`);
      if (localMatches) {
        setMatches((prev) => ({ ...prev, [matchday]: JSON.parse(localMatches) }));
      } else {
        try {
          const response = await fetch(`https://la-liga-pau.vercel.app/api/competitions/PD/matches?matchday=${matchday}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setMatches((prev) => ({ ...prev, [matchday]: data.matches }));
          localStorage.setItem(`matchesMatchday${matchday}`, JSON.stringify(data.matches));
          if (!currentMatchday) {
            setCurrentMatchday(matchday);
          }
        } catch (error) {
          console.error('Error fetching matches:', error);
        }
      }
    };

    const localCurrentMatchday = localStorage.getItem('currentMatchday');
    if (localCurrentMatchday) {
      setCurrentMatchday(JSON.parse(localCurrentMatchday));
    } else {
      setCurrentMatchday(1);
      localStorage.setItem('currentMatchday', JSON.stringify(1));
    }

    fetchMatchesForMatchday(currentMatchday || 1);
  }, [currentMatchday]);

  const handleChangeMatchday = (event) => {
    const selectedMatchday = parseInt(event.target.value);
    setCurrentMatchday(selectedMatchday);
    localStorage.setItem('currentMatchday', JSON.stringify(selectedMatchday));
    if (!matches[selectedMatchday]) {
      fetchMatchesForMatchday(selectedMatchday);
    }
  };

  const handleSearch = async () => {
    const results = await searchMatches(searchQuery);
    console.log('Search results:', results);
    // Natijalarni ishlatish uchun kerakli logika
  };

  const formatDate = (utcDate) => {
    const date = new Date(utcDate);
    const formattedDate = date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
    }).replace(/\/(\d{2})$/, '');

    return `${formattedDate}`;
  };

  const formatTime = (utcDate) => {
    const date = new Date(utcDate);
    const formattedTime = date.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });

    return `${formattedTime}`;
  };

  return (
    <section className='bg-white px-4 lg:px-40 lg:mt-4 lg:mb-20' style={{ transition: "all 0.3s cubic-bezier(0,0,0.5,1)" }} id='resultados'>
      
        <Table />
    </section>
  );
};
