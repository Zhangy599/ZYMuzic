import styled from 'styled-components'

export const UserLoginWrapper = styled.div`
  display: block;
  .content{
    height: 126px;
    background-position: 0 0;
    padding-top: 0;
    p{
      line-height:22px;
      width: 205px;
      margin: 0 auto;
      padding:16px 0;
      color: #666;
    }
    a{
      display: block;
      height: 31px;
      text-align: center;
      width: 100px;
      line-height: 31px;
      color: #fff;
      text-shadow: 0 1px 0 #8a060b;
      background-position: 0 -195px;
      margin:0 auto;
      &:hover{
        background-position: -110px -195px;
        text-decoration:none;
      }
    }
  }

`