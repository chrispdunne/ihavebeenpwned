import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [bodyText, setBodyText] = React.useState("")
  const labelStyle = { display: "block", margin: "40px 0px" }
  const inputStyle = { display: "block" }

  return (
    <Layout>
      <SEO title="Home" />
      <p>Enter your email address and password to find out</p>
      <form
        onSubmit={e => {
          e.preventDefault()
          setBodyText(
            <>
              <p>Thanks for that! You've successfully been pwned.</p>
              <p>Not really but careful who you trust online!</p>
            </>
          )
        }}
      >
        <label htmlFor="email" style={labelStyle}>
          Email
          <input
            style={inputStyle}
            id="email"
            type="email"
            placeholder="e.g. ihavebeen@pwned.com"
          />
        </label>
        <label htmlFor="password" style={labelStyle}>
          Password
          <input style={inputStyle} id="password" type="password" />
        </label>
        <button
          style={{
            appearance: "none",
            background: "#c00",
            color: "#fff",
            border: "0",
            padding: "10px 20px",
          }}
        >
          Submit
        </button>
      </form>
      <div>{bodyText}</div>
    </Layout>
  )
}
export default IndexPage
