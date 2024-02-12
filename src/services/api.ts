const conta = {
  email: 'peterhfss@dio.com',
  password: 'ph1201'

}

export const api = new Promise((resolve) =>{
  setTimeout(() =>{
    resolve(conta)
  }, 3000)
})