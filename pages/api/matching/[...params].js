import axios from 'axios';

export default function handler(req, res) {
  const name = req.query.params[0];
  const location = req.query.params[1];

  return axios.get(`https://api.yelp.com/v3/businesses/search?term=${name}&location=${location}`, {
    headers: {
      "Authorization": "Bearer zo6J90F9HakhPibvxL4pTUUFjFVav9ixp8B1lj_f2MxrgrUTa3DySMUV5pj0kvCLUQPwGkzHd6mHsM3veqgQDVMjRtwF6ZhmBMQxyMM1cI6KLk878BmlErMnq42vYnYx",
    }
  })
  .then((result) => {
    res.status(200).send(result.data);
  });
}