import React, { ReactNode } from "react"
// import Header from "src/components/Header/Header"
// import SideNav from "src/components/SideNav/SideNav"

interface Props {
  children: ReactNode
}

export default function MainLayout(props: Props) {
  const { children } = props
  return (
    <div className="side-nav">
      {/* <SideNav /> */}
      <main className="header">
        {/* <Header /> */}
        <div className="content">{children}</div>
      </main>
    </div>
  )
}
