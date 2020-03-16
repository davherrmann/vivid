type Video = {
  id: string
  url: string
  title: string
  authorId: string
  likes: number
  likeSymbol?: string
}

export const videos: Video[] = [
  {
    id: "1",
    url: "https://storage.googleapis.com/coverr-main/mp4%2FTired_is_Happy.mp4",
    title: "Mein Hund kann so viel mehr...",
    authorId: "1",
    likes: 549,
    likeSymbol: "😎",
  },
  {
    id: "2",
    url: "https://storage.googleapis.com/coverr-main/mp4%2FCoverr-Lulu.mp4",
    title: "Alles oder nichts.",
    authorId: "3",
    likes: 3001,
    likeSymbol: "❤️",
  },
  {
    id: "3",
    url:
      "https://storage.googleapis.com/coverr-main/mp4%2Fcoverr-positano-sunset--1570960152397.mp4",
    title: "Positano Sunset",
    authorId: "10",
    likes: 19393,
    likeSymbol: "⚽",
  },
  {
    id: "4",
    url:
      "https://storage.googleapis.com/coverr-main/mp4%2Fcoverr-man-running-open-air-1583230361433.mp4",
    title: "Man Running Open-Air",
    authorId: "14",
    likes: 2839,
  },
  {
    id: "5",
    url:
      "https://storage.googleapis.com/coverr-main/mp4%2Fcoverr-navigates-to-coverr-co-website-on-laptop--1579856933710.mp4",
    title: "Searching Coverr on a Laptop",
    authorId: "1",
    likes: 19,
    likeSymbol: "🔥",
  },
  {
    id: "6",
    url:
      "https://storage.googleapis.com/coverr-main/mp4%2Fcoverr-pouring-sparking-water-1582280716136.mp4",
    title: "Pouring Sparkling Water",
    authorId: "19",
    likes: 1029,
    likeSymbol: "🥺",
  },
]
