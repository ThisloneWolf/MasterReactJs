import React from 'react'

const wait = (ms) => {
    const start = Date.now();
    let now = start;

    while (now - start < ms) {
        now = Date.now()
    }

}


export default function FirstComponent() {
   const slowingReactApp =  wait(400)

  return (
    <div>
      Im the first Component : Very Slow [ Causing Visual Dealy in UI ]
    </div>
  )
}
