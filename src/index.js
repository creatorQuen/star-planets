console.log('Hello World');

const getResource = async (url) => {
  const res = await fetch(url);
  const body = await res.json();
  // arrayBuffer(), blob(), text(), formData() 
  return body;
};

getResource('https://swapi.dev/api/people/1')
  .then((body) => {
    console.log(body);
  });



////------------------------------------------
// fetch('https://swapi.dev/api/people/1')
//   .then((res) => {
//     console.log('Got Response', res.status);
//     return res.json();
//   })
//   .then((body) => {
//     console.log(body);
//   });

