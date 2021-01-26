module.exports = {
  "manual <Head /> render": {
    "renders the meta tags in the head": {
      "1": '<title data-rh="true">Custom Title</title>',
      "2":
        '<meta data-rh="true"\n  name="twitter:title"\n  content="Custom Title">',
      "3":
        '<meta data-rh="true"\n  property="og:title"\n  content="Custom Title">',
      "4":
        '<meta data-rh="true"\n  name="description"\n  content="Custom description">',
      "5":
        '<meta data-rh="true"\n  name="twitter:description"\n  content="Custom description">',
      "6":
        '<meta data-rh="true"\n  property="og:description"\n  content="Custom description">',
      "7":
        '<meta data-rh="true"\n  name="twitter:image"\n  content="/custom-image.png">',
      "8":
        '<meta data-rh="true"\n  property="og:image"\n  content="/custom-image.png">',
      "9":
        '<meta data-rh="true"\n  name="twitter:card"\n  content="summary_large_image">',
      "10": '<meta data-rh="true"\n  property="og:type"\n  content="website">',
      "11": '<meta data-rh="true"\n  property="og:url">',
    },
  },
  "no manual <Head /> render": {
    "renders no meta tags": {},
  },
  "manual <Head /> render with minimal overrides": {
    "renders the meta tags based on the siteMetdata and the description override": {
      "1":
        '<meta data-rh="true"\n  name="description"\n  content="Custom description">',
      "2":
        '<meta data-rh="true"\n  name="twitter:description"\n  content="Custom description">',
      "3":
        '<meta data-rh="true"\n  property="og:description"\n  content="Custom description">',
      "4":
        '<meta data-rh="true"\n  name="twitter:card"\n  content="summary_large_image">',
      "5": '<meta data-rh="true"\n  property="og:type"\n  content="website">',
      "6": '<meta data-rh="true"\n  property="og:url">',
    },
  },
  __version: "3.8.3",
}
