"use client";

import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { BsCart4 } from "react-icons/bs";
import { useAppDispatch } from "../../redux/hooks";
import { CartProductType } from "@/lib/Definition";
import { useRouter } from "next/navigation";
import { increment } from "../../redux/features/counter/counterSlice";
import { addToCart } from "../../redux/features/carts/cartSlice";

export default function CardProduct({
	id,
	name,
	category,
	image,
	desc,
	price,
	onClick
}: CartProductType) {
	
	const dispatch = useAppDispatch();
	const router = useRouter();

	const handleAddToCart = () => {
		dispatch(increment());
		dispatch(addToCart({ id, name, category, image,desc, price }));
	}

	return (
		<Card shadow="sm" key={id}>
			<CardBody className="overflow-visible p-0">


				<Image
					shadow="sm"
					radius="md"
					width="100%"
					alt={name}
					className="w-full mx-auto object-cover h-72 "
					src={image}

				/>
				<div className=" m-2 font-medium text-xl">{name}</div >
			</CardBody>
			<CardFooter>
				<div className="w-full flex items-center justify-between">
					<div className="text-xl">$ {price}</div>
					<div className="flex items-center">
						<Button className="bg-white text-2xl " onClick={handleAddToCart}>
							<BsCart4 />
						</Button>
						<Button className="bg-yellow-300" onClick={() => router.push(`/products/${id}`)} >
							Detail
						</Button>
					</div>

				</div>
			</CardFooter>
		</Card>
	);
}
