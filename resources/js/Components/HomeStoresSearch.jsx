import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

const HomeStoresSearch = ({ setStores, isProcessing, setIsProcessing, hasSearched, setHasSearched }) => {
    const [inputValue, setInputValue] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);
    const [estados, setEstados] = useState([]);
    const [cidades, setCidades] = useState([]);
    
    useEffect(() => {
        if (inputValue.trim().length < 3) {
            return;
        }
        
        if (inputValue.trim() === '') {
            setEstados([]);
            setCidades([]);
            return;
        }
        
        setIsProcessing(true);

        const fetchStatesAndCities = setTimeout(async () => {
            try {
                const response = await fetch(route('Cidades.carregar', {'q': inputValue.trim()}), {
                    method: 'GET',
                });
                
                const data = await response.json();
                
                setEstados(data.estados);
                setCidades(data.cidades);
                setIsProcessing(false);
            } catch (error) {
                console.log(error);
                setIsProcessing(false);
            }
        }, 300);
        
        return () => clearTimeout(fetchStatesAndCities);
    }, [inputValue]);
    
    const selectOptions = [
        {
            label: 'Estados',
            options: estados.map((estado) => ({
                value: estado.value,
                label: estado.label,
                type: 'estado',
            })),
        },
        {
            label: 'Cidades',
            options: cidades.map((cidade) => ({
                value: cidade.value,
                label: cidade.label,
                type: 'cidade',
            })),
        },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setIsProcessing(true);

        if (!hasSearched) {
            setHasSearched(true);
        }

        const payload = { id: selectedOption.value, type: selectedOption.type };
        try {
            const { data } = await axios.post(route('Lojas.carregar'), payload);

            setStores(data.lojas);
        } catch (error) {
            console.log(error);
        } finally {
            setIsProcessing(false);
        }
    };
    
    return (
        <form className="my-10" onSubmit={handleSubmit} data-lenis-prevent={true}>
            <div className="mb-5 min-[1440px]:mb-7 max-w-[690px] mx-auto px-4">
                <div className="w-full flex justify-center">
                    <Select
                        options={selectOptions}
                        value={selectedOption}
                        onChange={(option) => setSelectedOption(option)}
                        onInputChange={(value) => setInputValue(value)}
                        onMenuClose={() => {
                            setEstados([]);
                            setCidades([]);
                        }}
                        placeholder="Buscar por cidade ou estado…"
                        classNamePrefix="store-select"
                        className="w-full"
                        isClearable
                        noOptionsMessage={({ inputValue }) => {
                            if (!inputValue || inputValue.trim().length < 3) return 'Digite o local desejado...';
                            if (isProcessing) return 'Buscando...';
                            return 'Sem resultados';
                        }}
                    />
                    <button disabled={isProcessing || !selectedOption} type="submit" className="bg-secondary px-12 py-1 border border-l-0 border-white text-2xl font-semibold transition-all hover:bg-yellow-500 disabled:bg-opacity-50">
                        Buscar
                    </button>
                </div>
            </div>
        </form>
    );
};

export default HomeStoresSearch;