using Microsoft.EntityFrameworkCore;

using ReactHooksDemoBackend.Data;
using ReactHooksDemoBackend.Entities;
using ReactHooksDemoBackend.Interfaces;

namespace ReactHooksDemoBackend.Services;

public class BookService : IBookService
{
    private readonly ApplicationDbContext _context;

    public BookService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<List<Book>> GetListAsync(string? title, CancellationToken cancellationToken = default)
    {
        var query = _context.Books.AsNoTracking();

        if (!string.IsNullOrWhiteSpace(title))
        {
            query = query.Where(x => x.Title.Contains(title));
        }
        return await query.ToListAsync(cancellationToken);
    }

    public async Task<Book> GetAsync(int id, CancellationToken cancellationToken = default)
    {
        return await _context.Books.AsNoTracking().Where(x => x.Id == id).FirstOrDefaultAsync(cancellationToken);
    }

    public async Task<Book> UpdateAsync(int id, Book update, CancellationToken cancellationToken = default)
    {
        var entity = await _context.Books.Where(x => x.Id == id).FirstOrDefaultAsync(cancellationToken);
        entity.Title = update.Title;
        entity.Author = update.Author;
        entity.Description = update.Description;
        _ = await _context.SaveChangesAsync(cancellationToken);
        return entity;
    }

    public async Task<Book> InsertAsync(Book entityToAdd, CancellationToken cancellationToken = default)
    {
        var res = await _context.Books.AddAsync(entityToAdd, cancellationToken);
        return res.Entity;
    }

    public async Task DeleteAsync(int id, CancellationToken cancellationToken = default)
    {
        var entityToDelete = await _context.Books.Where(x => x.Id == id).FirstOrDefaultAsync(cancellationToken);
        _context.Books.Remove(entityToDelete);
        await _context.SaveChangesAsync(cancellationToken);
    }
}
