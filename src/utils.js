import postData from "./assets/articles.json"

export const posts = postData.sort((a, b) => new Date(b.date) - new Date(a.date));
export const firstYear = new Date(posts[0].date).getFullYear();

export default {
  posts,
  firstYear
}
