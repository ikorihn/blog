import React from 'react'

type Props = {
  header: string
}

const Sidebar: React.FC<Props> = ({ header }) => {
  console.log({ header })
  return (
    <div
      className="md:h-screen p-4 cover-content"
      style={{ backgroundColor: 'var(--lightBg)' }}
    >
      {header}
    </div>
  )
}

export default Sidebar
