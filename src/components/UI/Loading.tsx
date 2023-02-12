import '../../styles/App/App.css'

const Loading = () => {
    return (
        <>
            <div className="loading">
                <img src="loading.png" alt="radiation warning" />
            </div>
            <div className='loading__text'>Loading...</div>
        </>
    );
};

export default Loading;