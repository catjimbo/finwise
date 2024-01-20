function StockCard({ stock }) {
    return (
        <div className="stock-card">
            <h2>{stock.name}</h2>
            <p>Цена: {stock.price}</p>
            <p>Изменение: {stock.change}</p>
        </div>
    );
}

export default StockCard