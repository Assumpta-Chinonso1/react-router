import React from 'react'

const ConactForm = () => {
  return (
    <div>
        <form>
            <br /><br />
            <input type="email" placeholder='name'  />
            <br />
            <br />
            <input type="email" placeholder='Email' />
            <br /><br />
            <input type="password" placeholder='Password' />
            <br /><br />
            <textarea placeholder='message'></textarea>
            <br /><br />
            <button type='submit'></button>
        </form>
    </div>
  )
}

export default ConactForm