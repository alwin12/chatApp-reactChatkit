import React from 'react'

import {AgentBar,Avatar,Column,Subtitle,Title} from '@livechat/ui-kit'

const NameBar = () => {




	return(
   
   
 <AgentBar >
  <Avatar imgUrl="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg" />
  <Column >
    <Title>{'Jon Snow'}</Title>
    <Subtitle>{'Support hero'}</Subtitle>
  </Column>
  </AgentBar>
 

)


}


export default NameBar;