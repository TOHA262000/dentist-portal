import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import bg from '../../../assets/images/bg.png'
const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
    
    return (
        <div style={{backgroundImage:`url(${bg})`}} className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='chair' className="lg:w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;