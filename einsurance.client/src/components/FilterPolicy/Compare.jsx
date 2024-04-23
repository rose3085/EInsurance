import './Compare.css';
import filter from '../Icons/filter2.png';
import {useState} from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import { useResponse } from '../../context/ResponseContext';

const Compare = () =>
{
    const [selectedPolicy, setSelectedPolicy] = useState('');

    const handleSelectChange = (event) => {
        // const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
        // const limitedSelection = selectedOptions.slice(0, 2);
      setSelectedPolicy(event.target.value);
    };


    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleCheckboxChange = (policyName) => {
      if (selectedOptions.includes(policyName)) {
        setSelectedOptions(selectedOptions.filter((option) => option !== policyName));
      } else if (selectedOptions.length < 2) {
        setSelectedOptions([...selectedOptions, policyName]);
      }
    };
  
    const handleSubmit = () => {
       
            if (selectedOptions.length === 2) {
              const [policyName1, policyName2] = selectedOptions;
            //   const url = `/CompareResult/${encodeURIComponent(policyName1)}/${encodeURIComponent(policyName2)}`;
            //   navigate(url);

            navigate(`/CompareResult/${encodeURIComponent(policyName1)}`, { state: { policyName1, policyName2 } });
      // navigate('/Page2', { state: { policyName1, policyName2 } });

            // onSubmit(policyName1, policyName2);
            // navigate(`/CompareResult`);

            }
        
      };
    

    const { responseData } = useResponse();
    const navigate = useNavigate();
return (
    <section className="mainComponentCompare">
    <div className="summaryComponent">
        <div className="filters">
            <div className="filterImg"><img src={filter}  alt="" height='23px' id='checked'/> </div>
            <div><p className="filterText">Compare Policy</p></div>
        </div>
    <div className="line"> </div>
   
    {/* {responseData ? responseData.map((responseValue, index) => { 
        return(
            <div className="policyCompareName">
               
                <div className="minCover">{responseValue.policyName} </div>
            </div>
        ); }) : []} */}


    <div className="selectPolicy">
      {/* <select className='h-8 w-60 m-2 rounded-sm text-lg'value={selectedPolicy} onChange={handleSelectChange}>
        <option value="">Select a policy</option>
        {responseData &&
          responseData.map((responseValue, index) => (
            <option key={index} value={responseValue.policyName}>
              {responseValue.policyName}
            </option>
          ))}
      </select>

      {responseData &&
        responseData.map((responseValue, index) => (
          <div key={index} className="policyCompareName">
            {selectedPolicy === responseValue.policyName && (
              <div className="minCover">{responseValue.policyName}</div>
            )}
          </div>
        ))} */}

         {responseData.map((responseValue, index) => (
        <div className="policyCompareName" key={index}>
          <input
            type="checkbox"
            id={`policy-${index}`}
            value={responseValue.policyName}
            checked={selectedOptions.includes(responseValue.policyName)}
            onChange={() => handleCheckboxChange(responseValue.policyName)}
          />
          <label htmlFor={`policy-${index}`}>{responseValue.policyName}</label>
        </div>
      ))}
      {selectedOptions.length === 2 && (
        <div className="selectedOptions">
          <p className="selectResult">Selected Options:</p>
          <ul>
            {selectedOptions.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
          <button onClick={handleSubmit}>Compare</button>
        </div>
      )}
    

{/* <Select
        isMulti
        options={responseData.map((responseValue) => ({
          value: responseValue.policyName,
          label: responseValue.policyName,
        }))}
        value={selectedPolicy}
        onChange={handleSelectChange}
      />
      <div className="policyCompareName">
        {selectedPolicy.map((option, index) => (
          <div className="minCover" key={index}>
            {option.label}
          </div>
        ))}
      </div> */}


    </div>
    </div>

    
           
           
            </section>
);

}

export default Compare;