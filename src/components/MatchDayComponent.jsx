
import React, { useState, useEffect } from 'react';
import referee from '/src/assets/logos/referee.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Redpoint from '/src/assets/Redpoint.svg';

// Berilgan ma'lumotlarni import qilamiz
import { data } from './Kutilyotgan'; // data faylini kerakli joyga o'rnating

export const MatchDayComponent = () => {
  const [matches, setMatches] = useState([]);
  const [currentMatchday, setCurrentMatchday] = useState('');

  useEffect(() => {
    // LocalStorage dan joriy matchdayni olish
    const localMatchday = localStorage.getItem('currentMatchday');
    if (localMatchday) {
      setCurrentMatchday(localMatchday);
    } else {
      setCurrentMatchday(data.response[0].fixture.id.toString()); // data ma'lumotlari yoki nomini o'rnating
    }
  }, []);

  useEffect(() => {
    // Joriy matchday bo'yicha o'yinlarni olish
    if (currentMatchday) {
      const matchesData = data.response; // data ma'lumotlari yoki nomini o'rnating
      setMatches(matchesData);
      localStorage.setItem('matchesData', JSON.stringify(matchesData));
    }
  }, [currentMatchday]);

  const formatDateAndTime = (utcDate) => {
    const date = new Date(utcDate);
    const formattedDate = date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    const formattedTime = date.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    return { formattedDate, formattedTime };
  };

  const getMatchStatus = (status) => {
    if (status === "Full Time") {
      return <div className=' bg-[#7685a5]  flex items-center justify-center py-1 rounded-b-lg'><p className='text-white font-semibold text-sm'>Shiddatli 😍  </p> </div>;
    } else if (status === "In Play") {
      return <div className='bg-[#ff4b44] flex items-center justify-center py-1 rounded-b-lg'> <p className='text-white font-semibold text-sm'>EN JUEGO</p> </div>;
    } else {
      return <div className=' bg-[#111827] flex items-center justify-center py-1 rounded-b-lg'><p className='text-white font-semibold text-sm'>PRÓXIMAMENTE</p> </div>;
    }
  };

  const liveMatch = (status) => {
    if (status === "In Play") {
      return <div className='flex gap-1'> <img src={Redpoint} className='w-2 blink' alt="" /> <p className='text-red-600 text-xs font-bold'>En directo</p></div>
    }
    return null;
  };

  return (
    <div className='bg-[#ffffff] px-4 lg:px-40 py-6 ' id='directo'>
      <div className="container ">
        <h2 className='text-black font-bold text-2xl mb-8 pt-6'> KUTILAYOTGAN O'YINLAR  {currentMatchday}</h2>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
          1308: { slidesPerView: 3 },
          1715: { slidesPerView: 4 },
        }}
      >
        {matches.map((match, index) => {
          const { fixture, league, teams, score, events } = match;
          const { formattedDate, formattedTime } = formatDateAndTime(fixture.date);

          return (
            <SwiperSlide key={index} className='cursor-grab active:cursor-grabbing px-3'>
              <div className='flex flex-col'>
                <article className='bg-white min-w-52 border flex flex-col justify-between min-h-32 rounded-lg hover:scale-105 hover:shadow-lg mt-3'>
                  <div>
                    <div className='flex justify-between bg-[#f7f7f7] px-4 py-2 text-xs font-bold rounded-lg'>
                      <p>{formattedDate}</p>
                      <p>{formattedTime}</p>
                    </div>
                    <div className='bg-white px-4 py-2 grid  md:grid-cols-3 md:px-4 px-8 grid-cols-2 '>
                      <div className='flex flex-col col-span-2'>
                        <div className='flex  items-center'>
                          <p className='text-sm font-semibold'>{teams.home.name}</p>
                          <img src={teams.home.logo} alt='' className='w-6' />
                          <p className='text-2xl font-bold'>{score.fulltime.home} - {score.fulltime.away}</p>
                          <img src={teams.away.logo} alt='' className='w-6' />
                          <p className='text-sm font-semibold'>{teams.away.name}</p>
                        </div>
                        <div className='py-2'>
                          <p className='text-[#7735ccf5] font-bold'>#{league.name.replace(/\s+/g, '')}</p>
                        </div>
                      </div>
                      <div className='flex gap-2'>
                        <hr />
                        <div className='flex flex-col'>
                          <div className='flex gap-1 items-center'>
                            <img src={referee} alt='' className='w-2' />
                            {fixture.referee ? (
                              <p className='font-bold text-[9px]'>{fixture.referee}</p>
                            ) : (
                              <p className='font-bold text-[9px]'>MAFION</p>
                            )}
                          </div>
                          {liveMatch(fixture.status.long)}
                        </div>
                      </div>
                    </div>
                  </div>
                  {getMatchStatus(fixture.status.long)}
                </article>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};


// import React, { useState, useEffect } from 'react';
// import referee from '/src/assets/logos/referee.svg';
// import { Pagination } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import Redpoint from '/src/assets/Redpoint.svg';
// import 'swiper/css';
// import 'swiper/css/pagination';

// export const MatchDayComponent = () => {
//   const [matches, setMatches] = useState([]);
//   const [currentMatchday, setCurrentMatchday] = useState('');

//   useEffect(() => {
//     const standingsUrl = 'https://la-liga-pau.vercel.app/api/competitions/PD/standings';
//     const localMatchday = localStorage.getItem('currentMatchday');

//     if (localMatchday) {
//       setCurrentMatchday(localMatchday);
//     }

//     fetch(standingsUrl)
//       .then(response => response.json())
//       .then(data => {
//         setCurrentMatchday(data.season.currentMatchday);
//         localStorage.setItem('currentMatchday', data.season.currentMatchday);
//       })
//       .catch(error => {
//         console.error('Error fetching standings:', error);
//       });
//   }, []);

//   useEffect(() => {
//     if (currentMatchday) {
//       const matchesUrl = `https://la-liga-pau.vercel.app/api/competitions/PD/matches?matchday=${currentMatchday}`;
//       const localMatches = localStorage.getItem('matchesData');

//       if (localMatches) {
//         setMatches(JSON.parse(localMatches));
//       }

//       fetch(matchesUrl)
//         .then(response => response.json())
//         .then(data => {
//           const sortedMatches = data.matches.sort((a, b) => {
//             const order = { IN_PLAY: 1, FINISHED: 2, SCHEDULED: 3 };
//             return order[a.status] - order[b.status];
//           });
//           setMatches(sortedMatches);
//           localStorage.setItem('matchesData', JSON.stringify(sortedMatches));
//         })
//         .catch(error => {
//           console.error('Error fetching matches:', error);
//         });
//     }
//   }, [currentMatchday]);

//   const formatDateAndTime = (utcDate) => {
//     const date = new Date(utcDate);
//     const formattedDate = date.toLocaleDateString('es-ES', {
//       day: '2-digit',
//       month: '2-digit',
//       year: 'numeric',
//     });
//     const formattedTime = date.toLocaleTimeString('es-ES', {
//       hour: '2-digit',
//       minute: '2-digit',
//       hour12: false,
//     });
//     return { formattedDate, formattedTime };
//   };

//   const getMatchStatus = (status) => {
//     if (status === "FINISHED") {
//       return <div className=' bg-[#7685a5]  flex items-center justify-center py-1 rounded-b-lg'><p className='text-white font-semibold text-sm'>FINALIZADO</p> </div>;
//     } else if (status === "IN_PLAY") {
//       return <div className='bg-[#ff4b44] flex items-center justify-center py-1 rounded-b-lg'> <p className='text-white font-semibold text-sm'>EN JUEGO</p> </div>;
//     } else {
//       return <div className=' bg-[#111827] flex items-center justify-center py-1 rounded-b-lg'><p className='text-white font-semibold text-sm'>PRÓXIMAMENTE</p> </div>;
//     }
//   };

//   const liveMatch = (status) => {
//     if (status === "IN_PLAY") {
//       return <div className='flex gap-1'> <img src={Redpoint} className='w-2 blink' alt="" /> <p className='text-red-600 text-xs font-bold'>En directo</p></div>
//     }
//     return null;
//   };

//   return (
//     <div className='bg-[#ffffff] px-4 lg:px-40 py-6   ' id='directo' >
//       <div className="container ">
//         <h2 className='text-black font-bold text-2xl mb-8 pt-6'> KUTILAYOTGAN O'YINLAR  {currentMatchday}</h2>
//       </div>
//       <Swiper
//        modules={[ Pagination]}
//         spaceBetween={10}
//         slidesPerView={1}
        
//   pagination={{ clickable: true }}
//         breakpoints={{
//           640: {
//             slidesPerView: 1,
           
//           },
//           768: {
//             slidesPerView: 2,
//           },
          
//           1024: {
//             slidesPerView: 2,
           
//           },
//           1308: {
//             slidesPerView: 3,
           
//           },
//           1715: {
//             slidesPerView: 4,
         
//           },
//         }}
//       >
//         {matches.map(match => {
//           const { formattedDate, formattedTime } = formatDateAndTime(match.utcDate);
//           return (
//             <SwiperSlide key={match.id} className='cursor-grab active:cursor-grabbing px-3'>
//               <div className='flex flex-col'>
//                 <article  style={{transition: "all 0.3s cubic-bezier(0,0,0.5,1)"}} className='bg-white min-w-52 border flex flex-col justify-between min-h-32 rounded-lg hover:scale-105 hover:shadow-lg mt-3'>
//                   <div>
//                     <div className='flex justify-between bg-[#f7f7f7] px-4 py-2 text-xs font-bold rounded-lg'>
//                       <p>{formattedDate}</p>
//                       <p>{formattedTime}</p>
//                     </div>
//                     <div className='bg-white px-4 py-2 grid grid-cols-3 '>
//                       <div className='flex flex-col col-span-2'>
//                         <div className='flex gap-2 items-center  '>
//                           <p className='text-sm font-semibold'>{match.homeTeam.tla}</p>
//                           <img src={match.homeTeam.crest} alt="" className='w-6' />
//                           <p className='text-2xl font-bold'>{match.score.fullTime.home !== null ? match.score.fullTime.home : ' '} - {match.score.fullTime.away !== null ? match.score.fullTime.away : ' '}</p>
//                           <img src={match.awayTeam.crest} alt="" className='w-6' />
//                           <p className='text-sm font-semibold'>{match.awayTeam.tla}</p>
//                         </div>

//                         <div className='py-2'>
//                             <p className='text-[#7735ccf5] font-bold'>#{match.homeTeam.shortName.replace(/\s+/g, '')}{match.awayTeam.shortName.replace(/\s+/g, '')}</p>
//                         </div>
//                       </div>
//                       <div className='flex gap-2'>
//                         <hr />
//                         <div className='flex flex-col'>
//                         <div className='flex gap-1 items-center'>
//                           <img src={referee} alt="" className='w-2' />
//                           {match.referees.length > 0 ? (
//                             <p className='font-bold text-[9px]'>{match.referees[0].name}</p>
//                           ) : (
//                             <p className='font-bold text-[9px]'>Árbitro sin asignar</p>
//                           )}
                        
//                         </div>
//                         {liveMatch(match.status)}
//                         </div>
//                       </div>
//                     </div>                 
//                   </div>
               
//                     {getMatchStatus(match.status)}
                 
//                 </article>
//               </div>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
      
//     </div>
//   );
// };
