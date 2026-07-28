class inventoryPage{

constructor(page)
{
    //store the playwright page object
    this.page = page

    //Define page locators
    this.addToCartButton = page.locator("#add-to-cart-sauce-labs-backpack")
    this.shoppingCart = page.locator(".shopping_cart_link")
    this.removeButton = page.locator("#remove-sauce-labs-backpack")


    }

    async addProductToCart()
    {
     this.addToCartButton.click();
    }

    async openCart()
    {
        await this.shoppingCart.click()
    }

    async removeProduct()
    {
     await this.removeButton.click()
    }
}

module.exports = inventoryPage