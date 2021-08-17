import styled from 'styled-components'

export const RecommendWrapper = styled.div`
  background-image:  url(${require("@/assets/img/music_bg.jpg").default});
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: 2166px;

  &::before {
      position: absolute;
      top: 135px;
      left: 50%;
      transform: translate(-745px);
      width: 225px;
      height: 120px;
      background: url(${require("@/assets/img/bg_left.png").default});
      background-repeat: no-repeat;
      background-size: cover;
      content: '';
  }


  &::after {
    position: absolute;
    top: 135px;
    left: 50%;
    transform: translate(520px);
    width: 196px;
    height: 131px;
    background: url(${require("@/assets/img/bg_right.png").default});
    background-repeat: no-repeat;
    background-size: cover;
    content: '';
  }
`

export const Content = styled.div`
  background-color: #fff;
  display: flex;

`

export const RecommendLeft = styled.div`
  width:729px;
  padding: 20px;
`

export const RecommendRight = styled.div`
  width: 250px;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;

`