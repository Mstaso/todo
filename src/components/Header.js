import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({ title, onAdd }) => {

    return (
        <div className='header'>
            <h1>Task Tracker</h1>
            <Button color='green' text='Add' onClick={onAdd}/>
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header
