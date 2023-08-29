
import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer-clean tw-bg-black tw-p-2">
    <footer>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-4 col-md-3 item">
                    <h3 className='tw-text-red-600'>Services</h3>
                    <ul>
                        <li className='tw-list-none'><Link to="/movie" className='tw-no-underline tw-text-slate-600 tw-font-semibold'>Movie</Link></li>
                        <li className='tw-list-none'><Link to="/shows" className='tw-no-underline tw-text-slate-600 tw-font-semibold'>Shows</Link></li>
                        <li className='tw-list-none'><Link to="/trending" className='tw-no-underline tw-text-slate-600 tw-font-semibold'>Trending</Link></li>
                    </ul>
                </div>
                <div className="col-sm-4 col-md-3 item">
                    <h3 className='tw-text-red-600'>About</h3>
                    <ul>
                        <li className='tw-list-none'><a href="#" className='tw-no-underline tw-text-slate-600 tw-font-semibold'>Company</a></li>
                        <li className='tw-list-none'><a href="#" className='tw-no-underline tw-text-slate-600 tw-font-semibold'>Team</a></li>
                        <li className='tw-list-none'><a href="#" className='tw-no-underline tw-text-slate-600 tw-font-semibold'>Legacy</a></li>
                    </ul>
                </div>
                <div className="col-sm-4 col-md-3 item">
                    <h3 className='tw-text-red-600'>Contact</h3>
                    <ul>
                        <li className='tw-list-none'><a href='https://accounts.google.com' className='tw-no-underline tw-text-slate-600 tw-font-semibold'>Email</a></li>
                        <li className='tw-list-none'><a  href='https://www.linkedin.com/in/imran-raza-786mn/' className='tw-no-underline tw-text-slate-600 tw-font-semibold'>Linkedin</a></li>
                        <li className='tw-list-none'><a  href='#' className='tw-no-underline tw-text-slate-600 tw-font-semibold'>twitter</a></li>
                    </ul>
                </div>
                <div className="col-lg-3 item social"><a href="#" className='tw-no-underline'><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a>
                    <p className="copyright tw-text-red-600 tw-font-semibold">Momix © 2023</p>
                </div>
            </div>
        </div>
    </footer>
</div>
  )
}

export default Footer;