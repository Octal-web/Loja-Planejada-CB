
import stepSecond from '../content/steps/step-price-2.png';
import stepFirst from '../content/steps/step-project-1.png';
import stepThird from '../content/steps/step-tv-3.png';
import tvAward from '../site/img/tv-award.png';
import CornerField from "./CornerField";

const HomeAbout = () => {
    const steps = [
        {
            id: 1,
            icon: stepFirst,
            title: 'Solicite<br /> seu projeto',
            description: `Visite uma das lojas Casa Brasileira participantes e solicite seu projeto de móveis planejados com a nossa equipe.`
        },
        {
            id: 2,
            icon: stepSecond,
            title: 'Feche acima de<br /> R$ 49.990',
            description: `Assine seu projeto com valor igual ou superior a R$ 49.990 no período da promoção e garanta o seu prêmio.`
        },
        {
            id: 3,
            icon: stepThird,
            title: 'Ganhe uma<br /> Smart TV Samsung 50”',
            description: `Você ganha uma Smart TV Samsung 50” para viver cada momento da Copa com qualidade e emoção.`
        }
    ];

    return (
        <section className="py-32">
            <div className="relative container max-w-medium">

                <CornerField className="top-0 right-0 w-30 fill-secondary" />

                <div className="mb-20">
                    <div className="flex items-center mb-6">
                        <i className="h-1 bg-secondary w-20 mr-6" />
                        <h4 className="font-tertiary text-2xl lg:text-3xl 2xl:text-[32px] font-bold uppercase">A promoção</h4>
                    </div>

                    <h2 className="font-secondary text-4xl lg:text-5xl xl:text-6xl 2xl:text-[70px] text-secondary font-semibold uppercase tracking-tight">Como funciona a<span className="text-primary"> Jogada Planejada</span></h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                    {steps.map((step) => (
                        <div key={step.id} className="bg-primary px-5 py-8 lg:px-12 lg:pt-16 lg:pb-14">
                            <img src={step.icon} alt={step.title.replace(/<br\s*\/?>/gi, ' ')} className="mb-8" />
                            <h4 className="font-secondary text-secondary text-2xl lg:text-3xl 2xl:text-[34px] font-semibold uppercase tracking-tight mb-6" dangerouslySetInnerHTML={{ __html: step.title }} />
                            <p className="text-white text-lg lg:text-xl 2xl:text-[22px] leading-tight tracking-tight max-w-[330px]">{step.description}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-secondary py-3 grid md:grid-cols-2 items-center">
                    <div className="flex flex-col md:flex-row items-center">
                        <img src={tvAward} alt="Smart TV Samsung 50”" className="m-auto -my-[5.5%] md:-ml-[19%] md:-mr-[10%] w-[524px]" />

                        <div>
                            <h3 className="font-secondary text-primary text-4xl lg:text-5xl 2xl:text-[56px] font-semibold uppercase tracking-tight mb-3">Smart TV<br /> Samsung 50”</h3>

                            <p className="tracking-tight text-sm lg:text-[17px]">Viva a Copa do jeito que o Brasil merece</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className='ml-16 mt-6 md:ml-20 md:mt-0 xl:ml-0'>
                            <p className="text-base lg:text-lg font-semibold tracking-tight">Projetos acima de</p>
                            <h3 className="font-secondary text-primary text-5xl lg:text-6xl 2xl:text-[74px] font-semibold uppercase tracking-tight">R$ 49.990</h3>
                            
                            <p className="text-base lg:text-lg font-semibold tracking-tight">já garantem seu prêmio</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAbout;