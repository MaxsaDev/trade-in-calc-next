import {databaseExchange} from "./data/exchange";

export default function handler(req, res) {
  if (req.method === 'GET'){
    res.status(200).json(databaseExchange);
  }
}