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
//<img src="osTicket_logo_400x400.png" width="25" height="25"></img>
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
  },
}

export default config
