import Link from "next/link"

export const Brand = () => {
  return (
    <>
      <Link href="/">
        <a>
          <b>vivid</b>
        </a>
      </Link>
      <style jsx>{`
        a {
          color: inherit;
          text-decoration: none;
          padding: 0.25em;
        }
      `}</style>
    </>
  )
}
