import { ReadingInterface } from "./readings.data";

export const readings = (data: ReadingInterface[] | {}) => ({
    getReadings: (meterId:string):ReadingInterface[] => data[meterId] || [],
    setReadings: (meterId:string, readings:ReadingInterface[]):ReadingInterface => {
        const currentReadings:ReadingInterface[] = data[meterId];
        data[meterId] = [...currentReadings, ...readings];
        return data[meterId];
    },
});
