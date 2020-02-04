export default function Title() {
    return(
        <header className="description">
            <h1 className="title__main">
                Этнический фестиваль <br />
                "Живая Вода"
            </h1>
            <h2 className="title__sub">
                Три мира, три жизни
            </h2>

            <div className="about">
                <p>
                    Друзья! <br />
                    Седьмой Всеукраинский Фестиваль Этнических танцев в этом году, состояиться <em className="underline">16 ноября</em> в Черниговском Областном Музыкально-Драматическом театре имени Т. Г. Шевченко в 18-00. 
                </p>
                <p>
                    В этом году мы решили воплотить на сцене театрализованно-танцевальное шоу <em className="underline">"Волшебная флейта"</em> по мотивам оперы В. А. Моцарта, 
                    либретто Э. Шиканедера. Кто из нас в детстве не любил волшебную магию сказок? 
                    Да и сейчас, будем честны, наши мысли часто возвращаются в волшебные и красочные миры миры, рожденные словами великих мастеров. 
                    Кто не знаком с очарованием произведений Моцарта, Шекспира, Пушкина, Андерсена? 
                </p>
                <p>
                    Традиционно, участия примут коллективы из городов Чернигова, Киева, Одессы и Нежина. 
                    За пригласительными обращайтесь по телефону: 063-999-0-333
                </p>
            </div>

            <style jsx>{`
                .description {
                    padding: 0 10px;
                }

                .title__main,
                .title__sub {
                    margin: 8px 0;
                    font-family: serif;
                    color: #704652;
                    text-align: center;
                }

                .title__main {
                    font-size: 24px;
                }

                .title__sub {
                    font-size: 20px;
                }

                .about {
                    margin-top: 20px;
                    line-height: 1.4;
                }

                .underline {
                    text-decoration: underline;
                }
            `}</style>
        </header>
    )
}