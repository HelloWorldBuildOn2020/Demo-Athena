import api from '../utils/api'

const APIVerifySlip = {
  verifySlip: async (slip, data) => {
    const header = {
      "Content-Type": "image/jpeg",
      "Accept": "*"
    };
    let response =  api.post(
      `/verify-slip?amount=${data.money}&date=${data.date}&time=${data.time}&user_id=1`,
      slip,
      header
    );
    return response;
  }
};

export default APIVerifySlip;
