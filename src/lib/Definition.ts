export type CartProductType = {
    id : number;
    name:string;
    category:string,
    image:string,
    desc:string,
    price:number
	onClick?: () => void;
};
export type ProductType = {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
    desc:string
};