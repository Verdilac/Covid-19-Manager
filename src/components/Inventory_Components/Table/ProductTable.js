import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import {
    Modal,
    Segment,
    Button,
    Form,
    Table
} from "semantic-ui-react";
import { TablePagination, TableRow, TableCell } from '@material-ui/core';
import firebase from "../../../Firebase";

import '../../../App.css'


const ProductTable = () => {


    // ---------- Configurations START ----------

    // Update
    const [uProductName, setuProductName] = useState("");
    const [uProductDescription, setuProductDescription] = useState("");
    const [uProductStatus, setuProductStatus] = useState("");
    const [uProductExpiration, setuProductExpiration] = useState("");
    const [uProductQuantity, setuProductQuantity] = useState("");

    const [productId, setProductId] = useState(""); // used when updating or deleting

    // Storing product info
    const [productData, setProductData] = useState([]);


    // Creating DB in firebase 
    useEffect(() => {
        const firestore = firebase.database().ref("/ProductInfo");
        firestore.on("value", (response) => {
            const data = response.val();
            let productInfo = [];
            for (let id in data) {
                productInfo.push({
                    id: id,
                    Product_Name: data[id].Product_Name,
                    Product_Desc: data[id].Product_Desc,
                    Product_Status: data[id].Product_Status,
                    Product_Expire: data[id].Product_Expire,
                    Product_Qty: data[id].Product_Qty
                });
            }
            setProductData(productInfo);
        });
    }, []);


    // ---------- Update Form Button Handling START ----------

    // Updating user information once the button is clicked in update form
    const handleUpdateProduct = () => {
        const firestore = firebase.database().ref("/ProductInfo").child(productId); // for a particular productId
        firestore.update({

            Product_Name: uProductName,
            Product_Desc: uProductDescription,
            Product_Status: uProductStatus.toUpperCase(),
            Product_Expire: uProductExpiration,
            Product_Qty: uProductQuantity,
        });

        // After inserting form fields to be empty
        setuProductName("");
        setuProductDescription("");
        setuProductStatus("");
        setuProductExpiration("");
        setuProductQuantity("");

    };

    // ---------- Update Form Button Handling END ----------


    // ---------- Table Update & Delete Button Handling START ----------

    // Update Button (Table)
    // Locate and display data from db into update form
    const handleUpdateClick = (data) => {
        setuProductName(data.Product_Name);
        setuProductDescription(data.Product_Desc);
        setuProductStatus(data.Product_Status);
        setuProductExpiration(data.Product_Expire);
        setuProductQuantity(data.Product_Qty);
        setProductId(data.id);
    };

    // Delete Button (Table)
    // Delete User
    const handleDeleteClick = (id) => {
        const firestore = firebase.database().ref("/ProductInfo").child(id);
        firestore.remove();
    };

    // ---------- Table Update & Delete Button Handling END ----------

    const [open, setOpen] = React.useState(false)  // Opening and closing model update form


    // ---------- Table Pagination START ----------

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(6);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 6));
        setPage(0);
    };

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, productData.length - page * rowsPerPage);

    // ---------- Table Pagination END ----------


    // ------------ Form Validation START ------------

    const [productNameError, setProductNameError] = useState({});
    const [productDescriptionError, setProductDescriptionError] = useState({});
    const [productStatusError, setProductStatusError] = useState({});
    const [productExpirationError, setProductExpirationError] = useState({});
    const [productQuantityError, setProductQuantityError] = useState({});


    const handleFormInput = () => {

        // Return boolean to check if there is any errors within the form
        const isValid = handleFormValidations();

        if (isValid) {
            handleUpdateProduct();
            setOpen(false);
        }
    }

    const handleFormValidations = () => {

        // Initializing empty objects
        const productNameError = {};
        const productDescriptionError = {};
        const productStatusError = {};
        const productExpirationError = {};
        const productQuantityError = {};

        let isValid = true;  // by default 

        // Validations

        // 1) Product Name Validations 
        if (uProductName.trim().length == 0) {
            productNameError.productNameNone = "The product name field cannot be empty";
            isValid = false;
        }

        if (uProductName.trim().length < 3 && uProductName.trim().length > 0) {
            productNameError.productNameShort = "The product name is too short";
            isValid = false;
        }

        if (uProductName.trim().length > 15) {
            productNameError.productNameLong = "The product name is too long";
            isValid = false;
        }

        // 2) Product Decription Validations 
        if (uProductDescription.trim().length == 0) {
            productDescriptionError.productDescNone = "The product description field cannot be empty";
            isValid = false;
        }

        if (uProductDescription.trim().length > 30) {
            productDescriptionError.productDescLong = "The product description is too long";
            isValid = false;
        }


        // 3) Product Status Validations 
        if (uProductStatus.trim().length == 0) {
            productStatusError.productStatusNone = "The product status field cannot be empty";
            isValid = false;
        }

        if (!uProductStatus.trim().length == 0) {
            let status_words = ['ORDERED', 'INSTOCK', 'UNAVAILABLE']

            if (!status_words.some(word => uProductStatus.toUpperCase().startsWith(word))) {
                productStatusError.productStatusNames = "Hint: Product Status should be either Ordered, InStock or UnAvailable";
                isValid = false;
            }
        }



        // 4) Product Expiration Date Validations
        if (uProductExpiration.trim().length == 0) {
            productExpirationError.productExpirationNone = "An Expiration Date must be specified";
            isValid = false;
        }

        // 5) Product Quantity Validations
        if (uProductQuantity.trim().length == 0) {
            productQuantityError.productQuantityNone = "The product quantity field cannot be empty";
            isValid = false;
        }

        if (!uProductQuantity.trim().length == 0) {

            // Syntax -> Number.isInteger(value)
            if (!Number.isInteger(Number(uProductQuantity.trim()))) {
                productQuantityError.productQuantityNone = "The product quantity should be an integer value";
                isValid = false;
            }

            if (Number(uProductQuantity.trim()) == 0 || Number(uProductQuantity.trim()) < 0) {
                productQuantityError.productQuantityZeroOrNegative = "Hint: Quanity should be greater than zero";
                isValid = false;
            }

            if (Number(uProductQuantity.trim()) > 1000) {
                productQuantityError.productQuantityZeroOrNegative = "The quantity is too large";
                isValid = false;
            }

        }


        setProductNameError(productNameError);
        setProductDescriptionError(productDescriptionError);
        setProductStatusError(productStatusError);
        setProductExpirationError(productExpirationError);
        setProductQuantityError(productQuantityError);
        return isValid;

    }


    // ------------ Form Validation END ------------




    // ---------- Configurations END ----------


    return (

        <div>

            {/* --- Product Table START---- */}
            
            <Segment className="I_product_table_segment">

                {/* Creating table with content from db */}
                <Table fixed singleLine className="I_product_table">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell className="I_product_table_header_cell" > Product Name </Table.HeaderCell>
                            <Table.HeaderCell className="I_product_table_header_cell" > Description </Table.HeaderCell>
                            <Table.HeaderCell className="I_product_table_header_cell" > Status </Table.HeaderCell>
                            <Table.HeaderCell className="I_product_table_header_cell" > Expiration Date </Table.HeaderCell>
                            <Table.HeaderCell className="I_product_table_header_cell" > Quantity </Table.HeaderCell>
                            <Table.HeaderCell className="I_product_table_header_cell" > Actions </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {productData
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((data, index) => {
                            return (
                                <Table.Body>
                                    <Table.Row className="I_product_table_body_row">
                                        <Table.Cell>{data.Product_Name}</Table.Cell>
                                        <Table.Cell>{data.Product_Desc}</Table.Cell>
                                        <Table.Cell>{data.Product_Status}</Table.Cell>
                                        <Table.Cell>{data.Product_Expire}</Table.Cell>
                                        <Table.Cell>{data.Product_Qty}</Table.Cell>
                                        <Table.Cell>

                                            {/* ---------- Modal Update Form START ---------- */}

                                            <Modal
                                                onClose={() => setOpen(false)}
                                                onOpen={() => setOpen(true)}
                                                open={open}
                                                trigger={
                                                    <Button color="blue" onClick={() => {
                                                        handleUpdateClick(data);
                                                    }}
                                                    >
                                                        U
                                                    </Button>}
                                            >

                                                <Modal.Content image className="I_update_modal_content">
                                                    <Modal.Description>

                                                        {/* ---------- Update Form START --------- */}

                                                        <Form className="I_in_inset_form">
                                                            <h1 className="I_update_form_title">Update Product Form</h1>
                                                            <Form.Field>
                                                                <label className="I_in_update_form_label">Edit Product Name</label>
                                                                <input
                                                                    placeholder="Enter Product Name"
                                                                    focus
                                                                    value={uProductName}
                                                                    onChange={(e) => {
                                                                        setuProductName(e.target.value);
                                                                    }}
                                                                    type="text"
                                                                    className="I_in_inset_form_label"
                                                                />
                                                                {Object.keys(productNameError).map((key) => {
                                                                    return <div style={{ color: "red", paddingTop: "10px" }}>{productNameError[key]}</div>
                                                                })}
                                                            </Form.Field>
                                                            <Form.Field>
                                                                <label className="I_in_update_form_label">Edit Product Description</label>
                                                                <input
                                                                    placeholder="Enter Description"
                                                                    focus
                                                                    value={uProductDescription}
                                                                    onChange={(e) => {
                                                                        setuProductDescription(e.target.value);
                                                                    }}
                                                                    type="text"
                                                                    className="I_in_inset_form_label"
                                                                />
                                                                {Object.keys(productDescriptionError).map((key) => {
                                                                    return <div style={{ color: "red", paddingTop: "10px" }}>{productDescriptionError[key]}</div>
                                                                })}
                                                            </Form.Field>
                                                            <Form.Field>
                                                                <label className="I_in_update_form_label" >Edit Product Status</label>
                                                                <input
                                                                    placeholder="Enter Status"
                                                                    focus
                                                                    value={uProductStatus}
                                                                    onChange={(e) => {
                                                                        setuProductStatus(e.target.value);
                                                                    }}
                                                                    type="text"
                                                                    className="I_in_inset_form_label"
                                                                />
                                                                {Object.keys(productStatusError).map((key) => {
                                                                    return <div style={{ color: "red", paddingTop: "10px" }}>{productStatusError[key]}</div>
                                                                })}
                                                            </Form.Field>
                                                            <Form.Field>
                                                                <label className="I_in_update_form_label" >Edit Expiration Date</label>
                                                                <input
                                                                    placeholder="Enter the Expiration Date"
                                                                    focus
                                                                    value={uProductExpiration}
                                                                    onChange={(e) => {
                                                                        setuProductExpiration(e.target.value);
                                                                    }}
                                                                    type="date"
                                                                    className="I_in_inset_form_label"
                                                                />
                                                                {Object.keys(productExpirationError).map((key) => {
                                                                    return <div style={{ color: "red", paddingTop: "10px" }}>{productExpirationError[key]}</div>
                                                                })}
                                                            </Form.Field>
                                                            <Form.Field>
                                                                <label className="I_in_update_form_label" >Edit Product Quantity</label>
                                                                <input
                                                                    placeholder="Enter the Quantity"
                                                                    focus
                                                                    value={uProductQuantity}
                                                                    onChange={(e) => {
                                                                        setuProductQuantity(e.target.value);
                                                                    }}
                                                                    type="number"
                                                                    className="I_in_inset_form_label"
                                                                />
                                                                {Object.keys(productQuantityError).map((key) => {
                                                                    return <div style={{ color: "red", paddingTop: "10px" }}>{productQuantityError[key]}</div>
                                                                })}
                                                            </Form.Field>


                                                            <Button
                                                                type="submit"
                                                                onClick={() => {
                                                                    handleFormInput();
                                                                }}
                                                                primary
                                                                className="ui button I_in_inset_form_add_btn"
                                                            >
                                                                {""}
                                                                {/* <Icon name="cog"></Icon> */}
                                                                Update
                                                            </Button>
                                                        </Form>

                                                        {/* ---------- Update Form END ----------- */}



                                                    </Modal.Description>
                                                </Modal.Content>
                                            </Modal>

                                            {/* ---------- Modal Update Form END ---------- */}

                                            <Button
                                                color="red"
                                                onClick={() => {
                                                    handleDeleteClick(data.id);
                                                }}
                                            >
                                                {/* <Icon name="delete"></Icon> */}
                                                D
                                            </Button>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            );
                        })}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </Table>
                <TablePagination
                    className="I_product_table_pagination"
                    component="div"
                    count={productData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
                {/* ----- Table END ----- */}
            </Segment>


            {/* --- Product Table END---- */}
        
            {/* <p>{productData.length}</p> */}
        </div>

    )
}

export default ProductTable;




