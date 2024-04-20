import {useEffect, useState} from 'react';
import "./Summary.css";
import filter from '../Icons/filter2.png';
import { useResponse } from '../../context/ResponseContext';
import { useLocation } from 'react-router-dom';

const Summary = () =>
{
    //const { responseData } = useResponse();
    //const { payload } = responseData || {};
    //console.log('responseData:', responseData);
    //console.log('payload:', payload);

    const location = useLocation();
    const formData = location.state?.formData || {};

return(
    <section className="mainComponentSummary">
            <div className="summaryComponent">
                <div className="filters">
                    <div className="filterImg"><img src={filter}  alt="" height='23px' id='checked'/> </div>
                    <div><p className="filterText">Filter Results</p></div>
                </div>
            <div className="line"> </div>
            
                    {/*<div className="name">*/}
                    {/*    {name}*/}
                    {/*</div>*/}
                    {/* <div className="dateOfBirth">
                        <p className="filterLabel">Date of Birth :</p>
                        <div className="coverName">{currentYear}</div>
                    </div> */}
                    {/* <div className="salary">
                        <p className="filterLabel">Salary :</p>
                        {salary}
                    </div> */}
                    <div className="policyTypes">
                        <p className="filterLabel">Type of Policy :</p>
                        <div className="coverName">{formData.policyType}</div>
                    </div>
                    <div className="policyTypes">
                        <p className="filterLabel">Policy Term :</p>
                        <div className="coverName">{formData.terms}</div>
                    </div>
                    <div className="policyTypes">
                        <p className="filterLabel">Cover Amount</p>
                        <div className="coverName">{formData.coverAmount}</div>
                    </div>
            
            </div>
    </section>
);

}

export default Summary;