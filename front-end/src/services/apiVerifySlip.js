import axios from 'axios';
import api from '../utils/api'

const APIVerifySlip = {
  verifySlip: async (slip, data) => {
    const header = {
      "Content-Type": "image/jpeg",
      "Accept": "*"
    };
    let response =  api.post(
      `/upload-slip?amount=${data.money}&date=${data.date}&time=${data.time}`,
      slip,
      header
    );
    return response;
  }
};

export default APIVerifySlip;
