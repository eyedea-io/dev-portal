import * as React from 'react'
import {Button} from '@smashing/button'
import {Heading, Paragraph} from '@smashing/typography'
import S from './landing.styled'
import {TextInput} from '@smashing/text-input'
import Demo from './images/demo.png'
import Demo2X from './images/demo@2x.png'

const Landing = () => (
  <S.Wrapper>
    <S.Global />
    <S.Header>
      <div>
        <S.Logo variant={900}>DevPortal</S.Logo>
        <Heading variant={700}>Dashboard for your company</Heading>
        <Paragraph>
          Get insights into your company projects status, members, released
          features and other project information.
        </Paragraph>
        <S.NewsletterForm>
          <TextInput placeholder="Your email.." />
          <Button intent="warning">Sign in</Button>
        </S.NewsletterForm>
        <Paragraph color="muted" variant={300}>
          We’re currently in private beta. Leave your email to get your invite
          once we’re ready.
        </Paragraph>
      </div>
      <S.Demo src={Demo} srcSet={`${Demo} 1000w, ${Demo2X} 2000w`} alt="" />
    </S.Header>

    <S.FeaturesTitle variant={800}>Features</S.FeaturesTitle>
    <S.FeaturesGrid>
      <div>
        <Heading variant={500}>Released features</Heading>
        <Paragraph>
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative.
        </Paragraph>
      </div>

      <div>
        <Heading variant={500}>The Team</Heading>
        <Paragraph>
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative.
        </Paragraph>
      </div>

      <div>
        <Heading variant={500}>CI Status</Heading>
        <Paragraph>
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative.
        </Paragraph>
      </div>

      <div>
        <Heading variant={500}>Upcoming project meetings</Heading>
        <Paragraph>
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative.
        </Paragraph>
      </div>

      <div>
        <Heading variant={500}>Project information storage</Heading>
        <Paragraph>
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative.
        </Paragraph>
      </div>

      <div>
        <Heading variant={500}>Code coverage</Heading>
        <Paragraph>
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative.
        </Paragraph>
      </div>

      <div>
        <Heading variant={500}>Performance metrics</Heading>
        <Paragraph>
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative.
        </Paragraph>
      </div>

      <div>
        <S.DarkButton height={40}>Read more on Medium</S.DarkButton>
      </div>
    </S.FeaturesGrid>

    <S.Footer>
      <S.Logo variant={600}>DevPortal</S.Logo>
      <Paragraph color="muted" variant={300}>
        Made in Bialystok, Poland. &copy; 2019 by EYEDEA.
      </Paragraph>
    </S.Footer>
  </S.Wrapper>
)

export default Landing
