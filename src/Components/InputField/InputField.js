import React from 'react'

import {TextComposer,Row,IconButton,TextInput,SendButton,EmojiIcon,AddIcon
} from '@livechat/ui-kit'



const InputField = (props) =>{




	return(
		<div>
<TextComposer onChange= {props.onChange} >
  <Row align="center">
    <IconButton fit>
      <AddIcon />
    </IconButton>
    <TextInput fill />
    <SendButton fill  />
  </Row>

  <Row verticalAlign="center" justify="right">
    <IconButton fit>
      <EmojiIcon onClick= {props.onEnterPress}/>
    </IconButton>
  </Row>
</TextComposer>
</div>

		)
}

export default InputField;