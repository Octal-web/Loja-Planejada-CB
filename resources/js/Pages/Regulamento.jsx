import { usePage } from "@inertiajs/react";

import DefaultLayout from '@/Layouts/DefaultLayout';

import RulesText from '@/Components/RulesText';

const Page = () => {
    const { texto } = usePage().props;

    return (
        <DefaultLayout>

            <RulesText text={texto} />
        </DefaultLayout>
    );
};

export default Page;
