const { REACT_APP_STEFFECT_SERVER_ENDPOINT } = process.env

const getData = () => {
  return fetch(`${REACT_APP_STEFFECT_SERVER_ENDPOINT}/products`)
  .then(res => res.json())
}

// let result = getData(`${SERVER_ENDPOINT}/products`)

// console.log(result)

export default getData