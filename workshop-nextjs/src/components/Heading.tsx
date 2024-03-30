import React from 'react';
interface PropsInt{
    text: String;
}

export default function Heading(props: PropsInt) {
  return (
    <div className="mt-10 font-semibold text-3xl">{props.text}</div>
  )
}
