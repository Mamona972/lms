import React, { FC, useState } from 'react'

type Props = {}

const EditHero:FC<Props> = (props: Props) => {
    const [image, setImage]= useState("");
    const [title, setTitle]= useState("");
    const [subTitle, setSubTitle]= useState("");
 
    return (
    <div>EditHero</div>
  )
}

export default EditHero