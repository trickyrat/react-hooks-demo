using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ReactHooksDemoBackend.Migrations
{
    public partial class AddPublishField : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Published",
                table: "Books",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Published",
                table: "Books");
        }
    }
}
