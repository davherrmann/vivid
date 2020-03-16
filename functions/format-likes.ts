export const formatLikes = (likes: number) => {
  return likes > 999 ? (likes / 1000).toFixed(1) + "k" : likes
}
