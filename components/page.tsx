import { PropsWithChildren } from "react"

export const Page = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className="page">
      {children}
      <style jsx>{`
        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
      `}</style>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          font-family: inherit;
          color: inherit;
          text-decoration: none;
        }

        body {
          font-size: 20px;
          font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
            sans-serif;
          color: #3c3c3c;
          /* background-color: #0f0d19; dark */
          /* color: #bbb; dark */
        }

        input,
        button {
          font-size: inherit;
        }
      `}</style>
    </div>
  )
}

Page.Header = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className="header">
      {children}
      <style jsx>{`
        .header {
          padding: 0.5em 1em;
          background-color: #1f1a38;
          display: flex;
          align-items: center;
          color: white;
        }

        .header > :global(* + *) {
          margin-left: 1em;
        }
      `}</style>
    </div>
  )
}

Page.Content = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className="content">
      {children}
      <style jsx>{`
        .content {
          padding: 1em;
          flex-grow: 1;
        }

        .content > :global(* + *) {
          margin-top: 0.5em;
        }
      `}</style>
    </div>
  )
}

Page.Footer = ({ children }: PropsWithChildren<{}>) => {
  return (
    <footer>
      {children}
      <style jsx>{`
        footer {
          padding: 1.5em 1em;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </footer>
  )
}
