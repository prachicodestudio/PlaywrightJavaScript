import {test} from '@playwright/test'

//---------------- File Level Hooks ----------------//

test.beforeAll(async () => {
    console.log("File Level beforeAll");
});

test.beforeEach(async () => {
    console.log("File Level beforeEach");
});

test.afterEach(async () => {
    console.log("File Level afterEach");
});

test.afterAll(async () => {
    console.log("File Level afterAll");
});


test.describe("Login Test", ()=>{

//Group level Hooks/////////////////////
  test.beforeAll(async () => {
        console.log("Login Group beforeAll");
    });

    test.beforeEach(async () => {
        console.log("Login Group beforeEach");
    });

    test.afterEach(async () => {
        console.log("Login Group afterEach");
    });

    test.afterAll(async () => {
        console.log("Login Group afterAll");
    });

 test("valid login", async ({page})=>{
    console.log("Valid login test executed.")
    })

    test("Invalid login", async ({page})=>{
    console.log("Invalid login test executed.")
    })
})

test.describe("Product Test", ()=>{


 test.beforeAll(async () => {
        console.log("Product Group beforeAll");
    });

    test.beforeEach(async () => {
        console.log("Product Group beforeEach");
    });

    test.afterEach(async () => {
        console.log("Product Group afterEach");
    });

    test.afterAll(async () => {
        console.log("Product Group afterAll");
    });

    test("Verify product page", async ({page})=>{
    console.log("Verify product page test executed.")
    })

    test("Add product", async ({page})=>{
    console.log("Add product test executed.")
    })

    test("Remove product", async ({page})=>{
    console.log("Remove product test executed.")
    })
})

test.describe("Checkout Test", ()=>{

 test.beforeAll(async () => {
        console.log("checkout Group beforeAll");
    });

    test.beforeEach(async () => {
        console.log("Checkout Group beforeEach");
    });

    test.afterEach(async () => {
        console.log("Checkout Group afterEach");
    });

    test.afterAll(async () => {
        console.log("Checkout Group afterAll");
    });

test("Complete order", async ({page})=>{
    console.log("Complete order test executed.")
    })

    test("Cancel Test", async ({page})=>{
    console.log("Cancel test executed.")
    })
})
