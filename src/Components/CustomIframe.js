import React,{useState,useEffect} from 'react'
import { createPortal } from 'react-dom'

function CustomIframe({children,...props}) {
    const [contentRef, setContentRef] = useState(null)

    const mountNode=contentRef?.contentWindow?.document?.body;
    const headNode =contentRef?.contentWindow?.document?.head;

    useEffect(() =>{
      if(headNode){
        headNode.innerHTML = document?.head?.innerHTML;
      }
   },[headNode])
  return (
    <iframe {...props} ref={setContentRef}>
      {mountNode && createPortal(children,mountNode)}
    </iframe>
  )
}

export default CustomIframe