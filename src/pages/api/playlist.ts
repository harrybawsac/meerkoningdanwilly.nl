import type { NextApiRequest, NextApiResponse } from 'next';

const NodeCache = require('node-cache');
const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENTID,
  clientSecret: process.env.CLIENTSECRET,
});

const cache = new NodeCache();

const getNewToken = async () => {
  const data: any = await spotifyApi.clientCredentialsGrant();

  spotifyApi.setAccessToken(data.body.access_token);

  cache.set('token', data.body.access_token, data.body.expires_in);
};

const handler = async (req: NextApiRequest, res: NextApiResponse<{}>) => {
  console.log(req.url);

  const token = cache.get('token');

  if (token === undefined) {
    await getNewToken();
  } else {
    spotifyApi.setAccessToken(token);
  }

  const { body } = await spotifyApi.getPlaylist('7CZs6L2NjxJlvJ4eTAsB7s');

  res.status(200).json(body);
};

export default handler;
