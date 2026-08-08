import React from 'react'

import CountUpModule from "react-countup";

const CountUp = CountUpModule.default || CountUpModule;

const Test = () => {
    console.log(CountUp)
    return (
        <div>
            <h1>Test CountUp</h1>
            <CountUp/>
        </div>
    )
}

export default Test