class Locator{
    dynamicCategory(Category){
        let element = Category.split(' ').join('-').toLowerCase()
        let path = '[data-testid="tagOption-'+element+'"]'
        return path
    }
    staticCategory(data){
        let path = '[data-testid="'+data+'"]'
        return path
    }
}

module.exports=Locator;