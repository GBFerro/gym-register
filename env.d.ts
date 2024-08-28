// env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    MONGO_URI: string;
    REACT_APP_API_URL: string;
  }
}
