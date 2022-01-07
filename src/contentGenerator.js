const getlorem = require('getlorem');

const randomRange = (start, end) => {
  return ~~(Math.random() * (end - start)) + start;
}

function generateContent() {
  const modules = Array.from(
    { length: randomRange(3, 11) },
    (_, i) => ({ title: `Módulo ${i + 1}`, description: getlorem.sentence()}),
  );
  return modules.map(module => ({
    ...module,
    lessons: Array.from(
      { length: randomRange(3, 11) },
      () => randomRange(120, 950)
    ),
  }))
}

module.exports = {
  generateContent,
}