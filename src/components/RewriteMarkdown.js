import React, { Component } from "react"
import ReactMarkdown from "react-markdown"

class RewriteMarkdown extends Component {
  render() {
    const { input } = this.props

    return <ReactMarkdown source={input} />
  }
}

export default RewriteMarkdown
