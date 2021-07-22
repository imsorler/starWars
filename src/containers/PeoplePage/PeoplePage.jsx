import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { withErrorApi } from '@hoc/withErrorApi'
import PeopleList from '@components/PeoplePage/PeopleList'
import { getApiResource } from '@utils/network'
import { getPeopleId, getPeopleImage } from '@services/getPeopleData'
import { API_PEOPLE } from '@constants/api'

import styles from './PeoplePage.module.css'

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

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage)