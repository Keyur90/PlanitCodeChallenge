describe("TestCases 3 & 4 for Shop page", function () {
  beforeEach(function () {
    cy.visit("/");
    cy.fixture("testData").then(function (testdata) {
      this.testdata = testdata;
    });
  });

  it("Verify items in the cart", function () {
    cy.contains("Shop").click();
    cy.buyProduct(this.testdata.product4, this.testdata.quantity1);
    cy.buyProduct(this.testdata.product2, this.testdata.quantity4);
    cy.contains("Cart").click();
    cy.contains("td", this.testdata.product4).should("be.visible");
    cy.getQuantity(this.testdata.product4, this.testdata.quantity1);
    cy.contains("td", this.testdata.product2).should("be.visible");
    cy.getQuantity(this.testdata.product2, this.testdata.quantity4);
  });

  it("Verify each products with the sub total in Cart", function () {
    cy.contains("Shop").click();
    cy.buyProduct(this.testdata.product1, this.testdata.quantity1);
    cy.buyProduct(this.testdata.product2, this.testdata.quantity2);
    cy.buyProduct(this.testdata.product3, this.testdata.quantity3);
    cy.contains("Cart").click();
    cy.get("table >tbody").each((el) => {
      var rows = el.find("tr");
      console.log(el.find("td"));
      for (var i = 0, row; (row = rows[i]); i++) {
        var ele = rows[i].cells[0].innerText;
        expect(ele.trim()).to.deep.eq(this.testdata.products[i]);
      }
      cy.get("table >tbody").each((el) => {
        var rows = el.find("tr");
        for (var i = 0, row; (row = rows[i]); i++) {
          var ele = rows[i].cells[1].innerText;
          expect(ele).to.deep.eq("$" + this.testdata.price[i]);
        }
        cy.get("table >tbody").each((el) => {
          var rows = el.find("tr");
          for (var i = 0, row; (row = rows[i]); i++) {
            var ele = rows[i].cells[3].innerText;
            expect(ele).to.deep.eq("$" + this.testdata.subTotal[i]);
          }
        });
      });
    });
  });
});
