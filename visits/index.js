const express = require('express');
const redis = require('redis');

const app = express();

let client;
(async () => {
  client = redis.createClient({
    socket: {
       port: 6379,
       host: 'redis-server'
    }
});

  client.on("error", (error) => console.error(`Error : ${error}`));

  await client.connect();
  await client.set('visits', 0);
})();

app.get('/', async (req, res) => {
  // client.get('visits', (err, visits) => {
  //   res.send('Number of visits is ' + visits);
  //   client.set('visits', parseInt(visits) + 1);
  // });
  const val = await client.get("visits")
  const valR = val;

  await client.set('visits', parseInt(val) + 1);
  res.send('Number of visits is ' + valR);
});

app.listen(8081, () => {
  console.log('Listening on port 8081');
});
