import { useState } from "react";

import HomeStoresSearch from "./HomeStoresSearch";
import { CustomLink } from "./CustomLink";
import MarkPath from "./MarkPath";
import ShortArrowPath from "./ShortArrowPath";
import CirclePath from "./CirclePath";

const HomeStores = () => {
    const [stores, setStores] = useState([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);
    
    return (
        <section className="relative bg-primary py-32">
            <div className="absolute right-0 top-0">
                <MarkPath className="absolute right-72 -translate-y-1/2 rotate-[7deg] w-[81px]" fillClass="fill-secondary" />
                <CirclePath className="absolute right-48 top-20 -translate-x-1/2 w-[81px]" fillClass="fill-secondary" delay={1.5} />
                <ShortArrowPath className="absolute -top-4 -right-4 translate-x-1/2 rotate-[160deg] w-[417px]" fillClass="fill-secondary" delay={1} />
            </div>

            <div className="container max-w-medium">
                <div className="flex flex-col items-center justify-center mb-10">
                    <h4 className="font-tertiary text-white text-3xl 2xl:text-[32px] font-bold uppercase mb-6">
                        Onde comprar
                    </h4>
                    <i className="h-1 bg-secondary w-20" />
                </div>

                <h1 className="font-secondary text-6xl xl:text-7xl 2xl:text-[90px] 2xl:leading-[1.1] text-white text-center font-semibold uppercase tracking-tight mb-8">Lojas <span className="text-secondary">Participantes</span></h1>

                <p className="text-white text-xl 2xl:text-[22px] text-center leading-tight tracking-tight max-w-[580px] mx-auto">Encontre a loja Casa Brasileira mais próxima de você e fale com um de nossos especialistas.</p>

                <HomeStoresSearch setStores={setStores} isProcessing={isProcessing} setIsProcessing={setIsProcessing} hasSearched={hasSearched} setHasSearched={setHasSearched} />
                
                {hasSearched ? (
                    <div className="pt-10">
                        {stores.length > 0 ? (
                            <>
                                <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-16">
                                    {stores.map((loja) => (
                                        <li key={loja.id} className={`bg-[#654433] flex flex-col px-8 pt-6 pb-4 text-white duration-100 ${isProcessing ? 'opacity-50' : 'opacity-100'}`}>
                                            <p className="font-tertiary text-[15px] text-secondary uppercase mb-1" dangerouslySetInnerHTML={{ __html: loja.cidade }}></p>

                                            <h4 className="text-lg 2xl:text-[22px] font-bold leading-[1] tracking-tight mb-2">{loja.nome_fantasia}</h4>
                                            <p className="text-sm tracking-tight">{loja.endereco} - <span className="whitespace-nowrap">{loja.cep}</span></p>
                                            <p className="text-sm tracking-tight mt-2"><a href={`tel:+55${loja.telefone.replace(/\D/g, '')}`}>{loja.telefone}</a></p>
                                        </li>
                                    ))}
                                </ul>
                                
                            </>
                        ) : (
                            <p className={`text-white text-2xl 2xl:text-[32px] text-center leading-tight tracking-tight max-w-[880px] mx-auto -mt-4 mb-14 transition-all duration-100 ${isProcessing ? 'opacity-50' : 'opacity-100'}`}>Oops.. Não foram encontradas lojas correspondentes à sua pesquisa</p>
                        )}
                        
                        <p className={`text-white text-xl 2xl:text-[22px] text-center leading-tight tracking-tight max-w-[690px] -mb-10 mx-auto transition-all duration-100 ${isProcessing ? 'opacity-50' : 'opacity-100'}`}>Não encontrou sua cidade? Entre em contato e veja todas as opções.</p>
                    </div>
                ) : ''}

                <CustomLink
                    href={route('Home.index')}
                    to="#solicite-seu-projeto"
                    className="flex gap-2 max-lg:block text-white lg:text-sm xl:text-base 2xl:text-lg tracking-tight bg-primary border-2 border-white fill-white rounded-full px-4 xl:px-10 py-3.5 font-semibold transition-all hover:bg-secondary hover:border-secondary hover:text-primary hover:fill-primary mt-20 mx-auto w-fit"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4" viewBox="0 0 15.35 13.36">
                        <path d="M8.67,13.36l-1.15-1.13,4.73-4.73H0v-1.64H12.25L7.52,1.15l1.15-1.15,6.68,6.68-6.68,6.68Z"/>
                    </svg>
                    Falar com a loja mais próxima
                </CustomLink>
            </div>
            
            <div className="absolute left-0 bottom-0">
                <MarkPath className="absolute bottom-28 left-[25em] w-[81px]" fillClass="fill-secondary" />
                <ShortArrowPath className="absolute bottom-52 -left-30 rotate-[18deg] w-[417px]" fillClass="fill-secondary" />
            </div>
        </section>
    );
};

export default HomeStores;