import React from "react"
import imageUrlBuilder from "@sanity/image-url"

const urlFor = (source) =>
  imageUrlBuilder({ projectId: "j7i4hfvy", dataset: "production" })
    .image(source)
    .width(1200)

const serializers = {
  types: {
    figure: (props) => (
      <figure>
        <img src={urlFor(props.node.image.asset)} alt={props.node.alt} />
      </figure>
    ),
    quote: (props) => (
      <blockquote>
        {props.node.quote}
        <br />
        <p className="quote_author">{props.node.author}</p>
        <p className="quote_author_position">{props.node.authorPosition}</p>
      </blockquote>
    ),
  },
}

export default serializers
