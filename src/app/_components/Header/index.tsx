import React from 'react'

import { Header } from '../../../payload/payload-types'
// import { Header } from '../../../payload/payload-types'
import { fetchHeader } from '../../_api/fetchGlobals'
import HeaderComponent from './HeaderComponent'


export async function Header1() {
  let header: Header | null = null

  try {
    header = await fetchHeader()
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <HeaderComponent header={header} />
    </>
  )
}
