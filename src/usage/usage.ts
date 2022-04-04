import { PricePlanInterface } from "price-plans/price-plans";
import { ReadingInterface } from "readings/readings.data";

export const average = (readings:ReadingInterface[]):number => {
    return (
        readings.reduce((prev, next) => prev + next.reading, 0) /
        readings.length
    );
};

export const timeElapsedInHours = (readings:ReadingInterface[]):number => {
    readings.sort((a, b) => a.time - b.time);
    const seconds = readings[readings.length - 1].time - readings[0].time;
    const hours = Math.floor(seconds / 3600);
    return hours;
};

export const usage = (readings:ReadingInterface[]):number => {
    return average(readings) / timeElapsedInHours(readings);
};

export const usageCost = (readings:ReadingInterface[], rate:number) => {
    return usage(readings) * rate;
};


export const usageForAllPricePlans = (pricePlans: PricePlanInterface, readings: ReadingInterface[]) => {
    return Object.entries(pricePlans).map(([key, value]) => {
        return {
            [key]: usageCost(readings, value.rate)
        };
    });
};

