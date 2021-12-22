import React from 'react'

import Statistic from './StatisticLine'

const Statistics = (props) => {

    const { good, bad, neutral } = props

    const all = (good + neutral + bad)

    if (good === 0 && neutral === 0 && bad === 0) {

        return (
            <div>
                No feedback Given
            </div>
        )
    }

    //console.log(props)

    return (
        <div>

            <table>

                <tbody>

                <Statistic name="Good"  valor={good}/>
                <Statistic name="Neutral" valor={neutral}/>
                <Statistic name="Bad" valor={bad}/>
                <Statistic name="All" valor={all}/>
                <Statistic name="Average" valor={ (good-bad)/all }/>
                <Statistic name="Positive" valor={`${(good*100)/all} %`}/>

                </tbody>
                
            </table>

        
        </div>
    )
}

export default Statistics
