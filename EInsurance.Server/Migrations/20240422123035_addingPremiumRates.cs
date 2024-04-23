using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EInsurance.Server.Migrations
{
    /// <inheritdoc />
    public partial class addingPremiumRates : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PremiumRate",
                columns: table => new
                {
                    Id = table
                        .Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StartAge = table.Column<int>(type: "int", nullable: false),
                    EndAge = table.Column<int>(type: "int", nullable: false),
                    Rate = table.Column<int>(type: "int", nullable: false),
                    policyDetailsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PremiumRate", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PremiumRate_policyDetails_policyDetailsId",
                        column: x => x.policyDetailsId,
                        principalTable: "policyDetails",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade
                    );
                }
            );

            migrationBuilder.CreateIndex(
                name: "IX_PremiumRate_policyDetailsId",
                table: "PremiumRate",
                column: "policyDetailsId"
            );
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(name: "PremiumRate");
        }
    }
}
