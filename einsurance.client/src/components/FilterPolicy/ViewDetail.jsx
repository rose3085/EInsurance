
import { useState, useEffect } from 'react';
import insuranceIcon from '../Icons/insuranceIcon.png';
import './ViewDetail.css';
import { Link,useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import cancel from '../Icons/CancelButton.png';
import phoneCall from '../Icons/phoneCall.png';
import internet from '../Icons/internet.png';
import { useResponse } from '../../context/ResponseContext';


const ViewDetail = () =>
{
    const { companyName } = useParams();
    /*const decodedCompanyName = decodeURIComponent(companyName);*/
    const { responseData } = useResponse();
    const [policyData, setPolicyData] = useState(null);

    const navigate = useNavigate();


    useEffect(() => {
        if (responseData) {
            const filteredPolicy = responseData.find(policy => policy.companyName === companyName);
            if (filteredPolicy) {
                setPolicyData(filteredPolicy);
            } else {
                // Handle case where policy data with the given company name is not found
                navigate('/FilterResult');
            }
        }
    }, [companyName, responseData, navigate]);

    if (!responseData) {
        
        return <div>Loading...</div>;
    }

    if (!policyData) {
        // Handle case where policyData with the given company is not found
        return <div>Policy not found!</div>;
    }

    const handleCancelButton = () => {
        navigate("/FilterResult");
    }



      return (
        <section className="viewDetailsMain">
            <div className="viewDetailsComponents"><div className="viewDetailsHeader">
            <div className="cancelButtons">
                    <div className="cancel" onClick={handleCancelButton}><img src={cancel}  alt=""       height='25px' id='checked'/> </div>
                    </div>
               
        <div className="policyNameDiv">
            <div><img className="insuranceIcon"src={insuranceIcon}  alt=""height='45px' id='checked'/></div>
                      <p className="policyName">{policyData.policyName}</p>
               </div>
               
            </div>
            <div className='otherDetails'>
            <div className='policyDescription'>
                          {policyData.policyDescription}
               </div>
                <table>
                <thead>
                <tr>
                    <th>Features</th>
                    <th>Details</th>
                
                </tr>
                </thead>
                    <tbody>
                    <tr>
                        <td>Policy Type</td>
                                  <td>{policyData.policyType}</td>
                    
                    </tr>
                    <tr>
                        <td>Min Entry Age</td>
                                  <td>{policyData.minEntryAge}</td>
                        
                    </tr>
                    <tr>
                        <td>Max Entry Age</td>
                                  <td>{policyData.maxEntryAge}</td>
                        
                    </tr>
                    <tr>
                        <td>Expiry Age</td>
                                  <td>{policyData.expiryAge}</td>
                        
                    </tr>
                    <tr>
                        <td>Min Cover</td>
                                  <td>{policyData.minCover}</td>
                        
                    </tr>
                              {policyData.maxCover ? <tr>  {policyData.policyName ? <div className="">{policyData.policyName}</div>:null}
                        <td>Max Cover</td>
                                  <td>{policyData.maxCover}</td>
                        
                    </tr> : null}
                    <tr>
                        <td>Payment Mode</td>
                                  <td>{policyData.paymentMode}</td>
                        
                    </tr>
                    <tr>
                        <td>Policy Term</td>
                                  <td>{policyData.policyTerm}</td>
                        
                    </tr>
                    </tbody>
      </table>
          

                      {policyData.surrenderPolicy? <div className="policyType">
            <div className="descriptionLable">Surrender Policy:</div>
                          <div>{policyData.surrenderPolicy}</div>
        </div>:null}
        
                      {policyData.riskCommencementPeriod?<div className="risk">
            <div className="descriptionLable">Risk Commencement Period:</div>
                          <div>{policyData.riskCommencementPeriod}</div>
        </div>: null }

                      {policyData.riskCommencementDetails?  <div className="riskDetail">
            <div className="descriptionLable">Risk Commencement Details:</div>
                          <div>{policyData.riskCommencementDetails}</div>
        </div> : null}

        {policyData.maturityBenefits ? <div className="policyType">
            <div className="descriptionLable">Maturity Benefits:</div>
                          <div>{policyData.maturityBenefits}</div>
        </div>:null}

            <div className="viewDetailsFooter">
                          <div className="companyName">{policyData.companyName}
                              {policyData.policyLaunchDate ? <div className="policyLaunchDate">
                                  <div>Policy Launch Date :</div> {policyData.dateWithoutTime}</div> : null}
                          
                </div>
                <div className="contactCompany">
                    <p className="needHelp"> Need Help?</p>
                    <div className="contactNumber">
                        <div className="callImage"><img src={phoneCall}  alt=""height='25px' id='checked'/></div>
                                  <div>{policyData.phoneNumber}</div>
                    </div>

                    <div className="contactNumber">
                        <div className="callImage"><img src={internet}  alt=""height='25px' id='checked'/></div>
                                  <div>  <a href={policyData.website} target="_blank" rel="noopener noreferrer" >{policyData.website}</a></div>
                    </div>
                </div>
              </div>
              </div>
              </div>

             
        </section>
      );


}

export default ViewDetail;