import BasePage from "./Base.Page";

class HomePage extends BasePage {
    static get url(){
        return "/inventory.html";
    }

    static get stackIcon(){
        return cy.get("#react-burger-menu-btn");
    }

    static get sideBar(){
        return cy.get(".bm-menu-wrap");
    }
    
    static get logoutButton(){
        return cy.get("#logout_sidebar_link");
    }

    static get addToCart1(){
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]');
    }

    static get addToCart2(){
        return cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
    }

    static get addToCart3(){
        return cy.get('[data-test="add-to-cart-sauce-labs-onesie"]');
    }

    static get cartBadge(){
        return cy.get(".shopping_cart_badge");
    }

    static get removeFromCart1(){
        return cy.get('[data-test="remove-sauce-labs-backpack"]');
    }

    static get openBackpack(){
        return cy.contains('.inventory_item_name', 'Sauce Labs Backpack');
    }

    static get backPackName(){
        return cy.get(".inventory_details_name.large_size");
    }

    static get itemNames(){
        return cy.get(".inventory_item_name");
    }

    static get openCart(){
        return cy.get(".shopping_cart_link");
    }

    static get checkoutButton(){
        return cy.get('[data-test="checkout"]');
    }

    static get itemsInCart(){
        return cy.get(".cart_item");
    }
    
    static get checkoutFirstName(){
        return cy.get('[data-test="firstName"]');
    }

    static get checkoutLastName(){
        return cy.get('[data-test="lastName"]');
    }

    static get checkoutPostalCode(){
        return cy.get('[data-test="postalCode"]');
    }

    static get checkoutContinue(){
        return cy.get('[data-test="continue"]');
    }

    static get totalOrder(){
        return cy.get(".summary_info_label.summary_total_label");
    }

    static get checkoutFinish(){
        return cy.get('[data-test="finish"]');
    }

    static get completeCheckout(){
        return cy.get(".complete-header");
    }
}

export default HomePage;