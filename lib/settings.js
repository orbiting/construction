const ENV =
  typeof window !== 'undefined'
    ? window.__NEXT_DATA__.env
    : process.env

export const API_BASE_URL = ENV.API_BASE_URL
export const API_WS_BASE_URL = ENV.API_WS_BASE_URL