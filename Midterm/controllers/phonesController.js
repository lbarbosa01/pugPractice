let inventory = [
    { 'id': 0, sale: 0, 'manufact': 'None', 'item': 'None', 'descr': 'None', 'avail': 0, 'price': 0},
    { 'id': 100, sale: 0, 'manufact': 'Samsung', 'item': 'Galaxy S22', 'descr': 'The Latest Phone', 'avail': 22, 'price': 1399.99, "colors" : ['sliver'] },
    { 'id': 101, sale: 10, 'manufact': 'Samsung', 'item': 'Galaxy S21', 'descr' : 'Recently refurbished like new', 'avail': 5, 'price': 699.99, "colors" : ["black", "silver"] },
    { 'id': 102, sale: 0, 'manufact': 'Samsung', 'item': 'Galaxy S20', 'descr' : 'Great phone works well', 'avail': 3, 'price': 399.99, 'colors' : ['silver', 'blue'] },
    { 'id': 103, sale: 0, 'manufact': 'Apple', 'item': 'iPhone 13', 'descr' : 'New and Shiny, Nothing better', 'avail': 13, 'price': 1299.99, 'colors' : ['red, green', 'mystic gold'] },
    { 'id': 104, sale: 15, 'manufact': 'Apple', 'item': 'iPhone 12', 'descr' : 'Refurbished but perfect', 'avail': 13, 'price': 899.99, 'colors' :[ "super silver", 'mystic gold' ]},
    { 'id': 105, sale: 10, 'manufact': 'Apple', 'item': 'iPhone 11', 'descr' : 'Works great!', 'avail': 12, 'price': 599.99, 'colors' :[ "white", 'mystic gold' ] }];

exports.getPhones = (req,res, next) => {
    res.render('showPhones', {
        inventory: inventory,
        pageTitle: "Current Phone Inventory",
        from: 'showPhones'
    })
}

exports.showHome = (req, res, next ) => {
    res.render( 'home',
        {title:"Welcome to Ted's Technology",
            subTitle: "Click Button to see our inventory",
            from: 'home'
        });
}

exports.getPhonesDetails  = (req, res, next ) => {
    let id = req.params.id;
    for( let i=1; i<inventory.length; i++){
        if ( inventory[i].id == id ){
            res.render( 'showDetails', {
                pageTitle : "Cell Phone Details",
                id : id,
                manufact : inventory[i].manufact,
                item : inventory[i].item,
                price : inventory[i].price,
                avail : inventory[i].avail,
                descr : inventory[i].descr,
                colors : inventory[i].colors,
                sale : inventory[i].sale,
                from: 'showPhones',
            })
            return;
        }
    }
    res.render( 'notFound', {
        pageTitle : "Cell Phone Details",
        from: 'showPhones',
    })
}


