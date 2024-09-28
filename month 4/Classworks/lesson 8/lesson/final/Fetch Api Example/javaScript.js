// const API = 'https://restcountries.com/v3.1/all';
// const getData = resource => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.addEventListener('readystatechange', () => {
//       if (request.readyState == 4 && request.status == 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState == 4) {
//         reject('error');
//       }
//     });

//     request.open('GET', resource);
//     request.send();
//   });
// };

// getData(API)
//   .then(malumot => {
//     console.log(malumot);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// fetch(API)
//   .then(data => {
//     return data.json();
//   }).then((dataJson) => {
//     console.log(dataJson);

//   })
//   .catch(err => {
//     console.log(err);
//   });

const getTodos = callback => {
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback('malumot olish illoji yo`q !!!', undefined);
    }
  });

  request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
  request.send();
};

getTodos((err, data) => {
  console.log('calback function ishga tushdi');
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
