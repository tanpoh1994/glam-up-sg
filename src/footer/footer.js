import './footer.css';
import facebook from './facebook.png';
import instagram from './instagram.png'

function GlamUpFooter() {
return(
<div className='footer'>
    <div className='footer_text'>
        <p className='footer_p'> © 2022 GlamUp SG. All rights reserved. No pictures are to be reused without approval from the owner. </p>
        <p className='footer_p'>GlamUp SG - Taking care of all of your needs.</p>
        <p className='footer_p'>Recommended view in deskstop.</p>
    </div>
    <div className='footer_socialmedia_icons'>
        <img className='footer_icon' src={facebook} href='#' alt ='facebook-link'/>
        <img className='footer_icon' src={instagram}  href='#' alt = 'instagram-link'/>
    </div>



</div>

)

}
export default GlamUpFooter