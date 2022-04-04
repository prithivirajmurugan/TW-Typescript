import { read, store } from "./readings-controller";
import  { readingsData } from "./readings.data";
import  { readings } from "./readings";
import { meters } from "../meters/meters";
import { Request } from "express";

describe("readings", () => {
    


    it("should get readings with meter id from params", () => {
        const mockRequest = {
            params: {
                smartMeterId: meters.METER0
            }
        } as unknown as Request;
        const { getReadings } = readings(readingsData);
        const readingsForMeter = read(getReadings, mockRequest);

        expect(readingsForMeter).toEqual(readingsData[meters.METER0]);
    });

    it("should store readings with meter id and readings from body", () => {
        const { setReadings, getReadings } = readings(readingsData);
    

        const originalLength = getReadings(meters.METER0).length;

        const fixture = {
            smartMeterId: meters.METER0,
            electricityReadings: [
                {
                    time: 981438113,
                    reading: 0.0503,
                },
                {
                    time: 982087047,
                    reading: 0.0213,
                },
            ],
        };
        const mockRequest = { body: fixture } as unknown as Request;
        store(setReadings, mockRequest);

        const newLength = getReadings(meters.METER0).length;

        expect(originalLength + 2).toEqual(newLength);
    });
});
