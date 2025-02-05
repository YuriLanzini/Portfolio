import React, { useEffect, useState } from 'react';
import "./work.css";
import { projectsData } from './Data';
import { projectsNav } from './Data';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Zoom, Pagination, Navigation } from 'swiper/modules';


export default function Works() {
    const [item, setItem] = useState({ name: 'Distribuidora de Bebidas' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        const filteredProjects = projectsData.filter(project => project.category === item.name);
        setProjects(filteredProjects);
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent }); 
        setActive(index);
    };

    return (
        <div>
            <div className="work__filters">
                {projectsNav.map((navItem, index) => (
                    <span 
                        onClick={(e) => handleClick(e, index)} 
                        className={`${active === index ? 'active-work' : ""} work__item`} 
                        key={index}
                    >
                        {navItem.name}
                    </span>
                ))}
            </div>

            <Swiper
                className="work__container container grid"
                style={{
                    "--swiper-navigation-color": "var(--title-color)",
                    "--swiper-pagination-color": "var(--title-color)",
                }}
                spaceBetween={30}
                centeredSlides={true}
                zoom={true}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Zoom, Pagination, Navigation]}
            >
                {projects.map(({ id, image }) => (
                    <SwiperSlide className='work__card' key={id}>
                        <div className='swiper-zoom-container'>
                            <img src={image} alt="" className='work__img' />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <p className="work__description">
                {projectsNav[active]?.description}
            </p>

            <div className='work__button'>
                <a href={projectsNav[active]?.link} className="button button--flex">Ver código</a>
            </div>
        </div>
    );
}