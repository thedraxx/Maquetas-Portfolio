import Layout from '@/components/Layout/Layout';
import AddProyect from '../../components/UI/AddProyect/AddProyect';



const AddCrypto = () => {
    return (
        <Layout
            title='Add Proyect | Add Proyect'
            description='Add your Proyect'

        >
            <div className='flex flex-auto w-auto h-auto justify-center items-center  mb-96'>
                <AddProyect />
            </div>
        </Layout>

    );
};

export default AddCrypto;