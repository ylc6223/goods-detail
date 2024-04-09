import React, {useState, useEffect} from 'react';
import clsx from "clsx"; // 引入样式文件，需要自行创建

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // 监听滚动事件，控制按钮显示与隐藏
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                console.log('scroll')
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // 点击按钮，滚动到页面顶部
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // 平滑滚动效果
        });
    };

    return (
        <button
            className={clsx('fixed flex flex-col items-center justify-center bottom-[84px] right-4 w-12 h-12 rounded-full bg-white z-50 border-[1px] border-[#DCDCDC] transition', {
                ['visible']: isVisible,
                ['invisible']: !isVisible,
                ['opacity-0']: !isVisible,
                ['opacity-1']: isVisible
            })} onClick={scrollToTop}>
            <i className="text-base text-[#4B4B4B] iconfont icon-backtop"></i>
            <span className="text-[#000000E5] text-[10px]">顶部</span>
        </button>
    );
};

export default BackToTopButton;
