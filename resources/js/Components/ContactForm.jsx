import React, { useState, useRef, useEffect } from 'react';
import { Link, useForm } from '@inertiajs/react';
import { InputMask } from '@react-input/mask';
import Select from 'react-select';

export const ContactForm = () => {
    const [phoneMask, setPhoneMask] = useState("(__) ____-____");
    const [aware, setAware] = useState(false);
    const [termsVisible, setTermsVisible] = useState(false);
    
    const urlParams = new URLSearchParams(window.location.search);
    
    const { data, setData, post, processing, errors, clearErrors } = useForm({
        nome: '',
        telefone: '',
        cep: '',
        email: '',
        ambiente: [],
        politica: false,
        origem: urlParams.get('utm_source') || '',
        campanha: urlParams.get('utm_campaign') || '',
        grupo: urlParams.get('group') || '',
        anuncio: urlParams.get('utm_content') || '',
        posicao_formulario: 'Página Formulário',
        entrada: '',
    });

    useEffect(() => {
        const now = new Date();
        now.setHours(now.getHours() - 3);
        const entrada = now.toISOString().slice(0, 19).replace('T', ' ');
        
        setData(prevData => ({
            ...prevData,
            entrada: entrada
        }));
    }, []);

    useEffect(() => {
        const numbers = data.telefone.replace(/\D/g, '');
        
        if (numbers.length >= 10) {
            setPhoneMask("(__) _____-____");
        } else if (numbers.length < 10) {
            setPhoneMask("(__) ____-____");
        }
    }, [data.telefone]);

    const EnvironmentOptions = [
        {value: '100', label: 'Todos os ambientes'},
        {value: '1', label: 'Cozinhas'},
        {value: '2', label: 'Dormitórios'},
        {value: '3', label: 'Sala de Estar'},
        {value: '4', label: 'Integrados'},
        {value: '5', label: 'Home office'},
        {value: '6', label: 'Lavanderias'},
        {value: '7', label: 'Lavabos'},
        {value: '8', label: 'Closets'}
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleEnvironmentChange = (selectedOptions) => {
        const selectedValues = selectedOptions ? selectedOptions.map((option) => option.value) : [];
        
        setData('ambiente', selectedValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('Projetos.enviar'), {
            preserveScroll: true,
            onSuccess: (page) => {
                window.location.href = page.props.message.url;
            },
            onError: () => {
            }
        });
    };

    const termsRef = useRef(null);

    const handleAware = (e) => {
        setAware(!aware);
        handleChange(e);
    };

    return (
        <div className="ml-16">
            <div className="relative bg-primary py-5 2xl:py-8 px-7 md:px-12 translate-x-[2vw]">
                <h3 class="font-secondary text-4xl 2xl:text-[44px] 2xl:leading-[1.1] text-white font-semibold uppercase tracking-tight py-10">Solicite <span class="text-secondary">seu Projeto</span></h3>
                <form
                    className="w-full transition-all duration-500 mt-4"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-4 min-[1440px]:mb-5 flex gap-3 md:gap-5 lg:gap-10 flex-col lg:flex-row">
                        <div className="w-full">
                            <label htmlFor="nome" className="inline-block text-xl 2xl:text-[22px] text-white opacity-80 mb-2">Nome completo</label>
                            <input type="text" name="nome" value={data.nome} onChange={handleChange} placeholder="Seu nome completo" className="w-full h-12 2xl:h-16 px-7 text-white text-xl 2xl:text-[22px] border-0 bg-[#654433] rounded-lg transition-all duration-200 focus:border-primary focus:ring-0 focus:shadow-md placeholder:text-white placeholder:text-opacity-20" />
                            {errors.nome && <p className="text-xs text-white bg-red-900 px-3 py-1.5 mt-2">{errors.nome}</p>}
                        </div>
                    </div>

                    <div className="mb-4 min-[1440px]:mb-5 flex gap-3 md:gap-5 lg:gap-10 flex-col lg:flex-row">
                        <div className="w-full">
                            <label htmlFor="telefone" className="inline-block text-xl 2xl:text-[22px] text-white opacity-80 mb-2">Telefone</label>
                            <InputMask type="text" name="telefone" mask={phoneMask} replacement={{ _: /\d/ }} value={data.telefone} onChange={handleChange} placeholder="Seu telefone: (DDD) + número" className="w-full h-12 2xl:h-16 px-7 text-white text-xl 2xl:text-[22px] border-0 bg-[#654433] rounded-lg transition-all duration-200 focus:border-primary focus:ring-0 focus:shadow-md placeholder:text-white placeholder:text-opacity-20" />
                            {errors.telefone && <p className="text-xs text-white bg-red-900 px-3 py-1.5 mt-2">{errors.telefone}</p>}
                        </div>
                    </div>

                    <div className="mb-4 min-[1440px]:mb-5 flex gap-3 md:gap-5 lg:gap-10 flex-col lg:flex-row">
                        <div className="w-full">
                            <label htmlFor="email" className="inline-block text-xl 2xl:text-[22px] text-white opacity-80 mb-2">E-mail</label>
                            <input type="text" name="email" value={data.email} onChange={handleChange} placeholder="Seu e-mail" className="w-full h-12 2xl:h-16 px-7 text-white text-xl 2xl:text-[22px] border-0 bg-[#654433] rounded-lg transition-all duration-200 focus:border-primary focus:ring-0 focus:shadow-md placeholder:text-white placeholder:text-opacity-20" />
                            {errors.email && <p className="text-xs text-white bg-red-900 px-3 py-1.5 mt-2">{errors.email}</p>}
                        </div>
                    </div>

                    <div className="mb-4 min-[1440px]:mb-5 flex gap-3 md:gap-5 lg:gap-10 flex-col lg:flex-row">
                        <div className="w-full">
                            <label htmlFor="cep" className="inline-block text-xl 2xl:text-[22px] text-white opacity-80 mb-2">CEP</label>
                            <InputMask type="text" name="cep" mask="_____-___" replacement={{ _: /\d/ }} value={data.cep} onChange={handleChange} placeholder="Seu CEP" className="w-full h-12 2xl:h-16 px-7 text-white text-xl 2xl:text-[22px] border-0 bg-[#654433] rounded-lg transition-all duration-200 focus:border-primary focus:ring-0 focus:shadow-md placeholder:text-white placeholder:text-opacity-20" />
                            {errors.cep && <p className="text-xs text-white bg-red-900 px-3 py-1.5 mt-2">{errors.cep}</p>}
                        </div>
                    </div>

                    <div className="mb-4 min-[1440px]:mb-5 flex gap-3 md:gap-5 lg:gap-10 flex-col lg:flex-row">
                        <div className="w-full">
                            <label htmlFor="ambiente" className="inline-block text-xl 2xl:text-[22px] text-white opacity-80 mb-2">Ambientes de interesse</label>
                            <Select
                                name="ambiente"
                                options={EnvironmentOptions}
                                isSearchable={false}
                                isMulti
                                classNamePrefix="contact-select"
                                placeholder="Selecione ao menos um ambiente"
                                onChange={handleEnvironmentChange}
                            />
                            {errors.ambiente && <p className="text-xs text-white bg-red-900 px-3 py-1.5 mt-2">{errors.ambiente}</p>}
                        </div>
                    </div>

                    <input type="hidden" name="origem" value={data.origem} />
                    <input type="hidden" name="campanha" value={data.campanha} />
                    <input type="hidden" name="grupo" value={data.grupo} />
                    <input type="hidden" name="anuncio" value={data.anuncio} />
                    <input type="hidden" name="posicao_formulario" value={data.posicao_formulario} />
                    <input type="hidden" name="entrada" value={data.entrada} />

                    <div className="mb-2 min-[1440px]:mb-3 flex gap-3 md:gap-5 lg:gap-10 flex-col lg:flex-row">
                        <div className="w-full">
                            <div ref={termsRef} className={`bg-gray-100 text-[10px] leading-tight text-black ${termsVisible ? 'mb-3' : 'mb-0'} overflow-hidden transition-all duration-300`} style={{ maxHeight: termsVisible ? `${termsRef.current?.scrollHeight}px` : '0px' }}>
                                <div className="py-2 px-5">
                                    <p>
                                        Ao enviar, você confirma a veracidade das informações prestadas neste
                                        formulário, bem como autoriza a UNICASA a verificar tais dados. Esteja
                                        ciente que o preenchimento de formulário não implica em nenhum
                                        compromisso para ambas as partes, em especial, não os obriga à
                                        assinatura de qualquer documento ou compromisso, sendo as informações
                                        aqui fornecidas meramente cadastrais e estritamente comerciais. Além
                                        disso, você concorda com a utilização dos meus dados pela fabricante
                                        e lojas autorizadas. A Unicasa se compromete a tratar seus dados
                                        pessoais dispostos no formulário em conformidade com a Lei Geral de
                                        Proteção de Dados (Lei 13.709/2018), sendo eliminados de maneira segura
                                        após o tempo necessário. Para mais informações, consulte nossa Política
                                        de Privacidade, disponível no site.
                                    </p>
                                </div>
                            </div>

                            <label className="mt-2 mb-3 flex items-center text-xs">
                                <input type="checkbox" name="politica" className="relative aspect-square w-5 h-5 cursor-pointer appearance-none border-primary rounded-full after:absolute after:top-1/2 after:left-1/2 after:aspect-square after:h-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-transparent after:checked:bg-primary after:rounded-full checked:bg-none checked:border-primary checked:hover:border-primary checked:focus:border-primary checked:text-white focus:ring-offset-0 focus:ring-0" checked={data.politica} onChange={handleAware} />
                                <span className="ml-2">Aceito os <span
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setTermsVisible(!termsVisible);
                                    }}
                                    className="font-bold cursor-pointer"
                                >
                                    Termos de Uso
                                </span> e a <Link href={route('Politicas.privacidade')} className="font-bold" target="_blank" rel="noopener noreferrer">Política de Privacidade</Link></span>
                            </label>
                            {errors.politica && <p className="text-xs text-white bg-red-900 px-3 py-1.5 mt-2">{errors.politica}</p>}
                        </div>
                    </div>

                    <div className="pb-3 flex gap-3 md:gap-5 lg:gap-10 flex-col lg:flex-row">
                        <button
                            type="submit"
                            disabled={processing}
                            className="flex gap-2 max-lg:block text-primary lg:text-sm xl:text-base 2xl:text-lg tracking-tight bg-secondary border-2 border-secondary fill-primary rounded-full px-4 xl:px-10 py-3.5 font-semibold transition-all hover:bg-yellow-500 hover:border-yellow-500 disabled:bg-opacity-50 disabled:border-secondary disabled:text-secondary disabled:fill-secondary"
                        >
                            {!processing ? (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4" viewBox="0 0 15.35 13.36">
                                        <path d="M8.67,13.36l-1.15-1.13,4.73-4.73H0v-1.64H12.25L7.52,1.15l1.15-1.15,6.68,6.68-6.68,6.68Z"/>
                                    </svg>
                                    Quero minha Smart TV Samsung
                                </>
                            ) : (
                                <div role="status" className="flex justify-center items-center">
                                    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};