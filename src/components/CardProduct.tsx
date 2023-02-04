const CardProduct = (props : any) => {
    return (
        <div>
            <h2>{props.product.name}</h2>
            <b>{props.product.price}</b>
        </div>
    );
};
export default CardProduct;
