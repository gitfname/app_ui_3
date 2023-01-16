
function random(params = {}) {
    // let res = undefined
    // // res = random number
    // if(prams.exlude && res == prams.exlude) {
    //     // res = random number
    //     while(res == prams.exlude) {
    //         // res = random number
    //     }
    // }
    // return res

    let res = undefined
    const possibleValues = []
    if(params.exclude) {
        const max = params.includeMax ? (params.max + 1) : params.max
        for(let i = 0; i<max; i++) {
            if(i == params.exclude) continue
            possibleValues.push(i)
        }
    }
    // assign randomly selcted item from possibleValues to res
    return res
}

export async function Generate(jsonTemplate, data = {}) {

}