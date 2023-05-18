import LoginPage from "../../pageObjects/Login.Page";
import HomePage from "../../pageObjects/Home.Page";

describe("Saucedemo", () => {
    beforeEach(() => {
        LoginPage.visit();
    });

    it("1. Login Scenario - Positive case", () => {
        LoginPage.usernameField.type("standard_user");
        LoginPage.passwordField.type("secret_sauce");
        LoginPage.loginButton.should("be.visible");
        LoginPage.loginButton.click();
        LoginPage.loginButton.should("not.exist");
    });

    it("2.Login scenario - Negative case", () => {
        LoginPage.usernameField.type("standard_user");
        LoginPage.passwordField.type("xxxx");
        LoginPage.loginButton.click();
        LoginPage.errorMessage.should("have.text", "Epic sadface: Username and password do not match any user in this service");
    });

    it("3. Logout Scenario", () => {
        LoginPage.usernameField.type("standard_user");
        LoginPage.passwordField.type("secret_sauce");
        LoginPage.loginButton.click();
        HomePage.stackIcon.click();
        HomePage.sideBar.invoke("attr", "aria-hidden").should("eq", "false");
        HomePage.logoutButton.click();
        LoginPage.loginButton.should("be.visible");
    });

    it("4. Add items to cart, validate badge", () =>{
        LoginPage.logIntoPage("standard_user", "secret_sauce");
        HomePage.addToCart1.click();
        HomePage.addToCart2.click();
        HomePage.addToCart3.click();
        HomePage.cartBadge.should("have.text", 3);
    })

    it("5. Add item, remove item", () => {
        LoginPage.logIntoPage("standard_user", "secret_sauce");
        HomePage.addToCart1.click();
        HomePage.cartBadge.should("have.text", 1);
        HomePage.removeFromCart1.click();
        HomePage.cartBadge.should("not.exist");
    })

    it("6. Open item, validate name", () =>{
        LoginPage.logIntoPage("standard_user", "secret_sauce");
        HomePage.itemNames.contains("Sauce Labs Backpack").click();
        //HomePage.openBackpack.click();
        HomePage.backPackName.should("have.text", "Sauce Labs Backpack");
    })

    it.only("7. Buy items", () => {
        LoginPage.logIntoPage("standard_user", "secret_sauce");
        HomePage.addToCart1.click();
        HomePage.addToCart2.click();
        HomePage.cartBadge.should("have.text", 2);
        HomePage.openCart.click();
        HomePage.itemNames.contains("Sauce Labs Backpack");
        HomePage.itemNames.contains("Sauce Labs Bolt T-Shirt");
        HomePage.itemsInCart.its("length").should("eq", 2);
        HomePage.checkoutButton.click();
        HomePage.checkoutFirstName.type("John");
        HomePage.checkoutLastName.type("Doe");
        HomePage.checkoutPostalCode.type("LV-4220");
        HomePage.checkoutContinue.click();
        HomePage.totalOrder.should("have.text", "Total: $49.66");
        HomePage.checkoutFinish.click();
        HomePage.completeCheckout.should("have.text", "Thank you for your order!");
    })
});