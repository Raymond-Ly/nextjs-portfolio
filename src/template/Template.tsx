import React from 'react'

import Header from '../components/Header/Header'
import { ChildComponents } from '../types'
import { Container } from './TemplateStyles'

export const Template = ({children}: ChildComponents) => {
  return (
    <Container>
     <Header/>
      <main>
        {children}
      </main>
     {/* <Footer/> */}
    </Container>
  )
}