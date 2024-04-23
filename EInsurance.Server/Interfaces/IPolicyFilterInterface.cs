﻿using EInsurance.Server.DTOs;

namespace EInsurance.Server.Interfaces
{
    public interface IPolicyFilterInterface
    {
        public Task<ICollection<PoliciesDetailsDTO>> FilterPolicyDetails(
            PolicyFilteringParameters filters
        );

        //public
    }
}
