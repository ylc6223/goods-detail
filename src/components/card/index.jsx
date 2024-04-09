import styles from './card.module.scss'
import clsx from "clsx";
import PropTypes from 'prop-types'; // ES6
const defaultProps = {
    title: {
        text: "", //标题文字
        size: 30, //字体大小
        color: "#7A7A7A" //字体颜色
    },
    header: {
        line: false //是否去掉底部线条
    },
    // 是否设置外边框
    border: false,
}

function Card(props = defaultProps) {
    const {header, border, title, children} = {...defaultProps, ...props}
    return (
        <div className={clsx(styles['card'], {
            [styles['card-border']]: border
        })}>
            <div className={clsx(styles['card-header'], {
                [styles['card-header-line']]: header.line || false
            })}>
                <div className={styles['card-title']}
                     style={{fontSize: title.size, color: title.color}}>{title.text}</div>
            </div>
            <div className={styles['card-body']}>
                {children}
            </div>
            <div className={styles['card-footer']}></div>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.shape({
        text: PropTypes.string,
        size: PropTypes.number,
        color: PropTypes.string
    }),
    header: PropTypes.shape({
        line: PropTypes.bool
    }),
    border: PropTypes.bool,
    children: PropTypes.node,
}
export default Card;
