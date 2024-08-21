import About from '../../about/About';
import Singlepost from '../../singlePost/Singlepost';
import './mypost.css';

export default function Mypost() {
  return (
    <div className='mypost'>
        {/*post*/}
        <Singlepost/>
        <About />
    </div>
  )
}
