const { REACT_APP_STEFFECT_SERVER_ENDPOINT } = process.env

const getData = (keyword) => {
  return fetch(`${REACT_APP_STEFFECT_SERVER_ENDPOINT}/${keyword}`)
  .then(res => res.json())
}

// let result = getData(`${SERVER_ENDPOINT}/products`)

// console.log(result)

export default getData