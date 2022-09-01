using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ReactHooksDemoBackend.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Books",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "varchar(1000)", nullable: false, defaultValue: ""),
                    Author = table.Column<string>(type: "varchar(100)", nullable: false, defaultValue: ""),
                    Description = table.Column<string>(type: "varchar(5000)", nullable: false, defaultValue: "")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Books", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Books");
        }
    }
}
