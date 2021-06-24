const regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const regUrl =
  /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z0-9]{2,5}(:[0-9]{1,5})?(\/.*)?$/
const regNumber = /[^0-9]/

export const isEmail = (value) => regEmail.test(value)
export const isNumber = (value) => !regNumber.test(value)
export const isUrl = (value) => regUrl.test(value)
export const minLength = (value, length) => value.length >= length
export const maxLength = (value, length) => value.length <= length
export const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0)
