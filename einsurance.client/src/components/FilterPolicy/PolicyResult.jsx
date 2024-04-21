import React, { useState } from 'react';

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
    const handleNavigate = (companyName) => {
        console.log("policy");
       /* navigate(`/ViewDetail/${id}`);*/
        navigate(`/ViewDetail/${encodeURIComponent(companyName)}`);
    }


    return (
        <section className="policyFilterResultMain">
            <div className="filterWrap">
                {responseData ? responseData.map((responseValue, index) => { 
                   /* const id = responseValue.id || generateRandomId();*/
                return(
                <div className="firstComponent" key={index}>
                    <div className="companyNames">
                        <div className="">
                            <img src='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221223125246/LIFE-INSURANCE-2.png'
                                alt="" className='w-96 h-36' /></div>

                    </div>
                        <div className="policy"><div className="policyNames">Policy Name: {responseValue.policyName}</div>
                            <div className="minCover">Company Name: {responseValue.companyName} </div>
                        <div className="minCover">Minimum Cover: {responseValue.minCover} </div>
                    </div>
                    <div className="moreDetail">
                            <button className="detailButton" onClick={() => handleNavigate(responseValue.companyName)}>Details <img className="arrow" src={arrow} alt="" height='15px' id='checked' /></button>
                    </div>
                </div>
                    );
                }) : []}


            </div>


        </section>
    );

}

export default PolicyResult;