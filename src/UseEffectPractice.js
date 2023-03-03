import React, { useState, useEffect } from "react"

export default function UseEffectPractice() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    },[])

    // const [resourceType, setResourceType] = useState('posts')
    // const [items, setItems ] = useState([])

    // console.log('render')

    // useEffect(() => {
    //     // console.log('resourcetype changed')
    //     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    //         .then(response => response.json())
    //         .then((json) => {
    //             console.log(json)
    //             setItems(json)

    //         })

    // }, [resourceType]) 

    return (
        <>
            <div>{windowWidth}</div>
            {/* <div>
                <button onClick={() => setResourceType('posts')} >Posts</button>
                <button onClick={() => setResourceType('users')} >Users</button>
                <button onClick={() => setResourceType('comments')} >Comments</button>
            </div>
            <h1>{resourceType}</h1>
            {/* {items.map(item => {
                return (<pre>{resourceType === 'posts' ? JSON.stringify(item.title) : JSON.stringify(item.name)}</pre>)
            })} */}
            {/* {items.map(item => {
                return (
                    <pre>{JSON.stringify(item)}</pre>
                )
            })} */}
        </>
    )
}