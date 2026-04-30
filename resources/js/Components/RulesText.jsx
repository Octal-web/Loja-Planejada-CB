import CornerField from "./CornerField";
import MarkPath from "./MarkPath";
import ShortArrowPath from "./ShortArrowPath";
import CirclePath from "./CirclePath";
import LongArrowPath from "./LongArrowPath";

const RulesText = ({ text }) => {
    return (
        <section className="relative bg-neutral-100 pt-20 2xl:pt-24 pb-52">
            <div className="absolute max-md:scale-50 max-2xl:scale-75 top-0 left-0 origin-top-left max-md:-translate-x-12">
                <MarkPath className="absolute left-0 top-0 w-[81px] -translate-y-1/2 rotate-[25deg]" fillClass="fill-primary" />
                <ShortArrowPath className="absolute left-10 top-20 w-[417px] -translate-x-1/2 -rotate-[7deg]" fillClass="fill-primary" delay={0.3} />
                <CirclePath className="absolute left-64 top-12 w-[81px]" fillClass="fill-primary" delay={0.6} />
                <LongArrowPath className="absolute left-4 top-80 w-[685px] -translate-x-1/2 rotate-[145deg]" fillClass="fill-primary" delay={1.2} />
            </div>

            <div className="relative container max-w-medium">
                <div className="flex flex-col items-center justify-center mb-7 2xl:mb-10">
                    <h4 className="font-tertiary text-xl sm:text-2xl lg:text-3xl 2xl:text-[32px] font-bold uppercase mb-4 sm:mb-6">
                        Transparência
                    </h4>
                    <i className="h-1 bg-secondary w-12 sm:w-16 md:w-20" />
                </div>

                <h1 className="font-secondary text-6xl xl:text-7xl 2xl:text-[90px] 2xl:leading-[1.1] text-center font-semibold uppercase tracking-tight mb-8">Regulamento</h1>

                <p className="text-xl 2xl:text-[22px] text-center leading-tight tracking-tight overflow-hidden max-w-[880px] mx-auto">Confira as condições de participação da Promoção Jogada Planejada Casa Brasileira.</p>

                <div className="relative mt-14 bg-white 2xl:-mx-20">
                    <div dangerouslySetInnerHTML={{ __html: text }} className="pt-8 xl:pt-12 pb-10 2xl:py-14 px-6 xl:px-10 max-w-5xl mx-auto" />

                    <CornerField className="-right-4 md:-right-8 -top-4 md:-top-8 w-20 sm:w-24 xl:w-30" fillClass="fill-primary" />
                    <CornerField className="-left-4 md:-left-8 -bottom-4 md:-bottom-8 rotate-180 w-20 sm:w-24 xl:w-30" fillClass="fill-primary" />
                </div>
            </div>
            
            <div className="absolute max-md:scale-50 max-2xl:scale-75 bottom-0 right-0 origin-bottom-right">
                <LongArrowPath className="absolute -right-14 bottom-64 w-[685px] translate-x-1/2 rotate-[145deg]" fillClass="fill-secondary" delay={0} />
                <CirclePath className="absolute right-64 bottom-12 w-[81px]" fillClass="fill-secondary" delay={0.3} />
            </div>
        </section>
    );
};

export default RulesText;