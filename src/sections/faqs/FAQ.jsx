import Card from "../../components/Card"
import {AiOutlinePlus} from 'react-icons/ai'

const FAQ = ({faq}) => {
  return (
    <Card classname="faq">
        <div>
            <h5 lassname="faq__question">{faq.question}</h5>
            <button className='faq__icon'>
                <AiOutlinePlus/>
            </button>
        </div>
        <p>{faq.answer}</p>
    </Card>
  )
}

export default FAQ