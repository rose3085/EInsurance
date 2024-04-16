using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EInsurance.Server.Migrations
{
    /// <inheritdoc />
    public partial class first : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "companyDetails",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CompanyName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Website = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ClaimsRatio = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_companyDetails", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "policyDetails",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PolicyName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PolicyDescription = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PolicyLaunchDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    PolicyType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MinEntryAge = table.Column<int>(type: "int", nullable: false),
                    MaxEntryAge = table.Column<int>(type: "int", nullable: false),
                    ExpiryAge = table.Column<int>(type: "int", nullable: true),
                    MinCover = table.Column<int>(type: "int", nullable: false),
                    MaxCover = table.Column<int>(type: "int", nullable: true),
                    MaturityBenefits = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SurrenderPolicy = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PaymentMode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RiskCommencementPeriod = table.Column<int>(type: "int", nullable: true),
                    RiskCommencementDetails = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CompanyNameId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_policyDetails", x => x.Id);
                    table.ForeignKey(
                        name: "FK_policyDetails_companyDetails_CompanyNameId",
                        column: x => x.CompanyNameId,
                        principalTable: "companyDetails",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "addonPackages",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PolicyDetailId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_addonPackages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_addonPackages_policyDetails_PolicyDetailId",
                        column: x => x.PolicyDetailId,
                        principalTable: "policyDetails",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "policyTerms",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PolicyTerm = table.Column<int>(type: "int", nullable: false),
                    PolicyDetailsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_policyTerms", x => x.Id);
                    table.ForeignKey(
                        name: "FK_policyTerms_policyDetails_PolicyDetailsId",
                        column: x => x.PolicyDetailsId,
                        principalTable: "policyDetails",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_addonPackages_PolicyDetailId",
                table: "addonPackages",
                column: "PolicyDetailId");

            migrationBuilder.CreateIndex(
                name: "IX_policyDetails_CompanyNameId",
                table: "policyDetails",
                column: "CompanyNameId");

            migrationBuilder.CreateIndex(
                name: "IX_policyTerms_PolicyDetailsId",
                table: "policyTerms",
                column: "PolicyDetailsId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "addonPackages");

            migrationBuilder.DropTable(
                name: "policyTerms");

            migrationBuilder.DropTable(
                name: "policyDetails");

            migrationBuilder.DropTable(
                name: "companyDetails");
        }
    }
}
