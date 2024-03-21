# reduce yield

const result = reduceMap([...], function* (item) {

yield [item.id, item]
})

const result = reduceArray([...], function* (item) {

yield item
})

