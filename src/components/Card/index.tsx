import React, {useState} from 'react';
import style from './style.module.scss';
import classNames from 'classnames';


export interface CardTypes {
  baseUrl: string;
  hoverUrl?: string;
  dataElementName?: string;
  imgClass?: string;
  wrapperClass?: string;
}



const Card = ({ baseUrl, hoverUrl, dataElementName, imgClass, wrapperClass }: CardTypes) => {

    const [isHovered, setIsHovered] = useState(false);

  


    return (
        <div className={style.cardWrapper}>
            <div className={style.imgWrapper} 
                style={isHovered? {backgroundImage: `url(${hoverUrl})`}: {backgroundImage: `url(${baseUrl})`}}  
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)} />
            <div className={style.productDataWrapper}>
                <div className={style.inner}>
                    <div>Define High-Waisted 7/8 Legging</div>
                    <div><span className={style.price}>$49.95</span> or <b>1 Member Credit</b></div>
                </div>
                <div className={style.inner}>
                    <div className={style.right}>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </div>
                    <div className={style.right}>
                        <a href="#" className={style.greylink}>+More Colors</a>
                    </div>
                </div>
            </div>
       
        </div>
    );
};

export default Card;