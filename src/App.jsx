import React, { useState, useEffect } from 'react'
import ItemCountry from './components/ItemCountry.jsx'
import Retry from './components/Retry.jsx'
import Next from './components/Next.jsx'
import { getFourCountries, randomNumber } from './utils/getFourCountries'
import { StyleGlobal } from './style/styleGlobal'
import {
	ContainCard,
	ImgAdventure,
	Question,
	Title,
	ContainAnswers,
} from './style/styleCard'
function App() {
	const [allCountries, setAllCountries] = useState([])
	const [countries, setCountries] = useState([])
	const [countrieTrue, setCountrieTrue] = useState({})
	const [win, setWin] = useState(null)
	const [count, setCount] = useState(0)
	const [isRetry, setIsRetry] = useState(false)
	const [oneOrZero,setOneOrZero] = useState(0)

	const setCountriesFunc = (res) => {
		const nums = getFourCountries()
		setCountrieTrue(res[nums[randomNumber(4)]])
		setOneOrZero(randomNumber(2))
		setCountries([res[nums[0]], res[nums[1]], res[nums[2]], res[nums[3]]])
	}

	const next = (countries) => {
		setCountriesFunc(countries)
		setWin(null)
	}

	const retry = () => {
		next(allCountries)
		setCount(0)
        setIsRetry(false)
	}

	useEffect(() => {
		fetch('https://restcountries.com/v2/all')
			.then((res) => res.json())
			.then((res) => {
				setAllCountries(res)
				setCountriesFunc(res)
			})
	}, [])

	return (
		<ContainCard>
			<StyleGlobal />
			<Title>Country Quiz</Title>
			{isRetry === false && (
				<>
					<ImgAdventure
						src="/undraw_adventure_4hum 1.svg"
						alt=""
					/>
					<Question>
						{oneOrZero ? 
							`${countrieTrue.capital} is the capital of` : 
							<>
								<img src={countrieTrue.flags?.png} alt="" />
								<p>
								Which country does this flag belong to	
								</p>
							</>
						}
					</Question>
					<ContainAnswers>
						{countries && countries.map((country, i) => (
							<ItemCountry
								country={country}
								win={win}
								setWin={setWin}
								countrieTrue={countrieTrue}
								i={i}
								key={i}
								setCount={{ setCount, count }}
							/>
						))}
					</ContainAnswers>
				</>
			)}
            {isRetry && (
                <Retry count={count} retry={retry}/>
            )}
			{(win !== null && !isRetry) && (
				<Next 
					win={win} 
					next={next} 
					allCountries={allCountries} 
					setIsRetry={setIsRetry}
				/>
			)}
		</ContainCard>
	)
}

export default App
