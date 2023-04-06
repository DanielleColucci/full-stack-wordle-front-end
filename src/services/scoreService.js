import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/scores`

const create = async (mode, numGuesses) => {
  const scoreData = {
    mode: mode,
    value: numGuesses - mode + 1
  }
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(scoreData)
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

const modeIndex = async (mode, user) => {
  try {
    const res = await fetch(`${BASE_URL}/${user.profile.id}/${mode}`, {
      'Authorization': `Bearer ${tokenService.getToken()}`,
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export { 
  create,
  modeIndex,
}