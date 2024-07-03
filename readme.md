# reduce yield

const result = reduceMap([...], function* (item) {

yield [item.id, item]
})

const result = reduceArray([...], function* (item) {

yield item
})

## better idea?

reduce((push, item) => {

if(false) {
return
}

if(thing) {
return false
}

push(item)

if(other) {
push(item)
}

} , [])

--

reduce((set, item) => {

if(false) {
return // allow early exit without return type
}

if(thing) {
return false
}

push('y', item)

if(other) {
set('x', item)
}

} , {})
