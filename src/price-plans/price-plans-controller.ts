import { pricePlans } from './price-plans';
import  { usageForAllPricePlans } from '../usage/usage';
import { Request } from 'express';

export const recommend = (getReadings, req:Request) => {
  const meter = req.params.smartMeterId;
  const pricePlanComparisons = usageForAllPricePlans(
    pricePlans,
    getReadings(meter)
  ).sort((a, b) => extractCost(a) - extractCost(b));
  if ('limit' in req.query) {
    const limitValue = parseInt(req.query.limit as any as string);
    return pricePlanComparisons.slice(0, limitValue);
  }
  return pricePlanComparisons;
};

const extractCost = (cost):number => {
  const [, value] = Object.entries(cost).find(([key]) => key in pricePlans) as [string,number];
  return value;
};

export const compare = (getData, req:Request) => {
  const meter = req.params.smartMeterId;
  const pricePlanComparisons = usageForAllPricePlans(
    pricePlans,
    getData(meter)
  );
  return {
    smartMeterId: req.params.smartMeterId,
    pricePlanComparisons,
  };
};
