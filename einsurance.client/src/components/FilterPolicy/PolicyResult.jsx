import React, { useState } from 'react';
import asianLife from '../Icons/AsianLife.png';
import parbhuMahalaxmi from "../Icons/ParbhuMahalaxmi.jpg";
import nepalLife from "../Icons/NepalLifeLogo.png";
import sunLife from "../Icons/SunlifeInsurance.jpg";
import './PolicyResult.css';
import { useNavigate } from 'react-router-dom';




import arrow from '../Icons/rightArrow.png';
import { useResponse } from '../../context/ResponseContext';


const PolicyResult = () => {
    const { responseData } = useResponse();
    const navigate = useNavigate();


    //const generateRandomId = () => {
    //    // Generate a random ID 
    //    return Math.random().toString(36).substr(2, 5) + '_' + Date.now().toString(36);
    //}
    const handleNavigate = (policyName) => {
        console.log("policy",policyName);
       /* navigate(`/ViewDetail/${id}`);*/
        navigate(`/ViewDetail/${encodeURIComponent(policyName)}`);
    }


    const companyLogo = 
    {
        "Parbhu Mahalaxmi Life Insurance":parbhuMahalaxmi,
        "Sun Nepal Life Insurance Company Limited":sunLife,
        "Nepal Life":nepalLife,
        "Asian Life Insurance":asianLife,
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
                            {responseValue.premiumRate ? <div className="minCover">Premium Rate: {responseValue.premiumRate} </div>:  null}
                        <div className="minCover">Minimum Cover: {responseValue.minCover} </div>
                    </div>
                    <div className="moreDetail">
                            <button className="detailButton" onClick={() => handleNavigate(responseValue.policyName)}>Details <img className="arrow" src={arrow} alt="" height='15px' id='checked' /></button>
                    </div>
                </div>
                    );
                }) : []}


            </div>


        </section>
    );

}

export default PolicyResult;