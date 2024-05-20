import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  @media screen and (min-width: 768px) {
    padding: 48px;
  }
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    align-items: center;
    width: 80%;
    max-width: 550px;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: #1e293b;
  line-height: 1.3;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.33;
  }
`

export const SubHeading = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  color: #334155;
  line-height: 1.3;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.33;
  }
`

export const Image = styled.img`
  width: 350px;
  height: 200px;
  @media screen and (min-width: 768px) {
    width: 550px;
    height: 400px;
  }
`

export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  color: #334155;
  line-height: 1.3;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.33;
  }
`

export const Button = styled.button`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  color: #ffffff;
  background-color: #1f81ff;
  border: none;
  border-radius: 8px;
  padding: 6px 12px 6px 12px;
  margin-top: 10px;
  outline: none;
  cursor: pointer;
  height: 30px;
  width: 80px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    height: 40px;
    width: 130px;
    padding: 10px 20px 10px 20px;
    margin-top: 20px;
  }
`
