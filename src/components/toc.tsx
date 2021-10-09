import * as React from 'react'
import { Link } from 'gatsby'

type Props = {
  tocHtml?: string
}
const Toc: React.FC<Props> = ({tocHtml}) => {
  if (tocHtml === undefined) {
    return <></>
  }
  return (
    <div className="toc bg-code-block px-4 py-1 my-2">
      <h4 className="toc__title mt-2">目次</h4>
      <div
        className="toc__content"
        dangerouslySetInnerHTML={{
          __html: tocHtml,
        }}
      />
    </div>
  )
}

export default Toc