import React from 'react'

const Title = ({ title = "Welcome to Olympia Portal (olympia admin)" }) => {
    return (
        <div>
            <p className="text-3xl font-semibold mt-8">
                {title}
            </p>
        </div>
    )
}

export default Title