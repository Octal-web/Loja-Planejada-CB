import { ContactForm } from "./ContactForm";
import DrawPath from "./DrawPath";

const StartDot = () => (
    <svg className="fill-secondary w-6" viewBox="0 0 29.604 29.693">
        <path d="M132.343,0l-3.495,11.342H117.541l9.148,7.009L123.2,29.693l9.147-7.009,9.147,7.009L138,18.351l9.147-7.009H135.838Z" transform="translate(-117.541)" />
    </svg>
);

const HomeContact = () => {    
    return (
        <section className="pt-32">
            <div className="container max-w-medium">
                <div className="grid grid-cols-2">
                    <div>
                        <div className="flex items-center my-6">
                            <i className="h-1 bg-secondary w-20 mr-6"></i>
                            <h4 className="font-tertiary text-3xl 2xl:text-[32px] font-bold uppercase">Solicite agora</h4>
                        </div>

                        <div className="relative">
                            <DrawPath className="absolute bottom-0 -left-0 w-[412px]"  />

                            <h1 className="relative font-secondary text-6xl xl:text-7xl 2xl:text-[90px] 2xl:leading-[1.1] font-semibold uppercase tracking-tight mb-16">Faça sua<br /> Jogada<br /> acontecer</h1>
                        </div>

                        <p className="text-xl 2xl:text-[22px] leading-tight tracking-tight max-w-[580px]"><strong>Tá esperando o que para fazer seu projeto acontecer?</strong><br /><br />Preencha o formulário e um dos nossos especialistas entrará em contato.</p>

                        <ul className="text-xl 2xl:text-[22px] leading-tight tracking-tight my-14 -mr-10 space-y-7">
                            <li className="flex items-center gap-4"><StartDot /> Projeto exclusivo para o seu espaço</li>
                            <li className="flex items-center gap-4"><StartDot /> Móveis planejados com o jeito do Brasil</li>
                            <li className="flex items-center gap-4"><StartDot /> Ganhe uma Smart TV Samsung 50” nos projetos acima de R$ 49.990</li>
                            <li className="flex items-center gap-4"><StartDot /> Promoção válida até o fim da Copa</li>
                            <li className="flex items-center gap-4"><StartDot /> Atendimento via WhatsApp</li>
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