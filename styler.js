const library = {
    p5: { padding: '5px' },
    p10: { padding: '10px' },
    p15: { padding: '15px' },
    mt5: { marginTop: '5px' },
    ml5: { marginLeft: '5px' }
}

const library2 = {
    p: 'padding',
    m: 'margin',
    mt: 'marginTop',
    ml: 'marginLeft'
}

function styler(...args) {
    return args.reduce((style, arg) => {
        const key = Object.keys(library[arg])
        return ({ ...style, [key]: library[arg][key]})
    }, {})
}

//console.log(styler('p5', 'mt5', 'ml5'))


function styler2(...props) {
    return props.reduce((style, prop) => {
        prop = prop.match(/[a-zA-Z]+|[0-9]+/g)
        return ({ ...style, [library2[prop[0]]]: prop[1] + 'px'})
    }, {})
}


console.log(styler2('p5', 'mt5', 'ml5'))