
function Home() {
    return (
        <>
            <div className="bg-white flex justify-center">
                <div className='container grid grid-cols-2 text-black'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            DrogaLegal
                        </h2>
                        <p className='text-xl'>
                            Você em dia com a sua saúde!
                        </p>
                    </div>

                    <div className="flex justify-center p-8">
                        <img
                            src="https://static.vecteezy.com/ti/vetor-gratis/p1/2775409-pharmacy-drugstore-vector-logo-vetor.jpg"
                            alt="Imagem Página Home"
                            className='w-1/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home