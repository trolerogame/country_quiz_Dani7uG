import React from 'react'
import { TryAgain,ContainRetry } from '../style/StyleRetry'

const Retry = ({count,retry}) => {
	return <ContainRetry>
        <img src="/country_quiz_Dani7uG/undraw_winners_ao2o 2.svg" alt="" />
        <h3>Results</h3>
        <p>Your got <b>{count}</b> correct answers</p>
        <TryAgain onClick={retry}>Try Again</TryAgain>
    </ContainRetry>
}

export default Retry
