import React, { useState, useEffect } from 'react';
import StockCard from './StockCard';
import './stocks.css'

function StockList() {
    const [stocks, setStocks] = useState([
        { name: 'Загрузка...', price: '---', change: '---' },
        { name: 'Загрузка...', price: '---', change: '---' },
        { name: 'Загрузка...', price: '---', change: '---' },
        { name: 'Загрузка...', price: '---', change: '---' },
    ]);

    useEffect(() => {
        async function fetchStockData() {
            try {
                const companies = ['AAPL', 'MSFT', 'GOOGL', 'MRNA'];
                const stockDataPromises = companies.map(company =>
                    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${company}&apikey=YOUR_API_KEY`)
                        .then(response => response.json())
                );

                const stockData = await Promise.all(stockDataPromises);
                const processedStocks = stockData.map(data => {
                    const quote = data['Global Quote'];
                    return {
                        name: quote['01. symbol'],
                        price: quote['05. price'],
                        change: quote['09. change']
                    };
                });

                setStocks(processedStocks);
            } catch (error) {
                console.error("Ошибка при запросе данных об акциях:", error);
                // Ошибка загрузки данных, вы можете установить состояние ошибки или обновить заглушки соответствующим образом
            }
        }

        fetchStockData();
    }, []);

    return (
        <div className="stock-list">
            {stocks.map((stock, index) => (
                <StockCard key={index} stock={stock} />
            ))}
        </div>
    );
}

export default StockList;
