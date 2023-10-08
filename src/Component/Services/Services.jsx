import { service } from '../../data/Service_data'
import '../Services/Service.css'
import Mobileservice from './Mobileservice'
const Services = () => {
    return (
        <>
            <div className='main_card'>
                {
                    service.map((pro, i) => (
                        <div key={i} className="main">
                            <div style={{ backgroundColor: pro.color }} className='small'>
                                <div className="animate_cont">
                                    <div className="img">
                                        <img src={pro.logo} alt="" />
                                    </div>
                                    <div style={{ color: pro.font_color }} className='text'>
                                        <div className='title'>
                                            {pro.title}
                                        </div>
                                        <div className='sub_heading'>
                                            {pro.subtitle}
                                        </div>
                                        <div className='detail'>
                                            {pro.para}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='desk_detail'>
                                <div className='sub_heading'>
                                    {pro.title}
                                </div>
                                <div className='title'>
                                    {pro.subtitle}
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div > 

            <div className="sm_view">
                <Mobileservice/>
            </div>
        </>

    )
}

export default Services
