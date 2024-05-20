import {useState} from 'react'

import {
  MainContainer,
  ResponsiveContainer,
  Heading,
  SubHeading,
  Image,
  Description,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const [showMoreDescripton, setShowMoreDescription] = useState(false)

  const onClickShowMore = () => {
    setShowMoreDescription(prevState => !prevState)
  }

  const {reactHooksDescription} = props

  const slicedDescription = reactHooksDescription.slice(0, 171)

  const description = showMoreDescripton
    ? reactHooksDescription
    : slicedDescription

  const buttonText = showMoreDescripton ? 'Read Less' : 'Read More'

  return (
    <MainContainer>
      <ResponsiveContainer>
        <Heading>React Hooks</Heading>
        <SubHeading>Hooks are a new addition to React</SubHeading>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Description>{description}</Description>
        <Button type="button" onClick={onClickShowMore}>
          {buttonText}
        </Button>
      </ResponsiveContainer>
    </MainContainer>
  )
}

export default ReadMore
