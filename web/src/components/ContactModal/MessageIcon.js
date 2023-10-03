import React from 'react'

function MessageIcon({isActive}) {
  return (
    <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.90127C0 5.84923.849933 5 1.9 5h15.2c1.0501 0 1.9.84923 1.9 1.90127V18.3c0 1.052-.8499 1.9013-1.9 1.9013H9.71153l-4.8982 3.6719a.63174.63174 0 01-.32312.1242c-.11714.0106-.23491-.0117-.34011-.0643-.1052-.0526-.19368-.1336-.25551-.2337-.06184-.1001-.09459-.2155-.09459-.3332V20.2H1.9c-1.050067 0-1.9-.8492-1.9-1.9013V6.90127zm5.06667 3.16493h8.86663v1.2676H5.06667v-1.2676zm0 3.8H11.4v1.2676H5.06667v-1.2676z" fill={isActive ? "#53AF3B":"#D6DFE6"}/></svg>
  )
}

export default MessageIcon