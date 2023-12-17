import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '../Card/Card';



const SliderSlick = ({data, speed, autoplay}) => {

  let settings = {
    dots: true,
    infinite: true,
    speed: speed,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: autoplay,
    pauseOnHover: true,
    className: 'slides',
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        
        {data.map((project, index) => (
            <div className="slide">
              <Card project={project} key={index} />
              </div>
            ))}
        
      </Slider>
    </div>
  );
};

export default SliderSlick;
