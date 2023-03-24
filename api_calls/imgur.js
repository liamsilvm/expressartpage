const axios = require('axios');

const getImgurAlbumImages = (albumId, clientId) => {

  const apiUrl = `https://api.imgur.com/3/album/${albumId}/images`;


  const headers = {
    'Authorization': `Client-ID ${clientId}`
  };

  return axios.get(apiUrl, { headers })
    .then(response => {
      const images = response.data.data.map(img => img.link);
      return images;
    })
    .catch(error => {
      console.error(error);
      return [];
    });
};

module.exports = { getImgurAlbumImages };
