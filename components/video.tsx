import { useRef } from "react"
import { Avatar } from "./avatar"
import { people } from "../data/people"
import { formatLikes } from "../functions/format-likes"

export const Video: React.FC<{
  url: string
  title: string
  controls?: boolean
  authorId?: string
  likes?: number
  likeSymbol?: string
}> = ({ authorId, url, title, controls = false, likes, likeSymbol = "🦙" }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div>
      <div
        className="video"
        onMouseEnter={() =>
          !controls && videoRef.current && videoRef.current.play()
        }
        onMouseLeave={() =>
          !controls && videoRef.current && videoRef.current.pause()
        }
      >
        {authorId && (
          <div className="floating">
            <Avatar
              imgUrl={people[parseInt(authorId, 10)].photo}
              width="1.5em"
            />
          </div>
        )}
        <video src={url} loop={!controls} controls={controls} ref={videoRef} />
      </div>
      {likes && (
        <span className="likes">
          {formatLikes(likes)} {likeSymbol}
        </span>
      )}
      {!controls && <span className="title">{title}</span>}
      <style jsx>{`
        .likes {
          font-size: 0.75em;
          padding: 0 0.25rem;
          filter: grayscale(1);
        }

        .floating {
          position: absolute;
          margin: 0.25em;
        }

        video {
          max-width: 100%;
          min-width: 100%;
          display: block;
          object-fit: contain;
        }

        .video {
          border-radius: 0.5em;
          overflow: hidden;
          position: relative;
          height: 100%;
        }

        .video::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          box-shadow: 1px 1px 5px inset #00000020;
          border-radius: inherit;
          pointer-events: none;
        }

        .title {
          transition: opacity 0.3s;
          padding: 0em 0.25em;
          display: block;
          bottom: 0;
          width: 100%;
          font-weight: 400;
          border-bottom: 1px solid transparent;
        }
      `}</style>
    </div>
  )
}
