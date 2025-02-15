const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
  console.log(xhr.response);
});

xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send(); //asynchronous code
// xhr.response //it takes time for the message to reach the destination so xhr.response will be undefined. That's why we need to add an event listener in order to use it after it loads properly