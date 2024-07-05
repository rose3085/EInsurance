namespace EInsurance.Server.DTOs
{
    public class PaymentResponseDTO
    {
        public int UserId { get; set; }
        public int ProductId { get; set; }
        public string TransactionId { get; set; }
        public string TotalAmount { get; set; }
    }
}
