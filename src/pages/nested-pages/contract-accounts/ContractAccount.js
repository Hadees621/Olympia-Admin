import React from 'react';
import Form from './components/Form';
import Title from 'components/Title';
import Table1 from './components/Table1';
import useSidebarStore from 'stores/States';
import LatTable from './components/LatTable';
import { data, lastTable } from './utils/utls';
import InstallmentDetails from './components/InstallmentDetails';
import RoyaltiesInformation from './components/RoyaltiesInformation';

const ContractAccount = () => {
    const { isOpen } = useSidebarStore();
    return (
        <div className="w-full text-start items-center m-3">
            <Title />

            <div
                className={`mt-4 transition-all duration-300 ${isOpen ? "max-w-[1050px]" : "max-w-[1250px]"}`}
            >
                <Form />
                <Table1 data={data} />
                <RoyaltiesInformation data={data} />
                <InstallmentDetails data={data} />
                <LatTable data={lastTable} />
            </div>
        </div>
    );
};

export default ContractAccount;

