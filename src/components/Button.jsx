

const Button = ({ text, className }) => {
    const handleClick = (e) => {
        console.log('clicked')
        e.preventDefault();
                const target = document.getElementById('counter');
                if(target){
                    const offset = window.innerHeight * 0.15;
                    const top = target.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo( { top, behavior: "smooth"})
                }
    }
    return (
        <a
            onClick={(e)=> handleClick(e)}
            className={`${className ?? ''} cta-wrapper`}>
            <div className='cta-button group'>
                <div className='bg-circle' />
                <p className='text'>{text}</p>
                <div className='arrow-wrapper'>
                    <img src="/images/arrow-down.svg" alt="arrow" />
                </div>
            </div>
        </a>
    )
}

export default Button