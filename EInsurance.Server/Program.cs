using EInsurance.Server.Interfaces;
using EInsurance.Server.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<EInsurance.Server.Data.ApplicationDbContext>(options =>
    options.UseSqlServer(connectionString)
);

builder.Services.AddScoped<IPolicyFilterInterface, PolicyFilterRepo>();

var corsOrigins = builder.Configuration.GetValue<string>("App:CorsOrigins")?.Split(',');
builder.Services.AddCors(options =>
{
    options.AddPolicy(
        "ReactPolicy",
        builder =>
        {
            builder
                .WithOrigins("https://localhost:5173/")
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowAnyOrigin();
        }
    );
});

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("ReactPolicy");

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
