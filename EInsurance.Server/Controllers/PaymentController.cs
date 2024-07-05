using System.Reflection;
using System.Security.Claims;
using System.Text;
using EInsurance.Server.DTOs;
using EInsurance.Server.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace EInsurance.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        private readonly IUserInterface _user;

        public PaymentController(IUserInterface user)
        {
            _user = user;
        }

        [Route("/payment/khalti")]
        [HttpPost]
        public async Task<IActionResult> Payment([FromBody] PaymentRequestDTO model)
        {
            var url = "https://a.khalti.com/api/v2/epayment/initiate/";

            var payload = new
            {
                return_url = "https://localhost:5173/PaymentResult",
                website_url = "https://localhost:5173/",
                amount = model.AmountInPaisa,
                purchase_order_id = "Order01",
                purchase_order_name = "test",
                customer_info = new
                {
                    name = model.CustomerName,
                    email = "test@khalti.com",
                    phone = "9800000001"
                }
            };

            var jsonPayload = JsonConvert.SerializeObject(payload);
            var content = new StringContent(jsonPayload, Encoding.UTF8, "application/json");

            var client = new HttpClient();
            client.DefaultRequestHeaders.Add(
                "Authorization",
                "key live_secret_key_68791341fdd94846a146f0457ff7b455"
            );

            var response = await client.PostAsync(url, content);
            var responseContent = await response.Content.ReadAsStringAsync();
            return Ok(responseContent);

            //Console.WriteLine(responseContent);
        }

        [Route("/payment/response")]
        [HttpPost]
        public async Task<IActionResult> PaymentResponse([FromBody] PaymentResponseDTO model)
        {
            string? userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (userId == null)
            {
                return BadRequest();
            }
            double amount = double.Parse(model.TotalAmount);
            amount = amount / 100;
            var result = await _user.AddPayment(userId, model.PolicyId, amount);

            return Ok(result);
        }
    }
}
