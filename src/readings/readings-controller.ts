import { Request } from "express";
import { ReadingInterface } from "./readings.data";


export const read = (getData:Function, req:Request):ReadingInterface[] => {
    const meter:String = req.params.smartMeterId;
    return getData(meter);
};

export const store = (setData:Function, req:Request):ReadingInterface[] => {
    const data = req.body;
    return setData(data.smartMeterId, data.electricityReadings);
};

