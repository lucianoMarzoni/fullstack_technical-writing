import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <img 
        src="/osTicket_logo_400x400.png" 
        alt="osTicket Logo" 
        width={25} 
        height={25} 
        style={{ marginRight: "6px", verticalAlign: "middle"}}
      />
      <span>osTicket Documentation | Luciano Marzoni</span>
    </>
  ),
  project: {
    link: 'https://github.com/lucianoMarzoni/fullstack_technical-writing/',
  },
  docsRepositoryBase: 'https://github.com/lucianoMarzoni/fullstack_technical-writing/',
  chat: {
    link: 'https://www.linkedin.com/in/luciano-marzoni/',
    icon: (
      <img 
      src="/linkedin-logo_600x600.png" 
      alt="linkedin Logo" 
      width={25} 
      height={25} 
      style={{ marginRight: "6px", verticalAlign: "middle"}}
      />
    )
  },
}

export default config
