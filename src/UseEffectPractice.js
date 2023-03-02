import React, { useState, useEffect } from "react"

export default function UseEffectPractice() {
    const [resourceType, setResourceType] = useState('posts')
    return
        <>
        <div>
            <button onClick={() => setResourceType('posts')} >Posts</button>
        </div>
        </>
}