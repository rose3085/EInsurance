import React, { useState, useEffect } from 'react';
//import asianLife from '../Icons/AsianLife.png';
//import parbhuMahalaxmi from "../Icons/ParbhuMahalaxmi.jpg";
//import nepalLife from "../Icons/NepalLifeLogo.png";
//import sunLife from "../Icons/SunlifeInsurance.jpg";
import './PolicyResult.css';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import arrow from '../Icons/rightArrow.png';
import { useLocation } from 'react-router-dom';
import { useResponse } from '../../context/ResponseContext';


const PolicyResult = () => {
    const [premiumAmount, setPremiumAmount] = useState();
    const { responseData } = useResponse();
    const navigate = useNavigate();
    
    const location = useLocation();
    const formData = location.state?.formData || {};
   
    

    const handleNavigate = (policyName) => {
        
        console.log("policy",policyName);
    
        navigate(`/ViewDetail/${encodeURIComponent(policyName)}`);
      

    }


   

    const handleLoginPageChange = (premiumRate, policyName, policyId) => {
        debugger;
        const token = Cookies.get('token');
        console.log(token);
        Cookies.set("policyId", policyId);


        if(token === undefined || token ===null)
        {
            navigate("/Login", { state: { premiumRate,policyName } });
        }
        else{
            navigate("/Khalti", { state: { premiumRate, policyName } });
        }
    };
   

    const companyLogo = 
    {
        "Parbhu Mahalaxmi Life Insurance":`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSywQSutO2_PjZ2g1XqiXsiXGxxZrsoOqLzcg&s`,
        "Sun Nepal Life Insurance Company Limited":`data:image/png;base64,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`,
        "Nepal Life": `data:image/png;base64,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`,
        "Asian Life Insurance":`data:image/png;base64,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`,

    }
    
   
    

    return (
        <section className="policyFilterResultMain">
            <div className="filterWrap">
                {responseData ? responseData.map((responseValue, index) => { 
                   
                   /* const id = responseValue.id || generateRandomId();*/
                return(
                <div className="firstComponent" key={index}>
                    <div className="companyNames">
                        <div className="companyLogos">
                            {/* {responseValue.companyName } */}
                            {/* <img src='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221223125246/LIFE-INSURANCE-2.png'
                                alt="" className='w-96 h-36' /> */}

                                <img src={companyLogo[responseValue.companyName]} alt="" height='45px' />
                        </div>
                    </div>
                        <div className="policy"><div className="policyNamees">Policy Name: {responseValue.policyName}</div>
                            <div className="minCover">Company Name: {responseValue.companyName} </div>

                            {responseValue.premiumRate &&
                            (
                               
                                    <div className="minCover">
                                        Premium Rate: Rs {((responseValue.premiumRate))}
                                    </div>
                               
                            ) 
                        }
    
      
                      {/* {responseValue.premiumRate } */}
                        {/* <div className="minCover">Minimum Cover: Rs {responseValue.minCover} </div> */}
                        </div>

                        <div className="moreDetail">
                            <button className="detailButtons" 
                                onClick={() => handleLoginPageChange(responseValue.premiumRate, responseValue.policyName, responseValue.id)} >Buy </button>
                        </div>
                    <div className="moreDetail">
                            <button className="detailButton" onClick={() => handleNavigate(responseValue.policyName)}>Details </button>
                    </div>
                </div>
                    );   
                }) : []}
                  
        

            </div>


        </section>
    );

}

export default PolicyResult;