import logo  from '../../../Logos/logo.png'

import moment from 'moment';
const Header = () => {
        return (
                <div className='text-center gap-3 '>
                        <img className='mx-auto' src={logo} alt="" />
                        <p className='gap-5'>Journalism Without Fear or Favour</p>
                        <p className='text-xl'>{moment().format("dddd, MMMM D YYYY,")}</p>
                      
                </div>
        );
};

export default Header;