/**
 * Different possible API Status codes
 */
export const STATUS_CODES = {
  OK: 200,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

/**
 * number of data entities to fetch on each API call to /photos
 */
export const LimitRequestSize = 10;

/**
 * API Fetching maximum retry attempts on error
 */
export const MAX_API_RETRIES = 3;
