import React from 'react'
import {useRouter} from 'next/router'

const index = () => {
    const router = useRouter()
    const {id} = router.query
    return (
        <div>
            Notes {id} Next.js
        </div>
    )
}

export default index
