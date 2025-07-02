// pages/api/mutasi.js
import axios from 'axios';

const merchant_id = process.env.MERCHANT_ID;
const merchant_code = process.env.MERCHANT_CODE;

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      `https://gateway.okeconnect.com/api/mutasi/qris/${merchant_id}/${merchant_code}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({});
  }
}