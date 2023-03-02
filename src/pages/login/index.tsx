import Login from "@/components/UI/Login/Login";
import Layout from '../../components/Layout/Layout';

const index: React.FC<{}> = () => {
    return (
        <Layout
            title="Login"
            description="Esta es la pagina de login"
        >
            <div className='flex flex-auto w-auto h-auto justify-center items-center'>
                <Login />
            </div>
        </Layout>
    )
};

export default index;