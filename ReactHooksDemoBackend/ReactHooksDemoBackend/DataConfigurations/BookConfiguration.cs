using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using ReactHooksDemoBackend.Entities;

namespace ReactHooksDemoBackend.DataConfigurations
{
    public class BookConfiguration : IEntityTypeConfiguration<Book>
    {
        public void Configure(EntityTypeBuilder<Book> builder)
        {
            builder.HasKey(b => b.Id);

            builder
                .Property(b => b.Id)
                .ValueGeneratedOnAdd()
                .IsRequired();

            builder.Property(b => b.Title)
                .HasColumnType("varchar(1000)")
                .IsUnicode()
                .HasDefaultValue(string.Empty)
                .IsRequired();

            builder.Property(b => b.Author)
               .HasColumnType("varchar(100)")
               .IsUnicode()
               .HasDefaultValue(string.Empty)
               .IsRequired();

            builder.Property(b => b.Description)
               .HasColumnType("varchar(5000)")
               .IsUnicode()
               .HasDefaultValue(string.Empty)
               .IsRequired();
        }
    }
}
