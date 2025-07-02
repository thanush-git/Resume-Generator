import Forms from "./Forms"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

function App(){
    return(
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Forms />
    </LocalizationProvider>
    );
}

export default App