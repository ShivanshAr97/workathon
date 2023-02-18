import Confetti from "react-confetti";
import React, { useState, useRef, useEffect } from "react";
import data from '../components/data'

const Jokes = ({ people }) => {
    const [recy, setRecy] = useState(false);
    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);
    const confetiRef = useRef(null);

    const [count, setCount] = useState("");
    const [text, setText] = useState([]);
    const [cnt, setCnt] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        let amount = parseInt(count);
        if(cnt>5){
            setCnt(0)
        }
        
        setCnt(cnt + 1)
        setRecy(true);
        var newData = JSON.stringify((data[cnt].joke.toString().replaceAll("boss", (count))));
        setTimeout(() => {
            setRecy(false)
        }, 1000);
        setText(newData);

    };
    useEffect(() => {
        setHeight(confetiRef.current.clientHeight);
        setWidth(confetiRef.current.clientWidth);
      }, [handleSubmit]);
    return (
        <>
        <div className="confettie-wrap" ref={confetiRef}>
        <Confetti numberOfPieces={500} width={1200} height={650} recycle={recy}/>
            <h1 className='flex justify-center text-4xl mt-8 font-semibold mb-2'>Joke</h1>
            <h2 className='flex justify-center text-xl'>Lighten up your mood by taking few laughs at your boss 😈</h2>
            <section className='section-center'>
                <form className='m-12 items-center flex justify-center' onSubmit={handleSubmit}>
                    <label className='text-2xl mr-4' htmlFor='amount'>Enter your boss' name: </label>
                    <input className='border-2 rounded-lg text-2xl px-2 py-0.5'
                        type='text'
                        name='amount'
                        id='amount'
                        value={count}
                        onChange={(e) => setCount(e.target.value)}
                    />
                    <button className='text-xl rounded-lg text-white bg-red-500 px-4 py-1.5 border mx-8'>Generate</button>
                </form>
                {people.map((person) => {
                    const { id, joke } = person;
                    return (
                        <article key={id} >
                            <div>
                                <h4 className='mx-12 my-24 flex text-center text-2xl font-semibold'>{text}</h4>
                            </div>
                        </article>
                    );
                })}
            </section>
            </div>
        </>
    )
}

export default Jokes