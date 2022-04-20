import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'

const HomePage = () => {
  const [name, setName] = useState('Defaut')

  // Random a name
  const onClick = () => {
    if (name === 'Defaut') {
      setName('Blabla')
    } else {
      setName('Defaut')
    }
  }

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>Test Home with {name} </h1>
      <p>
        Find me at <code>./web/src/pages/HomePage/HomePage.js</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
      <button onClick={onClick}>Click on me</button>
    </>
  )
}

export default HomePage
