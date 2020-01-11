import React from 'react'
import { Link } from 'gatsby'
import {FaHome} from 'react-icons/fa'
//import { css } from '@emotion/core'
//import { useTheme } from '../Theming'
//import ThemeToggler from './ThemeToggler'

export default () => {
  //const theme = useTheme()
  return (
      <React.Fragment>
      <Link  to="/" activeClassName="active" aria-label="Homebutton">
      <FaHome/>
      </Link>
      <Link to="/aktuelles" activeClassName="active" aria-label="aktuelle Informationen">
        Aktuelles
      </Link>
      <Link to="/chronik" activeClassName="active" aria-label="Link zur Chronik">
  Chronik
      </Link>
      <Link  to="/presse_netzwerk" activeClassName="active" aria-label="Link zu Pressetexten und Netzwerken">
        Presse & Netzwerk
      </Link>
      <Link to="/verein" activeClassName="active" aria-label="Informationen zum Verein">
        Verein
      </Link>

</React.Fragment>
  )
}
