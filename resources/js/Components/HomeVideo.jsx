import { Reveal } from "./Reveal";
import { VideoPlayer } from "./VideoPlayer";
import { CustomLink } from "./CustomLink";
import MarkPath from "./MarkPath";
import CirclePath from "./CirclePath";
import ShortArrowPath from "./ShortArrowPath";

import campaignPoster from '../content/display/campaign-poster.jpg';
import campaignVideo from '../content/video/campaign-video.mp4';

const HomeVideo = () => {
    return (
        <section className="relative bg-secondary pt-14 sm:pt-20 md:pt-24 2xl:pt-32">
            <MarkPath className="absolute left-24 top-[48%] md:top-[45%] w-[81px] max-md:scale-50 max-2xl:scale-75 origin-bottom" fillClass="fill-primary" />

            <div className="absolute -left-2 bottom-64 -rotate-[92deg] max-md:scale-50 max-2xl:scale-75 origin-bottom-left">
                <MarkPath className="right-72 -translate-y-1/2 rotate-[7deg] w-[81px]" fillClass="fill-primary" delay={1} />
                <CirclePath className="right-48 top-20 -translate-x-1/2 w-[81px]" fillClass="fill-primary" delay={0.5} />
                <ShortArrowPath className="-top-4 -right-4 translate-x-1/2 rotate-[160deg] w-[417px]" fillClass="fill-primary" delay={0.5} />
            </div>

            <div className="container max-w-medium">
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 2xl:gap-32">
                    <Reveal className="max-md:order-1 max-md:pb-6" direction="left">
                        <VideoPlayer src={campaignVideo} poster={campaignPoster} classList={['object-cover']} />
                    </Reveal>

                    <Reveal direction="right" className="flex flex-col items-start h-full">
                        <div className="flex items-center my-6">
                            <i className="h-1 bg-white w-12 sm:w-16 md:w-20 mr-4 sm:mr-6" />
                            <h4 className="font-tertiary text-xl sm:text-2xl lg:text-3xl 2xl:text-[32px] font-bold uppercase max-sm:tracking-tight">
                                A Copa começa em casa
                            </h4>
                        </div>

                        <h1 className="font-secondary text-5xl lg:text-6xl xl:text-7xl 2xl:text-[90px] 2xl:leading-[1.1] text-primary font-semibold uppercase tracking-tight mb-8 md:mb-10 2xl:mb-14">O seu lugar pra<br /> <span className="text-white">viver a emoção</span></h1>

                        <div className="text-sm lg:text-xl max-w-xl mb-8 md:mb-10">
                            <p>O brasileiro tem um jeito único de viver o futebol. Não é só jogo, é ritual, expectativa coletiva, algo que começa muito antes do apito inicial.</p>
                            <p>A cada quatro anos o país se organiza: a casa precisa estar pronta para receber família, amigos e toda a emoção de torcer pelo Brasil.</p>
                            <p><strong>E nessa Copa, a Casa Brasileira vai garantir o lugar onde tudo acontece: a televisão!</strong></p>
                        </div>

                        <CustomLink
                            href={route('Home.index')}
                            to="#solicite-seu-projeto"
                            className="flex gap-2 text-primary lg:text-sm xl:text-base 2xl:text-lg tracking-tight bg-white border-2 border-primary fill-primary rounded-full px-6 xl:px-10 py-3.5 font-semibold transition-all hover:bg-primary hover:border-primary hover:text-secondary hover:fill-secondary mt-auto mb-24"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4" viewBox="0 0 15.35 13.36">
                                <path d="M8.67,13.36l-1.15-1.13,4.73-4.73H0v-1.64H12.25L7.52,1.15l1.15-1.15,6.68,6.68-6.68,6.68Z"/>
                            </svg>
                            Solicitar projeto
                        </CustomLink>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default HomeVideo;