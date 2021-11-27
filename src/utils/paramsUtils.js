exports.getParams = (url) => {
  return url.split('/').slice(1);
};
