import { usePage } from "@inertiajs/react";

import DefaultLayout from '@/Layouts/DefaultLayout';

import HomeBanner from '@/Components/HomeBanner';
import HomeVideo from '@/Components/HomeVideo';
import HomeAbout from '@/Components/HomeAbout';
import HomeStores from '@/Components/HomeStores';
import HomeContact from '@/Components/HomeContact';
import HomeRules from '@/Components/HomeRules';

const Page = () => {
    const { previaRegulamento } = usePage().props;

    return (
        <DefaultLayout>
            <HomeBanner />

            <HomeVideo />

            <HomeAbout />

            <HomeStores />

            <HomeContact />

            <HomeRules text={previaRegulamento} />
        </DefaultLayout>
    );
};

export default Page;
