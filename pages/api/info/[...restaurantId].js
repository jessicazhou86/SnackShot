import axios from 'axios';

export default function handler(req, res) {
  const id = req.query.restaurantId[0];

  const info = axios.get(`https://api.yelp.com/v3/businesses/${id}`, {
    headers: {
      "Authorization": "Bearer zo6J90F9HakhPibvxL4pTUUFjFVav9ixp8B1lj_f2MxrgrUTa3DySMUV5pj0kvCLUQPwGkzHd6mHsM3veqgQDVMjRtwF6ZhmBMQxyMM1cI6KLk878BmlErMnq42vYnYx",
    }
  });

  const reviews = axios.get(`https://api.yelp.com/v3/businesses/${id}/reviews`, {
    headers: {
      "Authorization": "Bearer zo6J90F9HakhPibvxL4pTUUFjFVav9ixp8B1lj_f2MxrgrUTa3DySMUV5pj0kvCLUQPwGkzHd6mHsM3veqgQDVMjRtwF6ZhmBMQxyMM1cI6KLk878BmlErMnq42vYnYx",
    }
  });

  Promise.all([info, reviews])
  .then((result) => {
    const resultObj = {
      info: result[0].data,
      reviews: result[1].data
    }
    res.status(200).send(resultObj);
  })
}