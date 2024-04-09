import {useState, useRef, useEffect} from "react";
import clsx from "clsx"
import goods from "@/assets/imgs/goods.png"
import thumbnail1 from "@/assets/imgs/thumbnail1.jpeg"
import thumbnail2 from "@/assets/imgs/thumbnail2.png"
import thumbnail3 from "@/assets/imgs/thumbnail3.png"
import "@/assets/fonts/iconfont.css"
import styles from './swiper.module.scss'

const banners = [{
    src: goods,
    isVideo: true
}, {
    src: thumbnail1,
    isVideo: false
}, {src: thumbnail2, isVideo: false}]

const indicatorImgs = [{
    src: thumbnail1,
    isVideo: true
}, {src: thumbnail2, isVideo: false}, {src: thumbnail3, isVideo: false}]

function Swiper(props) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const swiperListRef = useRef(null)
    useEffect(() => {
        init()
        return init = () => {
        }
    }, []);
    const moveTo = function (index) {
        if (!swiperListRef) return
        setCurrentIndex(index)
        swiperListRef.current.style.transform = `translateX(-${index * 100}%)`
        swiperListRef.current.style.transition = ".5s"
        // 去掉指示器的选择效果
    }
    const next = () => {
        if (currentIndex === banners.length - 1) {
            setCurrentIndex(0)
            moveTo(0)
            return
        }
        setCurrentIndex(currentIndex + 1)
        moveTo(currentIndex + 1)
    }
    let init = () => {
        //     复制第一张图
        let firstItem = swiperListRef.current.firstElementChild.cloneNode(true)
        // 复制最后一张
        let lastItem = swiperListRef.current.lastElementChild.cloneNode(true)
        // 第一张放到最后一张末尾去
        swiperListRef.current.appendChild(firstItem)
        // 最后一张放到第一张最前面
        swiperListRef.current.insertBefore(lastItem, swiperListRef.current.firstElementChild)
        //此时顺序乱了,要保持原来的第一张为最先看到的，需要挪下位子
        lastItem.style.position = "absolute"
        lastItem.style.transform = "translateX(-100%)"
    }
    return <div id={styles['swiper-container']}>
        <div id={styles['swiper-list']} ref={swiperListRef}>
            {
                banners.map((item, idx) => {
                    return <div key={idx} className={clsx(styles['swiper-item'], {
                        [styles['swiper-item-active']]: currentIndex === idx
                    })}>
                        {
                            item.isVideo && <button className={styles['play-btn']}>
                                <span className="iconfont icon-play text-white text-2xl"></span>
                            </button>
                        }
                        <img className="w-full object-fill" src={item.src} alt=""/>
                    </div>
                })
            }
        </div>
        <div id={styles['indicator-container']}>
            <span id={styles['indicator-text']}>{`${currentIndex + 1}/${banners.length}`}</span>
            <ul id={styles['indicator-list']}>
                {
                    indicatorImgs.map((indicator, idx) => {
                        return <li key={idx} className={clsx(styles['indicator-item'], {
                            [styles['indicator-item-active']]: currentIndex === idx
                        })} onClick={() => moveTo(idx)}>
                            {indicator.isVideo && <button className={clsx(styles['play-btn'], styles['play-btn-mini'])}>
                                <span className="iconfont icon-play text-white text-2xl"></span>
                            </button>}
                            <img className="w-full" src={indicator.src} alt=""/>
                        </li>
                    })
                }
            </ul>
            <button id={styles['arrow-left']}
                    className={clsx('iconfont icon-arrowleft text-base text-white font-bold', {
                        'rotate-180': true
                    })} onClick={next}></button>
        </div>
    </div>
}

export default Swiper

