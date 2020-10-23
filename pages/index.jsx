import React from 'react'
import Link from 'next/link'

const index = () => {
    return (
        <>
        <div>
            Next.js App
        </div>
        <Link href="/notes">
                <a>
                    Notes
                </a>
            </Link>
        </>
    )
}

export default index
