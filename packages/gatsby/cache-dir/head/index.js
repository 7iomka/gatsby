import React from "react"
import { Helmet } from "react-helmet-async"
import { useLocation } from "@reach/router"

export const Head = props => {
  const location = useLocation()

  const { title, description, image } = props

  // NOTE(@mxstbr): This code has many ternaries for the same things because
  // react-helmet doesn't support fragments yet
  // @see github.com/nfl/react-helmet/issues/342
  return (
    <Helmet>
      {/* Title */}
      {title && <title>{title}</title>}
      {title && <meta name="twitter:title" content={title} />}
      {title && <meta property="og:title" content={title} />}

      {/* Description */}
      {description && <meta name="description" content={description} />}
      {description && <meta name="twitter:description" content={description} />}
      {description && <meta property="og:description" content={description} />}

      {/* Image */}
      {image && <meta name="twitter:image" content={image} />}
      {image && <meta property="og:image" content={image} />}

      {/* General meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={location.href} />

      {/* props.children must be at the end so users can override everything */}
      {props.children}
    </Helmet>
  )
}
