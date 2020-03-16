import { useRouter } from "next/router"
import { PropsWithChildren, useState } from "react"
import { Avatar } from "../../components/avatar"
import { Brand } from "../../components/brand"
import { Page } from "../../components/page"
import { Video } from "../../components/video"
import { WithLove } from "../../components/with-love"
import { people } from "../../data/people"
import { videos } from "../../data/videos"
import { formatLikes } from "../../functions/format-likes"
import { motion } from "framer-motion"

const Likes = ({
  count,
  symbol = "🦙",
}: {
  count: number
  symbol?: string
}) => {
  return (
    <div className="likes">
      <span>
        <b>{formatLikes(count)}</b>{" "}
        <span role="img" aria-label="likes">
          {symbol}
        </span>
      </span>
      <style jsx>{`
        .likes {
          filter: grayscale(1);
          transition: filter 0.2s;
          cursor: pointer;
        }

        .likes:hover {
          filter: grayscale(0);
        }
      `}</style>
    </div>
  )
}

const About = ({ personId }: { personId: string }) => {
  const person = people[parseInt(personId, 10)]
  return (
    <div className="about">
      <Avatar imgUrl={person.photo} />
      <span>
        {person.name} {person.surname}
      </span>
      <style jsx>{`
        .about {
          display: flex;
          align-items: baseline;
        }

        .about > :global(* + *) {
          margin-left: 0.5em;
        }
      `}</style>
    </div>
  )
}

const Title = ({ text, children }: PropsWithChildren<{ text: string }>) => {
  return (
    <div className="title">
      <h2>{text}</h2>
      {children}
      <style jsx>{`
        .title {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          padding: 0.5em 0 0;
        }
      `}</style>
    </div>
  )
}

const VideoPage: React.FC = () => {
  const [id, setId] = useState(useRouter().query.id)

  const video = videos.find(video => video.id === id)
  return (
    <Page>
      <Page.Header>
        <Brand />
      </Page.Header>
      <Page.Content>
        <motion.div initial="exit" animate="enter" exit="exit">
          <motion.div
            variants={{
              exit: { opacity: 0, transition: { duration: 0.3 } },
              enter: { opacity: 1, transition: { duration: 0.3 } },
            }}
          >
            {video && <Video url={video.url} title={video.title} controls />}
          </motion.div>
        </motion.div>
        {video && (
          <Title text={video.title}>
            <Likes count={video.likes} symbol={video.likeSymbol} />
          </Title>
        )}
        {video && <About personId={video.authorId} />}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ut ex
          vero ducimus soluta nemo. Molestiae sint sapiente accusantium
          repudiandae ullam optio, eius obcaecati esse nam dolorem odio veniam
          maiores!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
          numquam provident consequuntur doloremque voluptate temporibus nisi,
          repudiandae tenetur odio ex, repellendus odit corrupti autem quis
          placeat perferendis qui ab fugit.
        </p>
      </Page.Content>
      <Page.Footer>
        <WithLove />
      </Page.Footer>
    </Page>
  )
}

export default VideoPage
