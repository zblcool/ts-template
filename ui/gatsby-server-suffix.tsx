
// gatsby-ssr.tsx
export const onPreRenderHTML = ({ getHeadComponents }) => {
  if (process.env.NODE_ENV !== 'production') return

  // N.B. this script switches out inline CSS, for a referenced stylesheet. Dramatically decreasing the size of pages, and the site overall.
  getHeadComponents().forEach(el => {
    if (el.type === 'style' && el.props['data-href']) { // <- this was the issue
      el.type = 'link'
      el.props.href = el.props['data-href']
      el.props.rel = 'stylesheet'
      el.props.type = 'text/css'

      delete el.props['data-href']
      delete el.props.dangerouslySetInnerHTML
    }
  })
}
