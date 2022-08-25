export const isProduction = process.env.NODE_ENV === "production";

export const ENVIRONMENT: 'staging' | 'production' | 'development' = process.env.ENVIRONMENT_NAME as 'staging' | 'production' ?? "development";

export const isDevelopment = ENVIRONMENT !== "production" && ENVIRONMENT !== "staging";

export const DB_URL = process.env.DB_URL || "beep";

export const DB_DATABASE = process.env.DB_DATABASE || "beep";

export const DB_PASSWORD = process.env.DB_PASSWORD || "beep";

export const DB_USER = process.env.DB_USER || "beep";

export const DB_CA = process.env.DB_CA;

