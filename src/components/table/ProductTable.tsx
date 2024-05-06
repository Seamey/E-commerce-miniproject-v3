"use client";
import LoadingComponent from "@/app/loading";
import { Button, Input } from "@nextui-org/react";
import React from "react";
import { useState, useEffect } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { IoEllipsisHorizontalOutline } from "react-icons/io5";
import Image from "next/image";
import { Products } from "@/types/product";
import ProductsUpdate from "@/types/TypeUpdate";
import { useRouter } from 'next/navigation';
import { baseApi } from "@/lib/constants/BaseURL";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react"; 

import Link from "next/link";

type Props = {
	params:{
		id:number
	},
	
}
const customStyles = {
	rows: {
		style: {
      // minWidth: "1000px",
			minHeight: '72px', // override the row height
		},
	},
	headCells: {
		style: {
			paddingLeft: '8px', // override the cell padding for head cells
			paddingRight: '8px',
		},
	},
	cells: {
		style: {
			paddingLeft: '8px', // override the cell padding for data cells
			paddingRight: '8px',
		},
	},
};

const ProductTable = () => {
  const router = useRouter();

  const [products,setProducts]=useState<Products[]>([])
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState([]);
  const [openModal,setOpenModal]=useState(false)
  const[openModalEdit,setModalProductEdit]=useState(false)
  const[productEdit,setProductEdit]=useState<ProductsUpdate>()
  
  const[buttonDelete,setButtonDelete]=useState(false)
  const[productdetail,setProductDetail]=useState<Products>()
 

  useEffect(
    () =>{
        fetch(`${baseApi}products/?page=1&page_size=100`)
      .then(res=>res.json())
      .then((data)=>
      { const result=data.results
        setProducts(result)
        const isSeller = result.some((pro: { seller: string; }) => pro.seller === 'Seamey Channtha');
        setButtonDelete(isSeller)
        
      })
      .catch(err=>console.log(err))
   
    }
  ,[])
  const ProductDetail=(product:Products)=>{
    setProductDetail(product)
    setOpenModal(true)
  }
  

  const EditComponent=(product:ProductsUpdate)=>{
    
    const id=product.id
    fetch(`${baseApi}products/${id}/`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json', 
        //  'Authorization':`Bearer ${ACCESS_TOKEN}`
      }})
      setProducts(products.filter((product)=>product.id!==id))
    setProductEdit(product)
    setModalProductEdit(true)
    
   }


// fetch date for get id product
const handleEdit=(id:number)=>{
  
  async function fetchData() {
    const data = await fetch(`${baseApi}products/?page=1&page_size=100`);
    const response = await data.json();
    setProducts(response.results);
    setFilter(response.results);
  }
}
const handleDelete=(product:Products)=>{

  const id=product.id
  fetch(`${baseApi}products/${id}/`,{
    method:'DELETE',
    headers:{
      'Content-Type':'application/json', 
    //    'Authorization':`Bearer ${ACCESS_TOKEN}`
    }})
    setProducts(products.filter((product)=>product.id!==id))
}
  const columnsData: TableColumn<Products>[] = [
    {
      name: "ID",
      selector: (row):any => <div className=" font-bold text-blue-600">{row.id}</div>,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Seller",
      selector: (row) => row.seller,
      sortable: true,
    },
    {
      name: "Name",
      selector:(row) =>row.name,
      sortable: true,
    },
    {
      name: "Image",
      selector: (row):any => (
        <Image  src={row.image} width={70} height={70} alt={row.name} />
      ),
    },
    {
      name: "Action",
      cell: (row) => {
        return (
          <div>
            <Dropdown>
              <DropdownTrigger>
                <button>
                  <IoEllipsisHorizontalOutline />
                </button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem
                  key="detail"
                  onClick={()=>{
                    
                    router.push(`products/${row.id}`)}
                  }
                >
                  View Detail
                </DropdownItem>

                <DropdownItem key="edit" 
                  onClick={() => {
                    if (row.seller === 'Seamey Channtha') {
                      router.push(`dashboard/update/${row.id}`);
                    }
                  }}
                  style={{ display: row.seller === 'Seamey Channtha' ? 'block' : 'none' }}
               >Edit</DropdownItem>
                <DropdownItem
                  key="delete" onClick={() => {
                    if (row.seller === 'Seamey Channtha') {
                      handleDelete(row)
                    }
                  }}
                  style={{ display: row.seller === 'Seamey Channtha' ? 'block' : 'none' }}
               
                  className="text-danger"
                  color="danger"
                >
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      },
    },
  ];


  useEffect(() => {
    async function fetchData() {
      const data = await fetch(`${baseApi}products/?page=1&page_size=100`);
      const response = await data.json();
      setProducts(response.results);
      setFilter(response.results);
    }
    fetchData();
    setIsLoading(false);
  }, []);


  const paginationComponentOptions = {
    rowsPerPageText: "ជួរដេកក្នុងមួយទំព័រ",
    rangeSeparatorText: "នៃ",
    selectAllRowsItem: true,
    selectAllRowsItemText: "ទាំងអស់",
  };

  return (
    <div className="w-11/12 mx-auto" >
      <DataTable
        progressPending={isLoading}
        columns={columnsData}
        fixedHeader={true}
        fixedHeaderScrollHeight="500px"
        pagination
        paginationComponentOptions={paginationComponentOptions}
        onSelectedRowsChange={() => console.log("row selected")}
        progressComponent={<LoadingComponent />}
        customStyles={customStyles}
        data={filter}
        actions={
          <Button as={Link} size="sm" color="primary"  href="/dashboard/createNew" variant="flat" >
            Create New
          </Button>
       
        }
      />
    </div>
  );
};

export default ProductTable;