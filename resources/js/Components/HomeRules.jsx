import { Link } from "@inertiajs/react";

const HomeRules = ({ text }) => {
    return (
        <section className="bg-neutral-100 pt-24 pb-52">
            <div className="container max-w-medium">
                <div className="flex flex-col items-center justify-center mb-10">
                    <h4 className="font-tertiary text-3xl 2xl:text-[32px] font-bold uppercase mb-6">
                        Transparência
                    </h4>
                    <i className="h-1 bg-secondary w-20" />
                </div>

                <h1 className="font-secondary text-6xl xl:text-7xl 2xl:text-[90px] 2xl:leading-[1.1] text-center font-semibold uppercase tracking-tight mb-8">Regulamento</h1>

                <p className="text-xl 2xl:text-[22px] text-center leading-tight tracking-tight max-w-[880px] mx-auto">Confira as condições de participação da Promoção Jogada Planejada Casa Brasileira.</p>

                <div className="relative mt-14 bg-white 2xl:-mx-20">
                    <div dangerouslySetInnerHTML={{ __html: text }} className="py-14 px-10 max-w-5xl mx-auto" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white from-25% to-transparent to-80%" />
                    <Link href={route('Regulamento.index')} className="relative flex w-fit mx-auto gap-2 max-lg:block text-primary lg:text-sm xl:text-base 2xl:text-lg tracking-tight bg-secondary border-2 border-secondary fill-primary rounded-full px-4 xl:px-10 py-3.5 font-semibold transition-all hover:bg-primary hover:border-primary hover:text-secondary hover:fill-secondary translate-y-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 15.35 13.36">
                            <path d="M8.67,13.36l-1.15-1.13,4.73-4.73H0v-1.64H12.25L7.52,1.15l1.15-1.15,6.68,6.68-6.68,6.68Z" />
                        </svg>
                        Ver regulamento completo
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomeRules;