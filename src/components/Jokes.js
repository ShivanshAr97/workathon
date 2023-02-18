import React, { useState } from 'react'
import data from '../components/data'
const Jokes = ({people}) => {

    const [count, setCount] = useState("");
    const [text, setText] = useState([]);
    const [cnt, setCnt] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        let amount = parseInt(count);

        setCnt(cnt+1)
        var newData = JSON.stringify((data[cnt].joke.toString().replaceAll("boss",(count))));
        setText(newData);
        
    };
    return (
        <section className='section-center'>
            <form className='lorem-form' onSubmit={handleSubmit}>
                <label htmlFor='amount'>Enter your boss' name 😈:</label>
                <input
                    type='text'
                    name='amount'
                    id='amount'
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                />
                <button className='btn'>generate</button>
            </form>
            {people.map((person) => {
                const { id, joke } = person;
                return (
                    <article key={id} >
                        <div>
                            <h4>{text}</h4>
                        </div>
                    </article>
                );
            })}
        </section>
    )
}

export default Jokes