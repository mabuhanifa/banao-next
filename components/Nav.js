import search from '../public/search.png';
import whole from '../public/whole.svg';
export default function Nav() {
  return (
    <nav>
      <div className="d-flex justify-content-around p-3 bg-primary">
        <div>
            <img src={whole} alt="icon" />
        </div>
        <div>
            <div className='position-relative '>
                <input type="text" className='rounded p-2 bg-secondary'/>
                <img src={search} alt="" className='position-absolute top-0'/>
            </div>


        </div>
        <div></div>
      </div>
    </nav>
  );
}
