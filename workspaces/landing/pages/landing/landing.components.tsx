import * as React from 'react'
import {Heading, Paragraph} from '@smashing/typography'
import S from './landing.styled'
import Demo from './images/demo.png'
import Demo2X from './images/demo@2x.png'

const C = {
  Header: () => (
    <S.Header>
      <div>
        <S.Logo variant={900}>DevPortal</S.Logo>
        <Heading variant={700}>Dashboard for your company</Heading>
        <Paragraph>
          Get insights into your company projects status, members, released
          features and other project information.
        </Paragraph>
        <S.NewsletterForm
          method="POST"
          action="https://eyedea.us20.list-manage.com/subscribe/post?u=fde690465aae73bbcc23c44a5&amp;id=10f01cd192"
          target="_blank"
        >
          <S.TextInput
            autoFocus
            type="email"
            placeholder="Your email.."
            name="EMAIL"
          />
          <S.Button intent="warning" name="subscribe">
            Sign in
          </S.Button>
          <input type="hidden" value="1" name="group[1797][1]" />
          <div
            style={{position: 'absolute', left: '-5000px'}}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_fde690465aae73bbcc23c44a5_10f01cd192"
              tabIndex={-1}
              value=""
            />
          </div>
        </S.NewsletterForm>
        <Paragraph color="muted" variant={300}>
          We’re currently in private beta. Leave your email to get your invite
          once we’re ready.
        </Paragraph>
      </div>
      <S.Demo src={Demo} srcSet={`${Demo} 1000w, ${Demo2X} 2000w`} alt="" />
    </S.Header>
  ),
  Features: () => (
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
  ),
  Footer: () => (
    <S.Footer>
      <S.Logo variant={600}>DevPortal</S.Logo>
      <Paragraph color="muted" variant={300}>
        Made in Bialystok, Poland. &copy; 2019 by EYEDEA.
      </Paragraph>
    </S.Footer>
  )
}

export default C
