import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const Location: React.FC = () => {
    return (
        <section id="location" className="main special">
            <header className="major">
                <h2>오시는길</h2>
            </header>

            <p className="major">
                <span className="inline-block mt-4">
                    <LocationOnIcon style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
                    대구광역시 달서구 조암남로32길 20-4 비스타빌딩 5층
                </span>
                <br />
                <span className="inline-block mt-4">
                    <PhoneIcon style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
                    053-633-6770
                </span>
            </p>

            <div className="w-full h-[400px]">
                <iframe
                    title="학원 위치"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.017424328194!2d128.5430277152419!3d35.82703408016071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e3ad6b17d33f%3A0x74b879da3d4ed11e!2z64yA6rWs6rSR7JetIOqzoOyCrOqzteyCrOumrOyasOyLnCDshLHrj5kg7IKw7Yq47JWE7J2065SU7Ja064-ZIDUtMQ!5e0!3m2!1sko!2skr!4v1691904695701!5m2!1sko!2skr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
};

export default Location;
