import styled from 'styled-components';

const Title = styled.h1`
font-size: 30px;
color: ${({ theme }) => theme.colors.primary}`

export default function Home() {
  return (
    <>
    <Title>It's styled component</Title>
      <h2>Hello</h2>
    </>
  )
}
