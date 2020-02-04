function Poster() {
    return (
        <div className="poster">
            <img className="poster__img" src="./poster.jpg" alt="Три мира, три жизни" />

            <style global jsx>{`
                .poster {
                    position: relative;
                    transition: margin ease-in 0.3s;
                }

                .poster__img {
                    width: 100%;
                    height: auto;
                }
            `}</style>
        </div>
    )
}

export default Poster