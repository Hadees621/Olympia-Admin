import React from 'react';
import Form from './components/Form';
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
            <p className="text-3xl font-semibold my-8 ml-">
                Contract Account Section
            </p>

            <div
                className={`transition-all duration-300 ${isOpen ? "max-w-[1050px]" : "max-w-[1250px]"}`}
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

