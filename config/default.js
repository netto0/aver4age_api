"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
exports.default = {
    port: 3000,
    dbUri: `mongodb+srv://${dbUser}:${dbPassword}@cursots.ynnuyze.mongodb.net/?retryWrites=true&w=majority&appName=CursoTS`,
    env: 'development'
};
