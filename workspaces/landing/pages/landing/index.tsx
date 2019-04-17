import * as React from 'react'
import S from './landing.styled'
import C from './landing.components'

const Landing = () => (
  <S.Wrapper>
    <S.GlobalStyle />
    <C.Header />
    <section>
      <S.FeaturesTitle variant={800}>Features</S.FeaturesTitle>
      <C.Features />
    </section>
    <section>
      <S.BackedByTitle variant={800}>Backed by</S.BackedByTitle>
      <C.BackedBy />
    </section>
    <C.Footer />
  </S.Wrapper>
)

export default Landing
