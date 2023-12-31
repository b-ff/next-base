export const DB_URL = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
export const DB_LOG = Boolean(process.env.DB_LOG)
export const DEFAULT_LANGUAGE = 'en-GB'