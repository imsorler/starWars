//общие
export const HTTPS = 'https://'
export const HTTP = 'http://'
//SWAPI
export const SWAPI_ROOT = 'swapi.dev/api/'
export const SWAPI_PEOPLE = 'people'
export const SWAPI_PARAM_PAGE = '/?page='
export const SWAPI_PARAM_SEARCH = '/?search='

export const API_PEOPLE = HTTPS+SWAPI_ROOT+SWAPI_PEOPLE+SWAPI_PARAM_PAGE
export const API_PERSON = HTTPS+SWAPI_ROOT+SWAPI_PEOPLE
export const API_SEARCH = HTTPS+SWAPI_ROOT+SWAPI_PEOPLE+SWAPI_PARAM_SEARCH

//VISUAL GUID
const GUID_ROOT_IMG = 'https://starwars-visualguide.com/assets/img/'
const GUID_PEOPLE = 'characters'
export const GUID_IMG_EXTENSION = '.jpg'

export const URL_IMG_PERSON = GUID_ROOT_IMG+GUID_PEOPLE