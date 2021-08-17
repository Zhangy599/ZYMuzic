import styled from 'styled-components'

export const PlayerInfoWrapper = styled.div`
  display: flex;
  padding: 47px 30px 40px 39px;
`

export const PlayerInfoLeft = styled.div`
  width: 206px;
  .image{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 198px;
    height: 198px;
  }
  .cover{
    background-position: -140px -580px;
    top:-4px;
    left:-4px;
    height:205px;
    width: 206px;
  }
  .link{
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    i{
      display:inline-block;
      width: 16px;
      height: 16px;
      background-position:-34px -863px;
    }
    a{
      color: #0c73c2;
      text-decoration:underline;
    }
  }

`

export const PlayerInfoRight = styled.div`
  width: 414px;
  margin-left: 20px;
  .header{
    display: flex;
    align-items: center;
      i{
      display: inline-block;
      width: 54px;
      height: 24px;
      background-position: 0 -463px;
    }
    .title{
      font-size: 24px;
      font-weight: 400;
      margin-left: 10px;
    }
  }
  .singer, .album{
    margin:10px;
    a{
      color: #0c73c2;
    }
  }
  .lyric{
    padding: 30px 0 50px;
    .lyric-info{
      .text{
        margin: 6px 0;
      }
    }
    .lyric-control{
      position: relative;
      cursor: pointer;
      color: #0c73c2;
      background-color: #fff;
      text-decoration:underline;
      i {
        position: absolute;
        width: 11px;
        height: 8px;
        right: -8px;
        top: 2px;
        background-position: ${props => props.isSpread ? "-45px": "-65px"} -520px;
      }
    }
  }

`