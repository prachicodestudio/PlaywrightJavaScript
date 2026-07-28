class shoppingCartPage
{
    constructor(page)
    {
        this.cartItem = page.locator(".inventory_item_name")
        this.continueShoppingButton = page.locator('[data-test="continue-shopping"]')
        this.checkOutButton = page.locator('[data-test="checkout"]')
    }

    async getProductName()
    {
    return await this.cartItem.textContent();
    }

     async continueShopping() {
        await this.continueShoppingButton.click();
    }

    async checkout() {
        await this.checkoutButton.click();
    }

}

module.exports = shoppingCartPage