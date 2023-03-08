console.log('Hello World');

const getResource = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`N00000t fetch ${url}`, `received ${res.status}`);
  }

  const body = await res.json();
  // arrayBuffer(), blob(), text(), formData() 
  return body;
};

getResource('https://swapi.dev/api/people/123232323')
  .then((body) => {
    console.log(body);
  })
  .catch((err) => {
    console.error('Not fetch', err);
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

