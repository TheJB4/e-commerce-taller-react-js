import PropTypes from 'prop-types'

const Layout = ({children}) => {
    Layout.propTypes = {
        children : PropTypes.node.isRequired
    }
    
  return (
    <div className='pt-10 flex flex-col items-center'>
        {children}
    </div>
  )
}

export default Layout