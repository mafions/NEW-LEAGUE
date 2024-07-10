import React, { useState, useEffect } from 'react';

export const Header = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const backendUrl = 'http://localhost:8000/teams'; // JSON Server URL
    const localData = localStorage.getItem('teamsData');

    if (localData) {
      try {
        const parsedData = JSON.parse(localData);
        if (Array.isArray(parsedData)) {
          setTeams(parsedData);
        }
      } catch (error) {
        console.error('Error parsing teams from localStorage:', error);
      }
    }

    fetch(backendUrl)
      .then(response => response.json())
      .then(data => {
        if (data && Array.isArray(data)) {
          setTeams(data);
          localStorage.setItem('teamsData', JSON.stringify(data));
        }
      })
      .catch(error => {
        console.error('Error fetching teams:', error);
      });
  }, []);

  return (
    <header className='md:flex items-center justify-between bg-[#f0f0f0] w-full h-12 lg:px-40 p-2 hidden'>
      {Array.isArray(teams) && teams.map((team, index) => ( 
        <div key={index} className='list-none'>
          <img className='w-7 hover:scale-125' style={{ transition: "all 0.3s cubic-bezier(0,0,0.5,1)" }} src={team.crest} alt="logo" />
        </div>
      ))}
    </header>
  );
}
