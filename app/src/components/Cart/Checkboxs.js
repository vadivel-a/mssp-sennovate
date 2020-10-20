import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default function Checkboxs() {
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    setChecked(!checked);
  };

  return (
    <div>
		<Checkbox
		  checked={checked}
		  onClick={handleChange}
		  inputProps={{ 'aria-label': 'primary checkbox' }}
		/>      
    </div>
  );
}
