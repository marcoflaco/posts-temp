export function fetchPosts(limit = 5) {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=0&_limit=${limit}}`
  ).then((response) => response.json());
}
