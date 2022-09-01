using ReactHooksDemoBackend.Entities;

namespace ReactHooksDemoBackend.Interfaces;

public interface IBookService
{
    Task<List<Book>> GetListAsync(string? title, CancellationToken cancellationToken = default);

    Task<Book> GetAsync(int id, CancellationToken cancellationToken = default);
    Task<Book> UpdateAsync(int id, Book update, CancellationToken cancellationToken = default);

    Task<Book> InsertAsync(Book entityToAdd, CancellationToken cancellationToken = default);

    Task DeleteAsync(int id, CancellationToken cancellationToken = default);
}
