function myNew() {
  const Constructor = [].shift.call(arguments);
  const newObj = Object.create(Constructor.prototype);
  const result = Constructor.apply(newObj, arguments);
  return result instanceof Object ? result : newObj;
}

module.exports = myNew;
