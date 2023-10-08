import '../Services/Service.css'
import { service } from '../../data/Service_data'

const Mobileservice = () => {
    return (
        < >
            {
                service.map((pro, i) => (
                    <div key={i} className='sm_main'>
                        <div className='title'>
                            {pro.title}
                        </div>

                        <div className='sub_heading'>
                            {pro.subtitle}
                        </div>

                        <div style={{ backgroundColor: pro.color }} className='sm_img' >
                            <img src={pro.logo} alt="" />
                        </div>

                        <div className='detail'>
                            {pro.para}
                        </div>
                    </div>
                ))
            }

        </ >
    )
}

export default Mobileservice
