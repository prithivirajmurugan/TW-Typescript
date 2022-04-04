import {meters} from '../meters/meters';

const generateSingle = ():ReadingInterface[] => {
  const startTime = 1607686125; // Friday, 11 December 2020 11:28:45 GMT+00:00
  const hour = 3600;
  const readingsLength = Math.ceil(Math.random() * 20);

  const returnArray = [...new Array(readingsLength)].map((reading, index) => ({
    time: startTime - index * hour,
    reading: Math.random() * 2,
  }));
  return returnArray;
};

const generateAllMeters = (): ReadingInterface[] | {} => {
  const readings = {};

  for (const key in meters) {
    if (meters.hasOwnProperty(key)) {
      readings[meters[key]] = generateSingle();
    }
  }

  return readings;
};

export interface ReadingInterface{
  time: number,
  reading:number
}


export const readingsData = generateAllMeters();

/* Sample Data Generated
{
  'smart-meter-0': [
    { time: 1607686125, reading: 1.3157812598221295 },
    { time: 1607682525, reading: 0.9776192426479349 },
    { time: 1607678925, reading: 1.0552418998973634 },
    { time: 1607675325, reading: 1.1178866523773636 },
    { time: 1607671725, reading: 0.932837843327385 },
    { time: 1607668125, reading: 1.5026062057760363 },
    { time: 1607664525, reading: 1.693514689770637 },
    { time: 1607660925, reading: 1.9097962201496874 },
    { time: 1607657325, reading: 1.3493636846787975 },
    { time: 1607653725, reading: 1.9335624424168967 },
    { time: 1607650125, reading: 0.23230130081780986 },
    { time: 1607646525, reading: 1.3470938864013848 }
  ],
  'smart-meter-1': [
    { time: 1607686125, reading: 0.9893691488351828 },
    { time: 1607682525, reading: 0.6185760733013108 },
    { time: 1607678925, reading: 0.18655232194145333 },
    { time: 1607675325, reading: 1.1445307235213353 }
  ],
  'smart-meter-2': [
    { time: 1607686125, reading: 1.057762753029845 },
    { time: 1607682525, reading: 0.766045447199263 },
    { time: 1607678925, reading: 0.526906645015913 },
    { time: 1607675325, reading: 0.7319959372341871 },
    { time: 1607671725, reading: 0.5315233122505054 },
    { time: 1607668125, reading: 1.6378824190353933 },
    { time: 1607664525, reading: 0.10653366898070171 },
    { time: 1607660925, reading: 0.12062736177217914 },
    { time: 1607657325, reading: 1.9897267785747488 },
    { time: 1607653725, reading: 0.3045436955466574 },
    { time: 1607650125, reading: 0.5967742392945374 },
    { time: 1607646525, reading: 0.08986029131095696 },
    { time: 1607642925, reading: 1.8175327026086912 }
  ],
  'smart-meter-3': [
    { time: 1607686125, reading: 1.0219048814952694 },
    { time: 1607682525, reading: 1.36890315726369 },
    { time: 1607678925, reading: 0.9881015602149286 },
    { time: 1607675325, reading: 0.06565662580095921 },
    { time: 1607671725, reading: 1.8227526241198166 },
    { time: 1607668125, reading: 0.5017639706535331 },
    { time: 1607664525, reading: 1.5213998367956663 },
    { time: 1607660925, reading: 0.032450801357980286 },
    { time: 1607657325, reading: 0.3996801280398965 },
    { time: 1607653725, reading: 0.1770210579537257 },
    { time: 1607650125, reading: 0.1166582512039045 },
    { time: 1607646525, reading: 0.31615118700438405 },
    { time: 1607642925, reading: 0.8284905669966904 },
    { time: 1607639325, reading: 0.7832320092586196 },
    { time: 1607635725, reading: 1.71336408426777 },
    { time: 1607632125, reading: 1.2621014402380468 },
    { time: 1607628525, reading: 0.9722817006424807 }
  ],
  'smart-meter-4': [
    { time: 1607686125, reading: 1.0945569605207184 },
    { time: 1607682525, reading: 0.4780461508842695 },
    { time: 1607678925, reading: 1.17223337956617 },
    { time: 1607675325, reading: 0.25601805373396935 },
    { time: 1607671725, reading: 1.952673270599528 },
    { time: 1607668125, reading: 0.1995813257510215 },
    { time: 1607664525, reading: 1.860023273561143 }
  ]
}

*/
