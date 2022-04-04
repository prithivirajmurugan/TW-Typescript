import * as express from 'express';
import { Request, Response } from 'express';
import { readings } from './readings/readings'; // getReading and setReadings method
import { readingsData } from './readings/readings.data'; // provides readings from every single provider
import { read, store } from './readings/readings-controller'; // provides just the store and read methods
import  { recommend, compare } from './price-plans/price-plans-controller';

const app = express();
app.use(express.json());

const { getReadings, setReadings } = readings(readingsData);

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello World</h1>');
});

app.get('/readings/read/:smartMeterId', (req:Request, res:Response) => {
  res.send(read(getReadings, req));
});

app.post('/readings/store', (req:Request, res:Response) => {
  res.send(store(setReadings, req));
});

app.get('/price-plans/recommend/:smartMeterId', (req: Request, res: Response) => {
  res.send(recommend(getReadings, req));
});

app.get('/price-plans/compare-all/:smartMeterId', (req:Request, res:Response) => {
  res.send(compare(getReadings, req));
});

const port = process.env.PORT || 8080;
app.listen(port);

console.log(`🚀 app listening on port ${port}`);
