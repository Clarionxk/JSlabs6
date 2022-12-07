function Box(_width,_hight,_books) {
    this.width= _width;
    this.hight= _hight;
    this.books= _books;
}
function Book(_id,_name,_writer_name,_numOfPages) {
    this.id=_id;
    this.uname=_name;
    this.writerName=_writer_name;
    this.NumOfPages=_numOfPages;
}
Box.prototype.calcArea =function() {
    let x= this.width*this.hight
}

let b1 = new Book(1,"reda","mohamed",20)
let b2 = new Book(1,"rio","adel",30)
let b3 = new Book(1,"zizo","mahmoud",50)

let sumPages= new Box(100,120,[b1,b2,b3])
Box.prototype.valueOf = function (params) {
    let num=0;
    for (let i = 0; i <this.books.length; i++) {
        num += this.books[i].NumOfPages;

    }
    return num;
}
console.log(sumPages.valueOf())