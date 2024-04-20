import React, { createContext, useContext, useState } from 'react';

const ResponseContext = createContext();

export const useResponse = () => useContext(ResponseContext);

export const ResponseProvider = ({ children }) => {
    const [responseData, setResponseData] = useState(null);

    const updateResponseData = (data) => {
        setResponseData(data);
    };

    return (
        <ResponseContext.Provider value={{ responseData, updateResponseData }}>
            {children}
        </ResponseContext.Provider>
    );
};



