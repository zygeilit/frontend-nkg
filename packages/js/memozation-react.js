import React, { useMemo } from 'react'

export default ({ version }) => {

  // let name = `name: ${name}`
  let name = useMemo(() => `name: ${name}`, []) // never computing after first

  return <div>{name}/{version}</div>
}
