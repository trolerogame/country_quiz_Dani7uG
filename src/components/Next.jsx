import React from 'react'
import { ContainNext, Next as NesStyle } from '../style/styleCard'
const Next = ({win,next,allCountries,setIsRetry}) => {
	return <ContainNext>
        <NesStyle
        onClick={() =>
            win ? next(allCountries) : (setIsRetry(true))
        }
        >
            Next
        </NesStyle>
    </ContainNext>
}

export default Next
