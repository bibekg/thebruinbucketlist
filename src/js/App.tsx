// @flow

import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled, { injectGlobal } from 'styled-components'

import BucketList from './components/BucketList'
import { colors, fonts } from './styles'

// @ts-ignore
injectGlobal([
  `
    @import url('https://fonts.googleapis.com/css?family=Lora:400,700|Open+Sans:400,700');

    body {
        font-family: ${fonts['sans-serif']}, sans-serif;
        margin: 0;
        width: 100%;
        height: 100%;
        background-color: ${colors.cream};
    }

    body.disable-scroll {
        overflow: hidden;
    }

    *, *:before, *:after {
        box-sizing: border-box;
    }
`
])

const AppWrapper = styled.div``

AppWrapper.displayName = 'AppWrapper'

type PropsType = {}

interface StateType {}

class App extends React.Component<PropsType, StateType> {
  render() {
    return (
      <AppWrapper>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={BucketList} />
          </Switch>
        </BrowserRouter>
      </AppWrapper>
    )
  }
}

export default App
