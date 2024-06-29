import React from 'react'
import Link from 'next/link'

import { Footer } from '../../../payload/payload-types'
import { fetchFooter, fetchGlobals } from '../../_api/fetchGlobals'
import { ThemeSelector } from '../../_providers/Theme/ThemeSelector'

import FooterComponent from './FooterComponent'

export async function Footer1() {
  let footer: Footer | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
    console.log(error);
  }

  const navItems = footer?.navItems || []

  return (
    <>
      <FooterComponent footer={footer} />
    </>
  )
}
