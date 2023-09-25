// ** React Imports
import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'

interface DefaultLayoutProps {
	children: ReactNode
}

const DefaultLayout = (props: DefaultLayoutProps) => {
	const {children} = props
	return (
		<React.Fragment>
			{children}
		</React.Fragment>
	)
}

export default DefaultLayout

DefaultLayout.propTypes = {
	children: PropTypes.node.isRequired
}
