import { Chatdata, icons } from '../../data/Chatdata'
import '../Chat/Letschat.css'
const Letschat = () => {
    return (
        <div className='section'>
            <div className="heading">
                Let's have a chat
            </div>

            <div className='container'>
                {
                    Chatdata.map((pro, i) => (

                        <div key={i} className='cards'>
                            <div className='card_cont'>

                                <div className='card'>
                                    <div className='head'>
                                        {pro.heading}
                                    </div>
                                    <div className='icon'>
                                        <ion-icon name="arrow-forward-outline"></ion-icon>
                                    </div>
                                </div>

                                <div className='para'>
                                    {pro.para}
                                </div>
                            </div>
                        </div>
                    ))
                }



            </div>

            {/* icons */}
            <div className='social_media'>
                {
                    icons.map((pro, i) => (
                        <div key={i} className='social_icon'>
                            <ion-icon name={pro.icon}></ion-icon>
                        </div>
                    ))
                }
            </div>

            {/* copyright  */}
            <div className='copyright'>
                <div>
                    Copyright © Codigo - Mobile App Developer Singapore
                </div>
                <br />
                <div>
                    +65 6455 9790 • 24 Sin Ming Lane, Midview City #04-91 Singapore 573970
                </div>

            </div>
        </div>
    )
}

export default Letschat
