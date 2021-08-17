import styled from 'styled-components'

export const DiscoverWrapper = styled.div`
  .top{
    height: 30px;
    background-color: #C20C0C;
  }
`

export const TopMenu = styled.div`
  display: flex;
  padding-left: 180px;
  position: relative;
  top:-4px;
  .item{
    a{
      display: inline-block;
      color: #fff;
      height: 20px;
      line-height: 20px;
      padding:0 13px;
      margin: 7px 17px 0;

      &:hover, &.active{
        background-color: #980909;
        text-decoration: none;
        border-radius: 20px;
      }
    }
  }


`