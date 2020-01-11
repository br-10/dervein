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
      <Link to="/resonanz" activeClassName="active" aria-label="Link zur Resonanz-Seite">
      Resonanz
      </Link>
      <Link  to="/praml-held" activeClassName="active" aria-label="Link zu den Akteuren">
         Akteure
      </Link>
      <Link to="/termine" activeClassName="active" aria-label="Informationen zum Verein">
      Termine
      </Link>
      <Link to="/dank" activeClassName="active" aria-label="Informationen zum Verein">
       Dank
      </Link>

</React.Fragment>
  )
}
