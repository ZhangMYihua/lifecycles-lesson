fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const firstUser = users[0];
    console.log(firstUser);
    return fetch(
      'https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id
    );
  })
  .then(response => response.json())
  .then(posts => console.log(posts))
  .catch(error => console.log(error));

const myAsyncFunction = async () => {
  try {
    const usersReponse = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );
    const users = await usersReponse.json();
    const secondUser = users[1];

    console.log(secondUser);

    const postsResponse = await fetch(
      'https://jsonplaceholder.typicode.com/posts?userId=' + secondUser.id
    );
    const posts = await postsResponse.json();

    console.log(posts);
  } catch (err) {
    console.log('there was an error');
  }
};
