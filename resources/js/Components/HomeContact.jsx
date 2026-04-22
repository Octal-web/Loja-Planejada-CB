import CirclePath from "./CirclePath";
import { ContactForm } from "./ContactForm";
import CornerField from "./CornerField";
import DrawPath from "./DrawPath";
import MarkPath from "./MarkPath";

const StarDot = () => (
    <svg className="fill-secondary w-full max-w-6" viewBox="0 0 29.604 29.693">
        <path d="M132.343,0l-3.495,11.342H117.541l9.148,7.009L123.2,29.693l9.147-7.009,9.147,7.009L138,18.351l9.147-7.009H135.838Z" transform="translate(-117.541)" />
    </svg>
);

const HomeContact = () => {    
    return (
        <section className="relative pt-24 2xl:pt-32">
            <div className="absolute left-0 top-0 max-md:scale-50 max-2xl:scale-75">
                <MarkPath className="top-0 left-16 -translate-y-1/2 w-[81px]" fillClass="fill-secondary" delay={1} />
                <CirclePath className="top-16 -translate-x-1/2 w-[81px]" fillClass="fill-secondary"delay={1} />
            </div>

            <div className="relative container max-w-medium">
                <CornerField className="-top-8 right-6 2xl:right-0 w-20 sm:w-24 xl:w-30 z-[2] fill-secondary" />

                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <div className="flex items-center mb-4 md:my-6">
                            <i className="h-1 bg-secondary w-12 sm:w-16 md:w-20 mr-4 sm:mr-6"></i>
                            <h4 className="font-tertiary text-xl sm:text-2xl lg:text-3xl 2xl:text-[32px] font-bold uppercase">Solicite agora</h4>
                        </div>

                        <div className="relative">
                            <DrawPath className="bottom-0 -left-0 sm:w-[280px] lg:w-[340px] 2xl:w-[412px]"  />

                            <h1 className="relative font-secondary text-6xl xl:text-7xl 2xl:text-[90px] 2xl:leading-[1.1] font-semibold uppercase tracking-tight mb-16">Faça sua<br /> Jogada<br /> acontecer</h1>
                        </div>

                        <p className="sm:text-lg md:text-xl 2xl:text-[22px] leading-tight tracking-tight max-w-[580px]"><strong>Tá esperando o que para fazer seu projeto acontecer?</strong><br /><br />Preencha o formulário e um dos nossos especialistas entrará em contato.</p>

                        <ul className="sm:text-lg md:text-xl 2xl:text-[22px] leading-tight tracking-tight mt-10 mb-12 sm:my-14 xl:-mr-10 space-y-3 md:space-y-5 2xl:space-y-7">
                            <li className="flex items-center gap-2 sm:gap-4"><StarDot /> Projeto exclusivo para o seu espaço</li>
                            <li className="flex items-center gap-2 sm:gap-4"><StarDot /> Móveis planejados com o jeito do Brasil</li>
                            <li className="flex items-center gap-2 sm:gap-4"><StarDot /> Ganhe uma Smart TV Samsung 50” nos projetos acima de R$ 49.990</li>
                            <li className="flex items-center gap-2 sm:gap-4"><StarDot /> Promoção válida até o fim da Copa</li>
                            <li className="flex items-center gap-2 sm:gap-4"><StarDot /> Atendimento via WhatsApp</li>
                        </ul>
                    </div>

                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeContact;