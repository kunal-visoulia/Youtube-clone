import React from 'react'
import Button from "./Button";

const list = ["All", "Live", "Gaming", "Songs", "Soccer", "Cricket", "Cooking", "Valentines"];

const ButtonsList = () => {
  return (
    <div className="flex">
      {list.map(btnName => <Button name={btnName} key={btnName} />)}
    </div>
  )
}

export default ButtonsList