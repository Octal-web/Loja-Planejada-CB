import DefaultLayout from '@/Layouts/DefaultLayout';

import HomeBanner from '@/Components/HomeBanner';
import HomeVideo from '@/Components/HomeVideo';
import HomeAbout from '@/Components/HomeAbout';
import HomeStores from '@/Components/HomeStores';
import HomeContact from '@/Components/HomeContact';
// import HomeDiscount from '@/Components/HomeDiscount';
// import HomeInspirations from '@/Components/HomeInspirations';
// import HomeCTA from '@/Components/HomeCTA';
// import HomeRules from '@/Components/HomeRules';
// import HomePreFooter from '@/Components/HomePreFooter';

const Page = () => {
    return (
        <DefaultLayout>
            <HomeBanner />

            <HomeVideo />

            <HomeAbout />

            <HomeStores />

            <HomeContact />

           {/* <HomeSteps />

            <HomeDiscount />

            <HomeInspirations />

            <HomeCTA />

            <HomeRules />

            <HomePreFooter /> */}
        </DefaultLayout>
    );
};

export default Page;
