const generate = (min = 1, max = 20, excluded = null) => {
  var n = Math.floor(Math.random() * (max - min + 1) + min);

  if (!excluded) return n;

  return n >= excluded ? n++ : n;
};

export default numberGenerator = {
  generate,
};
