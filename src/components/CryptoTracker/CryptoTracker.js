import React, { useState, useEffect } from 'react';
import './CryptoTracker.css';
import { fetchCryptoData } from './utils/fetchCryptoData';
import Button from '../UILibrary/Button/Button';
import Input from '../UILibrary/Input/Input';
import Tooltip from '../UILibrary/Tooltip/Tooltip';
import Accordion from '../UILibrary/Accordion/Accordion';
import Typography from '../UILibrary/Typography/Typography';

const CryptoTracker = () => {
    const [cryptos, setCryptos] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const data = await fetchCryptoData();
        setCryptos(data);
        setFiltered(data);
    };

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearch(value);
        setFiltered(
            cryptos.filter(
                (crypto) =>
                    crypto.name.toLowerCase().includes(value) ||
                    crypto.symbol.toLowerCase().includes(value)
            )
        );
    };

    return (
        <div className="crypto-tracker">
            <Typography textSize="lg">
                <h1>Cryptocurrency Prices</h1>
            </Typography>
            <Button onClick={loadData} variant="bordered">
                Update
            </Button>
            <Input
                placeholder="Search"
                value={search}
                onChange={handleSearch}
            />

            {filtered.map((crypto) => (
                <Accordion key={crypto.id} title={crypto.name}>
                    <Typography textSize="md">
                        <strong>Symbol:</strong> {crypto.symbol}
                    </Typography>
                    <Typography textSize="md">
                        <strong>Price USD:</strong> {crypto.price_usd}
                    </Typography>
                    <Typography textSize="md">
                        <strong>Price BTC:</strong> {crypto.price_btc}
                    </Typography>
                    <Tooltip
                        text="The market capitalization of a cryptocurrency is calculated by multiplying the number of coins in circulation by the current price"
                        position="top"
                    >
                        <Typography textSize="md">
                            <strong>Market Cap USD:</strong> {crypto.market_cap_usd}
                        </Typography>
                    </Tooltip>
                    <Typography
                        textSize="md"
                        className={
                            crypto.percent_change_24h >= 0
                                ? 'positive'
                                : 'negative'
                        }
                    >
                        <strong>Percent Change 24H:</strong>{' '}
                        {crypto.percent_change_24h}%
                    </Typography>
                </Accordion>
            ))}
        </div>
    );
};

export default CryptoTracker;
