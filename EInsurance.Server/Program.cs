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

var corsOrigins = builder.Configuration.GetValue<string>("App:CorsOrigins")?.Split(',');
builder.Services.AddCors(options =>
{
    options.AddPolicy(
        "ReactPolicy",
        builder =>
        {
            builder.WithOrigins(corsOrigins).AllowAnyHeader().AllowAnyMethod();
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

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
