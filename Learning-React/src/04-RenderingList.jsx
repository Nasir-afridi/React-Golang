const RenderingList = () => {
    const products = [
        {id:1, Product: "Iphone", Price: "$400"},
        {id:2, Product: "Mercedes", Price: "$40000"},
        {id:3, Product: "pc", Price: "$4300"}
    ]

  return (
    <>
        <h2>
            <ul>
                {products.map((data) => <li key={data.id}>{data.Product} : {data.Price}</li>)}
            </ul>
        </h2>
    </>
  )
}

export default RenderingList