import {databaseTradein} from "./data/tradein";

export default function handler(req, res) {
  if (req.method === 'GET'){
    res.status(200).json(databaseTradein);
  }
}