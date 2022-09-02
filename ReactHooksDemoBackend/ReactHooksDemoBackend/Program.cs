using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;

using ReactHooksDemoBackend.Data;
using ReactHooksDemoBackend.Dto;
using ReactHooksDemoBackend.Entities;
using ReactHooksDemoBackend.Interfaces;
using ReactHooksDemoBackend.Services;

using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

const string ReactOrigins = "React";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: ReactOrigins,
        builder =>
        {
            builder.WithOrigins("http://localhost:3000");
        });
});
builder.Services.AddScoped<IBookService, BookService>();

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var service = scope.ServiceProvider;
    DataSeeder.Initialize(service);
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors(ReactOrigins);


app.MapGet("/api/books", async (string? title, IBookService bookService) =>
{
    var books = await bookService.GetListAsync(title);
    var dto = new ListResponseDto<Book> { Data = books };
    return Results.Json(dto);
}).WithTags("Books").WithName("Books");

app.MapGet("/api/books/{id}", async (int id, IBookService bookService) =>
{
    var book = await bookService.GetAsync(id);
    return Results.Json(new { Data = book });
}).WithTags("Books");


app.MapPut("/api/books/{id}", async (int id, Book entityToUpdate, IBookService bookService) =>
{
    var book = await bookService.UpdateAsync(id, entityToUpdate);
    return Results.Json(new { Data = book });
}).WithTags("Books");

app.MapPost("/api/books", async (Book enityToAdd, IBookService bookService) =>
{
    var book = await bookService.InsertAsync(enityToAdd);
    return Results.Json(new { Data = book });
}).WithTags("Books");


app.MapDelete("/api/books/{id}", async (int id, IBookService bookService) =>
{
    await bookService.DeleteAsync(id);
    return Results.Json(new { Data = "", Message = "Delete successfully." });
}).WithTags("Books");


app.Run();
