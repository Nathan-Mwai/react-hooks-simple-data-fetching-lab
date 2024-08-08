// create your App component here
import React, { useEffect, useState } from 'react'

const App = () => {

    const [images, setImages] = useState('')
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() =>{
        fetch(`https://dog.ceo/api/breeds/image/random`,)
        .then(res => res.json())
        .then(images => {
            setImages(images.message)
            setIsLoaded(true);
        })
    },[])

    if (!isLoaded) return <p>Loading...</p>;
  return (
    <>
    <img src={images} alt='A Random Dog'/>
    </>
  )
}

export default App