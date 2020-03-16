export const Avatar = ({
  imgUrl,
  width = "3em",
}: {
  imgUrl: string
  width?: string
}) => {
  return (
    <div className="avatar">
      <img src={imgUrl} alt="person" />
      <style jsx>{`
        .avatar {
          width: ${width};
          height: ${width};
          border-radius: 999em;
          overflow: hidden;
          position: relative;
        }

        .avatar::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          box-shadow: 1px 1px 3px inset #00000020;
          border-radius: inherit;
        }

        .avatar img {
          width: 100%;
          object-fit: cover;
          vertical-align: middle;
        }
      `}</style>
    </div>
  )
}
