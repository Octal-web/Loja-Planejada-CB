import { CustomLink } from "./CustomLink";
import { Reveal } from "./Reveal";
import { VideoPlayer } from "./VideoPlayer";

import campaignPoster from '../content/display/campaign-poster.jpg';
import campaignVideo from '../content/video/campaign-video.mp4';

const HomeVideo = () => {
    return (
        <section className="bg-secondary pt-32">
            <div className="container max-w-md md:max-w-medium">
                <div className="flex flex-col-reverse md:grid md:grid-cols-2 lg:gap-32">
                    <Reveal direction="left">
                        <VideoPlayer src={campaignVideo} poster={campaignPoster} classList={['object-cover']} />
                    </Reveal>

                    <Reveal direction="right" className="flex flex-col items-start h-full">
                        <div className="flex items-center my-6">
                            <i className="h-1 bg-white w-20 mr-6" />
                            <h4 className="font-tertiary text-2xl lg:text-3xl 2xl:text-[32px] font-bold uppercase">
                                A Copa começa em casa
                            </h4>
                        </div>

                        <h1 className="font-secondary text-5xl lg:text-6xl xl:text-7xl 2xl:text-[90px] 2xl:leading-[1.1] text-primary font-semibold uppercase tracking-tight mb-14">O seu lugar pra<br /> <span className="text-white">viver a emoção</span></h1>

                        <div className="text-sm lg:text-xl max-w-xl mb-10">
                            <p>O brasileiro tem um jeito único de viver o futebol. Não é só jogo, é ritual, expectativa coletiva, algo que começa muito antes do apito inicial.</p>
                            <p>A cada quatro anos o país se organiza: a casa precisa estar pronta para receber família, amigos e toda a emoção de torcer pelo Brasil.</p>
                            <p><strong>E nessa Copa, a Casa Brasileira vai garantir o lugar onde tudo acontece: a televisão!</strong></p>
                        </div>

                        <CustomLink
                            href={route('Home.index')}
                            to="#solicite-seu-projeto"
                            className="flex gap-2 lg:max-lg:block text-primary lg:text-sm xl:text-base 2xl:text-lg tracking-tight bg-white border-2 border-primary fill-primary rounded-full px-4 xl:px-10 py-3.5 font-semibold transition-all hover:bg-primary hover:border-primary hover:text-secondary hover:fill-secondary mt-auto mb-24"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4" viewBox="0 0 15.35 13.36">
                                <path d="M8.67,13.36l-1.15-1.13,4.73-4.73H0v-1.64H12.25L7.52,1.15l1.15-1.15,6.68,6.68-6.68,6.68Z"/>
                            </svg>
                            Solicite seu projeto
                        </CustomLink>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default HomeVideo;