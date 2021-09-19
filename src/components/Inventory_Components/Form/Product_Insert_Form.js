import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import {
    Button,
    Form
} from "semantic-ui-react";
import firebase from "../../../Firebase";

import '../Css/style.css'
// import "../../../App.css";



const InsertForm = () => {



    // ---------- Configurations START ----------

    // Intilizing states
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productStatus, setProductStatus] = useState("");
    const [productExpiration, setProductExpiration] = useState("");
    const [productQuantity, setProductQuantity] = useState("");


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


    // Add Button Function
    const handleAddProduct = () => {

        // ProductInfo is the name of the db we are creating in firebase
        const firestore = firebase.database().ref("/ProductInfo");

        let data = {
            // data obj passes values from the input fields of the form to the db fields
            Product_Name: productName,
            Product_Desc: productDescription,
            Product_Status: productStatus.toUpperCase(),
            Product_Expire: productExpiration,
            Product_Qty: productQuantity
        };

        firestore.push(data); // Sending the data to firebase db

        // After inserting form fields to be empty
        setProductName("");
        setProductDescription("");
        setProductStatus("");
        setProductExpiration("");
        setProductQuantity("");
    };



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
            handleAddProduct();
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
        if (productName.trim().length == 0) {
            productNameError.productNameNone = "The product name field cannot be empty";
            isValid = false;
        }

        if (productName.trim().length < 3 && productName.trim().length > 0) {
            productNameError.productNameShort = "The product name is too short";
            isValid = false;
        }

        if (productName.trim().length > 15) {
            productNameError.productNameLong = "The product name is too long";
            isValid = false;
        }

        // 2) Product Decription Validations 
        if (productDescription.trim().length == 0) {
            productDescriptionError.productDescNone = "The product description field cannot be empty";
            isValid = false;
        }

        if (productDescription.trim().length > 30) {
            productDescriptionError.productDescLong = "The product description is too long";
            isValid = false;
        }


        // 3) Product Status Validations 
        if (productStatus.trim().length == 0) {
            productStatusError.productStatusNone = "The product status field cannot be empty";
            isValid = false;
        }

        if (!productStatus.trim().length == 0) {
            let status_words = ['ORDERED', 'INSTOCK', 'UNAVAILABLE']

            if (!status_words.some(word => productStatus.toUpperCase().startsWith(word))) {
                productStatusError.productStatusNames = "Hint: Product Status should be either Ordered, InStock or UnAvailable";
                isValid = false;
            }
        }



        // 4) Product Expiration Date Validations
        if (productExpiration.trim().length == 0) {
            productExpirationError.productExpirationNone = "An Expiration Date must be specified";
            isValid = false;
        }

        // 5) Product Quantity Validations
        if (productQuantity.trim().length == 0) {
            productQuantityError.productQuantityNone = "The product quantity field cannot be empty";
            isValid = false;
        }

        if (!productQuantity.trim().length == 0) {

            // Syntax -> Number.isInteger(value)
            if (!Number.isInteger(Number(productQuantity.trim()))) {
                productQuantityError.productQuantityNone = "The product quantity should be an integer value";
                isValid = false;
            }

            if (Number(productQuantity.trim()) == 0 || Number(productQuantity.trim()) < 0) {
                productQuantityError.productQuantityZeroOrNegative = "Hint: Quanity should be greater than zero";
                isValid = false;
            }

            if (Number(productQuantity.trim()) > 1000) {
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


        <Form className="I_in_inset_form">
            <div className="I_inset_form_title">Product Details</div>
            <Form.Field>
                <label className="I_in_inset_form_label"></label>
                <input
                    placeholder="Enter Product Name"
                    focus
                    value={productName}
                    onChange={(e) => {
                        setProductName(e.target.value);
                    }}
                    type="text"
                    className="I_in_inset_form_label"
                />
                {Object.keys(productNameError).map((key) => {
                    return <div style={{ color: "red", paddingTop: "10px" }}>{productNameError[key]}</div>
                })}
            </Form.Field>
            <Form.Field>
                <label className="I_in_inset_form_label"></label>
                <input
                    placeholder="Enter Product Description"
                    focus
                    value={productDescription}
                    onChange={(e) => {
                        setProductDescription(e.target.value);
                    }}
                    type="text"
                    className="I_in_inset_form_label"
                />
                {Object.keys(productDescriptionError).map((key) => {
                    return <div style={{ color: "red", paddingTop: "10px" }}>{productDescriptionError[key]}</div>
                })}
            </Form.Field>
            <Form.Field>
                <label className="I_in_inset_form_label"></label>
                <input
                    placeholder="Enter Product Status"
                    focus
                    value={productStatus}
                    onChange={(e) => {
                        setProductStatus(e.target.value);
                    }}
                    type="text"
                    className="I_in_inset_form_label"
                />
                {Object.keys(productStatusError).map((key) => {
                    return <div style={{ color: "red", paddingTop: "10px" }}>{productStatusError[key]}</div>
                })}
            </Form.Field>
            <Form.Field>
                <label className="I_in_inset_form_label"></label>
                <input
                    placeholder="Enter the Expiration Date"
                    focus
                    value={productExpiration}
                    onChange={(e) => {
                        setProductExpiration(e.target.value);
                    }}
                    className="I_in_inset_form_label"
                    type="text"
                    onFocus={(e) => (e.currentTarget.type = "date")}
                    onBlur={(e) => (e.currentTarget.type = "text")}

                />
                {Object.keys(productExpirationError).map((key) => {
                    return <div style={{ color: "red", paddingTop: "10px" }}>{productExpirationError[key]}</div>
                })}
            </Form.Field>
            <Form.Field>
                <label className="I_in_inset_form_label"></label>
                <input
                    placeholder="Enter the Quantity"
                    focus
                    value={productQuantity}
                    onChange={(e) => {
                        setProductQuantity(e.target.value);
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
                className="ui button I_in_inset_form_add_btn"
            >
                {""}
                {/* <Icon name="user plus"></Icon> */}
                Add
            </Button>
        </Form>


    )
}

export default InsertForm;




