import React from 'react'
import Styled from 'styled-components'
import GroupIcon from '@material-ui/icons/Group';
import CheckIcon from '@material-ui/icons/Check';

const Header = Styled.div`
display: flex;
width: 25vw;
height: 13vh;
justify-content: space-around;
border-bottom: solid 1px gray;
`

const styledCheckIcon = Styled.div`
fontSize: small;
`
const Title1 = Styled.span`
padding-left: 20px;
color: green;
`
const Title2 = Styled.span`
color: red;
`
const ContainerIcone = Styled.div`
padding: 20px;
`

function HeaderHome() {
    return (
        <Header>
            <h2>
                <Title1>astro</Title1>
                <Title2>match</Title2>
            </h2>
            <ContainerIcone>

            <GroupIcon/>
            </ContainerIcone>
        </Header>
    );
}

export default HeaderHome;


/*
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
*/

