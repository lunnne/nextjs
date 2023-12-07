'use client';
import React, { useState, useEffect } from 'react';

export default function MeowArticle() {
  const [text, setText] = useState('loading...!!');

  useEffect(() => {
    fetch('https://meowfacts.herokuapp.com', {
      //next: { revalidate: 3 }
      cache: 'no-store', //SSR로 행동
    })
      .then((res) => res.json())
      .then((data) => setText(data.data[0]));
  }, []);

  return <article className="p-2 text-2xl"> {text}</article>;
}
