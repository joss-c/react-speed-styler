const library = {
    p: 'padding',
    m: 'margin',
    mt: 'marginTop',
    ml: 'marginLeft'
}

function styler(...props) {
    return props.reduce((style, prop) => {
        prop = prop.match(/[a-zA-Z]+|[0-9]+/g)
        return ({ ...style, [library[prop[0]]]: prop[1] + 'px'})
    }, {})
}


console.log(styler('p5', 'mt5', 'ml5'))