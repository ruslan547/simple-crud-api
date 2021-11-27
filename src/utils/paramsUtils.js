const getParams = (url) => {
  return url.split('/').slice(1);
};

module.exports = {
  getParams
};
