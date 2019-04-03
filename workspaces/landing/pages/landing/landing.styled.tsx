import styled, {createGlobalStyle} from 'styled-components'
import {Heading, Paragraph} from '@smashing/typography'
import {Button} from '@smashing/button'

const Viewport = {
  MobileS: '@media screen and (max-width: 320px)',
  MobileM: '@media screen and (min-width: 321px)',
  MobileL: '@media screen and (min-width: 420px)',
  Tablet: '@media screen and (min-width: 768px)',
  Laptop: '@media screen and (min-width: 1024px)',
  Widescreen: '@media screen and (min-width: 1441px)'
}

const S = {
  Global: createGlobalStyle`
    body {
      border-top: 6px solid ${_ => _.theme.palette.yellow.base};
      padding-top: ${_ => _.theme.spacing.xxl};
    }

    ${Viewport.Laptop} {
      body {
        padding-top: ${_ => _.theme.spacing.xxxl};
      }
    }
  `,
  Wrapper: styled.div`
    max-width: 960px;
    margin: auto;
    padding-left: ${_ => _.theme.spacing.xxs};
    padding-right: ${_ => _.theme.spacing.xxs};
  `,
  Logo: styled(Heading)`
    font-weight: 700;
    margin: 0 0 ${_ => _.theme.spacing.xs} 0;
  `,
  Header: styled.header`
    display: grid;
    align-items: center;

    ${Viewport.Tablet} {
      grid-template-columns: 1fr auto;
      column-gap: ${_ => _.theme.spacing.xxl};

      > *:first-child {
        max-width: 436px;
      }
    }

    ${Heading} {
      margin: 0;
    }

    ${Heading} + ${Heading} {
      margin-top: ${_ => _.theme.spacing.sm};
    }
  `,
  Demo: styled.img`
    display: none;
    max-width: 460px;

    ${Viewport.Tablet} {
      display: block;
    }
  `,
  DarkButton: styled(Button)`
    color: #fff;
    background-color: #2f2742;

    &:hover {
      background-color: #3b2867;
    }

    &:active {
      background-color: #412e6d;
    }

    &:focus {
      background-color: #3b2867;
      box-shadow: 0 0 0 3px rgba(136, 114, 189, 0.4),
        inset 0 0 0 1px rgba(67, 90, 111, 0.14),
        inset 0 -1px 1px 0 rgba(67, 90, 111, 0.3);
    }
  `,
  NewsletterForm: styled.div`
    display: grid;
    row-gap: ${_ => _.theme.spacing.xxs};

    ${Viewport.MobileM} {
      grid-template-columns: 1fr auto;
      column-gap: ${_ => _.theme.spacing.xxs};
    }
  `,
  FeaturesTitle: styled(Heading)`
    margin-top: ${_ => _.theme.spacing.xl};
    margin-bottom: 0;
  `,
  FeaturesGrid: styled.div`
    display: grid;
    margin-top: ${_ => _.theme.spacing.md};
    row-gap: ${_ => _.theme.spacing.md};
    align-items: center;

    > :last-child {
      justify-self: center;
    }

    ${Heading} {
      margin: 0;
    }

    ${Paragraph} {
      margin-top: ${_ => _.theme.spacing.xxs};
      margin-bottom: 0;
    }

    ${Viewport.MobileL} {
      grid-template-columns: 1fr 1fr;
      column-gap: ${_ => _.theme.spacing.xxs};
    }

    ${Viewport.Tablet} {
      column-gap: ${_ => _.theme.spacing.sm};
    }

    ${Viewport.Laptop} {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      column-gap: ${_ => _.theme.spacing.md};
    }
  `,
  Footer: styled.div`
    text-align: center;
    margin-top: ${_ => _.theme.spacing.xxxl};
    margin-bottom: ${_ => _.theme.spacing.xxxl};

    ${Heading} {
      color: ${_ => _.theme.scales.neutral.N6};
    }
  `
}

export default S
