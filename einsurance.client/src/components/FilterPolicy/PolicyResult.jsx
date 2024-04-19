import './PolicyResult.css';
import { useNavigate } from 'react-router-dom';
import logo from '../Icons/NepalLifeLogo.png';

import arrow from '../Icons/rightArrow.png';

const PolicyResult = () =>
{
    const navigate = useNavigate();
    const handleNavigate = () =>
    {
        navigate("/ViewDetail");
    }
    //const [companyName, setCompanyName] = useState('');
const companyName ='Nepal Life Insurance';
const minCover = 50000;
const policyName='Nepal Life Jeevan Udaya Ekal Jeevan Beema Yojana';

    return (
        <section className="policyFilterResultMain">
            <div className="filterWrap"> 
             <div className="firstComponent">
            <div className="companyNames"> 
                <div className="companyLogos"><img src={logo}  alt="" width='200px' height='80px' id='checked'/></div>
           
                </div>
                <div className="policy"><div className="policyNames">{policyName}</div>
                <div className="minCover">Minimum Cover: {minCover}</div>
                </div>
                <div className="moreDetail">
                    <button className="detailButton" onClick={handleNavigate}>Details <img className="arrow"src={arrow}  alt=""  height='15px' id='checked'/></button>
                </div>
            </div>
            
             </div>

        </section>
    );

}

export default PolicyResult;