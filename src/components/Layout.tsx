import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import './layout.css'

const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  height: 100vh;
`

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
  position: relative;
  width: inherit;
`


const Layout = (props: any) => {
  return (
    <Wrapper className={props.className + ' wrapper'}>
      <Main>{props.children}</Main>
      <Nav />
    </Wrapper>
  )
}

export default Layout