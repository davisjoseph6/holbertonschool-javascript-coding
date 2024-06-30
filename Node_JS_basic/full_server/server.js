// full_server/server.js
import express from 'express';
import router from './routes/index';

const app = express();
const PORT = 1245;

app.use(router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export default app;
