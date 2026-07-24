import { test,expect } from "@playwright/test";

test.skip('test1', async () => {

console.log("This is test1....")
})


test.fail('test2', async () => {
    console.log("This is test2....")
       expect(10).toBe(23);

})

test.fixme('test3', async () => {

console.log("This is test3....")
})

test('test4', async () => {

test.slow()
console.log("This is test4....")
})

test('test5', async () => {

console.log("This is test5....")
})

