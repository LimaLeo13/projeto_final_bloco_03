function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-red-800 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Farmácia DrogaLegal | Copyright: {data}
                        </p>
                </div>
            </div>
        </>
    )
}

export default Footer