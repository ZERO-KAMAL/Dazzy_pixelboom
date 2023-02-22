/**
 * @component    Summary card component  to show the statics of user usage in the form of cards
 */


import React from 'react'
import "./SummaryCard.scss";


const SummaryCard = (props) => {
    const { CardText, CardIcon, CounterValue, DownVectorIcon,
        CounterPercentageColor, CounterPercentage } = props
    return (
        <div className='SummaryCard'>
            <div className='SummaryCardIcon'>
                <img src={CardIcon} alt="searchicon" />
            </div>

            <div className='SummaryContentWrapper'>
                <h2>{CounterValue}</h2>
                <div className='summaryCardContent'>
                    <img src={DownVectorIcon} alt="DownVectorIcon" />
                    <p style={{ color: CounterPercentageColor }} >{CounterPercentage}</p>
                </div>
            </div>
            <p className='SummaryCardText'>{CardText}</p>
        </div>

    )
}

export default SummaryCard
