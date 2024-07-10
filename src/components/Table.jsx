import React, { useState, useEffect } from 'react';
import { AllJamoalar } from './Team';

const Table = () => {
    const [table, setTable] = useState([]);

    useEffect(() => {
        // Set the table data from AllJamoalar
        setTable(AllJamoalar);
    }, []);

    const getColor = (position) => {
        // Add your logic to get color based on position
        // Example logic, modify as per your requirements
        if ([1, 2, 3, 4].includes(position)) {
            return "px-4 py-2 text-center text-white font-bold bg-[#004682]";
        } else if (position === 5) {
            return "px-4 py-2 text-center text-white font-bold bg-[#7f0029]";
        } else if (position === 6) {
            return "px-4 py-2 text-center text-white font-bold bg-[#b8860b]";
        } else {
            return "px-4 py-2 text-center text-black font-bold";
        }
    };

    return (
        <div className='flex justify-center overflow-x-auto col-span-2' id='tabla'>
            <div className="min-w-full relative sm:rounded-lg">
                <h2 className='text-black font-bold text-2xl mb-8 lg:mt-5 mt-12'>Turnir Jadvali</h2>
                <table className="w-full text-xs sm:text-sm md:text-base text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs sm:text-sm text-gray-700 uppercase bg-gray-50 sticky top-0 z-10">
                        <tr>
                            <th className="px-6 py-3">#</th>
                            <th className="px-6 py-3">Equipo</th>
                            <th className="px-6 py-3">PTS</th>
                            <th className="px-6 py-3">PJ</th>
                            <th className="px-6 py-3">V</th>
                            <th className="px-6 py-3">E</th>
                            <th className="px-6 py-3">D</th>
                            <th className="px-6 py-3">GA</th>
                            <th className="px-6 py-3">GC</th>
                            <th className="px-6 py-3">DF</th>
                        </tr>
                    </thead>
                    <tbody className='text-black'>
                        {table.map((team, index) => (
                            <tr key={index} className="border-b">
                                <td className={getColor(team.Orin)}><p className='text-xs'>{team.Orin}</p></td>
                                <td className="px-6 py-2 whitespace-nowrap">
                                    <div className="flex items-center text-sm font-medium">
                                        <img src={team.img} alt="Escudo" className="w-5 h-5 mr-2" />
                                        {team.name}
                                    </div>
                                </td>
                                <td className="px-6 py-2 text-sm font-bold">{team.achko}</td>
                                <td className="px-6 py-2 text-sm">{team.oyin}</td>
                                <td className="px-6 py-2 text-sm">{team.HammaSariq}</td>
                                <td className="px-6 py-2 text-sm">{team.HammaQizil}</td>
                                <td className="px-6 py-2 text-sm">{team.achko}</td>
                                <td className="px-6 py-2 text-sm">{team.achko}</td>
                                <td className="px-6 py-2 text-sm">{team.achko}</td>
                                <td className="px-6 py-2 text-sm">{team.achko}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
