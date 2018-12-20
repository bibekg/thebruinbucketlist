import * as React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import { bucketList, copy } from '../copy'
import { colors } from '../styles'
import Text from './Text'
import HorizontalRule from './HorizontalRule'
import { FacebookShareButton } from './FacebookShareButton'

interface StateType {
  checkedOff: string[]
}

interface ListItemProps {
  checkedOff: boolean
}

const TopBar = styled.div`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
`

const OuterWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BucketListDiv = styled.div`
  max-width: 650px;
  margin-bottom: 40px;
`

const ListItem = styled.div<ListItemProps>`
  cursor: pointer;
  background-color: transparent;
  padding: 5px;
  transition: background-color 0.3s ease;
  border-radius: 5px;
  ${props =>
    props.checkedOff
      ? `
    text-decoration: line-through;
    color: ${colors.grey};
  `
      : ''};

  &: hover {
    background-color: ${darken(0.2, colors.cream)};
  }
`

const StatsDisplay = styled.div`
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
`

const ProgressBar = styled.div<{ percentage: number }>`
  width: 300px;
  height: 10px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${colors.lightGrey};
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 10px;
  & > * {
    flex-shrink: 0;
    width: ${props => props.percentage}%;
    height: 100%;
    background-color: ${colors.blue};
    border-radius: 5px;
  }
`

class BucketList extends React.Component<{}, StateType> {
  constructor(props: {}) {
    super(props)
    this.state = {
      checkedOff: JSON.parse(localStorage.getItem('checkedOff') || '[]')
    }
  }

  handleClick = (event: React.SyntheticEvent<HTMLElement>) => {
    console.log('handling click')
    const dataId = (event.target as HTMLElement).getAttribute('data-id')
    if (dataId == null) {
      console.error('Could not find a data-id on the li clicked')
      return
    }

    const nextCheckedOff = this.state.checkedOff.includes(dataId)
      ? this.state.checkedOff.filter(i => i !== dataId)
      : [...this.state.checkedOff, dataId]

    this.setState({
      checkedOff: nextCheckedOff
    })

    window.localStorage.setItem('checkedOff', JSON.stringify(nextCheckedOff))
  }

  render() {
    const totalItems = bucketList.length
    const completedItems = this.state.checkedOff.length
    const shareQuote = `I've done ${completedItems}/${totalItems} items on the bucket list. Find out how many you've done!`

    return (
      <OuterWrapper>
        <TopBar>
          <FacebookShareButton />
        </TopBar>
        <Text bold large>
          {copy.title}
        </Text>
        <a href={copy.sourceCitation.link}>
          <Text>{copy.sourceCitation.text}</Text>
        </a>
        <StatsDisplay>
          <Text>
            {completedItems} / {totalItems} completed
          </Text>
          <ProgressBar percentage={(completedItems / totalItems) * 100}>
            <div />
          </ProgressBar>
          <Text center>{copy.instructions}</Text>
        </StatsDisplay>
        <HorizontalRule />
        <BucketListDiv>
          {bucketList.map((item, index) => (
            <ListItem
              checkedOff={this.state.checkedOff.includes(item)}
              key={item}
              data-id={item}
              onClick={this.handleClick}
            >
              {index + 1}. {item}
            </ListItem>
          ))}
        </BucketListDiv>
      </OuterWrapper>
    )
  }
}

export default BucketList
