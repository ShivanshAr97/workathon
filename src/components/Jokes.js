import React, {useState} from 'react'

const Jokes = () => {

    const [name, setName] = useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        setName(e.target.value)   
    }
    return (
        <>
            <form className='border'>
                <label className='border'>
                    Enter your boss' name 😈:
                    <input className='border' type="text" name="username"  onChange={handleSubmit}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
            {name}
        </>
    )
}

export default Jokes