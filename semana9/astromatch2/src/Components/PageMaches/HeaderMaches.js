import React from 'react'
import Styled from 'styled-components'
import GroupIcon from '@material-ui/icons/Group';

const Header = Styled.div`
  display: flex;
  width: 25vw;
  height: 13vh;
  justify-content: space-around;
  border-bottom: solid 1px #F1527B;
  margin-bottom: 5px;
`
const Title1 = Styled.span`
  color: #F1527B;
  font-size: 25px;
`
const Title2 = Styled.span`
  color: #F68044;
  padding-right: 30px;
  font-size: 25px;
`
const ContainerIcone = Styled.div`
  padding: 25px 0 20px 20px;
  padding-right: 30px;
  transform: scale(1.3);
  &:hover {
    transform: scale(1.5);
  }
`

function HeaderMaches(props) {
    return (
        <Header>
            <ContainerIcone onClick={props.click}>
            <GroupIcon/>
            </ContainerIcone>
           
            <h2>
                <Title1>astro</Title1>
                <Title2>match</Title2>
            </h2>

        </Header>
    );
}

export default HeaderMaches;


