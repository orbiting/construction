const ENV =
  typeof window !== 'undefined'
    ? window.__NEXT_DATA__.env
    : process.env

export const API_BASE_URL = ENV.API_BASE_URL
export const META_ROBOTS = ENV.META_ROBOTS
export const PUBLIC_BASE_URL = ENV.PUBLIC_BASE_URL

export const PIWIK_URL_BASE = ENV.PIWIK_URL_BASE
export const PIWIK_SITE_ID = ENV.PIWIK_SITE_ID
