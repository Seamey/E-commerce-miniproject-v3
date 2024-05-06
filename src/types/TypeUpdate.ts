type ProductsUpdate ={
    readonly id: number,
    seller: string,
    name: string,
    category:{
      name:string,
    },
    desc: string,
    image: string,
    price: number,
    quantity: number,
}
export default ProductsUpdate