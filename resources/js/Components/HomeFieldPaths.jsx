import MarkPath from "./MarkPath";
import ShortArrowPath from "./ShortArrowPath";
import LongArrowPath from "./LongArrowPath";
import CirclePath from "./CirclePath";

const HomeFieldPaths = () => {
    return (
        <div className="absolute inset-0 top-10 opacity-10">
            <MarkPath fillClass="fill-white" delay={0.6} className="w-[51px] left-[16%] top-[12%] -translate-x-1/2 -translate-y-1/2" />

            <CirclePath fillClass="fill-white" delay={0.8} className="w-[51px] left-[10%] top-[35%] -translate-x-1/2 -translate-y-1/2" />

            <ShortArrowPath fillClass="fill-white" delay={1} className="w-[263px] left-[17.5%] top-[22%] -translate-x-1/2 -translate-y-1/2 rotate-[-35deg]" />

            <CirclePath fillClass="fill-white" delay={1.2} className="w-[51px] left-[25%] top-[10%] -translate-x-1/2 -translate-y-1/2" />

            <LongArrowPath fillClass="fill-white" delay={1.4} className="w-[432px] left-[22%] top-[42%] -translate-x-1/2 -translate-y-1/2 rotate-[110deg]" />

            <CirclePath fillClass="fill-white" delay={1.6} className="w-[51px] left-[17%] top-[73%] -translate-x-1/2 -translate-y-1/2" />

            <ShortArrowPath fillClass="fill-white" delay={1.8} className="w-[263px] left-[26%] top-[77.5%] -translate-x-1/2 -translate-y-1/2 rotate-[11deg]" />

            <MarkPath fillClass="fill-white" delay={2} className="w-[51px] left-[38%] top-[83%] -translate-x-1/2 -translate-y-1/2" />


            <MarkPath fillClass="fill-white" delay={1} className="w-[51px] left-[46%] top-[12%] -translate-x-1/2 -translate-y-1/2" />

            <CirclePath fillClass="fill-white" delay={1.1} className="w-[51px] left-[40%] top-[35%] -translate-x-1/2 -translate-y-1/2" />

            <ShortArrowPath fillClass="fill-white" delay={1.2} className="w-[263px] left-[47.5%] top-[22%] -translate-x-1/2 -translate-y-1/2 rotate-[-35deg]" />

            <CirclePath fillClass="fill-white" delay={1.3} className="w-[51px] left-[55%] top-[10%] -translate-x-1/2 -translate-y-1/2 hidden md:block" />

            <LongArrowPath fillClass="fill-white" delay={1.4} className="w-[432px] left-[52%] top-[42%] -translate-x-1/2 -translate-y-1/2 rotate-[110deg]" />

            <CirclePath fillClass="fill-white" delay={1.5} className="w-[51px] left-[47%] top-[73%] -translate-x-1/2 -translate-y-1/2" />

            <ShortArrowPath fillClass="fill-white" delay={1.6} className="w-[263px] left-[56%] top-[77.5%] -translate-x-1/2 -translate-y-1/2 rotate-[11deg]" />


            <MarkPath fillClass="fill-white" delay={1.7} className="w-[51px] left-[82%] top-[14%] -translate-x-1/2 -translate-y-1/2" />

            <CirclePath fillClass="fill-white" delay={2.4} className="w-[51px] left-[65.6%] top-[82.5%] -translate-x-1/2 -translate-y-1/2" />
            
            <LongArrowPath fillClass="fill-white" delay={2.5} className="w-[432px] left-[71%] top-[50%] -scale-x-100 -translate-x-1/2 -translate-y-1/2 rotate-[110deg]" />

            <CirclePath fillClass="fill-white" delay={2.6} className="w-[51px] left-[75.5%] top-[17.4%] -translate-x-1/2 -translate-y-1/2" />
            
            <ShortArrowPath fillClass="fill-white" delay={2.7} className="w-[263px] left-[79%] top-[38%] -translate-x-1/2 -translate-y-1/2 rotate-[68deg]" />
            
            <CirclePath fillClass="fill-white" delay={2.8} className="w-[51px] left-[83%] top-[59%] -translate-x-1/2 -translate-y-1/2" />
            
            <MarkPath fillClass="fill-white" delay={2.9} className="w-[51px] left-[79%] top-[62%] -translate-x-1/2 -translate-y-1/2" />

            
            <CirclePath fillClass="fill-white" delay={3.0} className="w-[51px] left-[8%] bottom-[10%] -translate-x-1/2 -translate-y-1/2" />

            <MarkPath fillClass="fill-white" delay={0.8} className="w-[51px] left-[25%] bottom-[4%] -translate-x-1/2 -translate-y-1/2" />

            <MarkPath fillClass="fill-white" delay={1} className="w-[51px] left-[55%] bottom-[4%] -translate-x-1/2 -translate-y-1/2" />
            
            <MarkPath fillClass="fill-white" delay={1.4} className="w-[51px] left-[75%] bottom-[4%] -translate-x-1/2 -translate-y-1/2" />
        </div>
    );
};

export default HomeFieldPaths;