exports.validatePersonParams = (data) => {
  return !!data
    && typeof data.name === 'string'
    && typeof data.age === 'number'
    && typeof Array.isArray(data.hobbies)
    && typeof data.hobbies.every(item => typeof item === 'string');
};

exports.validateUuid = (uuid) => {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(uuid);
};
