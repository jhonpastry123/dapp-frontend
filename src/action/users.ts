import axios from 'axios'

const SERVER_URL = 'http://localhost:3200'

export const getUserList = () => {
  return axios
    .get(`${SERVER_URL}/getUserList`)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      return err.response.data
    })
}

export const deleteUser = (email) => {
  return axios
    .post(`${SERVER_URL}/delete`, { email })
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      return err.response.data
    })
}
