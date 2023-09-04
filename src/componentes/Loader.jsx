/* import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css' 

export function Loader() {
  return ( <div> 
    <Spinner /> <span>Loading...</span> 
    </div>
  )
}
 */
import { Loader } from '@mantine/core';

export function Spinner() {
  return (<div>
    <Loader size="lg" variant="dots" /> <span>Loading...</span> 
  </div>
  )
}