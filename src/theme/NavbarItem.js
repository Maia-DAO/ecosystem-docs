import React from 'react'
import OriginalNavBarItem from '@theme-original/NavbarItem'
import { useLocation } from '@docusaurus/router'

export default function NavbarItem(props) {
  const { pathname } = useLocation()

  let versionDoc = pathname.split('/')
  let activeNav = null

  switch (versionDoc[2]) {
    case 'Hermes':
      activeNav = 'Hermes'
      break;
    case 'Talos':
      activeNav = 'Talos'
      break;
    case 'Ulysses':
      activeNav = 'Ulysses'
      break;
    case 'Contracts':
      activeNav = 'Contracts'
      break;
    default:
      activeNav = 'Maia'
}

  // if (versionDoc[2] === 'V2' || versionDoc[2] === '2.0.0') {
  //   activeNav = 'V2'
  // } else if (versionDoc[2] === 'V1' || versionDoc[2] === '1.0.0') {
  //   activeNav = 'V1'
  // } else {
  //   activeNav = 'V3'
  // }

  return (
    <>
      <OriginalNavBarItem {...props} className={props.className + ' ' + activeNav} />
    </>
  )
}
