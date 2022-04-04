import { pricePlans, pricePlanNames } from "../price-plans/price-plans";

export const meters = {
    METER0: "smart-meter-0",
    METER1: "smart-meter-1",
    METER2: "smart-meter-2",
    METER3: "smart-meter-3",
    METER4: "smart-meter-4",
};

interface meterPricePlanInterface {
    [meterName: string]: {
        supplier: string,
        rate:number,
    }
}
export const meterPricePlanMap:meterPricePlanInterface = {
    [meters.METER0]: pricePlans[pricePlanNames.PRICEPLAN0], // Dr Evil's Dark Energy
    [meters.METER1]: pricePlans[pricePlanNames.PRICEPLAN1], // Power for Everyone 
    [meters.METER2]: pricePlans[pricePlanNames.PRICEPLAN2], // The Green Eco
};


