export const product = {
    name: "product",
    type: "document",
    title:"Product",
    fields: [
        {
            name:"title",//for fetching json 
            title:" Product Title",//for sanity
            type:"string"
        },
        {
            name:"description",
            title:"Product Description",
            type:"string"
        },
        {
            name:"image",
            title:"Product Image",
            type:"image"
        },
        {
            name:"price",
            title:"Product Price",
            type:"number"
        },
        {
            name:"category",
            title:"Product Category",
            type:"reference",
            to:[
                {
                    type:"category"//must be the refrence name 
                }
            ]
        }


    ]
}
