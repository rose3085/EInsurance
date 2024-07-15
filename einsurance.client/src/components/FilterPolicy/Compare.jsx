import './Compare.css';
import filter from '../Icons/filter2.png';
import { useState, useEffect } from 'react';
/*import Select from 'react-select';*/
import { useNavigate, NavLink } from 'react-router-dom';
import { useResponse } from '../../context/ResponseContext';
import { useParams } from 'react-router-dom';
import cancel from '../Icons/CancelButton.png';
import phoneCall from '../Icons/phoneCall.png';
import internet from '../Icons/internet.png';
import insuranceIcon from '../Icons/insuranceIcon.png';


const Compare = () => {
    const { policyName } = useParams();
    const { responseData } = useResponse();
   /* const [selectedOptions, setSelectedOptions] = useState([]);*/
    const [selectedPolicyDetails, setSelectedPolicyDetails] = useState(null);



    // State to keep track of the active link
    const [activePolicy, setActivePolicy] = useState(null);

   

   

    const handleClick = (policyName) => {
        const selectedPolicy = responseData.find((policy) => policy.policyName === policyName);
        setSelectedPolicyDetails(selectedPolicy);
        setActivePolicy(policyName);
    };

    // useEffect to reset selected details when responseData changes
    useEffect(() => {
        setSelectedPolicyDetails(null);
    }, [responseData]);

 



return (
    <section className="mainComponentCompare">
        <div className="summarysComponent">
            <div className="filters">
                <div className="filterImg">
                    <img src={filter} alt="" height='23px' id='checked' /> </div>
                <div><p className="filterText">Compare Policy</p></div>
            </div>
            <div className="line"> </div>




            <div className="selectPolicy">


                {responseData.map((responseValue, index) => (
                    <div className="policyCompareName" key={index}>
                        <NavLink
                            key={responseValue.policyName}
                            onClick={() => handleClick(responseValue.policyName)}
                            className={() =>
                                `${responseValue.policyName === activePolicy ? "text-[#0065ff]" : "text-gray-700"}`
                            }
                        >
                            {responseValue.policyName}
                        </NavLink>
                    </div>
                ))}



            </div>
        </div>
        {selectedPolicyDetails && (
            <div className="selectedPolicyDetails ml-72 mt-[15rem] ">
                <div className="viewDetailsComponents"><div className="viewDetailsHeader">
                    <div className="cancelButtons">
                        <div className="linees"></div>
                        <div className="cancel" >
                            <img src={cancel} alt="" height='25px' id='checked' /> </div>
                    </div>

                    <div className="policyNameDiv">
                        <div><img className="insuranceIcon" src={insuranceIcon} alt="" height='45px' id='checked' /></div>
                        <div className="policyNames">{selectedPolicyDetails.policyName}</div>
                    </div>
                    <div className="lines"></div>

                </div>
                    <div className='otherDetails'>
                        <div className='policyDescription'>
                            {selectedPolicyDetails.policyDescription}
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
                                    <td>{selectedPolicyDetails.policyType}</td>

                                </tr>
                                {selectedPolicyDetails.premiumRate ?
                                    <tr>

                                        <td>Premium Rate</td>
                                        <td>{selectedPolicyDetails.premiumRate / selectedPolicyDetails.policyTerm}</td>

                                    </tr>

                                    : null}
                                <tr>
                                    <td>Min Entry Age</td>
                                    <td>{selectedPolicyDetails.minEntryAge}</td>

                                </tr>
                                <tr>
                                    <td>Max Entry Age</td>
                                    <td>{selectedPolicyDetails.maxEntryAge}</td>

                                </tr>
                                <tr>
                                    <td>Expiry Age</td>
                                    <td>{selectedPolicyDetails.expiryAge}</td>

                                </tr>
                                <tr>
                                    <td>Min Cover</td>
                                    <td>{selectedPolicyDetails.minCover}</td>

                                </tr>
                                {selectedPolicyDetails.maxCover ? <tr>
                                    {/* {policyData.policyName ? <div className="">{policyData.policyName}</div>:null} */}
                                    <td>Max Cover</td>
                                    <td>{selectedPolicyDetails.maxCover}</td>

                                </tr> : null}
                                <tr>
                                    <td>Payment Mode</td>
                                    <td>{selectedPolicyDetails.paymentMode}</td>

                                </tr>
                                <tr>
                                    <td>Policy Term</td>
                                    <td>{selectedPolicyDetails.policyTerm}</td>

                                </tr>
                            </tbody>
                        </table>


                        {selectedPolicyDetails.surrenderPolicy ? <div className="surrenderLabel">
                            <div className="descriptionLable">Surrender Policy:</div>
                            <div>{selectedPolicyDetails.surrenderPolicy}</div>
                        </div> : null}

                        {selectedPolicyDetails.riskCommencementPeriod ? <div className="risk">
                            <div className="descriptionLable">Risk Commencement Period:</div>
                            <div>{selectedPolicyDetails.riskCommencementPeriod}</div>
                        </div> : null}

                        {selectedPolicyDetails.riskCommencementDetails ? <div className="riskDetail">
                            <div className="descriptionLable">Risk Commencement Details:</div>
                            <div>{selectedPolicyDetails.riskCommencementDetails}</div>
                        </div> : null}

                        {selectedPolicyDetails.maturityBenefits ? <div className="policyType">
                            <div className="descriptionLable">Maturity Benefits:</div>
                            <div>{selectedPolicyDetails.maturityBenefits}</div>
                        </div> : null}

                        <div className="viewDetailsFooter">
                            <div className="companyName">{selectedPolicyDetails.companyName}
                                {selectedPolicyDetails.policyLaunchDate ? <div className="policyLaunchDate">
                                    <div>Policy Launch Date : </div> {selectedPolicyDetails.policyLaunchDate.split("T")[0]}</div> : null}

                            </div>
                            <div className="contactCompany">
                                <p className="needHelp"> Need Help?</p>
                                <div className="contactNumber">
                                    <div className="callImage"><img src={phoneCall} alt="" height='25px' id='checked' /></div>
                                    <div>{selectedPolicyDetails.phoneNumber}</div>
                                </div>

                                <div className="contactNumber">
                                    <div className="callImage"><img src={internet} alt="" height='25px' id='checked' /></div>
                                    <div>  <a href={selectedPolicyDetails.website} target="_blank" rel="noopener noreferrer" >{selectedPolicyDetails.website}</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}



    </section>
);

}

export default Compare;