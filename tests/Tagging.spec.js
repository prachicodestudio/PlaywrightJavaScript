import{test} from '@playwright/test'

test('Test1 @smoke', async () => {
console.log("This is test1...")

}
)

test('Test2 @smoke', async () => {
console.log("This is test2...")

}
)

test('Test3 @reg', async () => {
console.log("This is test3...")

}
)

test('Test4 @reg', async () => {
console.log("This is test4...")

}
)

test('Test5 @sanity', async () => {
console.log("This is test5...")

}
)

test('@smoke@reg Test6', async () => {
console.log("This is test6...")

}
)