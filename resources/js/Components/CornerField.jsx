const CornerField = ({ className }) => {
    return (
        <div className={`${className} absolute`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 119.804 119.805" className="fill-secondary w-full aspect-square">
                <path d="M101.5,0H0V18.308H32.69A63.951,63.951,0,0,0,96.569,82.187c1.66,0,3.3-.084,4.928-.208V119.8H119.8V0Zm0,67.345q-2.432.243-4.928.247A49.339,49.339,0,0,1,47.286,18.308H101.5Z" fill="#ffd532"/>
            </svg>
        </div>
    );
};

export default CornerField;
