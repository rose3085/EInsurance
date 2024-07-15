using EInsurance.Server.DTOs;

namespace EInsurance.Server.Helper
{
    public static class SortingAlgorithms
    {
        public static void MergeSort(List<PoliciesDetailsDTO> products, bool ascending = true)
        {
            if (products.Count <= 1)
                return;

            var mid = products.Count / 2;
            var left = new List<PoliciesDetailsDTO>();
            var right = new List<PoliciesDetailsDTO>();

            for (int i = 0; i < mid; i++)
                left.Add(products[i]);

            for (int i = mid; i < products.Count; i++)
                right.Add(products[i]);

            MergeSort(left, ascending);
            MergeSort(right, ascending);
            Merge(products, left, right, ascending);
        }

        private static void Merge(
            List<PoliciesDetailsDTO> products,
            List<PoliciesDetailsDTO> left,
            List<PoliciesDetailsDTO> right,
            bool ascending
        )
        {
            int leftIndex = 0,
                rightIndex = 0,
                targetIndex = 0;

            while (leftIndex < left.Count && rightIndex < right.Count)
            {
                if (
                    (ascending && left[leftIndex].premiumRate <= right[rightIndex].premiumRate)
                    || (!ascending && left[leftIndex].premiumRate >= right[rightIndex].premiumRate)
                )
                {
                    products[targetIndex] = left[leftIndex];
                    leftIndex++;
                }
                else
                {
                    products[targetIndex] = right[rightIndex];
                    rightIndex++;
                }
                targetIndex++;
            }

            while (leftIndex < left.Count)
            {
                products[targetIndex] = left[leftIndex];
                leftIndex++;
                targetIndex++;
            }

            while (rightIndex < right.Count)
            {
                products[targetIndex] = right[rightIndex];
                rightIndex++;
                targetIndex++;
            }
        }
    }
}
