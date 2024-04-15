
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

import  qzone1 from '../../../Logos/qZone1.png'
import  qZone2 from '../../../Logos/qZone2.png'
import  qzone3 from '../../../Logos/qZone3.png'

const RidSideNav = () => {
        return (
                <div>
                        <div className='p-4 space-y-3 mb-6'>
                                <h2 className="text-3xl">Login With</h2>
                                <button className="btn btn-outline w-full">
                                        <FaGoogle></FaGoogle>
                                        Google      
                                </button>
                                <button className="btn btn-outline w-full">
                                        <FaGithub></FaGithub>
                                        Github     
                                </button>
                        </div>
                        <div className='p-4  mb-6'>
                                <h2 className="text-3xl mb-4">Finde US on</h2>
                               <a className='p-4 flex text-lg items-center border rounded-t-lg' href="">
                               <FaFacebook className='mr-3 '></FaFacebook>
                                <span>Facebook</span>
                               </a>
                               <a className='p-4 flex text-lg items-center border' href="">
                               <FaTwitter className='mr-3'></FaTwitter>
                                <span>Twitter</span>
                               </a>
                               <a className='p-4 flex text-lg items-center border rounded-b-lg' href="">
                               <FaInstagram className='mr-3'></FaInstagram>
                                <span>Instagram</span>
                               </a>
                        </div>
                        {/* {Qo ZOnne} */}

                        <div className='p-4 space-y-3 mb-6'>
                                <h2 className="text-3xl">Q-Zone</h2>
                                <img src={qzone1} alt="" />
                                <img src={qZone2} alt="" />
                                <img src={qzone3} alt="" />
                               
                        </div>
                </div>
        );
};

export default RidSideNav;