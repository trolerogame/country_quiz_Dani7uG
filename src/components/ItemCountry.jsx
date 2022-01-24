import React,{useState,useEffect} from 'react'
import {Answer} from '../style/styleCard'
const letter = {
    1:'A',
    2:'B',
    3:'C',
    4:'D'
}
const ItemCountry = ({country,i,countrieTrue,setWin,win,setCount}) => {
    const temp = country.capital == countrieTrue.capital
    const [isTrue,setIsTrue] = useState('')
    useEffect(() => {
        win === false && temp && setIsTrue('green')
        win === null && setIsTrue('')
    }, [win])

    const getIsTrueCountry = () => {
        const {count} = setCount
        if(temp) setCount.setCount(count + 1)
        setIsTrue(temp)
        setWin(temp)
        setIsTrue(temp ? 'green' : 'red')
    }
	return <Answer 
        key={i} 
        isTrue={isTrue} 
        onClick={() => win === null && getIsTrueCountry()}
        >
           <div>
                <span>{letter[i+1]}</span>
                {country.name}
           </div>
           {isTrue && <img style={{width: '20px'}} src={'/country_quiz_Dani7uG' + isTrue == 'green' ? '/check-circle-solid.svg' : '/times-circle-solid.svg'} alt="" />}
        </Answer>
}

export default ItemCountry
