```javascript
import axios from 'axios';

const interpretDoodle = async (doodleData) => {
  try {
    const response = await axios.post('/api/interpret', doodleData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to interpret doodle');
  }
};

export default interpretDoodle;
```