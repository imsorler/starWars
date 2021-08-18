import { HTTP, HTTPS } from '@constants/api'

/**
 * Изменяет url с http на https
 * @param {string} url - url для изменения 
 * @returns {string} - url с https
 */
export const changeHTTP = (url) => {
  const result = url ? url.replace(HTTP, HTTPS) : url

  return result
}

/**
 * Отправляет запрос fetch
 * @param {string} url - url для запроса
 * @returns {Promise} - Promise с результатом запроса
 */
export const getApiResource = async (url) => {
  try {
    const res = await fetch(url)
    
    if (!res.ok) {
      console.error('network fetch error:', res.status)
      return false
    }

    return await res.json()

  } catch (error) {
    console.error('network fetch error:', error.message)
    return false
  }
}

// (async () => {
//   const body = await getApiResource(SWAPI_ROOT+SWAPI_PEOPLE)
//   console.log(body)
// })()

// const body = getApiResource(SWAPI_ROOT+SWAPI_PEOPLE)
//   .then(body => body)

export const makeConcurrantRequest = async (url) => {
  const res = await Promise.all(url.map(res => {
    return fetch(res).then(res => res.json())
  }))

  return res
}