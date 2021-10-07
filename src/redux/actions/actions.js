import axios from "axios";

export const login = (email, password) => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        "https://apptesting.docsumo.com/api/v1/eevee/login/",
        { email, password }
      );
      dispatch(addUser(response.data.data.user));
      resolve(response.data);
    } catch (e) {
      console.log("error", e);
      reject(e.response.data.error);
    }
  });
};

export const addUser = (user) => ({
  type: "ADD_USER",
  payload: user,
});
