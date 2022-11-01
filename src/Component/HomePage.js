import React from 'react'
import { useState,useEffect } from "react";

const HeroSection = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer","UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  return (
      <section id='herosection'>
        <div className="container flex flex-col-reverse md:flex-row 
        items-center px-6 space-y-0 mx-auto mt-10 md:space-y-0">
            <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                <h1 className="max-w-md text-6xl font-bold text-center space-y-5 md:space-y-5 
                md:text-5xl md:text-left">
                    Hello!<br/> My Name Is Zakaria<br/>
                    <h2 className='text-red-500 '>{text}</h2>
                </h1>
            </div>
        </div>
      </section>
  )
}

export default HeroSection
