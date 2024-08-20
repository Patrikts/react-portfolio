import Card from "../../components/Card"
import {AiOutlinePlus} from 'react-icons/ai'

const FAQ = ({faq}) => {
    const [showAnswer, setShowAnswer] = useState(false);


  return (
    <Card classname="faq">
        <div>
            <h5 lassname="faq__question">{faq.question}</h5>
            <button className='faq__icon'>
                {<AiOutlinePlus/>}
            </button>
        </div>
        {showAnswer && <p className="faq__answer">{faq.answer}</p>}
    </Card>
  )
}

export default FAQ