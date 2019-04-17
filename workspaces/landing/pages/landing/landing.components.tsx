import * as React from 'react'
import {Heading, Paragraph, Label} from '@smashing/typography'
import S from './landing.styled'
import Demo from './images/demo.png'
import Demo2X from './images/demo@2x.png'
import {ReactComponent as PionerLabs} from './images/pionerlabs.svg'
import {ReactComponent as Syncano} from './images/syncano.svg'

const C = {
  Header: () => (
    <S.Header>
      <div>
        <S.Logo as="h1" variant={900}>OneSpace</S.Logo>
        <Heading variant={700}>All your projects in one place</Heading>
        <Paragraph>
          Get insights into your projects status, members, released features and
          other important information.
        </Paragraph>
        <S.NewsletterForm
          method="POST"
          action="https://eyedea.us20.list-manage.com/subscribe/post?u=fde690465aae73bbcc23c44a5&amp;id=10f01cd192"
          target="_blank"
        >
          <Label> Your Email: 
            <S.TextInput
              autoFocus
              type="email"
              placeholder="example@domain.com"
              name="EMAIL"
            />
          </Label>
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
              defaultValue=""
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
      <section>
        <Heading as="h3" variant={500}>Dashboard</Heading>
        <Paragraph>
          All the important information on one screen. Support for big screens.
        </Paragraph>
      </section>

      <section>
        <Heading as="h3" variant={500}>Integrations</Heading>
        <Paragraph>
          Well integrated with your other tools: Slack, Github, Circle CI,
          Sentry, Jira and many more.
        </Paragraph>
      </section>

      <section>
        <Heading as="h3" variant={500}>Status &amp; Health Checks</Heading>
        <Paragraph>
          Track availability of your service staging and production
          environments.
        </Paragraph>
      </section>

      <section>
        <Heading as="h3" variant={500}>Open Source</Heading>
        <Paragraph>100% open-source. MIT license.</Paragraph>
      </section>

      <section>
        <Heading as="h3" variant={500}>Release notes &amp; Calendar</Heading>
        <Paragraph>
          Human friendly release notes. Connect Google Calendar for full
          understanding of the timeline.
        </Paragraph>
      </section>

      <section>
        <Heading as="h3" variant={500}>Keys &amp; Passwords</Heading>
        <Paragraph>
          Control the access to the sensitive data from one place. Share it with
          your team.
        </Paragraph>
      </section>

      <section>
        <Heading as="h3" variant={500}>API Documentation</Heading>
        <Paragraph>
          Interactive playgrounds. Support for Open API, Swagger and GraphQL.
        </Paragraph>
      </section>

      <section>
        <Heading as="h3" variant={500}>In the Cloud</Heading>
        <Paragraph>
          Don't want to manage your own instance? Cloud hosted OneSpace is for
          you.
        </Paragraph>
      </section>

      {/* <div>
        <S.DarkButton height={40}>Read more on Medium</S.DarkButton>
      </div> */}
    </S.FeaturesGrid>
  ),
  BackedBy: () => (
    <S.BackedBy>
      <a
        href="https://www.pionerlabs.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <PionerLabs />
      </a>
      <a href="https://syncano.io/" target="_blank" rel="noopener noreferrer">
        <Syncano />
      </a>
    </S.BackedBy>
  ),
  Footer: () => (
    <S.Footer>
      <S.Logo as="h1" variant={600}>OneSpace</S.Logo>
      <Paragraph color="muted" variant={300}>
        Made in Bialystok and Oslo. &copy; OneSpace 2019
      </Paragraph>
    </S.Footer>
  )
}

export default C
