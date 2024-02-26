import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import passport from 'passport';
import session from 'express-session';
import path from 'path';

import userRouter from './routes/user.route.js';
import exploreRouter from './routes/explore.routes.js';
import authRouter from './routes/auth.routes.js';
import connectMongoDB from './db/connectMongoDB.js';
import './passport/github.auth.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

app.use('/api/users', userRouter)
app.use('/api/explore', exploreRouter)
app.use('/api/auth', authRouter)

app.use(express.static(path.join(__dirname, '/frontend/dist')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'))
})

app.listen(PORT, () => {
    console.log('App is running on the port no 5000')
    connectMongoDB()
})