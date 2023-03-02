import React, { useState, useEffect } from "react"

export default function UseEffectPractice() {
    const [resourceType, setResourceType] = useState('posts')

    console.log('render')

    useEffect(() => {
        console.log('resourcetype changed')
    }, [resourceType]) 
    return (
        <>
            <div>
                <button onClick={() => setResourceType('posts')} >Posts</button>
                <button onClick={() => setResourceType('users')} >Users</button>
                <button onClick={() => setResourceType('comments')} >Comments</button>
            </div>
            <h1>{resourceType}</h1>
        </>
    )
}