import Card from "../../components/Card"
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

const FAQ = ({faq}) => {
    const [showAnswer, setShowAnswer] = useState(false);


  return (
    <Card classname="faq" onClick={() => setShowAnswer(prev => !prev)}>
        <div>
            <h5 lassname="faq__question">{faq.question}</h5>
            <button className='faq__icon'>
                {showAnswer ? <AiOutlineMinus/> : <AiOutlinePlus/>}
            </button>
        </div>
        {showAnswer && <p className="faq__answer">{faq.answer}</p>}
    </Card>
  )
}

export default FAQ