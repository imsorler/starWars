import { useState, useEffect } from 'react'
import { withErrorApi } from '@hoc/withErrorApi'
import { getApiResource } from '@utils/network'
import { API_PEOPLE } from '@constants/api'
import { getPeopleId, getPeopleImage } from '@services/getPeopleData'
import PeopleList from '@components/PeoplePage/PeopleList'

// import styles from './PeoplePage.module.css'

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null)

  const getResource = async (url) => {
    const res = await getApiResource(url)

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url)
        const img = getPeopleImage(id)
  
        return {
          id,
          name,
          img
        }
      })
  
      setPeople(peopleList)
      // eslint-disable-next-line no-undef
      setErrorApi(false)
    } else {
      // eslint-disable-next-line no-undef
      setErrorApi(true)
    }
  }

  useEffect(() => {
    getResource(API_PEOPLE)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return ( //people из useState()
    <>
      <h1>Navigation</h1>
        {people && <PeopleList people={people}/>}
      </>
  )
}

export default withErrorApi(PeoplePage)