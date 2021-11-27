exports.validatePersonParams = (data) => {
  return !!data
    && typeof data.name === 'string'
    && typeof data.age === 'number'
    && typeof Array.isArray(data.hobbies)
    && typeof data.hobbies.every(item => typeof item === 'string');
}
