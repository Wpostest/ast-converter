const atributesToString = arr =>{
    const resoult = arr.reduce((acc, value, index, a) => {
        const attr = `${value.name}='${value.value}'`;

        return acc + (a.length - 1 === index ? attr : attr + ' ');
    }, "");

    return resoult;
}

const childrensToString = arr =>{
    const resoult = arr.reduce((acc, value, index, a) => {
        const element = createNodeElement(value);

        return acc + element;
    }, "");

    return resoult;
}

const createNodeElement = o =>{
    if(o.nodeType === 'element'){
        const tagName = o.tagName;
        const attributes = o.attributes ? atributesToString(o.attributes) : '';
        const childrens = o.children ? childrensToString(o.children) : '';

        return `<${tagName} ${attributes}>${childrens}</${tagName}>`;
    }
    else if(o.nodeType === 'text'){
        return o.value;
    }
    else{
        throw new Error('Nieznany nodeType');
    }
}

const convertAstToHtmlString = o =>{
    if(typeof(o.ast) != 'object' && o.ast){
        throw new Error('Podany argument nie jest poprawnym obiektem');
    }

    return createNodeElement(o.ast);
}


export {convertAstToHtmlString};

