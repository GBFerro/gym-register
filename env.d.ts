// env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    MONGO_URI: string;
  }
}
