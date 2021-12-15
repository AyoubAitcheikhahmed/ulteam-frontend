import "./adminProductList.css";
import { useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts,deleteProducts } from "../../../redux/apiRequests";
import Navbar from '../adminComponents/AdminNavbar';

function AdminProductList() {

    
    const dispatch = useDispatch();
    const productsData = useSelector(state => state.product.products)
    console.log(productsData)
    useEffect(() => {
        getProducts(dispatch);
    }, [dispatch]);

    const handelDeleteAction = (id) => {
        deleteProducts(id,dispatch);
      };

    const columns = [
        { field: '_id', headerName: 'ID', width: 250 },
        { field: 'title', headerName: 'Game Title', width: 200 },
        { field: 'platform', headerName: 'Available On', width: 200 },
        { field: 'categories', headerName: 'Category', width: 200 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'action',
        headerName: 'Acion', 
        width: 130,
        renderCell:(params) => {
          return(
            <>
            <Link to={"/AdminSingleProductUpdate/"+params.row._id} className="tableActionButtons">
              <FaIcons.FaPencilRuler className="tableActionButtons"  />
            </Link>
            <Link to="" className="tableActionButtons">
            <AiIcons.AiFillDelete className="tableActionButtons" onClick={()=>handelDeleteAction(params.row._id)} />
            </Link>
            </>
          )
        }
      },
      ];

    return (
        <>
        <div  className="adminProductList">
            <Navbar />
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                    rows={productsData}
                    columns={columns}
                    pageSize={5}
                    getRowId={row=>row._id}
                    rowsPerPageOptions={[4]}
                    checkboxSelection
                    />
                </div>

        </div>
        </>
    )
}

export default AdminProductList
