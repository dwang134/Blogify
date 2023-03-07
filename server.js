const express = require('express'); 
const cors = require('cors');
const cookieParser = require('cookie-parser')

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors({
    credentials:true,
    origin: 'http://localhost:5173'
}));
app.use(cookieParser());

const postRouter= require('./routes/posts');
const authRouter= require('./routes/auth');
const userRouter= require('./routes/users');

app.use('/api/auth', authRouter);
app.use('/api/posts', postRouter);
app.use('/api/users', userRouter);

app.listen(PORT, () => {
    console.log('Server is now starting on '+ PORT);
})