import fastify from 'fastify'
import { createUser } from './routes/user-create';

const app = fastify(); 




app.register(createUser);


app.listen( {port: 3333} ).then( () => {
    console.log('ai papito o server ta on!!')
});