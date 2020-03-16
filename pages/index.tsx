import Link from "next/link"
import { PropsWithChildren, useState } from "react"
import { Brand } from "../components/brand"
import { Page } from "../components/page"
import { Video } from "../components/video"
import { videos } from "../data/videos"
import { WithLove } from "../components/with-love"
import { motion } from "framer-motion"

// colors from https://coolors.co/dbcdc6-ead7d1-dd99bb-7b506f-1f1a38

const Search = ({ onChange }: { onChange: (input: string) => void }) => {
  return (
    <div>
      <input
        placeholder="suchen nach..."
        onChange={({ target: { value } }) => onChange(value)}
      />
      <style jsx>{`
        input {
          background-color: transparent;
          color: white;
          border: none;
          padding: 0.25em 0.5em;
        }
      `}</style>
    </div>
  )
}

const Videos: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="wrapper">
      <motion.div
        initial="exit"
        animate="enter"
        exit="exit"
        variants={{
          enter: { transition: { duration: 0.5 } },
          exit: { transition: { staggerChildren: 0.05 } },
        }}
      >
        <div className="videos">{children}</div>
      </motion.div>
      <style jsx>{`
        .videos {
          display: flex;
          flex-wrap: wrap;
          margin: -0.75em -0.5em;
          align-items: stretch;
        }

        .videos > :global(*) {
          margin: 0.75em 0.5em;
          max-width: calc(33.3% - 1em);
        }
      `}</style>
    </div>
  )
}

export default () => {
  const [search, setSearch] = useState("")
  return (
    <Page>
      <Page.Header>
        <Brand />
        <Search onChange={setSearch} />
      </Page.Header>
      <Page.Content>
        <Videos>
          {videos
            .filter(video =>
              video.title.toLowerCase().includes(search.toLowerCase()),
            )
            .map(video => (
              <Link
                key={video.id}
                href="/videos/[id]"
                as={"/videos/" + video.id}
              >
                <a>
                  <motion.div
                    variants={{
                      enter: {
                        opacity: 1,
                        transition: { duration: 0.5 },
                      },
                      exit: {
                        opacity: 0,
                        transition: { duration: 0.3 },
                      },
                    }}
                  >
                    <Video
                      url={video.url}
                      title={video.title}
                      authorId={video.authorId}
                      likes={video.likes}
                      likeSymbol={video.likeSymbol}
                    />
                  </motion.div>
                </a>
              </Link>
            ))}
        </Videos>
      </Page.Content>
      <Page.Footer>
        <WithLove />
      </Page.Footer>
    </Page>
  )
}
