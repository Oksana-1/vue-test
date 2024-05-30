export default class Api {
  async fetchPosts() {
    return await (
      await fetch("https://jsonplaceholder.typicode.com/posts/")
    ).json();
  }
}
